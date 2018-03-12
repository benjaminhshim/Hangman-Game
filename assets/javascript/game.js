// CREATE AN ARRAY OF ANSWERS
var choices = ['SUPREME', 'BAPE', 'ADIDAS', 'YEEZY', 'OFFWHITE', 'FEAROFGOD'];

// CREATE GLOBAL VARIABLES
var wins = 0;
var guessesLeft = 10;
var alreadyGuessed = [];
var userGuess;

var answerArray = [];
var letters;

// COMPUTER CHOOSES A RANDOM WORD
var computerAnswer = choices[Math.floor(Math.random() * choices.length)];

console.log(computerAnswer);

// CREATE _ FOR EACH LETTER IN THE ANSWER
for (var i = 0; i < computerAnswer.length; i++) {
    answerArray[i] = '_';
    letters = answerArray.join(' ');
}

// PRINT UNDERSCORES REPRESENTING ANSWER TO THE DOM
document.getElementById('current-word').innerHTML = letters;

// CREATE FUNCTION FOR USER'S KEY PRESS
document.onkeyup = function (event) {

    // STORE USER'S KEY PRESS INTO userGuess

    // IF USER PICKS A WRONG LETTER
        // STORE LETTER INTO alreadyGuessed
        // guessesLeft -1
        // *THE LETTER MAY ONLY BE PICKED ONCE*

    // IF guessesLeft REACHES 0
        // RESET guessesLeft to 10
        // RESET alreadyGuessed ARRAY TO EMPTY
        // COMPUTER CHOOSES A NEW RANDOM WORD


    // IF USER PICKS A CORRECT LETTER
        // REVEAL LETTER IN computerAnswer
        // guessesLeft STILL GOES DOWN BY 1
        
    // IF USER GUESSES THE RIGHT WORD
        // wins +1
        // COMPUTER CHOOSES A NEW RANDOM WORD


} // end onkeyup