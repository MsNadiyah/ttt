angular
	.module("tttApp")
	.factory("GameBoard", GameBoardFunc);

function GameBoardFunc() {

	//var SPACE_STATES = ["unselected", "player1", "player2"];

	var GameBoard = function( numSpaces ) {
		this.numSpaces = numSpaces;
		//this.spaces = new Array( numSpaces );
		this.spaces = [0,0,0,0,0,0,0,0,0];

		this.turnCounter = 0; // Initialized to 0
		this.win = false;
		this.playerTurn = true;
		this.player1 = 0;
		this.player2 = 0;

		//this.toggleSpace = toggleSpace;
		//this.getSpaceState = getSpaceState;
		this.submitTurn = submitTurn;
		this.winCheck = winCheck;
		this.boardReset = boardReset;

		// The toggleSpace function will need to change in order to reflect player selections
		function submitTurn(i) {
			console.log(i);
			console.log("Inside submit turn");
			console.log("Player turn is set to " + this.playerTurn);

			if (this.win === false) {
				if (this.spaces[i] === 0) {
					if (this.playerTurn === true) {
						this.spaces[i] = 1;
						this.spaces[i].innerHTML = "#A1DAEB"; // display an image in the box
					} else {
						this.spaces[i] = 7;
						this.spaces[i].innerHTML = "#A4CF64"; // display an image in the box
					}
					console.log(this.spaces);
					this.playerTurn = !this.playerTurn;
					// turnCounter++; // Fix the turnCounter
					this.winCheck();
				}
			}
		} // Closes the submitTurn Block

		function winCheck() {
			var winner, playAgain;

			// Check player 1 for wins
			if      (this.spaces[0] + this.spaces[1] + this.spaces[2] === 3 ) { winner = 1;}
			else if (this.spaces[3] + this.spaces[4] + this.spaces[5] === 3 ) { winner = 1;}
			else if (this.spaces[6] + this.spaces[7] + this.spaces[8] === 3 ) { winner = 1;}
			else if (this.spaces[0] + this.spaces[3] + this.spaces[6] === 3 ) { winner = 1;}
			else if (this.spaces[1] + this.spaces[4] + this.spaces[7] === 3 ) { winner = 1;}
			else if (this.spaces[2] + this.spaces[5] + this.spaces[8] === 3 ) { winner = 1;}
			else if (this.spaces[0] + this.spaces[4] + this.spaces[8] === 3 ) { winner = 1;}
			else if (this.spaces[2] + this.spaces[4] + this.spaces[6] === 3 ) { winner = 1;}

			// Check player 2 for wins
			if      (this.spaces[0] + this.spaces[1] + this.spaces[2] === 21 ) { winner = 2;}
			else if (this.spaces[3] + this.spaces[4] + this.spaces[5] === 21 ) { winner = 2;}
			else if (this.spaces[6] + this.spaces[7] + this.spaces[8] === 21 ) { winner = 2;}
			else if (this.spaces[0] + this.spaces[3] + this.spaces[6] === 21 ) { winner = 2;}
			else if (this.spaces[1] + this.spaces[4] + this.spaces[7] === 21 ) { winner = 2;}
			else if (this.spaces[2] + this.spaces[5] + this.spaces[8] === 21 ) { winner = 2;}
			else if (this.spaces[0] + this.spaces[4] + this.spaces[8] === 21 ) { winner = 2;}
			else if (this.spaces[2] + this.spaces[4] + this.spaces[6] === 21 ) { winner = 2;}

			if (winner === 1) {
				this.player1++;
				console.log("count of player 1 wins: " + this.player1);
				this.win = true;
				// Do you want to play again??
				playAgain = confirm("Player 1 wins!!! \n\nWant to play again?");
					if (playAgain === true) { this.boardReset(); } else {}
			} else if (winner === 2) {
				this.player2++;
				this.win = true;
				// Do you want to play again??
				playAgain = confirm("Player 2 wins!!! \n\nWant to play again?");
					if (playAgain === true) { this.boardReset(); } else {}
			} else {
				this.win = false;
			}
		} // Closes the winCheck block

		function boardReset() {
			console.log("Inside Board Reset");
			this.spaces = [0,0,0,0,0,0,0,0,0];
			this.turnCounter = 0;
			this.win = false;

			// Sets a random first player
			var randomNumber = (Math.ceil(Math.random() * 2));
			if (randomNumber === 2) { this.playerTurn = true; }
				else { this.playerTurn = false; }

			return this.playerTurn;

			this.submitTurn();
		}

		for (var i = 0; i < this.spaces.length; i++) { // prevents new boxes from being added
			this.spaces[i] = 0;
		}
 	}

 	return GameBoard;

} // closes the Game Board function
