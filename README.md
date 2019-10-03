# Triple Triad Web Browser Game
This project aims to recreate the classic mini-game from Final Fantasy VIII using HTML, CSS, and vanilla Javascript.

## Overview
The current project release allows for a two-player experience where each player can choose a deck of 5 cards out of a small library. They will then be taken to a simple point-and-click interface where they may play matches of Triple Triad up until the point one is declared a winner.

The current alpha version is playable from start to finish and uses the mini-game's original ruleset without any special rules currently available.


## How to Play
Triple Triad is played by two players who take turns placing their own cards on a 3x3 grid. When a player places a card from their hand, that card will attempt to "battle" with any of the opposing player's cards already set in adjacent squares, using the card's number value that corresponds with that "side" of the card. Likewise, the opponent's cards will use their own adjacent face value.

For example, if a card is placed in a grid while the opponent has a card in the space above it, then the current player's card will use its top-side value while the opponent's card will use it's bottom-side value.

If the current player's face value is less than or equal to the face value of the opponent's card, then nothing happens. If the face value is higher than the opponent's, then the opponent's card is considered "flipped" and is now controlled by current player. Any card can be flipped any number of times in a match, so the opponent may attempt to recapture their card on a future turn.

The game is over when all 9 spaces on the board are filled.  Whoever controls more cards at that point is declared the winner. If both players control the same number of cards, the match is considered a draw and can be reset.


## Game Controls
This Triple Triad web browser game uses a simple point and click interface.

The first screen the user will see in the alpha release is the deck builder, where they may click on cards to add them to their hand of 5 cards. Buttons are provided for the ease of randomly selecting a card from the library or clearing the entire deck at once. To clear cards one at a time, simply click on the unwanted card to remove it from the player's deck. Use the provided buttons to alternate between Player One and Two, then press Start Game once both players have selected 5 cards to use.

When it is a player's turn, they may click on any of their cards and then click on an empty board space to play that card. Color outlines help denote which player's turn it is, as well as which cards on the board they currently control. Score is kept on both sides of the board and a victor is declared once all 9 board squares are filled in. In the event of a tie, the players may reset the board to try again.

## Credits
 - HTML, CSS, and Javascript code  © Drew Goodman 2019, all rights reserved
 - Game design, card graphics, and music are all owned by Square Enix Holdings Co., Ltd.

## Change Log
### [0.8.1] - 10-03-2019
#### Added
 - Corrected an oversight with the victory fanfare music
### [0.8.0] - 10-02-2019
#### Added
 - Alpha release, currently playable but lacking in some UI elements
