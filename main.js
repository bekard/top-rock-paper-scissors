const THREE_CASES = 3;
const FIVE_ROUNDS = 5;
const ROCK = capitalize("rock");
const PAPER = capitalize("paper");
const SCISSORS = capitalize("scissors");

function capitalize(word) {
    if (typeof word === "string") {
        word = word[0].toUpperCase() + word.substring(1).toLowerCase();
    }
    return word;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function computerPlay() {
    let computerPlay = getRandomInt(THREE_CASES);
    switch (computerPlay) {
        case 0:
            computerPlay = ROCK;
            break;
        case 1:
            computerPlay = PAPER;
            break;
        case 2:
            computerPlay = SCISSORS;
            break;
        default:
            break;
    }
    return computerPlay;
}

const PR_WIN = 1;
const PR_LOSE = 0;
const PR_DRAW = -1;

function playRound(palyerChoice, computerChoice) {
    palyerChoice = capitalize(palyerChoice);
    computerChoice = capitalize(computerChoice);

    let result;
    let message;
    if (palyerChoice === computerChoice) {
        message = `Draw, player choice "${palyerChoice}" is equals to computer choice "${computerChoice}"`;
        result = PR_DRAW;
    }
    else if (palyerChoice === ROCK && computerChoice === SCISSORS ||
        palyerChoice === PAPER && computerChoice === ROCK ||
        palyerChoice === SCISSORS && computerChoice === PAPER) {
        message = `You win! "${palyerChoice}" beats "${computerChoice}"`;
        result = PR_WIN;
    }
    else if (palyerChoice === ROCK && computerChoice === PAPER ||
        palyerChoice === PAPER && computerChoice === SCISSORS ||
        palyerChoice === SCISSORS && computerChoice === ROCK) { 
        message = `You lost. "${palyerChoice}" is beaten by "${computerChoice}"`;
        result = PR_LOSE;
    }
    else {
        message = `Undefined choice "${palyerChoice}"`;
        result = PR_DRAW;
    }
    console.log(message);
    return result;
}

function getGameResults(playerScore, computerScore) {
    let results;
    const withScores = `with scores ${playerScore}:${computerScore}`;
    if (playerScore > computerScore) {
        results = `Congratulations, you won ${withScores}!`;
    }
    else if (playerScore < computerScore) {
        results = `Unfortunatly, but you lost ${withScores}.`;
    }
    else {
        results = `It's a draw ${withScores}.`
    }
    return results;
}

const PRINTRES_CONSOLE = 0;
const PRINTRES_ALERT = 1;

function printResults(mode, results) {
    switch(mode) {
        case PRINTRES_CONSOLE:
            console.log(results);
            break;
        case PRINTRES_ALERT:
            alert(results);
            break;
        default:
            console.log("Undefined print results mode");
    }
}

function game() {
    /*
    let playerScore = 0;
    let computerScore = 0;
    for (let index = 0; index < FIVE_ROUNDS; index++) {
        playerChoice = prompt("Please enter your choice: ");
        const result = playRound(playerChoice, computerPlay());
        if (result === PR_WIN) {
            playerScore++;
        }
        else if (result === PR_LOSE){
            computerScore++; 
        }
    }
    const results = getGameResults(playerScore, computerScore);
    printResults(PRINTRES_ALERT, results);
    */
}

game();