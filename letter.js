// * **Letter**: Used for each letter in the current word.
// Each letter object should either display an underlying
// character, or a blank placeholder (such as an underscore),
// depending on whether or not the user has guessed the letter.
// This should contain letter specific logic and data.


function Letter(letter, guessedCorr) {
	this.letter = letter;
	this.guessedCorr = guessedCorr;
	this.displayLetter= function() {
		if (this.guessedCorr) {
			return this.letter;
		} else {
			return '_';
		}
	}
}

module.exports = Letter;