// Creating the Game Manager which clears out all static variables and resets the board once a game is finished

angular
	.module("tttApp")
	.factory("GameManager", GameManagerFunc);

	// The game manager will keep track of the players, plays and wins

	GameManagerFunc.$inject = ["GameBoard", "GamePlay"];

	// Function to randomly select who goes first

	document.onclick = GameManagerFunc();

	function GameManagerFunc(GameBoard, GamePlay) {
		var self = this;

		// self.playerTurn = pickFirstPlayer();
		// self.win = false;
		self.playerTurn = ""; 
		self.turnCounter = 0;
		GameBoard = ["","","","","","","","",""];
		self.win = false;
		self.playerTurn = ""; 
		self.turnCounter = 0;

		// Checks for players

		// Clears the playerMoves array
		self.playerMoves = ["", "", "", "", "", "", "", "", ""];

		// Sets the first player
		function pickFirstPlayer() {
			
			var randomNumber = (Math.ceil(Math.random() * 2));
			var playerTurn;

				if (randomNumber === 1) {
					playerTurn = true;
				} else {
					playerTurn = false;
				}

			return playerTurn;
			turnCounter(); 
		}

		GamePlayFunc(); 

		// Keeps track of the turn counter & ensures that only one player can play at a time
		function playerMoveCounter() { 

			if (turnCounter % 2 === 1) { // odd number turns are player 1 turns
				playerTurn = true;
			} else { 				  // even number turns are player 2 turns
				playerTurn = false;
			}
			return playerTurn;
		}

		// Controls what happens when a player pics a space
		function submitTurn($index) {
			var spaces = document.getElementsByClassName("board-space"); // Turns the board spaces into array
			console.log("submitTurn");
			if (win === false) {
				console.log("inside win");
				if (playerMoves[$index] === "") { // if the space is blank, assign a value to the move array & place an image
					console.log("inside player move");
					if (playerTurn === true) { 
						console.log("inside player turn 1");
						playerMoves[$index] = 1; // If Player 1's turn, set the value to 1
						tttBoard[$index].innerHTML = '<img src=../images/space_marker_dexter>';
					} 
					else { 
						playerMoves[$index] = 2;  // If Player 2's turn, set the value to 7
						tttBoard[$index].innerHTML = '<img src=../images/space_marker_robodexo>';
					}
				} 
				console.log("Player move function called!");
				turnCounter++; // Increment the turn counter 	
				winCheck(); // Check to see if anyone has won the game
				console.log(turnCounter); // Verify that the turn counter is counting
			}	
				
		} // closes the playerMove function	

		function winCheck() {
			var winner, win;  

			// Check player "X" for wins
				if      (playerMoves[0], playerMoves[1], playerMoves[2] === 1 ) { winner = 1;}
				else if (playerMoves[3], playerMoves[4], playerMoves[5] === 1 ) { winner = 1;}
				else if (playerMoves[6], playerMoves[7], playerMoves[8] === 1 ) { winner = 1;}
				else if (playerMoves[0], playerMoves[3], playerMoves[6] === 1 ) { winner = 1;}
				else if (playerMoves[1], playerMoves[4], playerMoves[7] === 1 ) { winner = 1;}
				else if (playerMoves[2], playerMoves[5], playerMoves[8] === 1 ) { winner = 1;}
				else if (playerMoves[0], playerMoves[4], playerMoves[8] === 1 ) { winner = 1;}
				else if (playerMoves[2], playerMoves[4], playerMoves[6] === 1 ) { winner = 1;}

			// Check player 2 for wins
				if      (playerMoves[0], playerMoves[1], playerMoves[2] === 2 ) { winner = 2;}
				else if (playerMoves[3], playerMoves[4], playerMoves[5] === 2 ) { winner = 2;}
				else if (playerMoves[6], playerMoves[7], playerMoves[8] === 2 ) { winner = 2;}
				else if (playerMoves[0], playerMoves[3], playerMoves[6] === 2 ) { winner = 2;}
				else if (playerMoves[1], playerMoves[4], playerMoves[7] === 2 ) { winner = 2;}
				else if (playerMoves[2], playerMoves[5], playerMoves[8] === 2 ) { winner = 2;}
				else if (playerMoves[0], playerMoves[4], playerMoves[8] === 2 ) { winner = 2;}
				else if (playerMoves[2], playerMoves[4], playerMoves[6] === 2 ) { winner = 2;}

			if (winner === 1) {
				player1++; 
				win = true;
			} else if (winner === 2) {
				player2++;
				win = true;
			} else {
				win = false;
			}

			if (win === true) {
				if(confirm("Want to play again?")) {
					GameManagerFunc();
				} else {
					alert("Goodbye!"); 
				}
			}

			return win; 

		} // closes the winCheck function

	} // closes the Game Manager Function 








		 