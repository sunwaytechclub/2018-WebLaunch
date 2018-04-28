var moodLevel = Math.floor(Math.random() * 100) + 1;

console.log("Mood level: " + moodLevel);
if(moodLevel > 70) {
    console.log("I am happy!");
}
else if(moodLevel > 40) {
    console.log("I am neutral.");
}
else {
    console.log("RAAAWWWWRRRRRR, I AM ANGRY!!!");
}