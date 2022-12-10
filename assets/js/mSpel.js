//Import carddeck info file
const Cards =
{
    "cardDeck": [
        { "name": "1", "county": "diamond", "svg": "diamond_1", "color": "red" },
        { "name": "2", "county": "diamond", "svg": "diamond_2", "color": "red" },
        { "name": "3", "county": "diamond", "svg": "diamond_3", "color": "red" },
        { "name": "4", "county": "diamond", "svg": "diamond_4", "color": "red" },
        { "name": "5", "county": "diamond", "svg": "diamond_5", "color": "red" },
        { "name": "6", "county": "diamond", "svg": "diamond_6", "color": "red" },
        { "name": "7", "county": "diamond", "svg": "diamond_7", "color": "red" },
        { "name": "8", "county": "diamond", "svg": "diamond_8", "color": "red" },
        { "name": "9", "county": "diamond", "svg": "diamond_9", "color": "red" },
        { "name": "10", "county": "diamond", "svg": "diamond_10", "color": "red" },
        { "name": "11", "county": "diamond", "svg": "diamond_jack", "color": "red" },
        { "name": "12", "county": "diamond", "svg": "diamond_queen", "color": "red" },
        { "name": "13", "county": "diamond", "svg": "diamond_king", "color": "red" },
        { "name": "1", "county": "heart", "svg": "heart_1", "color": "red" },
        { "name": "2", "county": "heart", "svg": "heart_2", "color": "red" },
        { "name": "3", "county": "heart", "svg": "heart_3", "color": "red" },
        { "name": "4", "county": "heart", "svg": "heart_4", "color": "red" },
        { "name": "5", "county": "heart", "svg": "heart_5", "color": "red" },
        { "name": "6", "county": "heart", "svg": "heart_6", "color": "red" },
        { "name": "7", "county": "heart", "svg": "heart_7", "color": "red" },
        { "name": "8", "county": "heart", "svg": "heart_8", "color": "red" },
        { "name": "9", "county": "heart", "svg": "heart_9", "color": "red" },
        { "name": "10", "county": "heart", "svg": "heart_10", "color": "red" },
        { "name": "11", "county": "heart", "svg": "heart_jack", "color": "red" },
        { "name": "12", "county": "heart", "svg": "heart_queen", "color": "red" },
        { "name": "13", "county": "heart", "svg": "heart_king", "color": "red" },
        { "name": "1", "county": "spade", "svg": "spade_1", "color": "black" },
        { "name": "2", "county": "spade", "svg": "spade_2", "color": "black" },
        { "name": "3", "county": "spade", "svg": "spade_3", "color": "black" },
        { "name": "4", "county": "spade", "svg": "spade_4", "color": "black" },
        { "name": "5", "county": "spade", "svg": "spade_5", "color": "black" },
        { "name": "6", "county": "spade", "svg": "spade_6", "color": "black" },
        { "name": "7", "county": "spade", "svg": "spade_7", "color": "black" },
        { "name": "8", "county": "spade", "svg": "spade_8", "color": "black" },
        { "name": "9", "county": "spade", "svg": "spade_9", "color": "black" },
        { "name": "10", "county": "spade", "svg": "spade_10", "color": "black" },
        { "name": "11", "county": "spade", "svg": "spade_jack", "color": "black" },
        { "name": "12", "county": "spade", "svg": "spade_queen", "color": "black" },
        { "name": "13", "county": "spade", "svg": "spade_king", "color": "black" },
        { "name": "1", "county": "club", "svg": "club_1", "color": "black" },
        { "name": "2", "county": "club", "svg": "club_2", "color": "black" },
        { "name": "3", "county": "club", "svg": "club_3", "color": "black" },
        { "name": "4", "county": "club", "svg": "club_4", "color": "black" },
        { "name": "5", "county": "club", "svg": "club_5", "color": "black" },
        { "name": "6", "county": "club", "svg": "club_6", "color": "black" },
        { "name": "7", "county": "club", "svg": "club_7", "color": "black" },
        { "name": "8", "county": "club", "svg": "club_8", "color": "black" },
        { "name": "9", "county": "club", "svg": "club_9", "color": "black" },
        { "name": "10", "county": "club", "svg": "club_10", "color": "black" },
        { "name": "11", "county": "club", "svg": "club_jack", "color": "black" },
        { "name": "12", "county": "club", "svg": "club_queen", "color": "black" },
        { "name": "13", "county": "club", "svg": "club_king", "color": "black" },
        { "name": "back", "county": "cover", "svg": "back", "color": "blue" }
    ]
};
//Variables
const cardsDIV = document.querySelector(".cards");
let gameBoardX = 6;
let gameBoardY = 3;
const numberOffShuffles = 10;
let flipCardBackDelay = 800;
const max = 51;
let choosenCards;
let cardSlots;
let cookieUpdated = false;
let saldo = localStorage.getItem('saldo');
const maxWrongSelectedPairs = [6, 12, 20]
let hasInitGameEnd = false;

//Game Variables
let canGuessCards = false;
let cardsFlipped = [];
let pairsTurned = 0;
let numberOffMissTries = 0;
let bet;
let gameDifficulty;

//Console Cards to console
console.log(Cards)

//Init startGame When page is loaded
window.addEventListener('load', init);


//Init startGame function
function init() {
    //Add gameStart functionalities
    const age = localStorage.getItem('usersage');
    cardsDIV.innerHTML = "";
    cardsDIV.innerHTML += `
    <div class="gameStartBox">
            <select class="difficultySelector" name="difficulty" id="difficulty-select">
                <option value="easy-difficulty">Easy</option>
                <option value="medium-difficulty">Medium</option>
                <option value="hard-difficulty">Hard</option>
            </select>
            <br>
            <br>
            <button id="starGameButton">Start Game</button>
            <p class="centerText">Your Bet: </p>
            <input type="number" id="AmountOfBet"></input> 
    </div>
    `;
    console.log(document.querySelector('.difficultySelector').value);
    document.querySelector(`#starGameButton`).addEventListener('click', () => {
        console.log(document.querySelector('.difficultySelector').value);
        saldo = localStorage.getItem('saldo');
        console.log(saldo);
        bet = document.querySelector('#AmountOfBet').value;
        console.log(bet)
        if (age != null) {
            if (bet) {
                if (bet <= parseInt(saldo) && bet > 0) {
                    if (age >= 18) initGame(document.querySelector('.difficultySelector').value);
                    else alert('You are not old enough');
                } else alert('You do not have enough money on your account, or wrong input!')
            } else alert('You have to input your bet first!')
        } else alert('You are not signed in! Return to main menu and sign in first')
    });

    saldo = localStorage.getItem('saldo');
    //Update bank information
    if (saldo == null) {
        document.querySelector('#money').innerHTML = '0'
    } else document.querySelector('#money').innerHTML = saldo + '€';

}
//Init Game
function initGame(difficulty) {
    hasInitGameEnd = false;
    //Switch difficulty off game
    if (difficulty === "easy-difficulty") {
        gameBoardX = 6;
        gameBoardY = 2;
        flipCardBackDelay = 1000;
        gameDifficulty = 'easy';
    } else if (difficulty === "medium-difficulty") {
        gameBoardX = 6;
        gameBoardY = 3;
        flipCardBackDelay = 750;
        gameDifficulty = 'medium';
    } else { //Hard
        gameBoardX = 6;
        gameBoardY = 4;
        flipCardBackDelay = 500;
        gameDifficulty = 'hard';
    }

    //Init game div array
    cardsDIV.innerHTML = ""
    for (let i = 0; i != gameBoardY; i++) {
        console.log("initGame()")
        cardsDIV.innerHTML += `<div class="BoardY" value="${i}"></div>`
        const currentY = cardsDIV.querySelectorAll(`div.BoardY`)[i]
        for (let k = 0; k != gameBoardX; k++) {
            currentY.innerHTML += `<div class="BoardX"><div class="card">
            <div class="card-front" value=""></div>
            <div class="card-back"></div>
            </div></div>`;
        }
    }

    // Save cardSlots to an Array
    cardSlots = document.querySelectorAll('.BoardX');


    //Choose randomcards out of the Deck and shuffle them
    choosenCards = chooseWhatCardsToPlay(51, (gameBoardX * gameBoardY) / 2);
    choosenCards = combineArrays(choosenCards, choosenCards);
    choosenCards = shuffleArray(choosenCards, numberOffShuffles)
    console.log(choosenCards)

    //Add svg to each cardSlot and assign a card to it
    cardSlots.forEach((elem, index) => {
        //Add backside
        elem.querySelector('.card-back').innerHTML = `<svg viewBox="-95 -130 180 250" class="playingCard" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><use href="../assets/images/svg-cards.svg#${Cards.cardDeck[52].svg}" style=" fill: ${Cards.cardDeck[52].color};" /></svg>`
        //Add frontside
        elem.querySelector('.card-front').innerHTML = `<svg viewBox="-95 -130 180 250" class="playingCard" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><use href="../assets/images/svg-cards.svg#${Cards.cardDeck[choosenCards[index]].svg}"/></svg>`
        elem.querySelector('.card-front').value = `${choosenCards[index]}`
    })

    //Add required events to each palying card
    document.querySelectorAll('.playingCard').forEach((card) => {
        card.addEventListener('mouseenter', () => playingCardHovered(card));
        card.addEventListener('mouseleave', () => playingCardNotHovered(card));
    })
    //Add click eventhandler
    document.querySelectorAll('.card').forEach((card) => {
        card.addEventListener('click', playingCardClicked, true);
    })

    //Start GameLoop
    gameLoop()
}
//Init GameEnd
function initGameEnd() {
    if (hasInitGameEnd == false) {
        hasInitGameEnd = true;
        //Check if lost bet or gained bet
        if (gameDifficulty == 'easy') {
            if (numberOffMissTries <= maxWrongSelectedPairs[0]) {
                console.log('Hurray you won!' + maxWrongSelectedPairs[0])
                addMoney(bet)
            } else {
                console.log('You lost your bet!')
                takeMoney(bet)
            }
        } else if (gameDifficulty == 'medium') {

            if (numberOffMissTries <= maxWrongSelectedPairs[1]) {
                console.log('Hurray you won!' + maxWrongSelectedPairs[1])
                addMoney(bet)
            } else {
                console.log('You lost your bet!')
                takeMoney(bet)
            }
        } else if (gameDifficulty == 'hard') {
            if (numberOffMissTries <= maxWrongSelectedPairs[2]) {
                console.log('Hurray you won!' + maxWrongSelectedPairs[2])
                addMoney(bet)
            } else {
                console.log('You lost your bet!')
                takeMoney(bet)
            }
        }

        //Add gameEnd functionalities
        cardsDIV.innerHTML = "";
        cardsDIV.innerHTML = `
<div class="gameStartBox">
    <div style="display:block; text-align:center;">
        <h2>Game Ended</h2>
        <p>
            Game ended with: ${numberOffMissTries} miss selected pairs!
        </p>
        <button class="restartButton">Restart Game</button>
    </div>
</div>
`
        document.querySelector('.restartButton').addEventListener('click', () => restartGame());
    }

}


//Random necessary functions

//Sleep function
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
//Function to choose random cards to have in game
function chooseWhatCardsToPlay(Max, Num) {
    let initalArr = Array.from(Array(Max).keys());
    let outArr = [];
    console.log(initalArr.length);
    if (Max > (Max - Num)) {
        for (let i = 0; outArr.length != Num; i++) {
            const randomNumber = Math.floor(Math.random() * (initalArr.length - 1))
            for (let l = 0; l < initalArr.length; l++) {
                if (initalArr[l] == randomNumber) {
                    const index = initalArr.indexOf(randomNumber)
                    outArr.push(randomNumber);
                    initalArr.splice(index, 1);
                }
            }
            if (i > Num) i = 0;
        }
        return outArr;
    } else return -1;
}
//Function to combine the too arrays
function combineArrays(Arr, Arr1) {
    let outArr;
    outArr = Arr1.concat(Arr);
    return outArr;
}
//Function to shuffle array elements around
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


//Event listener functions

//Card hovered function
function playingCardHovered(card) {
    if (card.parentElement.parentElement.classList.contains('flipCard') == false)
        card.classList.add("hoveredCard");
}
//Card stopped hovered function
function playingCardNotHovered(card) {
    card.classList.remove("hoveredCard");
}
//Card clicked function
function playingCardClicked(event) {
    let div;
    event.composedPath().forEach((elem) => {
        if (elem.classList != null) {
            if (elem.classList.contains('card')) {
                div = elem;
            }
        }
    })
    console.log(div);

    if (canGuessCards) {
        if (div.classList.contains('flipCard')) {
            console.log("Card already clicked")
        } else {
            div.classList.add('flipCard');
            cardsFlipped.push(div);
            console.log("Added card to array of flipped cards")
            checkFlippedCards(cardsFlipped);
        }
    }
}


//Game functionality

//Game loop function
function gameLoop() {
    console.log("gameLoop()")
    if (canGuessCards == false) {
        canGuessCards = true;
        checkFlippedCards(cardsFlipped);
    } else {
        checkFlippedCards(cardsFlipped);
    }
}
//Check if cards are a pair
async function checkFlippedCards(Arr) {
    console.log("checkFlippedCards()");
    canGuessCards = false;
    let sameCards = false;
    if (Arr.length >= 2) {
        let same = 0, numberToCompare = 0;
        for (let i = 0; i < Arr.length; i++) {
            if (i == 0) {
                numberToCompare = Arr[i].querySelector('.card-front').value;
                same++;
            } else if (numberToCompare == Arr[i].querySelector('.card-front').value) {
                same++;
            };
        };
        if (same == Arr.length) sameCards = true;
        if (sameCards == true) {
            Arr.forEach((elem) => elem.removeEventListener('click', playingCardClicked, true));
            resetFlippedCardArray();
            canGuessCards = true;
            pairsTurned++;
        } else {
            await sleep(flipCardBackDelay);
            Arr.forEach((elem) => elem.classList.remove("flipCard"));
            resetFlippedCardArray();
            numberOffMissTries++;
            canGuessCards = true;
        };
    } else canGuessCards = true;
    checkIfGameOver();
}
//Function to check if all cards are flipped
async function checkIfGameOver() {
    await sleep(500);
    console.log("checkIfGameOver()" + pairsTurned);
    if (pairsTurned == (gameBoardX * gameBoardY) / 2) {
        console.log("Game Won" + pairsTurned);
        initGameEnd();
        updateCookie();
    }

}
//Function to reset flipped card array
function resetFlippedCardArray() {
    cardsFlipped = [];
}
//Restart game
function restartGame() {
    console.log("restartGame()")
    //Reset all variables
    gameBoardX = 6;
    gameBoardY = 3;
    flipCardBackDelay = 800;
    cardsFlipped = [];
    canGuessCards = false;
    pairsTurned = 0;
    numberOffMissTries = 0;
    cardSlots = [];
    choosenCards = [];
    cookieUpdated = false;
    bet = 0;
    gameDifficulty = null;

    init();
}
//Function för att updatera spel gånger cookie 
function updateCookie() {
    if (cookieUpdated == false) {
        cookieUpdated = true;
        //Läs in nuvarande värde
        let score = geSaldo("timesPlayed");
        let d = new Date();
        d.setTime(d.getTime() + (60 * 24 * 60 * 60 * 1000));
        score++;
        document.cookie = `timesPlayed = ${score}; expires=${d} ;path=/`
        console.log(score);
    }
}
function geSaldo(saldo) {
    let namn = saldo + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(namn) == 0) {
            return c.substring(namn.length, c.length);
        }
    }
    return "";
}
//Close Game
function closeGame() {
    console.log('closeGame()');
    //Reset all variables
    gameBoardX = 6;
    gameBoardY = 3;
    flipCardBackDelay = 800;
    cardsFlipped = [];
    canGuessCards = false;
    pairsTurned = 0;
    numberOffMissTries = 0;
    cardSlots = [];
    choosenCards = [];
    cookieUpdated = false;
    bet = 0;
    gameDifficulty = null;

    init();
}