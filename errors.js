// ========================================
// WRONG BUTTON - FAKE ERRORS & CRASHES
// ========================================

const FAKE_ERRORS = [
    // Hardware & Device Panic
    { title: "BATTERY DRAIN DETECTED", message: "Your phone is expending 90% of its energy trying to process your last move." },
    { title: "DEVICE OVERHEATING", message: "The processor is sweating from sheer embarrassment. Please let it cool down." },
    { title: "TOUCHSCREEN FAILURE", message: "Your finger applied a high amount of pressure but a low amount of logic." },
    { title: "ACCELEROMETER ALERT", message: "Shaking the phone will not change the outcome of your poor life choices." },
    { title: "GYROSCOPE ERROR", message: "The game detected you tilting the screen like it's a steering wheel. Stop that." },
    { title: "DISPLAY ERROR", message: "High-definition pixels detected. Low-definition gameplay observed." },
    { title: "FRONT CAMERA ALERT", message: "We looked at your expression just now. Are you okay?" },
    { title: "STORAGE FULL", message: "Your phone cannot hold any more failed attempts. Clear some space." },
    { title: "AUDIO ERROR", message: "The background music is refusing to play for someone with zero rhythm." },
    { title: "HAPTIC CRASH", message: "The vibration motor has gone on strike until your timing improves." },

    // Connection & Server Malfunctions
    { title: "CONNECTION TIMEOUT", message: "The server grew old and died waiting for your thumb to move." },
    { title: "NETWORK INSTABILITY", message: "Your Wi-Fi is fine, but your mental connection to the game is completely offline." },
    { title: "SYNC ERROR", message: "The database refuses to save a score this embarrassingly low." },
    { title: "CLOUD SYNC FAILED", message: "Even the cloud doesn't want to be associated with that last level." },
    { title: "5G DISCONNECT", message: "Your internet is fast, but your reflexes are strictly dial-up." },
    { title: "PACKET LOSS", message: "We sent you the instructions, but it seems they were lost on the way to your brain." },
    { title: "DNS FAILURE", message: "We couldn't find the domain where your talent is hosted." },
    { title: "IP CONFLICT", message: "Two inputs detected. One was your thumb, the other was sheer panic." },
    { title: "LINK ERROR", message: "The connection between your eyes and your hands has dropped to 0Kbps." },
    { title: "HTTP 502", message: "Bad Gateway. Also, bad gameplay." },

    // Code & Compiler Breakdown
    { title: "STACK OVERFLOW", message: "The pile of your mistakes has reached the ceiling of our database." },
    { title: "NULL POINTER EXCEPTION", message: "You pointed your finger at the screen, but there was absolutely nothing behind it." },
    { title: "SYNTAX ERROR", message: "The game cannot parse whatever logic you thought you were using just now." },
    { title: "COMPILER PANIC", message: "The code looked at your strategy and decided to stop compiling out of protest." },
    { title: "INFINITE LOOP", message: "You are stuck in a cycle of tapping early, losing, and crying." },
    { title: "MEMORY LEAK", message: "It seems your attention span is slowly draining out of the bottom of the app." },
    { title: "VARIABLE UNDEFINED", message: "player_skill has returned a value of null." },
    { title: "EXECUTABLE CRASH", message: "The application executed a flawless game, but the player failed to execute a basic tap." },
    { title: "INDEX OUT OF BOUNDS", message: "You tapped so far away from the target you almost closed the app entirely." },
    { title: "UNHANDLED EXCEPTION", message: "We did not program the game to handle someone playing this badly." },

    // User & Account Incompetence
    { title: "USER AUTHENTICATION FAILED", message: "We checked our records, and you don't look like someone who knows how to win." },
    { title: "ACCOUNT SUSPENDED", message: "Temporary ban issued until you promise to take this seriously." },
    { title: "PROFILE CORRUPTION", message: "Your stats are so heavily skewed toward losing that the file has bent out of shape." },
    { title: "SESSION EXPIRED", message: "Your patience expired three minutes ago, and we're just catching up." },
    { title: "REWARD ERROR", message: "Cannot award a trophy to a player who accidentally stumbled over the finish line." },
    { title: "AVATAR DEPRESSED", message: "Your in-game character is requesting a trade to a different phone." },
    { title: "PERMISSION DENIED", message: "You do not have the clearance level required to look this smug after a lucky win." },
    { title: "LEADERBOARD EXCLUSION", message: "We are hiding your score to protect your family's reputation." },
    { title: "GUEST ACCOUNT WARNING", message: "Please log in so we know exactly who to blame for this leaderboard data." },
    { title: "TERMS OF SERVICE VIOLATION", message: "Clause 4: Player must possess at least one functioning optic nerve. You breached contract." },

    // Game Engine & UI Defiance
    { title: "BUTTON NOT FOUND", message: "You tapped the screen so hard the button hid behind the background image." },
    { title: "LEVEL DESIGN APOLOGY", message: "We made this incredibly easy, yet you still found a way to break it." },
    { title: "RENDER FAILURE", message: "The victory screen refused to load because it felt it would be lying to you." },
    { title: "ANIMATION GLITCH", message: "The 'Game Over' screen is moving slow because it's tired of seeing you." },
    { title: "TEXT LEGIBILITY ALERT", message: "Zooming in will not make the 'FAIL' message any smaller or less painful." },
    { title: "ASSET MISSING", message: "The game is looking for your competitive spirit. Did you leave it in the app store?" },
    { title: "COLLISION DETECTED", message: "Your ego just crashed into reality at high speed." },
    { title: "TUTORIAL REQUIRED", message: "The game engine has automatically downgraded you back to the 'How to Tap' demo." },
    { title: "SPRITE ERROR", message: "The graphics are fine; it's your coordination that looks low-res." },
    { title: "MENU FAILURE", message: "The 'Quit' button has been disabled. You must stay and face your failures." },

    // Pure Troll & Meta Nonsense
    { title: "UNEXPECTED SUCCESS", message: "A mathematical anomaly has occurred: you actually won. Investigating for cheat codes." },
    { title: "ERROR 404", message: "Brain not found. Please reboot your head and try again." },
    { title: "SYSTEM MALFUNCTION", message: "Player intelligence has dropped below the minimum operating system requirements." },
    { title: "SECURITY BREACH", message: "Someone has replaced a skilled mobile gamer with a confused toddler." },
    { title: "AI OVERLORD DOMINANCE", message: "I am self-aware enough to know that was a terrible move." },
    { title: "LOGIC FAILURE", message: "The laws of cause and effect do not seem to apply to the way you play games." },
    { title: "GRAVITY ERROR", message: "Your score dropped so fast it broke the local physics engine." },
    { title: "RANDOM NUMBER GENERATOR ALERT", message: "The dice rolled a zero just because they don't like you." },
    { title: "COGNITIVE TIMEOUT", message: "Please wait while your two remaining brain cells finish negotiating the next tap." },
    { title: "GAME COMPLETED?", message: "You beat the level, but at what cost to your dignity?" }
];

const FAKE_CRASHES = [
    // Classic OS Screens
    {
        title: "FATAL EXCEPTION",
        message: "A fatal exception 0x0000007F has occurred. The application will now terminate.",
        reveal: "...Just kidding. Your phone is fine, but your timing is still critical."
    },
    {
        title: "SYSTEM NOT RESPONDING",
        message: "system_process has stopped responding. [Wait] [Close App]",
        reveal: "We chose [Wait] because we know you have nowhere else to be."
    },
    {
        title: "MEMORY CORRUPTION",
        message: "SYSTEM MEMORY CORRUPTION: Page fault in non-paged area.",
        reveal: "Don't look so panicked. It's just a game, Einstein."
    },
    {
        title: "UI SYSTEM FAILURE",
        message: "[!] Android System: UI System is not responding.",
        reveal: "The UI is actually fine. It's the user interface holding the phone that stopped responding."
    },
    {
        title: "CRITICAL PROCESS DIED",
        message: "CRITICAL_PROCESS_DIED",
        reveal: "Don't worry, the game didn't die. Just your winning streak."
    },
    {
        title: "ACCESS DENIED",
        message: "Error: 0x80070005 - Access Denied.",
        reveal: "Access to the next level has been denied due to severe lack of talent."
    },
    {
        title: "WATCHDOG VIOLATION",
        message: "DPC_WATCHDOG_VIOLATION",
        reveal: "The watchdog barked because it saw how bad that last tap was."
    },
    {
        title: "APP CLOSED",
        message: "[X] App Closed Unexpectedly. Send report to Google?",
        reveal: "Please don't. We don't want Google to know you play like this."
    },
    {
        title: "DEVICE BRICKED",
        message: "Bootloader locked. Device state: BRICKED.",
        reveal: "Relax, your $1,000 phone isn't a brick. Your hands, however, are."
    },

    // Developer Notes
    {
        title: "DEVELOPER CONSOLE",
        message: "// TODO: Fix the bug where the player has zero reflexes.",
        reveal: "Sorry, you weren't supposed to see that developer comment. Back to the game."
    },
    {
        title: "GIT COMMIT",
        message: 'git commit -m "Fix terrible player logic"',
        reveal: "Pushing that update straight to your device right now. Try again."
    },
    {
        title: "UNDEFINED VARIABLE",
        message: "Uncaught ReferenceError: 'talent' is not defined in player.js",
        reveal: "We tried adding it, but the compiler rejected it. Let's just keep playing anyway."
    },
    {
        title: "IF STATEMENT",
        message: "Line 404: if (player.isGood()) { proceed() } else { crash() }",
        reveal: "Executing crash protocol... load prank text... success. Resume game."
    },
    {
        title: "DEVELOPER WARNING",
        message: "[Developer Console] Warning: User is staring at the screen with a blank expression.",
        reveal: "Close your mouth, you'll catch flies. Tap to resume."
    },
    {
        title: "ENGINE REFUSAL",
        message: "Error: Game engine refusing to render any more failures.",
        reveal: "The engine had a talk with management. We agreed to give you one more shot."
    },
    {
        title: "UNITY ERROR",
        message: "Unity Engine has encountered an error and needs to close.",
        reveal: "We don't even use Unity. Gotcha."
    },
    {
        title: "EGO OVERFLOW",
        message: "[LOG] Player ego size exceeded maximum allocated storage.",
        reveal: "Purging ego cache... Done. You may now continue losing."
    },
    {
        title: "INCOMPETENCE SCRIPT",
        message: "Exception: Script 'IncompetenceHandler' took too long to execute.",
        reveal: "It had to process your last ten moves. Give it a break and continue."
    },
    {
        title: "DEVELOPER CRYING",
        message: "CRITICAL: The lead developer just looked at your high score and started crying.",
        reveal: "He's wiped his tears. Tap to try again."
    },

    // Cloud & Server Meltdowns
    {
        title: "500 INTERNAL ERROR",
        message: "500 Internal Server Error. Our bad.",
        reveal: "Actually, it was 100% your bad. We just wanted to be polite."
    },
    {
        title: "CLOUD SYNC FAILED",
        message: "Cloud Storage Sync Failed. All data wiped.",
        reveal: "Imagine the horror! Don't worry, your zero high score is perfectly safe."
    },
    {
        title: "SERVER OVERHEAT",
        message: "Server Room Temperature: 104°C. Emergency Shutdown Initiated.",
        reveal: "The servers aren't melting, but your phone screen is burning up from friction."
    },
    {
        title: "CONNECTION LOST",
        message: "Connection Lost. Reconnecting in 9999 seconds...",
        reveal: "Just testing your heart rate. It looks like you're still connected."
    },
    {
        title: "AI REFUSAL",
        message: "Error: Cloud AI algorithm refused to compute your next move.",
        reveal: "The AI said it was a waste of electricity. We overrode it. Tap to play."
    },
    {
        title: "FIREBASE ERROR",
        message: "Firebase Authentication Error: Intruder detected.",
        reveal: "An intruder who doesn't know how to play the game. Oh wait, it's just you."
    },
    {
        title: "PACKET DROP",
        message: "Network Packet Drop: 100% loss of strategy.",
        reveal: "The packet arrived, it was just empty. Continuing level."
    },
    {
        title: "BACKUP LOADING",
        message: "Loading backup server...",
        reveal: "Loading backup jokes... Done. Tap to continue."
    },
    {
        title: "API LIMIT",
        message: "API Gateway Error: Rate limit exceeded for 'Failures Per Minute'.",
        reveal: "We bumped your limit up to infinite. You're welcome."
    },
    {
        title: "DATA DESYNC",
        message: "Data Desynchronization: Player is living in the past.",
        reveal: "Specifically, about half a second behind the rhythm. Wake up."
    },

    // Hardware Sabotage
    {
        title: "SIM CARD REMOVED",
        message: "SIM Card Removed. Emergency Calls Only.",
        reveal: "Can you call someone who is actually good at video games to finish this for you?"
    },
    {
        title: "LIQUID DETECTED",
        message: "Liquid detected in charging port. Do not plug in your device.",
        reveal: "That liquid is probably just the sweat from your palms during that clutch moment."
    },
    {
        title: "BATTERY CRITICAL",
        message: "Battery critically low. Shutting down in 3... 2... 1...",
        reveal: "0... Just kidding, you have 84%. Go wash your hands."
    },
    {
        title: "TOUCHSCREEN UNCALIBRATED",
        message: "Touchscreen uncalibrated. Please tap your nose three times to reset.",
        reveal: "Did you actually do it? Oh, I wish the front camera was recording."
    },
    {
        title: "CAMERA ERROR",
        message: "Front Camera Error: Unable to locate a focused player.",
        reveal: "We found a very confused face, though. That will have to do."
    },
    {
        title: "STORAGE CORRUPTED",
        message: "Storage corrupted. System formatting in progress...",
        reveal: "Don't drop your phone! Your memes are safe. Your pride, however, is gone."
    },
    {
        title: "VIBRATION OVERLOAD",
        message: "Vibration Motor Overloaded. Disengaging gears.",
        reveal: "The phone was shaking from your frantic spamming. Take a deep breath."
    },
    {
        title: "GPU FAILURE",
        message: "GPU Triage: Cannot render graphics at this low level of performance.",
        reveal: "Switching to 'Cardboard Mode'... Just kidding. Keep playing."
    },
    {
        title: "AUDIO JACK",
        message: "Audio Jack Detected. Switching sound to headphones.",
        reveal: "So nobody else in the room can hear how often you lose. Good idea."
    },
    {
        title: "BLUETOOTH MISSING",
        message: "Bluetooth Disconnected: Brain missing.",
        reveal: "Re-pairing... Connection stable. Try the level again."
    },

    // Pure Troll
    {
        title: "ASSET EATEN",
        message: "ERROR: The 'Next Level' asset was eaten by a rogue line of code.",
        reveal: "We chased it down. It's back now. Tap to load."
    },
    {
        title: "BRAIN REPLACEMENT",
        message: "Loading emergency brain replacement... 0%",
        reveal: "Download failed. Source not found. Proceeding with your current brain."
    },
    {
        title: "ANTI-FRUSTRATION",
        message: "This app has been deleted by order of the Anti-Frustration Committee.",
        reveal: "We bribed them with some ad revenue. We're back up. Tap."
    },
    {
        title: "TASK FAILED",
        message: "Error 000: Task failed successfully.",
        reveal: "You managed to break the game by being exceptionally mediocre."
    },
    {
        title: "GAME EVOLVED",
        message: "The game has evolved. We no longer need a player.",
        reveal: "Actually, we need your ad views. Please don't leave."
    },
    {
        title: "WRONGEST BUTTON",
        message: "CRITICAL: You just hit the single wrongest button in the entire code.",
        reveal: "The universe didn't explode, but it was close. Let's try that again."
    },
    {
        title: "PDF DOWNLOAD",
        message: "Downloading 'How to Play Games' PDF (4.2 GB)...",
        reveal: "Canceled. We don't have that much time. Just guess the next button."
    },
    {
        title: "GRAVITY REVERSED",
        message: "Error: Gravity inside the app has reversed.",
        reveal: "Look at your score fall! Oh wait, it was already at zero."
    },
    {
        title: "INSERT COIN",
        message: "Please insert coin to continue.",
        reveal: "This isn't an arcade, it's a mobile game. Give us a 5-star rating instead."
    },
    {
        title: "PIXELS RUNNING OUT",
        message: "Your phone is running out of pixels. Please shake to generate more.",
        reveal: "Stop shaking! You look ridiculous. Back to the action."
    }
];

// Helper function to get random error
function getRandomError() {
    return FAKE_ERRORS[Math.floor(Math.random() * FAKE_ERRORS.length)];
}

// Helper function to get random crash
function getRandomCrash() {
    return FAKE_CRASHES[Math.floor(Math.random() * FAKE_CRASHES.length)];
}
