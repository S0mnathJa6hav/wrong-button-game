// ========================================
// WRONG BUTTON - UI MANAGER
// ========================================

class GameUI {
    constructor() {
        this.currentScreen = 'splash';
        this.currentLevel = 1;
        this.stats = this.loadStats();
        this.unlockedAchievements = this.loadAchievements();
        this.collections = this.loadCollections();
    }

    // Load stats from localStorage
    loadStats() {
        const defaultStats = {
            currentLevel: 1,
            levelsCompleted: 0,
            totalFails: 0,
            totalTaps: 0,
            fastestLevel: Infinity,
            totalWaitTime: 0,
            timesTricked: 0,
            sameLevelFails: 0,
            accidentalWins: 0,
            panicTaps: 0,
            stareTime: 0,
            settingsTime: 0,
            consistentFails: 0,
            earlyTaps: 1,
            pityWins: 0,
            hardTaps: 0,
            fakeXClicks: 0,
            speedRuns: 0,
            playTime: 0,
            notificationsRead: 0,
            perfectStreak: 0,
            category1Completed: 0,
            category2Completed: 0,
            category3Completed: 0,
            category4Completed: 0,
            category5Completed: 0
        };

        try {
            const saved = localStorage.getItem('wrongButtonStats');
            return saved ? { ...defaultStats, ...JSON.parse(saved) } : defaultStats;
        } catch (e) {
            return defaultStats;
        }
    }

    // Save stats to localStorage
    saveStats() {
        try {
            localStorage.setItem('wrongButtonStats', JSON.stringify(this.stats));
        } catch (e) {
            console.error('Failed to save stats:', e);
        }
    }

    // Load achievements
    loadAchievements() {
        try {
            const saved = localStorage.getItem('wrongButtonAchievements');
            return saved ? JSON.parse(saved) : [];
        } catch (e) {
            return [];
        }
    }

    // Save achievements
    saveAchievements() {
        try {
            localStorage.setItem('wrongButtonAchievements', JSON.stringify(this.unlockedAchievements));
        } catch (e) {
            console.error('Failed to save achievements:', e);
        }
    }

    // Load collections
    loadCollections() {
        try {
            const saved = localStorage.getItem('wrongButtonCollections');
            return saved ? JSON.parse(saved) : {
                errors: [],
                crashes: [],
                dialogues: [],
                notifications: []
            };
        } catch (e) {
            return { errors: [], crashes: [], dialogues: [], notifications: [] };
        }
    }

    // Save collections
    saveCollections() {
        try {
            localStorage.setItem('wrongButtonCollections', JSON.stringify(this.collections));
        } catch (e) {
            console.error('Failed to save collections:', e);
        }
    }

    // Show screen
    showScreen(screenId) {
        // Hide current screen
        const currentScreen = document.querySelector('.screen.active');
        if (currentScreen) {
            currentScreen.classList.remove('active');
        }

        // Show new screen
        const newScreen = document.getElementById(screenId);
        if (newScreen) {
            newScreen.classList.add('active');
            this.currentScreen = screenId;
        }
    }

    // Show main menu
    showMainMenu() {
        this.showScreen('main-menu');
        this.updateMenuQuote();
    }

    // Update menu quote
    updateMenuQuote() {
        const quoteEl = document.getElementById('menu-quote');
        if (quoteEl) {
            quoteEl.textContent = `"${getRandomDialogue('menuQuotes')}"`;
        }
    }

    // Show level select
    showLevelSelect() {
        this.showScreen('level-select');
        this.renderCategories();
        this.renderLevels(1);
    }

    // Render categories
    renderCategories() {
        const container = document.getElementById('level-categories');
        if (!container) return;

        container.innerHTML = CATEGORIES.map(cat => `
            <button class="category-btn" data-category="${cat.id}">
                ${cat.name}
            </button>
        `).join('');

        // Add click listeners
        container.querySelectorAll('.category-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const catId = parseInt(btn.dataset.category);
                this.renderLevels(catId);
                
                // Update active state
                container.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });
    }

    // Render levels
    renderLevels(categoryId) {
        const container = document.getElementById('levels-grid');
        if (!container) return;

        const levels = getLevelsByCategory(categoryId);
        
        container.innerHTML = levels.map(level => {
            const isCompleted = level.id < this.stats.currentLevel;
            const isCurrent = level.id === this.stats.currentLevel;
            const isLocked = level.id > this.stats.currentLevel;
            
            let statusClass = '';
            if (isCompleted) statusClass = 'completed';
            else if (isCurrent) statusClass = 'current';
            else if (isLocked) statusClass = 'locked';

            return `
                <div class="level-item ${statusClass}" data-level="${level.id}" ${isLocked ? 'disabled' : ''}>
                    <span class="level-number">${level.id}</span>
                    <span class="level-status">${isCompleted ? '✓' : isCurrent ? '▶' : '🔒'}</span>
                </div>
            `;
        }).join('');

        // Add click listeners
        container.querySelectorAll('.level-item:not(.locked)').forEach(item => {
            item.addEventListener('click', () => {
                const levelId = parseInt(item.dataset.level);
                this.startLevel(levelId);
            });
        });
    }

    // Start level
    startLevel(levelId) {
        this.currentLevel = levelId;
        this.showScreen('gameplay');
        
        if (window.gameEngine.startLevel(levelId)) {
            // Level started successfully
        }
    }

    // Show level complete
    showLevelComplete(level, timeTaken) {
        // Update stats
        this.stats.levelsCompleted++;
        this.stats.currentLevel = Math.max(this.stats.currentLevel, level.id + 1);
        this.stats.totalTaps++;
        
        if (timeTaken < this.stats.fastestLevel) {
            this.stats.fastestLevel = timeTaken;
        }
        
        if (timeTaken < 2) {
            this.stats.speedRuns++;
        }

        // Update category stats
        const categoryKey = `category${level.category}Completed`;
        this.stats[categoryKey] = (this.stats[categoryKey] || 0) + 1;

        this.saveStats();
        this.checkAchievements();

        // Show modal
        const modal = document.getElementById('level-complete');
        const dialogue = document.getElementById('complete-dialogue');
        const stars = document.getElementById('stars');
        
        dialogue.textContent = `"${getRandomDialogue(level.successDialogue || 'succeeded')}"`;
        
        // Calculate stars
        const starElements = stars.querySelectorAll('.star');
        starElements.forEach((star, i) => {
            star.classList.toggle('earned', i < 3);
        });

        modal.style.display = 'flex';

        // Setup next level button
        document.getElementById('btn-next-level').onclick = () => {
            modal.style.display = 'none';
            if (level.id < 50) {
                this.startLevel(level.id + 1);
            } else {
                this.showMainMenu();
            }
        };
    }

    // Show level failed
    showLevelFailed(level, reason) {
        // Update stats
        this.stats.totalFails++;
        this.stats.totalTaps++;
        this.stats.sameLevelFails++;
        
        if (reason === 'tricked') {
            this.stats.timesTricked++;
        }

        this.saveStats();
        this.checkAchievements();

        // Show modal
        const modal = document.getElementById('level-failed');
        const dialogue = document.getElementById('fail-dialogue');
        
        dialogue.textContent = `"${getRandomDialogue(level.failureDialogue || 'failed')}"`;

        modal.style.display = 'flex';

        // Setup retry button
        document.getElementById('btn-retry').onclick = () => {
            modal.style.display = 'none';
            this.startLevel(level.id);
        };

        document.getElementById('btn-quit-fail').onclick = () => {
            modal.style.display = 'none';
            this.showMainMenu();
        };
    }

    // Show fake error
    showError(error) {
        const modal = document.getElementById('error-popup');
        const title = document.getElementById('error-title');
        const message = document.getElementById('error-message');

        title.textContent = error.title;
        message.textContent = error.message;

        modal.style.display = 'flex';

        // Auto hide after 2 seconds
        setTimeout(() => {
            modal.style.display = 'none';
        }, 2000);
    }

    // Show fake crash
    showCrash(crash) {
        const modal = document.getElementById('crash-screen');
        const title = document.getElementById('crash-title');
        const message = document.getElementById('crash-message');
        const progress = document.getElementById('crash-progress');

        title.textContent = crash.title;
        message.textContent = crash.message;

        modal.style.display = 'flex';

        // Animate progress
        let width = 0;
        const progressInterval = setInterval(() => {
            width += 10;
            progress.style.width = width + '%';
            
            if (width >= 100) {
                clearInterval(progressInterval);
                message.textContent = crash.reveal;
                
                // Hide after reveal
                setTimeout(() => {
                    modal.style.display = 'none';
                }, 2000);
            }
        }, 100);
    }

    // Show notification
    showNotification(notification) {
        const notifEl = document.getElementById('fake-notification');
        const titleEl = document.getElementById('notif-title');
        const messageEl = document.getElementById('notif-message');

        titleEl.textContent = notification.title;
        messageEl.textContent = notification.message;

        notifEl.style.display = 'block';

        // Auto hide
        setTimeout(() => {
            notifEl.style.display = 'none';
        }, 3000);
    }

    // Show achievement popup
    showAchievementPopup(achievement) {
        const popup = document.getElementById('achievement-popup');
        const titleEl = document.getElementById('achievement-title');
        const nameEl = document.getElementById('achievement-name');

        titleEl.textContent = 'Achievement Unlocked!';
        nameEl.textContent = achievement.name;

        popup.style.display = 'block';

        // Auto hide
        setTimeout(() => {
            popup.style.display = 'none';
        }, 3000);
    }

    // Check achievements
    checkAchievements() {
        ACHIEVEMENTS.forEach(achievement => {
            if (!this.unlockedAchievements.includes(achievement.id)) {
                if (checkAchievement(achievement, this.stats)) {
                    this.unlockedAchievements.push(achievement.id);
                    this.saveAchievements();
                    this.showAchievementPopup(achievement);
                }
            }
        });
    }

    // Show achievements screen
    showAchievements() {
        this.showScreen('achievement-screen');
        this.renderAchievements();
    }

    // Render achievements
    renderAchievements() {
        const container = document.getElementById('achievements-list');
        if (!container) return;

        container.innerHTML = ACHIEVEMENTS.map(achievement => {
            const isUnlocked = this.unlockedAchievements.includes(achievement.id);
            const isHidden = achievement.hidden && !isUnlocked;

            return `
                <div class="achievement-item ${isUnlocked ? '' : 'locked'}">
                    <span class="achievement-item-icon">${isHidden ? '❓' : achievement.icon}</span>
                    <div class="achievement-item-info">
                        <h4>${isHidden ? '???' : achievement.name}</h4>
                        <p>${isHidden ? 'Hidden Achievement' : achievement.description}</p>
                    </div>
                </div>
            `;
        }).join('');
    }

    // Show collections
    showCollections() {
        this.showScreen('collections-screen');
        this.renderCollections('errors');
    }

    // Render collections
    renderCollections(tab) {
        const container = document.getElementById('collection-list');
        if (!container) return;

        let items = [];
        
        switch (tab) {
            case 'errors':
                items = FAKE_ERRORS.slice(0, 20).map((e, i) => ({
                    text: `${e.title}: ${e.message}`,
                    unlocked: this.collections.errors.includes(i)
                }));
                break;
            case 'crashes':
                items = FAKE_CRASHES.slice(0, 20).map((c, i) => ({
                    text: `${c.title}: ${c.message}`,
                    unlocked: this.collections.crashes.includes(i)
                }));
                break;
            case 'dialogues':
                items = Object.keys(DIALOGUES).slice(0, 10).map((key, i) => ({
                    text: `${key}: ${DIALOGUES[key][0]}...`,
                    unlocked: this.collections.dialogues.includes(key)
                }));
                break;
            case 'notifications':
                items = FAKE_NOTIFICATIONS.slice(0, 20).map((n, i) => ({
                    text: `${n.icon} ${n.title}: ${n.message}`,
                    unlocked: this.collections.notifications.includes(i)
                }));
                break;
        }

        container.innerHTML = items.map(item => `
            <div class="collection-item ${item.unlocked ? '' : 'locked'}">
                ${item.unlocked ? item.text : '🔒 Locked - Complete more levels to unlock!'}
            </div>
        `).join('');
    }

    // Show settings
    showSettings() {
        this.showScreen('settings-screen');
    }

    // Pause menu
    showPauseMenu() {
        const modal = document.getElementById('pause-menu');
        modal.style.display = 'flex';
        
        document.getElementById('btn-resume').onclick = () => {
            modal.style.display = 'none';
            window.gameEngine.resume();
        };
        
        document.getElementById('btn-quit').onclick = () => {
            modal.style.display = 'none';
            window.gameEngine.reset();
            this.showMainMenu();
        };
    }
}

// Export UI manager
window.gameUI = new GameUI();
