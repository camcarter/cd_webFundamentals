// 1. DEFINE THE FUNCTION
function d6() {
    var roll = Math.random();
    roll = (roll * 6) +1
    roll = Math.floor(roll)
    // your code here

    return roll;
}
    
//2. CALL THE FUNCTION
var playerRoll = d6();
console.log("The player rolled: " + playerRoll);


//--------------------------------------------------//
//--------------------------------------------------//
var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];


// YOUR CODE GOES HERE
// 1. DEFINE THE FUNCTION
function oracle(array){

}

// 2. CALL THE FUNCTION
var answer = oracle(lifesAnswers)
