// GUESS THAT NUMBER
// Message to be used throughout the project/file
const enterNumText = `Please enter a number greater then zero.`; 
// For restarting the game
let restartGame = true
// For storing the number that the user will guess
let rangeNum;
// Storing the number of attempts the user has left
let attempts;
// 
let randomNum

// Storing the Users guess
let guess;
// For storing the users response to play again 
let playAgain

// Starting Alert message here
alert(`Welcome to "Guess That Number!" Please click "OK" to start the game.`)

// Game restarts as long as the restart game variable has a value of true
while (restartGame){
    // Asks user to enter a number to set the upper bound for the random number that will be created
    rangeNum = prompt(`Please enter a maximum number for the range.`)

    // Using parseInt to attempt to convert the users response into a number value
    rangeNum = parseInt (rangeNum)

    // Verifies the user entry for a range number is a number greater then ZERO (NOTES: all numbers, positive or negative, have default boolean value of true, except for 0)
    while(!rangeNum || rangeNum < 1){
        rangeNum = prompt(enterNumText)
        rangeNum = parseInt (rangeNum)
    }

    // Creates the random number using the range number entered by the user
    rangeNum = Math.floor( Math.random() * rangeNum) + 1

    // Prompts user to enter number of attempts allowed
    attempts = parseInt (prompt(`Please enter a number of attempts allowed:`))

    // Verifying the users entry for a number of attempts allowed is a number greater then zero and less then the range they set
    while(!attempts || attempts < 1 || attempts >= rangeNum ){
        attempts = parseInt (prompt(`Please enter a number from 1 to ${rangeNum - 1}:`))

    }

    // Asks user to enter a guess in the range that they set
    guess = prompt(`Please enter a guess from 1 to ${rangeNum}. You have ${attempts} attempt(s) left:`)

    // continue looping until the user guessed the correct number or runs out of attempts(NOTES: Loops until a BREAK keyword is run)
    while(true){
        // tries to convert the users guess into a number
        guess = parseInt(guess)

        //verifies the users guess is a number greater then zero & less than or equal to range they set
        while(!guess || guess < 1 || guess > rangeNum){
            guess = parseInt (prompt(`Please enter a number from 1 to ${rangeNum}`))
        }

        // Removes an attempt
        attempts--

        // Checks if user guessed correctly, if so then the game ends
        if (guess === randomNum) {
            alert(`CONGRATULATIONS YOU GUESSED THE CORRECT NUMBER! ${randomNum}`)
            break;  
        }
        // Checks if the user has any attempts left. if NOT, then the game ends and number us displayed
        else if (attempts === 0){
            alert (`Sorry, but you have run out of attempts :( The number was ${randomNum}`)
            break;
        }
        // Checks if users guess was too low and prompts user to guess again 
        else if (guess < randomNum){
            guess = prompt(`Too low. You have ${attempts} attempt(s) left`)
        }
        // The users guess was too high, so the user was prompted again
        else {
            guess = prompt (`Too high. You have ${attempts} attempts left`)
        }

        // break;
    }

    break;
}