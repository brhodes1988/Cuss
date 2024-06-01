const swearWords = [
    "ass", "bitch", "bastard", "shit", "fuck", "dick", "piss", "cunt", "whore", "slut",
    "motherfucker", "cocksucker", "prick", "twat", "arsehole", "douchebag", "wanker", "tosser",
    "bollocks", "bugger", "arse", "tit", "wank", "git", "bloody", "sodding", "knobhead", "bellend",
    "twat", "shag", "piss off", "get stuffed", "screw you", "dickhead", "knob", "pillock", "turd",
    "dipshit", "fuckwit", "knob jockey", "wazzock", "numpty", "git", "fuck off", "piss off",
    "wanker", "arse", "bint", "slapper", "git", "tart", "minge", "shithead", "douche", "asshat",
    "jackass", "moron", "numbskull", "asswipe", "cumstain", "shitstain", "scumbag", "shitbag",
    "tossrag", "wankstain", "bugger off", "knobhead", "bellend", "muppet", "numpty", "wally",
    "git", "bint", "twonk", "git", "fuckface", "dickweed", "pissface", "fucknugget", "shitface",
    "cockface", "twatface", "dickbreath", "fucktard", "asslicker", "bitchface", "cuntface",
    "fuckhead", "shithead", "cockhead", "twathead", "dickhead", "fuckwit", "shitwit", "twit",
    "plonker", "wazzock", "git", "bellend", "pillock", "git", "arsehole", "wankstain", "shitstain",
    "cumstain", "fuckstick", "shitstick", "cockstick", "twatstick", "knobstick", "dickstick",
    "fucknugget", "shitnugget", "cocknugget", "twatnugget", "knobnugget", "dicknugget",
    "fuckmuppet", "shitmuppet", "cockmuppet", "twatmuppet", "knobmuppet", "dickmuppet",
    "fucktard", "shittard", "cocktard", "twattard", "knobtard", "dicktard", "fuckface",
    "shitface", "cockface", "twatface", "knobface", "dickface", "fuckbreath", "shitbreath",
    "cockbreath", "twatbreath", "knobbreath", "dickbreath", "fuckrag", "shitrag", "cockrag",
    "twatrag", "knobrag", "dickrag", "fuckwank", "shitwank", "cockwank", "twatwank", "knobwank",
    "dickwank", "fucktard", "shittard", "cocktard", "twattard", "knobtard", "dicktard", "fuckwit",
    "shitwit", "cockwit", "twatwit", "knobwit", "dickwit", "fuckhole", "shithole", "cockhole",
    "twathole", "knobhole", "dickhole", "fuckboy", "shitboy", "cockboy", "twatboy", "knobboy",
    "dickboy", "fuckgirl", "shitgirl", "cockgirl", "twatgirl", "knobgirl", "dickgirl", "fuckbag",
    "shitbag", "cockbag", "twatbag", "knobbag", "dickbag"
];

document.getElementById('generateButton').addEventListener('click', generatePhrase);

function generatePhrase() {
    const wordCount = Math.floor(Math.random() * 6) + 2; // generates a number between 2 and 7
    let phrase = "";
    for (let i = 0; i < wordCount; i++) {
        const randomIndex = Math.floor(Math.random() * swearWords.length);
        phrase += swearWords[randomIndex] + " ";
    }
    document.getElementById('phrase').innerText = phrase.trim();
}
