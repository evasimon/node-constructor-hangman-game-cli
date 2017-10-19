// **Word Constructor** Used to create an object representing the current 
// word the user is attempting to guess. 

var colors = require('colors'); // colors npm package for coloring text in node.js console
var Letter = require('./letter');
var words = ['Picasso', 'Einstein', 'Edison']; // given words


function Word() {
    this.lives = 5;
    this.wordArray = [];
    // builds the array of Letter Objects
    this.pushLetterObj = function() {
        this.wordArray = [];
        this.lives = 5;
        var chosenWord = words[Math.floor(Math.random() * words.length)].toLowerCase();
        console.log(`${chosenWord} (displayed for testing purposes)`.grey);
        for (var i = 0; i < chosenWord.length; i++) {
            var newLetter = new Letter(chosenWord[i], false);
            this.wordArray.push(newLetter);
        }
    };
    // displays the underscores or any correctly guessed letter
    this.displayWord = function() {
        var wordDisplyed = [];
        for (var i = 0; i < this.wordArray.length; i++) {
            var letterDisplayed = this.wordArray[i].displayLetter();
            wordDisplyed.push(letterDisplayed);
        }
        console.log(`${wordDisplyed.join(" ")}\n`);
    }
    // checks each guessed letter and sets its status to true or false
    // based on the returned value the game will prompt if the letter is correct or incorrect
    this.checkLetter = function(userLetter) {
        var checkLetterStatus = false;
        for (var i = 0; i < this.wordArray.length; i++) {
            // checks if a letter is guessed
            if (this.wordArray[i].letter === userLetter) {
                checkLetterStatus = true;
                this.wordArray[i].guessedCorr = checkLetterStatus;
            }
        }
        return checkLetterStatus;
    }
    // checks if word is guessed
    this.isTheWordGuessed = function() {
        // checks if all the letters are guessed correctly and returns a true or false status for cli.js!
        for (var i = 0; i < this.wordArray.length; i++) {
            if (this.wordArray[i].guessedCorr === false) {
                return false;
            }
        }
        return true;
    }
}

module.exports = Word;