// ========================================
// WRONG BUTTON - DIALOGUES DATA
// ========================================

const DIALOGUES = {
    // Player Tapped Too Early
    tooEarly: [
        "Wow, eager much? The button wasn't even dressed yet.",
        "Premature celebration. Classic you.",
        "Is your finger connected to your brain, or is it a rogue agent?",
        "Time travel hasn't been invented yet, sit down.",
        "If impatience was a skill, you'd be top of the leaderboard.",
        "The button will appear when it's ready. Do you need a sensory toy?",
        "You jumped the gun so hard you landed in next week.",
        "A fraction of a second earlier and you would've broken space-time.",
        "Patience is a virtue. A virtue you clearly don't possess.",
        "Speedrunning disappointment, are we?"
    ],

    // Player Tapped Too Late
    tooLate: [
        "Did you fall asleep, or are you just operating on a dial-up connection?",
        "The heat death of the universe will happen faster than your next tap.",
        "Hello? Anyone home? Or did you leave your phone on the bus?",
        "I've seen tectonic plates shift faster than that reaction.",
        "You missed it. By a geological era.",
        "Did you need to consult a committee before pressing it?",
        "If you snooze, you lose. And boy, did you snooze.",
        "I was about to call for a welfare check on you.",
        "The opportunity passed, retired, and is now living in Florida.",
        "Are you playing in slow motion, or is this your peak performance?"
    ],

    // Player Failed
    failed: [
        "I'm not mad, I'm just... well, actually, I'm laughing.",
        "That was spectacular. In a tragic, trainwreck sort of way.",
        "Have you considered a hobby that doesn't involve hand-eye coordination?",
        "You missed. The broad side of a barn would be safe from you.",
        "Physics called. It's embarrassed by your trajectory.",
        "If at first you don't succeed... maybe this game isn't for you.",
        "Fascinating. A brand new way to fail. Creative!",
        "My code is crying looking at your performance.",
        "Don't look at me like that. You're the one holding the phone.",
        "Error 404: Player skill not found."
    ],

    // Player Succeeded
    succeeded: [
        "I expected less from you, but hey, congratulations.",
        "Look at you go! Did someone give you a map?",
        "Your brain finally woke up. Took its sweet time.",
        "Miracles do happen. I stand corrected.",
        "You actually did it. Excuse me while I update my worldview.",
        "Enjoy this moment. It's likely downhill from here.",
        "Wow. I'm almost proud. Almost.",
        "You beat the system. Don't get used to it.",
        "A monkeys-and-typewriters situation, clearly.",
        "Fine, you get a gold star. Go tell your mom."
    ],

    // Player Waited
    waited: [
        "Are we playing a game or staring into the abyss?",
        "If you're waiting for me to play for you, the fee is $20.",
        "Staring contest? Bold strategy, let's see if it pays off.",
        "I'm a game, not a fireplace. Stop just looking at me.",
        "Did your screen freeze, or just your cognitive functions?",
        "I'm literally counting the seconds of your life ticking away.",
        "Any day now. I have a digital dinner date later.",
        "Are you meditating or just thoroughly confused?",
        "The silence is deafening. Tap something.",
        "Your battery is dying faster than your motivation."
    ],

    // Player Spam Tapped
    spamTapped: [
        "Whoa, calm down, Hulk. The screen didn't owe you money.",
        "Tapping it twenty times doesn't make it work faster, Karen.",
        "Are you trying to punch through your glass screen?",
        "Calm your fingers. Take a deep breath.",
        "That's a lot of aggressive tapping for someone with zero points.",
        "Please stop. You're giving my pixels anxiety.",
        "If aggression solved levels, you'd be a grandmaster.",
        "Are you sending Morse code or just having a spasm?",
        "The button is sensitive. Treat it with respect.",
        "That screen cost more than your dignity. Gentle."
    ],

    // Player Got Tricked
    tricked: [
        "You actually fell for that? Oh, this is beautiful.",
        "I put a shiny thing there and you just had to touch it.",
        "Hook, line, and sinker. You're too easy.",
        "It said 'Don't Push'. What part of that was ambiguous?",
        "Psychology 101: You just failed it.",
        "I love it when a plan comes together. Thanks for cooperating.",
        "You're like a moth to a digital flame.",
        "Did you really think I'd make it that easy?",
        "Tricked by a bunch of pixels. Classic human.",
        "Your curiosity didn't just kill the cat, it ruined your score."
    ],

    // Player Solved Quickly
    solvedQuickly: [
        "Oh, a genius. We love a show-off.",
        "Did you read the walkthrough, or are you just psychic?",
        "Show some respect for the level designers, jeez.",
        "Blink and you'll miss it. Literally.",
        "Calm down, Einstein. Save some brain cells for later.",
        "You flew through that. Do you want a medal or a chest to pin it on?",
        "Speedy. Let's see if you can keep that up when it gets hard.",
        "Are you on speed dial with destiny?",
        "That was fast. Too fast. I'm suspicious.",
        "Fine, you're smart. Moving on."
    ],

    // Player Solved Accidentally
    solvedAccidentally: [
        "That was luck and we both know it.",
        "Fumbling your way to victory. A true masterclass.",
        "You closed your eyes and hoped for the best, didn't you?",
        "Task failed successfully, I guess.",
        "Accidental genius is still genius, technically.",
        "You stumbled over the finish line. Beautifully ungraceful.",
        "Even a blind squirrel finds a nut occasionally.",
        "Don't pretend you planned that.",
        "The universe aligned just to save you from your own incompetence.",
        "You tripped and fell into a winning screen."
    ],

    // General Roasts
    roasts: [
        "Your strategy concerns me.",
        "You are confidently incorrect.",
        "That was an impressive mistake.",
        "An interesting choice, if your goal was to lose.",
        "I've seen random number generators with better logic.",
        "Your critical thinking seems to be on vacation.",
        "Did you overthink that, or not think at all?",
        "I appreciate your dedication to doing things the hard way.",
        "You're playing checkers while the game is playing chess.",
        "That move was a bold leap in the wrong direction.",
        "Your logic is fascinatingly fictional.",
        "I love how certain you were about that error.",
        "A mind-boggling display of guesswork.",
        "You are exploring brand new frontiers of incorrect.",
        "A beautifully executed lapse in judgment."
    ],

    // Reflex Roasts
    reflexRoasts: [
        "Your reflexes are operating on dial-up internet.",
        "Are you waiting for a written invitation to tap?",
        "I've seen tectonic plates move faster than your thumb.",
        "Your reaction time can be measured in business days.",
        "Did you freeze, or are you just practicing being a statue?",
        "The prompt came, saw, and conquered before you even blinked.",
        "Your timing is currently in a different time zone.",
        "A fraction of a second too late... by about five full seconds.",
        "Are your fingers stuck in slow motion?",
        "The timer wasn't a suggestion, you know."
    ],

    // Accuracy Roasts
    accuracyRoasts: [
        "You managed to miss every single option.",
        "You hit the background art. It's pretty, but it doesn't give points.",
        "The target was right there, yet you explored the entire screen.",
        "Are you using your elbow to tap the screen?",
        "Your thumb seems to have a mind of its own, and it's lost.",
        "An excellent shot, assuming the goal was to avoid the button.",
        "You missed by a distance that requires a map to calculate.",
        "Did you clean your screen, or did you actually try to tap?",
        "Your accuracy is statistically astounding in how low it is.",
        "The button is flashing neon, my friend. Neon."
    ],

    // Sarcastic Encouragement
    encouragement: [
        "Fresh start! Let's pretend the last five minutes didn't happen.",
        "You're setting a new record for 'most attempts'!",
        "I like your enthusiasm, even if it lacks direction.",
        "The only way to go from here is up. Seriously, you're at zero.",
        "A gold medal in participation is coming your way.",
        "Don't give up! I need the entertainment.",
        "You're keeping the game engine on its toes.",
        "Your thumbs are getting a great workout today.",
        "Let's wipe the slate clean and try using logic this time.",
        "You are the champion of creative setbacks."
    ],

    // Menu Quotes
    menuQuotes: [
        "Welcome back, Victim #42",
        "Ready for more disappointment?",
        "Your thumbs are about to have a bad day",
        "Trust no one. Not even this menu.",
        "Pro tip: Don't trust the instructions",
        "Loading sarcastic comments...",
        "Initializing disappointment engine...",
        "Your reputation precedes you... and it's not good",
        "Statistically, you'll fail. But hey, data can be wrong!",
        "The button misses you. It wants revenge."
    ]
};

// Helper function to get random dialogue
function getRandomDialogue(category) {
    const dialogues = DIALOGUES[category];
    if (!dialogues || dialogues.length === 0) {
        return "Something went wrong. Like your gameplay.";
    }
    return dialogues[Math.floor(Math.random() * dialogues.length)];
}

// Helper function to get random dialogue from multiple categories
function getMixedDialogue(categories) {
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    return getRandomDialogue(randomCategory);
}
