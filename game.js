// TRIPLE TRIAD JAVASCRIPT GAME
// © Drew Goodman 2019

const cardData = [

    // ELEMENTS: Thunder, Fire, Water, Earth, Ice, Wind, Poison
    // LEVEL 1
    { name: "Geezard", art: "geezard", up: 1, left: 5, down: 1, right: 4, level: 1 },
    { name: "Funguar", art: "funguar", up: 5, left: 3, down: 1, right: 1, level: 1 },
    { name: "Bite Bug", art: "bitebug", up: 1, left: 5, down: 3, right: 3, level: 1 },
    { name: "Red Bat", art: "redbat", up: 6, left: 2, down: 1, right: 1, level: 1 },
    { name: "Blobra", art: "blobra", up: 2, left: 5, down: 1, right: 3, level: 1 },
    { name: "Gayla", art: "gayla", up: 2, left: 4, down: 4, right: 1, level: 1, element: "thunder" },
    // LEVEL 2
    // LEVEL 3
    // LEVEL 4
    { name: "T-Rexaur", art: "trexaur", up: 4, left: 7, down: 2, right: 6, level: 4 },
    // LEVEL 5
    { name: "Iron Giant", art: "irongiant", up: 6, left: 5, down: 6, right: 5, level: 5 },
    { name: "Behemoth", art: "behemoth", up: 3, left: 7, down: 5, right: 6, level: 5 },
    // LEVEL 6
    // LEVEL 7
    { name: "Jumbo Cactuar", art: "jumbocactuar", up: 8, left: 4, down: 4, right: 8, level: 7 },
    // LEVEL 8
    { name: "Chubby Chocobo", art: "chubbychocobo", up: 4, left: 9, down: 8, right: 4, level: 8 },
    { name: "Angelo", art: "angelo", up: 9, left: 3, down: 7, right: 6, level: 8 },
    { name: "Gilgamesh", art: "gilgamesh", up: 3, left: 6, down: 9, right: 7, level: 8 },
    { name: "Mini Mog", art: "minimog", up: 9, left: 2, down: 9, right: 3, level: 8 },
    { name: "Chicobo", art: "chicobo", up: 9, left: 4, down: 8, right: 4, level: 8 },
    { name: "Quezacotl", art: "quezacotl", up: 2, left: 4, down: 9, right: 9, level: 8, element: "thunder" },
    { name: "Shiva", art: "shiva", up: 6, left: 9, down: 4, right: 7, level: 8, element: "ice" },
    { name: "Ifrit", art: "ifrit", up: 9, left: 8, down: 2, right: 6, level: 8, element: "fire" },
    { name: "Siren", art: "siren", up: 8, left: 2, down: 6, right: 9, level: 8 },
    { name: "Sacred", art: "sacred", up: 5, left: 9, down: 9, right: 1, level: 8, element: "earth" },
    { name: "Minotaur", art: "minotaur", up: 9, left: 9, down: 2, right: 5, level: 8, element: "earth" },
    // LEVEL 9
    { name: "Carbuncle", art: "carbuncle", up: 8, left: 4, down: 10, right: 4, level: 9 },
    { name: "Diablos", art: "diablos", up: 5, left: 3, down: 8, right: 10, level: 9 },
    { name: "Leviathan", art: "leviathan", up: 7, left: 7, down: 1, right: 10, level: 9, element: "water" },
    { name: "Odin", art: "odin", up: 8, left: 5, down: 3, right: 10, level: 9 },
    { name: "Pandemona", art: "pandemona", up: 10, left: 7, down: 7, right: 1, level: 9, element: "wind"},
    { name: "Bahamut", art: "bahamut", up: 10, left: 6, down: 2, right: 8, level: 9 },
    // LEVEL 10
    { name: "Ward", art: "ward", up: 10, left: 8, down: 2, right: 7, level: 10 },
    { name: "Kiros", art: "kiros", up: 6, left: 10, down: 6, right: 7, level: 10 },
    { name: "Laguna", art: "laguna", up: 5, left: 9, down: 3, right: 10, level: 10 },
    { name: "Selphie", art: "selphie", up: 10, left: 4, down: 6, right: 8, level: 10 },
    { name: "Quistis", art: "quistis", up: 9, left: 2, down: 10, right: 6, level: 10 },
    { name: "Irvine", art: "irvine", up: 2, left: 10, down: 9, right: 6, level: 10 },
    { name: "Zell", art: "zell", up: 8, left: 6, down: 10, right: 5, level: 10 },
    { name: "Rinoa", art: "rinoa", up: 4, left: 10, down: 2, right: 10, level: 10 },
    { name: "Edea", art: "edea", up: 10, left: 3, down: 3, right: 10, level: 10 },
    { name: "Seifer", art: "seifer", up: 6, left: 4, down: 10, right: 9, level: 10 },
    { name: "Squall", art: "squall", up: 10, left: 9, down: 6, right: 4, level: 10 }
]

const playerOne = {
    name: "Player One",
    hand: document.querySelector('.playerOne-hand'),
    deck: document.querySelector('.playerOne-deck'),
    count: document.getElementById('playerOneCount'),
    directions: document.getElementById('playerOneDirections'),
    scoreDisplay: document.querySelector('.playerOne-score'),
    turnActiveClass: 'p1-turn-active',
    cardQuery: '.p1',
    redCard: "-r",
    deckList: [],
    cards: [],
    score: 5
}

const playerTwo = {
    name: "Player Two",
    hand: document.querySelector('.playerTwo-hand'),
    deck: document.querySelector('.playerTwo-deck'),
    count: document.getElementById('playerTwoCount'),
    directions: document.getElementById('playerTwoDirections'),
    scoreDisplay: document.querySelector('.playerTwo-score'),
    turnActiveClass: 'p2-turn-active',
    cardQuery: '.p2',
    redCard: "",
    deckList: [],
    cards: [],
    score: 5
}

var turnPlayer = 0;
var turnPlayerObj;
var otherPlayerObj;

const deckBuilder = document.querySelector('.deck-building-wrapper');
const cardBank = document.querySelector('.card-display');

const btnNextPlayer = document.getElementById('next-player');
const btnPreviousPlayer = document.getElementById('previous-player');
const btnStartGame = document.getElementById('start-game');

const gameContainer = document.querySelector('.game-wrapper');
const gameBoard = document.querySelector('.game-board');
const squaresList = document.querySelectorAll('.board-square');
const playerTurnDisplay = document.getElementById('player-turn-display');

const music = document.getElementById("musicPlayer");
const musicFanfare = document.getElementById("musicVictory");

// GAMESTATES:   Choose Card, Choose Space

var stateChooseCard = true;
var stateChooseSquare = false;
var activeCard;
var activeCardId = -1;
var activeSquare;

var ruleElemental = false;
var rulePlus = false;
var ruleSame = false;
var ruleSameWall = false;
var ruleSuddenDeath = false;

var boardCards = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
var boardPlayerOwned = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
var boardElements = [-1, -1, -1, -1, -1, -1, -1, -1, -1];


function changeTurnPlayer(playerNum) {
    turnPlayer = playerNum;
    turnPlayerObj = turnPlayer === 1 ? playerOne : playerTwo;
    otherPlayerObj = turnPlayer === 1 ? playerTwo: playerOne;
}

// ON INIT
fillCardBank();
changeTurnPlayer(1);

music.loop = true;
music.volume = 0.5;
musicFanfare.volumne  = 0.4;

function stopMusic() {
    music.pause();
    musicFanfare.pause();
}

function playMusic() {
    music.play();
}

// =========================================================================DECK BUILDER CODE



function fillCardBank() {
    var i = 0;
    cardData.forEach(card => {
        const newCard = document.createElement('img');
        newCard.src = `cards/${card.art}.jpg`;
        // newCard.classList.add('');
        cardBank.appendChild(newCard);
        const cardRefIndex = i;
        newCard.addEventListener('click', () => { addCardToDeck(cardRefIndex) });
        i++;
    })
}


function addCardToDeck(cardIdx) {
    if (turnPlayerObj.deckList.length < 5) {
        var newCard = document.createElement('img');
        newCard.src = `cards/${cardData[cardIdx].art}${turnPlayerObj.redCard}.jpg`;
        newCard.classList.add('deck-card', `p${turnPlayer}-card`, "turn-player-deck-card");
        newCard.addEventListener('click', (e) => { removeCardFromDeck(cardIdx, e) })
        turnPlayerObj.deck.appendChild(newCard);
        turnPlayerObj.deckList.push(cardIdx);
        updateCardCount(turnPlayerObj.deckList.length);
    } else {
        alert("No more than 5 cards per match.");
    }
}


function removeCardFromDeck(handCardIndex, event) {
    const clickedCard = event.target;
    if (clickedCard.classList.contains('turn-player-deck-card')) {
        clickedCard.remove();
        turnPlayerObj.deckList.splice(turnPlayerObj.deckList.indexOf(handCardIndex), 1);
        updateCardCount(turnPlayerObj.deckList.length);
    }
}


function updateCardCount(newCount) {
    if (playerOne.deckList.length === 5 && playerTwo.deckList.length === 5) {
        btnStartGame.classList.remove('unavailable');
    } else {
        btnStartGame.classList.add('unavailable');
    }
    turnPlayerObj.count.textContent = `${newCount}/5`
}


function clearDeckClick() {
    if (confirm(`Are you sure you want to clear all cards, Player ${turnPlayer}?`)) {
        clearDeck();
    }
}


function clearDeck() {
    turnPlayerObj.deckList.length = 0;
    updateCardCount(turnPlayerObj.deckList.length);
    const deleteList = document.querySelectorAll(`.p${turnPlayer}-card`);
    deleteList.forEach(card => {
        card.remove();
    })

}


function randomCardAdd() {
    const maxCardIdx = cardData.length;
    var randIdx = Math.floor(Math.random() * (maxCardIdx));
    console.log(`Random of ${randIdx} from ${maxCardIdx}`);
    addCardToDeck(randIdx);
}


function nextDeckClick() {
    if (turnPlayer === 1) {
        changeTurnPlayer(2);
        btnNextPlayer.classList.add('unavailable');
        btnPreviousPlayer.classList.remove('unavailable');
        const noHoverList = document.querySelectorAll('.p1-card');
        noHoverList.forEach(card => {
            card.classList.remove('turn-player-deck-card');
        })
        const addHoverList = document.querySelectorAll('.p2-card');
        addHoverList.forEach(card => {
            card.classList.add('turn-player-deck-card');
        })
        playerTwo.directions.textContent = "Player TWO: Choose your cards";
        playerOne.directions.textContent = "";
    }
}


function previousDeckClick() {
    if (turnPlayer === 2) {
        changeTurnPlayer(1);
        btnNextPlayer.classList.remove('unavailable');
        btnPreviousPlayer.classList.add('unavailable');

        const noHoverList = document.querySelectorAll('.p2-card');
        noHoverList.forEach(card => {
            card.classList.remove('turn-player-deck-card');
        })
        const addHoverList = document.querySelectorAll('.p1-card');
        addHoverList.forEach(card => {
            card.classList.add('turn-player-deck-card');
        })
        playerOne.directions.textContent = "Player ONE: Choose your cards";
        playerTwo.directions.textContent = "";
    }
}


function startGameClick() {
    if (playerOne.deckList.length === 5 && playerTwo.deckList.length === 5) {
        if (confirm("Are you sure you wish to play with your current card selections?")) {
            playerOne.cards = playerOne.deckList;
            playerTwo.cards = playerTwo.deckList;
            music.play();
            gameStart();
        }
    } else {
        alert("Both players must choose 5 cards before continuing.");
    }
}

function debugGame() {
    playerOne.cards = [0,2,4,20,17];
    playerTwo.cards = [1,3,5,19,18];
    music.play();
    gameStart();
}

// =========================================================================GAMEPLAY CODE

function gameStart() {
    var i;
    for (i = 0; i < 9; i++) {
        const square = squaresList[i];
        const squareIdx = i;
        square.addEventListener('click', () => playToSquare(squareIdx));
        square.addEventListener('mouseover', (event) => {
            activeSquare = event.target;
            highlightSquare(squareIdx)
        });
        square.addEventListener('mouseout', () => highlightSquareOff(squareIdx));
    }
    gameContainer.classList.remove('menu-disabled');
    playerTurnDisplay.classList.remove('menu-disabled');
    deckBuilder.classList.add('menu-disabled');

    fillHand(playerOne);
    fillHand(playerTwo);

    // drawBoardSquares();

    var firstMove = Math.floor(Math.random() * 2);
    changeTurnPlayer(firstMove); // 0 = player 1, 1 = player 2

    updateScore();
    turnSequence();

}


function resetGame() {
    const deleteHandCards = document.querySelectorAll('.hand-card');
    deleteHandCards.forEach(card => card.remove());
    const deleteBoardCards = document.querySelectorAll('.board-card');
    deleteBoardCards.forEach(card => card.remove());
    squaresList.forEach(square => square.classList.remove('p1-square', 'p2-square'));

    boardCards = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
    boardPlayerOwned = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
    stateChooseCard = true;
    stateChooseSquare = false;
    playerOne.score = 5;
    playerTwo.score = 5;
    turnPlayer = 0;
    music.play();
    musicFanfare.pause();
    musicFanfare.currentTime = 0
    gameStart();
}


// function drawBoardSquares() {
//      // TODO: Figure out how to properly apply a background - padding property is necessary but also causing issues
//     const deleteSquareBackgrounds = document.querySelectorAll('.board-square-background');
//     deleteSquareBackgrounds.forEach(square => square.remove());
//     squaresList.forEach(square => {
//         let squareBackground = document.createElement("div");
//         squareBackground.className = "board-square-background";
//         square.appendChild(squareBackground);
//     })
//     // TODO: Add ability to style squares with elemental icons if optional rule enabled
// }


function fillHand(playerRef) {
    var i = 0;
    let pCardList = playerRef.cards;
    let handToFill = pCardList === playerOne.cards ? playerOne.hand : playerTwo.hand;
    let playerID = pCardList === playerOne.cards ? 1 : 2;
    pCardList.forEach(card => {
        let newCard = document.createElement('div');
        newCard.classList.add('hand-card');
        newCard.classList.add(pCardList === playerOne.cards ? 'p1' : 'p2');
        newCard.id = `p1-card${i}`;
        newCardImg = document.createElement('img');
        newCardImg.src = `cards/${cardData[card].art}${playerRef.redCard}.jpg`;
        newCard.appendChild(newCardImg);
        handToFill.appendChild(newCard);

        const cardDataRef = pCardList[i];
        const cardClickedRef = newCard;
        const cardOwnerNumber = playerID;
        newCard.addEventListener("click", () => selectPlayerCard(cardClickedRef, cardDataRef, cardOwnerNumber));
        i++
    })
}


function turnSequence() {
    if (continueGame()) {
        changeTurnPlayer(turnPlayer === 1 ? 2 : 1);
        stateChooseCard = true;
        stateChooseSquare = false;
        playerTurnDisplay.textContent = `${turnPlayerObj.name}'s Turn`;
        // Make the player's card container glow
        turnPlayerObj.hand.classList.add(turnPlayerObj.turnActiveClass);
        otherPlayerObj.hand.classList.remove(otherPlayerObj.turnActiveClass)
        enableHandHoverEffect();
    } else {
        if(playerOne.score != playerTwo.score) {
            setTimeout(function() {
                music.pause();
                musicFanfare.play();
            }, 1800);
        }

        setTimeout(function() {
            checkWinCondition();
        }, 2000);
    }
}


function enableHandHoverEffect() {
    const activeCardList = document.querySelectorAll(turnPlayerObj.cardQuery);
    const inactiveCardList = document.querySelectorAll(otherPlayerObj.cardQuery);
    activeCardList.forEach(card => { card.classList.add('card-hover-select') });
    inactiveCardList.forEach(card => { card.classList.remove('card-hover-select'); })

}


function selectPlayerCard(cardPassed, cardInfo, playerNum) {

    if (stateChooseCard && playerNum === turnPlayer) {
        if (activeCard === cardPassed) {
            // DESELECTED ACTIVE CARD
            cardPassed.classList.remove('selected');
            cardPassed.classList.add('card-hover-select');
            activeCard = null;
            stateChooseSquare = false;
        } else {
            cardPassed.classList.add('selected');
            cardPassed.classList.remove('card-hover-select');
            if (activeCard) {
                activeCard.classList.remove('selected');
                activeCard.classList.add('card-hover-select');
            }
            activeCard = cardPassed;
            activeCardId = cardInfo;
            stateChooseSquare = true;
        }
    }
}


function playToSquare(num) {
    if (stateChooseSquare && activeCard && boardCards[num] === -1) {
        boardCards[num] = activeCardId;
        boardPlayerOwned[num] = turnPlayer;
        let newCardImg = document.createElement('img');
        newCardImg.src = `cards/${cardData[activeCardId].art}${turnPlayerObj.redCard}.jpg`;
        newCardImg.id = `boardcard-${num}`;
        newCardImg.classList.add('board-card','card-placed');
        activeSquare.appendChild(newCardImg);

        activeCard.classList.add('used-card');
        setTimeout(function() {
            activeCard.classList.add('hide-used-card');
        }, 400);

        // BATTLE GOES HERE!!
        getAdjacentSquares();

        setTimeout(function() {
            colorSquares();
        }, 800);

        activeCard, activeSquare, activeCardId = null;
        turnSequence();

    }
}


function colorSquares() {
    // boardPlayerOwned
    var i = 0;
    squaresList.forEach(square => {
        square.classList.remove('p1-square', 'p2-square');
        if (boardPlayerOwned[i] === 1) {
            square.classList.add('p1-square');
        } else if (boardPlayerOwned[i] === 2) {
            square.classList.add('p2-square');
        }
        i++
    })
}


function getAdjacentSquares() {
    var x = getSquareXY(activeSquare)[0];
    var y = getSquareXY(activeSquare)[1];

    const cardAbove = compareSquareXY(x, y - 1);
    const cardBelow = compareSquareXY(x, y + 1);
    const cardLeft = compareSquareXY(x - 1, y);
    const cardRight = compareSquareXY(x + 1, y);
    
    // TODO: CODE FOR SAME & PLUS RULES TAKES PRIORITY OVER REGULAR BATTLE

    if (cardAbove != null) { doBattle(cardAbove, "above") };
    if (cardBelow != null) { doBattle(cardBelow, "below") };
    if (cardLeft != null) { doBattle(cardLeft, "left") };
    if (cardRight != null) { doBattle(cardRight, "right") };
}


function doBattle(squareIdx, position) {
    const cardIdx = boardCards[squareIdx];
    let attack = 0;
    let defense = 0;
    if (position === "above") {
        attack = cardData[activeCardId].up;
        defense = cardData[cardIdx].down;
    } else if (position === "below") {
        attack = cardData[activeCardId].down;
        defense = cardData[cardIdx].up;
    } else if (position === "left") {
        attack = cardData[activeCardId].left;
        defense = cardData[cardIdx].right;
    } else if (position === "right") {
        attack = cardData[activeCardId].right;
        defense = cardData[cardIdx].left;
    }
    if (attack > defense) {
        console.log(`${attack} beats ${defense}! | ${cardData[cardIdx].name} was flipped by ${cardData[activeCardId].name}`);
        flipCard(squareIdx, cardIdx);
        adjustScore();
    }
}


function flipCard(squareIdx, cardIdx) {
    boardPlayerOwned[squareIdx] = turnPlayer;
    const cardFlipped = document.getElementById(`boardcard-${squareIdx}`);
    // cardFlipped.src = `cards/${cardData[cardIdx].art}${turnPlayerObj.redCard}.jpg`;
    cardFlipped.classList.add('flipped-card');
    cardFlipped.classList.remove('card-placed');
    let newImgSrc = `cards/${cardData[cardIdx].art}${turnPlayerObj.redCard}.jpg`;
    setTimeout(function() {
        flipAnimation(cardFlipped,newImgSrc);
    }, 600);
}

function flipAnimation(cardToFlip, newImgSrc) {
    cardToFlip.src = newImgSrc;
    cardToFlip.classList.remove('flipped-card');

}


function compareSquareXY(compareX, compareY) {
    var i = 0;
    while (i < 9) {
        const square = squaresList[i];
        const squareIdx = i;
        var squareX = getSquareXY(square)[0];
        var squareY = getSquareXY(square)[1];
        if (squareX === compareX && squareY === compareY && boardCards[squareIdx] !== -1 && boardPlayerOwned[squareIdx] !== turnPlayer) {
            return squareIdx;
        }
        i++;
    }
    return null
}


function getSquareXY(squareToParse) {
    let coordArray = squareToParse.id.split("x");
    coordArray[0] = parseInt(coordArray[0]);
    coordArray[1] = parseInt(coordArray[1]);
    return coordArray;
}


function highlightSquare(squareNum) {
    if (stateChooseSquare && boardCards[squareNum] === -1) {
        squaresList[squareNum].classList.add('square-mouseover');
    }
}


function highlightSquareOff(squareNum) {
    squaresList[squareNum].classList.remove('square-mouseover');
}


function adjustScore() {
    turnPlayerObj.score += 1;
    otherPlayerObj.score -= 1;
    updateScore();
}


function updateScore() {
    playerOne.scoreDisplay.textContent = playerOne.score;
    playerTwo.scoreDisplay.textContent = playerTwo.score;
}


function continueGame() {
    cardsPlayed = 0;
    boardCards.forEach(card => {
        if (card != -1) { cardsPlayed++ };
    })
    if (cardsPlayed === 9) {
        return false;
    } else {
        return true;
    }
}

function checkWinCondition() {
        if (playerOne.score > playerTwo.score) {
            alert(`${playerOne.name} Wins!`);
        } else if (playerTwo.score > playerOne.score) {
            alert(`${playerTwo.name} Wins!`);
        } else {
            alert("It's a draw!");
        }
        
        if (confirm("Would you like to play another round with the same cards?")) {
            resetGame();
        }
}
