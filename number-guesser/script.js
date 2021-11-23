let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// be called at the start of each new round
// generate the new target number
const generateTarget = () => Math.floor(Math.random() * 10);

// be called each round to determine which guess is closest to the target number
// the player (user/computer) with guess closest to the target wins
// if both players are tied, the human user wins
const compareGuesses = (userGuess, computerGuess, targetNum) => {
    if (Math.abs(userGuess - targetNum) <= Math.abs(computerGuess - targetNum)) {
        return true;
    } else {
        return false;
    }
}

// increase the winner's score after each round
const updateScore = winner => {
    if (winner === 'human') {
        humanScore ++;
    } else {
        computerScore ++;
    }
}

// increase the round number after each round
const advanceRound = () => {
    currentRoundNumber ++;
}