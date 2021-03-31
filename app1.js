//console.log(Math.floor(Math.random() * 10 )); 
const prompt = require("prompt-sync")({sigint: "true"});

for (i = 1; i < 5; i++) {
    let name1 = parseInt(prompt("Enter a number: "));
    if (i == 3) {
        console.log("Good, you guessed right!");
        break;
    }
    console.log("Try again!");
}