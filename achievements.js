// ========================================
// WRONG BUTTON - ACHIEVEMENTS DATA
// ========================================

const ACHIEVEMENTS = [
    // Progress Achievements
    {
        id: 1,
        name: "First Victim",
        description: "Complete your first level",
        icon: "🎯",
        condition: "levelsCompleted >= 1",
        category: "progress"
    },
    {
        id: 2,
        name: "Button Basics Graduate",
        description: "Complete all Button Basics levels",
        icon: "🎓",
        condition: "category1Completed >= 10",
        category: "progress"
    },
    {
        id: 3,
        name: "Timing Master",
        description: "Complete all Timing levels",
        icon: "⏱️",
        condition: "category2Completed >= 10",
        category: "progress"
    },
    {
        id: 4,
        name: "Hold Champion",
        description: "Complete all Long Press levels",
        icon: "💪",
        condition: "category3Completed >= 10",
        category: "progress"
    },
    {
        id: 5,
        name: "Swipe Wizard",
        description: "Complete all Drag & Swipe levels",
        icon: "👆",
        condition: "category4Completed >= 10",
        category: "progress"
    },
    {
        id: 6,
        name: "Mind Reader",
        description: "Complete all Psychology Tricks levels",
        icon: "🧠",
        condition: "category5Completed >= 10",
        category: "progress"
    },
    {
        id: 7,
        name: "Game Complete!",
        description: "Complete all 50 levels",
        icon: "👑",
        condition: "levelsCompleted >= 50",
        category: "progress"
    },

    // Failure Achievements
    {
        id: 8,
        name: "Professional Mistake Maker",
        description: "Fail 10 times",
        icon: "❌",
        condition: "totalFails >= 10",
        category: "failure"
    },
    {
        id: 9,
        name: "Button Abuser",
        description: "Tap 100 times (including wrong taps)",
        icon: "🔨",
        condition: "totalTaps >= 100",
        category: "failure"
    },
    {
        id: 10,
        name: "Accidental Genius",
        description: "Solve a level without following instructions",
        icon: "🎭",
        condition: "accidentalWins >= 1",
        category: "failure"
    },
    {
        id: 11,
        name: "Master Of Confusion",
        description: "Fail the same level 5 times",
        icon: "😵",
        condition: "sameLevelFails >= 5",
        category: "failure"
    },
    {
        id: 12,
        name: "Speed Demon",
        description: "Complete a level in under 2 seconds",
        icon: "⚡",
        condition: "fastestLevel <= 2",
        category: "failure"
    },
    {
        id: 13,
        name: "Patient Player",
        description: "Wait 60 seconds total in waiting levels",
        icon: "🧘",
        condition: "totalWaitTime >= 60",
        category: "failure"
    },
    {
        id: 14,
        name: "Troll Expert",
        description: "Get tricked 20 times",
        icon: "🤡",
        condition: "timesTricked >= 20",
        category: "failure"
    },

    // Special Achievements
    {
        id: 15,
        name: "The Illusion of Progress",
        description: "Spend 20 minutes in the settings menu",
        icon: "⚙️",
        condition: "settingsTime >= 1200",
        category: "special"
    },
    {
        id: 16,
        name: "The Panic Smasher",
        description: "Touch every pixel except the target",
        icon: "🎯",
        condition: "panicTaps >= 50",
        category: "special"
    },
    {
        id: 17,
        name: "The Statue",
        description: "Stare at a 2-second countdown for 3 minutes",
        icon: "🗿",
        condition: "stareTime >= 180",
        category: "special"
    },
    {
        id: 18,
        name: "Consistent Disappointment",
        description: "Fail the same stage 10 times without changing tactics",
        icon: "📉",
        condition: "consistentFails >= 10",
        category: "special"
    },
    {
        id: 19,
        name: "Early Bird's Corpse",
        description: "Tap before the level loading screen clears",
        icon: "🐦",
        condition: "earlyTaps >= 1",
        category: "special"
    },
    {
        id: 20,
        name: "Participation Trophy",
        description: "The algorithm felt bad for you",
        icon: "🏆",
        condition: "pityWins >= 1",
        category: "special"
    },
    {
        id: 21,
        name: "The Heavy Machinery Hand",
        description: "Tap hard enough to trigger a minor earthquake",
        icon: "🌋",
        condition: "hardTaps >= 1",
        category: "special"
    },
    {
        id: 22,
        name: "Gullible Customer",
        description: "Click a fake 'X' icon drawn in crayon",
        icon: "✏️",
        condition: "fakeXClicks >= 1",
        category: "special"
    },
    {
        id: 23,
        name: "Esports Tryhard",
        description: "Blew through a casual puzzle like your mortgage depended on it",
        icon: "🎮",
        condition: "speedRuns >= 5",
        category: "special"
    },
    {
        id: 24,
        name: "The Digital Hoarder",
        description: "Keep the app open for 4 hours with a score of zero",
        icon: "📦",
        condition: "playTime >= 14400 && score == 0",
        category: "special"
    },

    // Secret Achievements
    {
        id: 25,
        name: "The Ghost Pointer",
        description: "Hover over the right choice and then chose the wrong one anyway",
        icon: "👻",
        condition: "ghostPointer >= 1",
        category: "secret",
        hidden: true
    },
    {
        id: 26,
        name: "Family Disappointment",
        description: "Your phone automatically texted this score to your parents",
        icon: "👨‍👩‍👦",
        condition: "parentText >= 1",
        category: "secret",
        hidden: true
    },
    {
        id: 27,
        name: "The Restraining Order",
        description: "The target button has asked you to keep your distance",
        icon: "📜",
        condition: "restrainingOrder >= 1",
        category: "secret",
        hidden: true
    },
    {
        id: 28,
        name: "200 Levels of Sass",
        description: "Read every single notification",
        icon: "📱",
        condition: "notificationsRead >= 200",
        category: "secret",
        hidden: true
    },
    {
        id: 29,
        name: "The Troll Slayer",
        description: "Complete 10 levels without failing",
        icon: "⚔️",
        condition: "perfectStreak >= 10",
        category: "secret",
        hidden: true
    },
    {
        id: 30,
        name: "The Ultimate Victim",
        description: "Unlock all other achievements",
        icon: "👑",
        condition: "achievementsUnlocked >= 29",
        category: "secret",
        hidden: true
    }
];

// Helper function to check if achievement is unlocked
function checkAchievement(achievement, stats) {
    try {
        // Simple evaluation of condition
        const condition = achievement.condition;
        
        // Parse and evaluate condition
        if (condition.includes('>=')) {
            const [key, value] = condition.split('>=');
            return stats[key.trim()] >= parseInt(value);
        } else if (condition.includes('<=')) {
            const [key, value] = condition.split('<=');
            return stats[key.trim()] <= parseInt(value);
        } else if (condition.includes('==')) {
            const [key, value] = condition.split('==');
            return stats[key.trim()] == parseInt(value);
        }
        
        return false;
    } catch (e) {
        return false;
    }
}

// Helper function to get achievements by category
function getAchievementsByCategory(category) {
    return ACHIEVEMENTS.filter(a => a.category === category);
}

// Helper function to get unlocked achievements
function getUnlockedAchievements(stats) {
    return ACHIEVEMENTS.filter(a => checkAchievement(a, stats));
}
