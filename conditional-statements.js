var decision = "cookie";
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

switch(decision) {
    case "cookie":
        console.log("Cookie tastes good!");
        break;
    case "oreo":
        console.log("Oreo will be nice with milk, so");
    case "milk":
        console.log("I will have milk.");
        break;
    default:
        console.log("Nothing nice for me to consume :(");
}