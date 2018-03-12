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
function wordArray() {
    for (var i = 0; i < computerAnswer.length; i++) {
        answerArray[i] = '_';
        letters = answerArray.join(' ');
    }

    document.getElementById('current-word').innerHTML = letters;

}

wordArray();

// INITIALIZE GAME STATS AFTER A WIN
function resetGame() {
    guessesLeft = 10;
    alreadyGuessed = [];
    computerAnswer = choices[Math.floor(Math.random() * choices.length)];
    wordArray();
}

// PRINT UNDERSCORES REPRESENTING ANSWER TO THE DOM

// CREATE FUNCTION FOR USER'S KEY PRESS
document.onkeyup = function (event) {

    // STORE USER'S KEY PRESS INTO userGuess
    userGuess = String.fromCharCode(event.keyCode);
    console.log('You chose: ' + userGuess);

    // LETTER MAY ONLY BE CHOSEN ONCE
        // guessesLeft -1
    if (computerAnswer.indexOf(userGuess) >= 0) {
        guessesLeft--;
    }

    // IF USER PICKS A WRONG LETTER
        // STORE LETTER INTO alreadyGuessed
        // guessesLeft -1
        if (computerAnswer.indexOf(userGuess) < 0) {
            alreadyGuessed[alreadyGuessed.length] = userGuess;
            guessesLeft--;
        }

    // IF USER PICKS A CORRECT LETTER
    // REVEAL LETTER IN computerAnswer
    // guessesLeft STILL GOES DOWN BY 1
    for (var i = 0; i < computerAnswer.length; i++) {

        if (userGuess === computerAnswer[i]) {
            answerArray[i] = computerAnswer[i];
            document.getElementById('current-word').innerHTML = answerArray.join(' ');
        }     
    }  

    document.getElementById('already-guessed').innerHTML = alreadyGuessed.join(' ');
    document.getElementById('guesses-left').innerHTML = guessesLeft;
    
    


    

    // IF guessesLeft REACHES 0
        // RESET guessesLeft to 10
        // RESET alreadyGuessed ARRAY TO EMPTY
        // COMPUTER CHOOSES A NEW RANDOM WORD


    

        
    // IF USER GUESSES THE RIGHT WORD
        // wins +1
        // RESET alreadyGuessed ARRAY TO EMPTY
        // RESET guessesLeft TO 10
        // COMPUTER CHOOSES A NEW RANDOM WORD

    if (answerArray.indexOf('_') === -1){
        console.log('win!');
        wins++
        guessesLeft = 10;
        alreadyGuessed = [];

     /*   computerAnswer = choices[Math.floor(Math.random() * choices.length)];
        for (var i = 0; i < computerAnswer.length; i++) {
            answerArray[i] = '_';
            letters = answerArray.join(' ');
        }

        console.log(computerAnswer);
        document.getElementById('current-word').innerHTML = letters; */

    } 

    

} // end onkeyup