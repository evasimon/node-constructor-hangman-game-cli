// **Letter Constructor**: Used for each letter in the current word.
// Each letter object displays a character, or an underscore,
// depending on whether or not the user has guessed the letter.

// builds the Letter Constructor
function Letter(letter, guessedCorr) {
    this.letter = letter;
    this.guessedCorr = guessedCorr;
    this.displayLetter = function() {
        if (this.guessedCorr) {
            return this.letter;
        } else {
            return '_';
        }
    }
}

module.exports = Letter;