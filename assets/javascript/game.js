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

// PLAY MUSIC IF WIN

var music = {
    playMusic: function() {
        var audio = new Audio('assets/audio/kanye.mp3');
        audio.currentTime  = 31.3;
        audio.play();
    },

    stopMusic: function() {
        audio = new Audio('assets/audio/Bach.mid');
        audio.play();
    }
}



// INITIALIZE GAME STATS AFTER A WIN
    // RESET guessesLeft to 10
    // RESET alreadyGuessed ARRAY
    // COMPUTER CHOOSES A NEW WORD AT RANDOM
    // NEW WORD GETS CONVERTED TO _
    // PRINT RESULTS TO WINDOW
function resetGame() {
    guessesLeft = 10;
    alreadyGuessed = [];
    computerAnswer = choices[Math.floor(Math.random() * choices.length)];
    answerArray = [];
    wordArray();



    document.getElementById('wins').innerHTML = wins;
    document.getElementById('guesses-left').innerHTML = guessesLeft;
    document.getElementById('already-guessed').innerHTML = alreadyGuessed;
    document.getElementById('result').innerHTML = ' ';
    document.getElementById('reset').innerHTML = ' ';
    document.getElementById('kanye-win').innerHTML = ' ';
    console.log(computerAnswer);
}


// CHECK userGuess
    // userGuess MAY ONLY BE CHOSEN ONCE PER ROUND
function checkUserGuess() {

    // IF USER PICKS A WRONG LETTER
        // STORE LETTER INTO alreadyGuessed
        // guessesLeft -1
    if (computerAnswer.indexOf(userGuess) < 0 && alreadyGuessed.indexOf(userGuess) < 0) {
        alreadyGuessed[alreadyGuessed.length] = userGuess;
        guessesLeft--;
    }

    // IF USER PICKS A CORRECT LETTER
        // REVEAL LETTER IN computerAnswer
        // guessesLeft REMAINS AS IS
    for (var i = 0; i < computerAnswer.length; i++) {
        if (userGuess === computerAnswer[i]) {
            answerArray[i] = computerAnswer[i];
            document.getElementById('current-word').innerHTML = answerArray.join(' ');
        }     
    }  

    document.getElementById('already-guessed').innerHTML = alreadyGuessed.join(' ');
    document.getElementById('guesses-left').innerHTML = guessesLeft;

}

// CHECK IF USER GUESSES THE RIGHT WORD
function isWin() {
        // wins +1
        // PLAY VICTORY SONG
        // KANYE WILL GIVE YOU A THUMBS UP
        // DISPLAY CORRECT WORD TO THE WINDOW
        // ALERT USER TO PRESS 'SPACEBAR' TO PLAY AGAIN
    if (answerArray.indexOf('_') === -1) {
        console.log('win!');
        wins++;

        var kanyeWin = "<img src=\"assets/images/kanye-west-thumbs-up.png\">";
        document.getElementById('kanye-win').innerHTML = kanyeWin;

        document.getElementById('result').innerHTML = '<span style="background-color:red">' + computerAnswer + '</span>' + ' you win!';
        document.getElementById('reset').innerHTML = 'press SPACEBAR to play again';

        console.log('New word: ' + computerAnswer);
        
    } 
}

// CHECK IF USER LOSES
function isLose() {

    // IF guessesLeft REACHES 0
        // DISPLAY CORRECT WORD TO THE WINDOW
        // ALERT USER TO PRESS 'SPACEBAR' TO PLAY AGAIN
    if (guessesLeft === 0) {
        document.getElementById('result').innerHTML = 'answer was ' + '<span style="background-color:red">' + computerAnswer + '</span>';
        document.getElementById('reset').innerHTML = 'press SPACEBAR to play again';

    }
}

// CREATE GLOBAL FUNCTION FOR USER'S KEY PRESS
document.onkeyup = function (event) {

    // STORE USER'S KEY PRESS INTO userGuess
    userGuess = String.fromCharCode(event.keyCode);
    console.log('You chose: ' + userGuess);

    // CHECK IS userGuess IS A RIGHT OR WRONG LETTER
    checkUserGuess();

    // RESET GAME WHEN USER PRESSES 'SPACEBAR'
    if (userGuess === ' ') {
        resetGame();

    }

    // RUN APPROPRIATE FUNCTION IF THE WINNER WINS OR LOSES
    isWin();

    isLose();

}

