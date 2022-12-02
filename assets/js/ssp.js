// För att se att skriptet laddats in
console.log('ssp.js init');

// Variabler
const buttons = document.querySelectorAll('.gameButton');
const startButton = document.querySelector('#startGameButton');
const gamebuttons = document.querySelector('#gameField');
let playerSelection;
let computerChoice;
let roundScores = {player: 0, computer: 0}
const outputField = document.querySelector("#output");
const roundsToWin = 3;


// Add click listeners and hide gamebuttons first
buttons.forEach(elem => {elem.addEventListener('click',() => selectedButton(elem.value))});
startButton.addEventListener('click',() => startGame());
gamebuttons.style.display = "none";

// definierar array av spel objecten
const sspObjects = [
    {name: "rock", wins: "scissors"},
    {name: "scissors", wins: "paper"},
    {name: "paper", wins: "rock"}
];


function startGame() {
    startButton.style.display = "none";
    roundScores.player = 0;
    roundScores.computer = 0;
    gamebuttons.style.display = "inline";
}

function selectedButton(type) {
    console.log(type);
    playerSelection = sspObjects[type];
    gameRound();
};

function gameRound() {
    computerChoice = sspObjects[Math.floor(Math.random()*(sspObjects.length-1))];
    console.log(`players choice: ${playerSelection.name}`)
    console.log(`computers choice: ${computerChoice.name}`)


    if (roundScores.player < roundsToWin && roundScores.computer < roundsToWin) {
        if (playerSelection.wins == computerChoice.name) {
            console.log("Player Won");
            roundScores.player++;
            console.log(roundScores.player);
            outputField.innerHTML = `You Won! ${playerSelection.name + " > " + computerChoice.name}`;
            checkIfWinner();
        } else if (computerChoice.wins == playerSelection.name) {
            console.log("Computer Won");
            roundScores.computer++;
            console.log(roundScores.computer);
            outputField.innerHTML = `You Lost :( ${computerChoice.name + " > " + playerSelection.name}`;
            checkIfWinner();
        } else {
            outputField.innerHTML = "Tie!";
            console.log("Tie!");
        }
    } else {
        checkIfWinner();
    }
}

function checkIfWinner() {
    if (roundScores.player >= roundsToWin) {
        startButton.style.display = "inline";
        outputField.innerHTML = `You won the game! ${roundScores.player+" : "+roundScores.computer}`;
    } else if (roundScores.computer >= roundsToWin) {
        startButton.style.display = "inline";
        outputField.innerHTML = `Computer won the game! ${roundScores.computer+" : "+roundScores.player}`;
    }
    
}