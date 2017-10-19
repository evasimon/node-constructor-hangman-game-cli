// 1. The completed game should be able to receive user input using the `inquirer`
// or `prompt` npm packages.
var Word = require('./word');
var inquirer = require('inquirer');

var newWord = new Word();

// build the letter object
newWord.pushLetterObj();
// display chosen Word
newWord.displayWord();

var playGame = function() {

	// TO DO: check if word is guessed
	if ( newWord.isTheWordGuessed() === false) {

		inquirer.prompt([

		  {
		    type: "input",
		    name: "userGuess",
		    message: "Guess a letter!"
		  }

		]).then(function(data) {
			newWord.checkLetter(data.userGuess);
			newWord.displayWord();
			playGame();

		});
	} else {
		console.log(`--------------------------\n`+
					`BRAVO! You guessed the word!"\n`.rainbow +
					`--------------------------\n`);
		newWord.pushLetterObj();
		newWord.displayWord();
		playGame();
	}

}

playGame();




// You must keep track of the user's remaining
// guesses and prompt the user if they would like to end the game
//if none remain.
