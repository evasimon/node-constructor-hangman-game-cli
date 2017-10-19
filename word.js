//  Used to create an object representing the current 
// word the user is attempting to guess. 
// This should contain word specific logic and data.
var colors = require('colors');
var Letter = require('./letter');
var words = ['Picasso', 'Einstein', 'Edison'];
var lives = 5;


function Word(){
	this.wordArray = [];
	this.pushLetterObj = function() {
		this.wordArray = [];
		var chosenWord = words[Math.floor(Math.random() * words.length)].toLowerCase();
		console.log(`${chosenWord} (displayed for testing purposes)`.grey);
		for (var i = 0; i < chosenWord.length; i++) {
			var newLetter = new Letter(chosenWord[i], false);
			this.wordArray.push(newLetter);
		}
	};
	// displayWord
	this.displayWord = function(){
		var wordDisplyed = [];
		for (var i = 0; i < this.wordArray.length; i++) {
			var letterDisplayed = this.wordArray[i].displayLetter();
			wordDisplyed.push(letterDisplayed);
		}
		console.log(`${wordDisplyed.join(" ")}\n`);
	}
	// checkLetter
	this.checkLetter = function(userLetter) {
		var checkLetterStatus = false;
		for (var i = 0; i < this.wordArray.length; i++) {
			if (this.wordArray[i].letter === userLetter) {
				checkLetterStatus = true;
				this.wordArray[i].guessedCorr = checkLetterStatus;
			}
		}
		if (checkLetterStatus) {
			console.log('CORRECT'.green);
		} else {
			console.log('INCORRECT'.red);
			if (lives === 1) {
				console.log(`--------------------------\n` +
							`You lost all your lives!"\n`.blue +
							`        GAME OVER! \n`.blue +
							`--------------------------\n`);
				process.exit(-1);
			}
			console.log(`You still have ${lives = lives - 1} lives left!`);
		}
	}
	// check if word is guessed
	this.isTheWordGuessed = function(){
		for (var i = 0; i < this.wordArray.length; i++) {
			if (this.wordArray[i].guessedCorr === false) {
				return false;
			}
		}
		return true;
	}
}

module.exports = Word;