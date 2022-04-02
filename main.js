const THREE_CASES = 3;
const GAME_ROUNDS = 5;
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

const message = document.getElementById("message");

function playRound(palyerChoice, computerChoice) {
    palyerChoice = capitalize(palyerChoice);
    computerChoice = capitalize(computerChoice);

    let result;
    let text;
    if (palyerChoice === computerChoice) {
        text = `Draw, player choice "${palyerChoice}" is equals to computer choice "${computerChoice}"`;
        result = PR_DRAW;
    }
    else if (palyerChoice === ROCK && computerChoice === SCISSORS ||
        palyerChoice === PAPER && computerChoice === ROCK ||
        palyerChoice === SCISSORS && computerChoice === PAPER) {
        text = `You win round! "${palyerChoice}" beats "${computerChoice}"`;
        result = PR_WIN;
    }
    else if (palyerChoice === ROCK && computerChoice === PAPER ||
        palyerChoice === PAPER && computerChoice === SCISSORS ||
        palyerChoice === SCISSORS && computerChoice === ROCK) { 
        text = `You lost round. "${palyerChoice}" is beaten by "${computerChoice}"`;
        result = PR_LOSE;
    }
    else {
        text = `Undefined choice "${palyerChoice}"`;
        result = PR_DRAW;
    }
    message.textContent = text;
    return result;
}

function getGameResults(playerScore, computerScore) {
    let results;
    const withScores = `with scores ${playerScore}:${computerScore}`;
    if (playerScore > computerScore) {
        results = `Congratulations, you won the game ${withScores}!`;
    }
    else if (playerScore < computerScore) {
        results = `Unfortunatly, but you lost ${withScores}.`;
    }
    else {
        results = `It's a draw ${withScores}.`
    }
    results += "\nTo play one more time, please refresh the page.";
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

const btnRock = document.getElementById("rock");
const btnPaper = document.getElementById("paper");
const btnScissors = document.getElementById("scissors");

const player = document.getElementById("player-score");
const computer = document.getElementById("pc-score");

let playerScore = 0;
let computerScore = 0;
let roundsCount = 1;
let addRoundResult = (userChoice) => {
    if (roundsCount < GAME_ROUNDS) {
        const result = playRound(userChoice, computerPlay());
        if (result === PR_WIN) {
            playerScore++;
            player.textContent = playerScore;
        }
        else if (result === PR_LOSE){
            computerScore++; 
            computer.textContent = computerScore;
        }
    }

    if (roundsCount === GAME_ROUNDS) {
        const results = getGameResults(playerScore, computerScore);
        message.textContent = results;
    }
    roundsCount++;
};

btnRock.addEventListener("click", () => addRoundResult(ROCK));
btnPaper.addEventListener("click", () => addRoundResult(PAPER));
btnScissors.addEventListener("click", () => addRoundResult(SCISSORS));
