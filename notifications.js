// ========================================
// WRONG BUTTON - FAKE NOTIFICATIONS
// ========================================

const FAKE_NOTIFICATIONS = [
    // Battery & Hardware Warnings
    { icon: "🔋", title: "Battery Warning", message: "Your phone's processor is overheating trying to calculate your next mistake." },
    { icon: "📱", title: "System Alert", message: "High levels of hesitation detected on the screen surface. Please wipe your thumb." },
    { icon: "💾", title: "Storage Alert", message: "Device memory full. Please delete 500MB of pure regret to make room for the next level." },
    { icon: "📷", title: "Hardware Failure", message: "Front-facing camera has detected a severely confused expression. Optimizing display..." },
    { icon: "🔋", title: "Battery Alert", message: "Your phone is running out of patience. Please plug in a better player." },
    { icon: "⚡", title: "System Warning", message: "Screen friction levels approaching Mach 1. Please tap with less panic." },
    { icon: "👆", title: "Display Alert", message: "Oleophobic coating worn out from excessive, frantic screen rubbing." },
    { icon: "💧", title: "System Update", message: "Liquid detected in charging port. Specifically, the tears of defeat from your last run." },
    { icon: "📳", title: "Hardware Alert", message: "Gyroscope indicates the phone is shaking. Take a deep breath, it's just a button." },
    { icon: "📶", title: "SIM Card Error", message: "No signal found. Your thumbs have disconnected from your brain network." },

    // Fake Social & Texts
    { icon: "📞", title: "Missed Call (Mom)", message: "Hey honey, just calling to ask why you missed that incredibly obvious button." },
    { icon: "💬", title: "Messages", message: "Your thumbs left the group chat due to poor leadership." },
    { icon: "🏪", title: "App Store", message: "A user has recommended 'Toddler Shape Sorter' based on your recent gameplay history." },
    { icon: "💼", title: "LinkedIn Alert", message: "4 people viewed your profile to see if you handle stress as poorly in real life." },
    { icon: "📅", title: "Calendar Event", message: "3:00 PM - Scheduled appointment to finally hit the right button. (Status: Overdue)." },
    { icon: "❤️", title: "Health App", message: "Heart rate spiked during a 2D mobile game. Please sit down and evaluate your choices." },
    { icon: "🗺️", title: "Maps Notification", message: "Walk 50 feet away from your phone and go touch some actual grass." },
    { icon: "🏦", title: "Banking Alert", message: "$0.00 has been deducted from your account because you can't buy talent." },
    { icon: "📞", title: "Missed Call (Developer)", message: "Hey, can you stop breaking our code with your creative ways of losing?" },
    { icon: "👥", title: "Social Alert", message: "Your friends have muted your game invites out of sheer secondary embarrassment." },

    // Self-Aware Button
    { icon: "🎮", title: "Wrong Button", message: "The button is lonely. It hasn't been pressed correctly in hours." },
    { icon: "🎮", title: "Wrong Button", message: "I shifted two pixels to the left just to watch you miss. It was hilarious." },
    { icon: "🎮", title: "Wrong Button", message: "Come back, the algorithm promises to use smaller words this time." },
    { icon: "🎮", title: "Wrong Button", message: "The level is ready to play itself since you're clearly taking a vacation." },
    { icon: "🎮", title: "Wrong Button", message: "I'm not saying you're bad at this, but the AI just asked for an easier opponent." },
    { icon: "🎮", title: "Wrong Button", message: "Hey... are you staring at the screen with your mouth open again?" },
    { icon: "🎮", title: "Wrong Button", message: "The 'Next Level' asset is getting covered in digital dust. Come open it." },
    { icon: "🎮", title: "Wrong Button", message: "New high score unlocked! Just kidding, wanted to see how fast you'd tap this." },
    { icon: "🎮", title: "Wrong Button", message: "Your phone's screen protector is begging you to find a gentler hobby." },
    { icon: "🎮", title: "Wrong Button", message: "The level timer completed a full marathon while you were deciding what to do." },

    // Meta Sabotage
    { icon: "☁️", title: "Cloud Sync Failure", message: "We tried to save your data, but the cloud server is refusing to look at it." },
    { icon: "🛡️", title: "Security Threat", message: "Malware detected. It appears to be located entirely in your right thumb." },
    { icon: "❌", title: "App Uninstalled", message: "Just kidding, but your phone seriously considered it for a second." },
    { icon: "📊", title: "Data Usage Warning", message: "You are consuming too much bandwidth downloading sarcastic error messages." },
    { icon: "📁", title: "File Manager", message: "Found 400 identical screenshots of your 'Game Over' screen. Purge them?" },
    { icon: "🔐", title: "Permissions Required", message: "Wrong Button needs access to your ego so it can deflate it properly." },
    { icon: "💥", title: "System Crash Alert", message: "The game writer ran out of patience. Please restart your brain loop." },
    { icon: "🤖", title: "Anti-Cheat System", message: "Flagged for abnormal performance. Specifically, performing way worse than a bot." },
    { icon: "👨‍💻", title: "Developer Mode", message: "Line 42: if (player.isPanicking) { increase_button_speed(); }" },
    { icon: "📦", title: "Package Error", message: "Failed to load asset: 'victory_theme.mp3'. Reason: Unused by this user." },

    // Sarcastic Achievements
    { icon: "🏆", title: "Trophy Unlocked", message: "The Illusion of Progress — You spent 20 minutes in the settings menu." },
    { icon: "🏅", title: "Badge Earned", message: "The Panic Smasher — You managed to touch every single pixel except the target." },
    { icon: "🎖️", title: "Achievement Alert", message: "The Statue — You stared at a 2-second countdown for a full three minutes." },
    { icon: "🏆", title: "Trophy Unlocked", message: "Consistent Disappointment — Failed the exact same stage 10 times without changing tactics." },
    { icon: "🏅", title: "Badge Earned", message: "Early Bird's Corpse — Tapped before the level loading screen even cleared." },
    { icon: "🎖️", title: "Achievement Alert", message: "Participation Trophy — The algorithm genuinely felt bad for you this time." },
    { icon: "🏆", title: "Trophy Unlocked", message: "The Heavy Machinery Hand — Tapped hard enough to trigger a minor earthquake." },
    { icon: "🏅", title: "Badge Earned", message: "Gullible Customer — You clicked a fake 'X' icon that was clearly drawn in crayon." },
    { icon: "🎖️", title: "Achievement Alert", message: "Esports Tryhard — Blew through a casual puzzle like your mortgage depended on it." },
    { icon: "🏆", title: "Trophy Unlocked", message: "The Digital Hoarder — Kept this app open for 4 hours with a total score of zero." }
];

// Helper function to get random notification
function getRandomNotification() {
    return FAKE_NOTIFICATIONS[Math.floor(Math.random() * FAKE_NOTIFICATIONS.length)];
}

// Helper function to get notification by category
function getNotificationsByCategory(category) {
    const categoryMap = {
        'hardware': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        'social': [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
        'button': [20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
        'meta': [30, 31, 32, 33, 34, 35, 36, 37, 38, 39],
        'achievements': [40, 41, 42, 43, 44, 45, 46, 47, 48, 49]
    };
    
    const indices = categoryMap[category] || [];
    return indices.map(i => FAKE_NOTIFICATIONS[i]);
}
