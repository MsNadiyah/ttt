angular
	.module("tttApp")
	.controller("TTTController", TTTControllerFunc);

function TTTControllerFunc($firebase) {
	var self = this;

	self.tttBoard = new GameBoard( 9 );

	// Creates the FB object "tttGameManager"
	var ref = new Firebase("https://dex-lab-tictactoe.firebaseio.com/tttGameManager");
	self.gameManager = $firebase(ref).$asObject(); 

	self.gameManager.spaces = [0,0,0,0,0,0,0,0,0];

	self.gameManager.turnCounter = 0; 
	self.gameManager.win = false;
	self.gameManager.playerTurn = true;
	self.gameManager.player1 = 0;
	self.gameManager.player2 = 0;
	self.gameManager.$save(); 

	self.submitTurn = submitTurn;
	self.winCheck = winCheck;
	self.boardReset = boardReset;

	// Creates the tttFirebase object on Firebase
	var ref1 = new Firebase("https://dex-lab-tictactoe.firebaseio.com/tttGameBoard");
	self.tttGameBoard = $firebase(ref1).$asArray();

	self.gameBoard.$loaded().then(GameBoard());

	function GameBoard () {
		for (var i = 0; i < 9; i++) { // loop that creates the board
			self.gameManager.$add("100");
		}
	}

		// The toggleSpace function will need to change in order to reflect player selections
		function submitTurn(i) {
			console.log("Player turn is set to " + self.playerTurn);
			console.log(self.turnCounter);

			if (self.win === false) {
				if (self.spaces[i] === 0) {
					if (self.playerTurn === true) {
						self.spaces[i] = 1;
						self.turnCounter++;
						self.spaces[i].innerHTML = "#A1DAEB"; // display an image in the box
					} else {
						self.spaces[i] = 7;
						self.turnCounter++;
						self.spaces[i].innerHTML = "#A4CF64"; // display an image in the box
					}
					self.playerTurn = !self.playerTurn;
					// turnCounter++; // Fix the turnCounter
					self.winCheck();
				}
			}
		} // Closes the submitTurn Block

		function winCheck() {
			var winner, playAgain;

			// Check player 1 for wins
			if      (self.spaces[0] + self.spaces[1] + self.spaces[2] === 3 ) { winner = 1;}
			else if (self.spaces[3] + self.spaces[4] + self.spaces[5] === 3 ) { winner = 1;}
			else if (self.spaces[6] + self.spaces[7] + self.spaces[8] === 3 ) { winner = 1;}
			else if (self.spaces[0] + self.spaces[3] + self.spaces[6] === 3 ) { winner = 1;}
			else if (self.spaces[1] + self.spaces[4] + self.spaces[7] === 3 ) { winner = 1;}
			else if (self.spaces[2] + self.spaces[5] + self.spaces[8] === 3 ) { winner = 1;}
			else if (self.spaces[0] + self.spaces[4] + self.spaces[8] === 3 ) { winner = 1;}
			else if (self.spaces[2] + self.spaces[4] + self.spaces[6] === 3 ) { winner = 1;}

			// Check player 2 for wins
			if      (self.spaces[0] + self.spaces[1] + self.spaces[2] === 21 ) { winner = 2;}
			else if (self.spaces[3] + self.spaces[4] + self.spaces[5] === 21 ) { winner = 2;}
			else if (self.spaces[6] + self.spaces[7] + self.spaces[8] === 21 ) { winner = 2;}
			else if (self.spaces[0] + self.spaces[3] + self.spaces[6] === 21 ) { winner = 2;}
			else if (self.spaces[1] + self.spaces[4] + self.spaces[7] === 21 ) { winner = 2;}
			else if (self.spaces[2] + self.spaces[5] + self.spaces[8] === 21 ) { winner = 2;}
			else if (self.spaces[0] + self.spaces[4] + self.spaces[8] === 21 ) { winner = 2;}
			else if (self.spaces[2] + self.spaces[4] + self.spaces[6] === 21 ) { winner = 2;}

			// Player 1 has won
			if (winner === 1) {
				self.player1++;
				console.log("count of player 1 wins: " + self.player1);
				self.win = true;
				// Do you want to play again??
				playAgain = confirm("Player 1 wins!!! \n\nWant to play again?");
					if (playAgain === true) { self.boardReset(); } else {}
			// Player 2 has won
			} else if (winner === 2) {
				self.player2++;
				self.win = true;
				// Do you want to play again??
				playAgain = confirm("Player 2 wins!!! \n\nWant to play again?");
					if (playAgain === true) { self.boardReset(); } else {}
			// Cats game reset function
			} else if (self.turnCounter >=9 ) {
				alert("Cats Game!  Equally matched you are... Play again!"); 
				{ self.boardReset(); } 
			} else {
				self.win = false;
			}
		} // Closes the winCheck block

		function boardReset() {
			console.log("Inside Board Reset");
			self.spaces = [0,0,0,0,0,0,0,0,0];
			self.turnCounter = 0;
			self.win = false;

			// Sets a random first player
			var randomNumber = (Math.ceil(Math.random() * 2));
			if (randomNumber === 2) { self.playerTurn = true; }
				else { self.playerTurn = false; }

			return self.playerTurn;

			self.submitTurn();
		}

}  // Closes TTTControllerFunc

