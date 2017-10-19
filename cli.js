// Game receives user input using the `inquirer`
var inquirer = require('inquirer');
var Word = require('./word');
// creates the newWord orject/ instance of the Word Constructor
var newWord = new Word();

function playGame() {
    // recursion: user plays while the word is guessed
    if (newWord.isTheWordGuessed() === false) {

        inquirer.prompt([

            {
                type: "input",
                name: "userGuess",
                message: "Guess a letter!"
            }

        ]).then(function(data) {
            // checks if the user guessed any letter
            var checkLetterStatus = newWord.checkLetter(data.userGuess);

            // checks if letter is guessed correctly
            if (checkLetterStatus) {
                console.log('CORRECT'.green);
                // display letter guessed
                newWord.displayWord();
                // asks for next letter
                playGame();
            } else { // if letter guessed is not correct
                // user loses a life
                newWord.lives--;
                console.log('INCORRECT'.red);

                // if user losses all the lives
                if (newWord.lives === 0) {
                    console.log(`--------------------------\n` +
                                `You lost all your lives!"\n`.blue +
                                `--------------------------\n`);
                    // prompts the user if they would like
                    // to play again or end the game
                    playAgain();
                } else {
                    // keeps track of the user's remaining lives/guesses
                    console.log(`You still have ${newWord.lives} lives left!`);
                    newWord.displayWord();
                    playGame();
                }
            }
        });
    } else { // if word is guessed
        console.log(`--------------------------\n` +
                    `BRAVO! You guessed the word!"\n`.rainbow +
                    `--------------------------\n`);
        // next word is given
        newWord.pushLetterObj();
        newWord.displayWord();
        playGame();
    }
}

function stopGame() {
    return process.exit(-1);
}

function playAgain() {
    // prompts the user if they would like to Play Again or Exit Game
    inquirer.prompt([

        {
            type: "list",
            name: "userChoice",
            message: "Please choose:",
            choices: ["Play Again", "Exit Game"]
        }

    ]).then(function(data) {
        // console.log(data.userChoice);         
        // plays again
        if (data.userChoice === "Play Again") {
            newWord.pushLetterObj();
            newWord.displayWord();
            playGame();
        } else {
            // ends the game
            stopGame();
        }

    });
}

// builds the array of letter object
newWord.pushLetterObj();
// displays randomly chosen word (underscores)
newWord.displayWord();
// starts game
playGame();