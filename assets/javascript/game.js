var computerPicks = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

var wins = 0;
var losses = 0;
var guessesRemaining = 9;
var guessChoices = [];

document.onkeyup = function (event) {

    var userGuess = event.key;

    var computerGuess = computerPicks[Math.floor(Math.random() * computerPicks.length)];

    // if (Options.indexOf(userGuess) > -1) {

        if (userGuess === computerGuess) {
            wins++;
            guessesRemaining = 9;
            guessChoices = [];
            var html
        }

        if (userGuess != computerGuess) {
            guessesRemaining--;
            guessChoices.push(userGuess);
        }

        if (guessesRemaining === 0) {
            losses++;
            guessesRemaining = 9;
            guessChoices = [];
        }
    // }
    
    var html = 
    "<h1>Psychic Game</h1>" +
    "<h2>Try to guess the letter the computer is thinking of! Press any letter:</h2>" +
    "<p>Wins: " + wins + "</p>" +
    "<p>Losses: " + losses + "</p>" +
    "<p> Guesses Left: " + guessesRemaining + "</p>" +
    "<p>Letters Guessed: " + guessChoices.join(", " ) + "</p>";
    
    document.querySelector("#game").innerHTML = html;







}