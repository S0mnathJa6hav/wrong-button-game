// ========================================
// WRONG BUTTON - MAIN APP
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize app
    initApp();
});

function initApp() {
    // Show splash screen
    setTimeout(() => {
        window.gameUI.showScreen('main-menu');
    }, 2500);

    // Setup menu buttons
    setupMenuButtons();
    
    // Setup game buttons
    setupGameButtons();
    
    // Setup settings
    setupSettings();
    
    // Setup collections tabs
    setupCollectionsTabs();
    
    // Setup back buttons
    setupBackButtons();
}

function setupMenuButtons() {
    // Play button
    document.getElementById('btn-play').addEventListener('click', () => {
        window.gameUI.showLevelSelect();
    });

    // Achievements button
    document.getElementById('btn-achievements').addEventListener('click', () => {
        window.gameUI.showAchievements();
    });

    // Collections button
    document.getElementById('btn-collections').addEventListener('click', () => {
        window.gameUI.showCollections();
    });

    // Settings button
    document.getElementById('btn-settings').addEventListener('click', () => {
        window.gameUI.showSettings();
    });
}

function setupGameButtons() {
    // Pause button
    document.getElementById('btn-pause').addEventListener('click', () => {
        window.gameEngine.pause();
        window.gameUI.showPauseMenu();
    });

    // Game button - with random events
    const gameButton = document.getElementById('game-button');
    
    // Random fake errors during gameplay
    let errorChance = 0.1; // 10% chance
    
    gameButton.addEventListener('click', () => {
        // Random chance of fake error
        if (Math.random() < errorChance && window.gameEngine.gameActive) {
            const error = getRandomError();
            window.gameUI.showError(error);
            
            // Collect the error
            if (!window.gameUI.collections.errors.includes(FAKE_ERRORS.indexOf(error))) {
                window.gameUI.collections.errors.push(FAKE_ERRORS.indexOf(error));
                window.gameUI.saveCollections();
            }
        }
        
        // Random chance of fake notification
        if (Math.random() < 0.05 && window.gameEngine.gameActive) {
            const notification = getRandomNotification();
            window.gameUI.showNotification(notification);
            
            // Collect the notification
            if (!window.gameUI.collections.notifications.includes(FAKE_NOTIFICATIONS.indexOf(notification))) {
                window.gameUI.collections.notifications.push(FAKE_NOTIFICATIONS.indexOf(notification));
                window.gameUI.saveCollections();
            }
        }
    });

    // Random crash on level fail
    const originalFail = window.gameEngine.failLevel.bind(window.gameEngine);
    window.gameEngine.failLevel = function(reason) {
        originalFail(reason);
        
        // Show crash sometimes
        if (Math.random() < 0.3) {
            setTimeout(() => {
                const crash = getRandomCrash();
                window.gameUI.showCrash(crash);
            }, 500);
        }
    };
}

function setupSettings() {
    // Sound toggle
    document.getElementById('setting-sound').addEventListener('change', (e) => {
        // Save setting
        localStorage.setItem('wrongButtonSound', e.target.checked);
    });

    // Music toggle
    document.getElementById('setting-music').addEventListener('change', (e) => {
        // Save setting
        localStorage.setItem('wrongButtonMusic', e.target.checked);
    });

    // Vibration toggle
    document.getElementById('setting-vibration').addEventListener('change', (e) => {
        // Save setting
        localStorage.setItem('wrongButtonVibration', e.target.checked);
    });

    // Trolling level
    document.getElementById('setting-trolling').addEventListener('change', (e) => {
        // Save setting
        localStorage.setItem('wrongButtonTrolling', e.target.value);
    });

    // Reset progress
    document.getElementById('btn-reset').addEventListener('click', () => {
        if (confirm('Are you sure you want to reset all progress? This cannot be undone!')) {
            localStorage.clear();
            window.location.reload();
        }
    });

    // Load saved settings
    loadSettings();
}

function loadSettings() {
    const sound = localStorage.getItem('wrongButtonSound');
    const music = localStorage.getItem('wrongButtonMusic');
    const vibration = localStorage.getItem('wrongButtonVibration');
    const trolling = localStorage.getItem('wrongButtonTrolling');

    if (sound !== null) document.getElementById('setting-sound').checked = sound === 'true';
    if (music !== null) document.getElementById('setting-music').checked = music === 'true';
    if (vibration !== null) document.getElementById('setting-vibration').checked = vibration === 'true';
    if (trolling !== null) document.getElementById('setting-trolling').value = trolling;
}

function setupCollectionsTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Render collection
            const tab = btn.dataset.tab;
            window.gameUI.renderCollections(tab);
        });
    });
}

function setupBackButtons() {
    // Back to menu
    document.getElementById('btn-back-menu').addEventListener('click', () => {
        window.gameUI.showMainMenu();
    });

    // Back from achievements
    document.getElementById('btn-back-achievements').addEventListener('click', () => {
        window.gameUI.showMainMenu();
    });

    // Back from collections
    document.getElementById('btn-back-collections').addEventListener('click', () => {
        window.gameUI.showMainMenu();
    });

    // Back from settings
    document.getElementById('btn-back-settings').addEventListener('click', () => {
        window.gameUI.showMainMenu();
    });
}

// Keyboard support (for testing on desktop)
document.addEventListener('keydown', (e) => {
    // Space to tap
    if (e.code === 'Space' && window.gameEngine.gameActive) {
        e.preventDefault();
        document.getElementById('game-button').click();
    }
    
    // Escape to pause
    if (e.code === 'Escape') {
        if (window.gameEngine.gameActive) {
            window.gameEngine.pause();
            window.gameUI.showPauseMenu();
        }
    }
});

// Handle visibility change (pause when app goes to background)
document.addEventListener('visibilitychange', () => {
    if (document.hidden && window.gameEngine.gameActive) {
        window.gameEngine.pause();
        window.gameUI.showPauseMenu();
    }
});

// Prevent zoom on mobile
document.addEventListener('gesturestart', (e) => e.preventDefault());
document.addEventListener('gesturechange', (e) => e.preventDefault());

console.log('🎮 Wrong Button loaded!');
