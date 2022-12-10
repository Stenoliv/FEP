// För att se att skriptet laddats in
console.log('ssp.js init');

// Variabler
const buttons = document.querySelectorAll('.gameButton');
const startBar = document.querySelector('#startGame');
const startButton = document.querySelector('#startGameButton')
const gamebuttons = document.querySelector('#gameField');
const betField = document.querySelector('#AmountOfBet');
let playerSelection;
let computerChoice;
let roundScores = {player: 0, computer: 0}
const outputField = document.querySelector("#output");
const roundsToWin = 3;
let saldo = parseInt(localStorage.getItem('saldo'));
let bet;


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
    
    if (betField.value < saldo && betField.value > 0) {
        startBar.style.display = "none";
        roundScores.player = 0;
        roundScores.computer = 0;
        gamebuttons.style.display = "inline";
        outputField.innerHTML = 'Output';
        bet = betField.value;
    } else alert('You do not have enough money, or wrong input!')  
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
        startBar.style.display = "flex";
        outputField.innerHTML = `You won the game! ${roundScores.player+" : "+roundScores.computer}`;
        addMoney(bet);
        gamebuttons.style.display = "none";
    } else if (roundScores.computer >= roundsToWin) {
        startBar.style.display = "flex";
        outputField.innerHTML = `Computer won the game! ${roundScores.computer+" : "+roundScores.player}`;
        takeMoney(bet);
        gamebuttons.style.display = "none";
    }
    
}

//updatera saldo box
    //Update bank information
    if (saldo == null) {
        document.querySelector('#money').innerHTML = '0'
    } else document.querySelector('#money').innerHTML = saldo + '€';


function closeGame() {
    startBar.style.display = "flex";
    outputField.innerHTML = 'Output';
    gamebuttons.style.display = "none";
}