// ========================================
// WRONG BUTTON - GAME ENGINE
// ========================================

class GameEngine {
    constructor() {
        this.currentLevel = null;
        this.levelStartTime = 0;
        this.tapCount = 0;
        this.isHolding = false;
        this.holdStartTime = 0;
        this.waitTimer = null;
        this.colorChangeTimer = null;
        this.isWaiting = false;
        this.gameActive = false;
        this.holdProgress = 0;
        this.swipeStartX = 0;
        this.swipeStartY = 0;
        this.swipeDirection = null;
    }

    // Initialize level
    startLevel(levelId) {
        this.currentLevel = getLevelById(levelId);
        if (!this.currentLevel) return false;

        this.levelStartTime = Date.now();
        this.tapCount = 0;
        this.isHolding = false;
        this.holdStartTime = 0;
        this.isWaiting = false;
        this.gameActive = true;
        this.holdProgress = 0;

        this.setupLevelUI();
        this.setupEventListeners();
        
        return true;
    }

    // Setup level UI
    setupLevelUI() {
        const level = this.currentLevel;
        
        // Update header
        document.getElementById('level-number').textContent = `Level ${level.id}`;
        const category = getCategoryById(level.category);
        document.getElementById('level-category').textContent = category ? category.name : '';
        
        // Update instruction
        document.getElementById('instruction').textContent = level.instruction;
        
        // Update button
        const gameButton = document.getElementById('game-button');
        const buttonText = document.getElementById('button-text');
        
        gameButton.className = 'game-button';
        if (level.buttonStyle) {
            gameButton.classList.add(level.buttonStyle);
        }
        
        buttonText.textContent = level.buttonText || 'TAP';
        
        // Handle special mechanics
        if (level.invisible) {
            gameButton.style.opacity = '0';
        } else {
            gameButton.style.opacity = '1';
        }

        // Handle color change
        if (level.colorChange) {
            this.startColorChange(level.changeInterval);
        }

        // Handle disappear
        if (level.disappears) {
            this.startDisappear(level.disappearTime);
        }
    }

    // Setup event listeners
    setupEventListeners() {
        const gameButton = document.getElementById('game-button');
        const gameArea = document.querySelector('.game-area');

        // Remove old listeners
        gameButton.replaceWith(gameButton.cloneNode(true));
        const newGameButton = document.getElementById('game-button');

        // Tap/Click
        newGameButton.addEventListener('click', (e) => this.handleTap(e));
        newGameButton.addEventListener('touchstart', (e) => this.handleTouchStart(e), { passive: true });
        newGameButton.addEventListener('touchend', (e) => this.handleTouchEnd(e));

        // Swipe detection on game area
        gameArea.addEventListener('touchstart', (e) => this.handleAreaTouchStart(e), { passive: true });
        gameArea.addEventListener('touchend', (e) => this.handleAreaTouchEnd(e));

        // Wait mechanic
        if (this.currentLevel.mechanic === 'wait' || this.currentLevel.waitTime) {
            this.startWaitTimer();
        }
    }

    // Handle tap
    handleTap(e) {
        if (!this.gameActive) return;
        
        const level = this.currentLevel;
        this.tapCount++;

        // Check if this is the right action
        if (level.solution === 'tap') {
            // Check wait requirement
            if (level.waitTime && !this.isWaitComplete()) {
                this.failLevel('tooEarly');
                return;
            }

            // Check spam requirement
            if (level.solution === 'spam' && level.requiredTaps) {
                if (this.tapCount >= level.requiredTaps) {
                    this.completeLevel();
                }
                return;
            }

            // Check timing
            if (level.colorChange) {
                if (this.isGreenPhase) {
                    this.completeLevel();
                } else {
                    this.failLevel('tooEarly');
                }
                return;
            }

            // Check disappear
            if (level.disappears && this.isDisappeared) {
                this.completeLevel();
                return;
            }

            // Normal tap
            this.completeLevel();
        } else if (level.solution === 'longpress') {
            // For longpress, a tap is a fail
            this.failLevel('tooEarly');
        }
    }

    // Handle touch start
    handleTouchStart(e) {
        if (!this.gameActive) return;
        
        const level = this.currentLevel;
        
        if (level.mechanic === 'longpress') {
            this.isHolding = true;
            this.holdStartTime = Date.now();
            this.startHoldProgress();
        }
    }

    // Handle touch end
    handleTouchEnd(e) {
        if (!this.gameActive) return;
        
        const level = this.currentLevel;
        
        if (level.mechanic === 'longpress' && this.isHolding) {
            this.isHolding = false;
            const holdDuration = Date.now() - this.holdStartTime;
            
            if (holdDuration >= (level.holdTime || 1000)) {
                this.completeLevel();
            } else {
                this.failLevel('tooEarly');
            }
            
            this.stopHoldProgress();
        }
    }

    // Handle area touch start (for swipe)
    handleAreaTouchStart(e) {
        if (!this.gameActive) return;
        
        const level = this.currentLevel;
        if (level.mechanic === 'swipe' || level.mechanic === 'combo') {
            const touch = e.touches[0];
            this.swipeStartX = touch.clientX;
            this.swipeStartY = touch.clientY;
        }
    }

    // Handle area touch end (for swipe)
    handleAreaTouchEnd(e) {
        if (!this.gameActive) return;
        
        const level = this.currentLevel;
        if (level.mechanic !== 'swipe' && level.mechanic !== 'combo') return;
        
        const touch = e.changedTouches[0];
        const deltaX = touch.clientX - this.swipeStartX;
        const deltaY = touch.clientY - this.swipeStartY;
        const minSwipeDistance = 50;

        let detectedDirection = null;
        
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            if (Math.abs(deltaX) > minSwipeDistance) {
                detectedDirection = deltaX > 0 ? 'right' : 'left';
            }
        } else {
            if (Math.abs(deltaY) > minSwipeDistance) {
                detectedDirection = deltaY > 0 ? 'down' : 'up';
            }
        }

        if (detectedDirection) {
            if (level.swipeDirection && level.swipeDirection === detectedDirection) {
                this.completeLevel();
            } else if (level.swipeAll) {
                this.swipeDirection = detectedDirection;
                this.checkSwipeAll();
            } else if (level.swipeOpposite) {
                // Check if opposite of what's shown
                const oppositeMap = { 'right': 'left', 'left': 'right', 'up': 'down', 'down': 'up' };
                if (level.buttonText.includes(oppositeMap[detectedDirection]) || 
                    level.instruction.toLowerCase().includes(oppositeMap[detectedDirection])) {
                    this.completeLevel();
                } else {
                    this.failLevel('tricked');
                }
            } else {
                this.completeLevel();
            }
        }
    }

    // Check swipe all directions
    checkSwipeAll() {
        const directions = ['up', 'down', 'left', 'right'];
        if (directions.every(d => d === this.swipeDirection)) {
            this.completeLevel();
        }
    }

    // Start wait timer
    startWaitTimer() {
        const level = this.currentLevel;
        this.isWaiting = true;
        
        this.waitTimer = setTimeout(() => {
            this.isWaiting = false;
            this.isWaitComplete = true;
            
            // Auto-complete if no interaction needed
            if (level.solution === 'wait') {
                this.completeLevel();
            }
        }, level.waitTime || 3000);
    }

    // Check if wait is complete
    isWaitComplete() {
        return !this.isWaiting;
    }

    // Start color change
    startColorChange(interval) {
        const gameButton = document.getElementById('game-button');
        this.isGreenPhase = false;
        
        this.colorChangeTimer = setInterval(() => {
            if (!this.gameActive) {
                clearInterval(this.colorChangeTimer);
                return;
            }
            
            this.isGreenPhase = !this.isGreenPhase;
            gameButton.style.background = this.isGreenPhase ? '#34C759' : '#FF3B30';
        }, interval || 2000);
    }

    // Start disappear
    startDisappear(time) {
        const gameButton = document.getElementById('game-button');
        this.isDisappeared = false;
        
        setTimeout(() => {
            if (this.gameActive) {
                gameButton.style.opacity = '0';
                this.isDisappeared = true;
            }
        }, time || 3000);
    }

    // Start hold progress
    startHoldProgress() {
        const level = this.currentLevel;
        const holdTime = level.holdTime || 1000;
        const gameButton = document.getElementById('game-button');
        
        this.holdProgressInterval = setInterval(() => {
            if (!this.isHolding) {
                this.stopHoldProgress();
                return;
            }
            
            const elapsed = Date.now() - this.holdStartTime;
            const progress = Math.min((elapsed / holdTime) * 100, 100);
            
            gameButton.style.background = `linear-gradient(to right, #007AFF ${progress}%, #ccc ${progress}%)`;
            
            if (progress >= 100) {
                this.stopHoldProgress();
            }
        }, 50);
    }

    // Stop hold progress
    stopHoldProgress() {
        if (this.holdProgressInterval) {
            clearInterval(this.holdProgressInterval);
        }
    }

    // Complete level
    completeLevel() {
        if (!this.gameActive) return;
        
        this.gameActive = false;
        this.clearTimers();
        
        const level = this.currentLevel;
        const timeTaken = (Date.now() - this.levelStartTime) / 1000;
        
        // Trigger success
        window.gameUI.showLevelComplete(level, timeTaken);
    }

    // Fail level
    failLevel(reason) {
        if (!this.gameActive) return;
        
        this.gameActive = false;
        this.clearTimers();
        
        const level = this.currentLevel;
        
        // Trigger failure
        window.gameUI.showLevelFailed(level, reason);
    }

    // Clear all timers
    clearTimers() {
        if (this.waitTimer) clearTimeout(this.waitTimer);
        if (this.colorChangeTimer) clearInterval(this.colorChangeTimer);
        if (this.holdProgressInterval) clearInterval(this.holdProgressInterval);
    }

    // Pause game
    pause() {
        this.gameActive = false;
    }

    // Resume game
    resume() {
        this.gameActive = true;
    }

    // Reset for new level
    reset() {
        this.clearTimers();
        this.currentLevel = null;
        this.gameActive = false;
        this.tapCount = 0;
        this.isHolding = false;
        this.isWaiting = false;
        this.holdProgress = 0;
    }
}

// Export game engine
window.gameEngine = new GameEngine();
