// GUESS THAT NUMBER
// Message to be used throughout the project/file
const enterNumText = `Please enter a number greater then zero`; 
// For restarting the game
let restartGame = true
// For storing the number that the user will guess
let rangeNum;
// Storing the number of attempts the user has left
let attempts;
// Storing the Users guess
let guess;
// For storing the users response to play again 
let playAgain

// Starting Alert message here
alert(`Welcome to "Guess That Number!" Please click "OK" to start the game`)

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


    break;
}