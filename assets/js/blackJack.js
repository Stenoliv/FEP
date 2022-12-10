//Import carddeck info file
import Cards from '../JSON/cardPack.json' assert {type: 'json'};

//Variables
const gameButtons = document.querySelector('.gameButtons');
let shuffledCards = Cards;
const shuffleTimes = 10;

window.addEventListener('load', init())

//Init functions

//initial startFunction
function init() {
    console.log("init()");
    gameButtons.innerHTML += `<button class="startButton">Start Game</button>`;
    document.querySelector('.startButton').addEventListener('click', startGame())
}

//shuffle function
function shuffleArray(Arr, Num) {
    let cI = Arr.length, randI;
    for (let i = 0; i < Num; i++) {
        while (cI != 0) {
            randI = Math.floor(Math.random() * cI);
            cI--;

            [Arr[cI], Arr[randI]] = [Arr[randI], Arr[cI]];
        }
    }
    return Arr;
}



// start game function
function startGame() {
    shuffledCards = shuffleArray(shuffledCards,shuffleTimes);
}