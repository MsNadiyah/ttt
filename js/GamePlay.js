angular
	.module("tttApp")
	.factory("GamePlay", GamePlayFunc);

// Game Play keeps track of what happens each time a player checks a box

GamePlayFunc.$inject = ["GameBoard"];

function GamePlayFunc() {

	var self = this;
	self.submitTurn = submitTurn;

	// self.playerTurn = pickFirstPlayer();
	
		// Keeps track of the turn counter & ensures that only one player can play at a time
		function playerMoveCounter() { 

			if (turnCounter % 2 === 1) { // odd number turns are player 1 turns
				playerTurn = true;
			} else { 				  // even number turns are player 2 turns
				playerTurn = false;
			}
			return playerTurn;
			submitTurn();
		}

		// Controls what happens when a player pics a space
		function submitTurn($index) {
			console.log("submitTurn");
			var spaces = document.getElementsByClassName("board-space"); // Turns the board spaces into array

			// Checks to see that there is no winner
			if (win === false) {
				console.log("inside win");
				// Checks to see that the box selected is empty
				if (playerMoves[$index] === "") { // if the space is blank, assign a value to the move array & place an image
					console.log("inside player move");
					// Assigns move to Player 1  or 2 and displays the correct player image
					if (playerTurn === true) { 
						console.log("inside player turn 1");
						playerMoves[$index] = 1; // If Player 1's turn, set the value to 1
						tttBoard[$index].innerhtml.bgcolor = "#A1DAEB";
						// tttBoard[$index].innerHTML = '<img src=../images/space_marker_dexter>';
					} 
					else { 
						playerMoves[$index] = 2;  // If Player 2's turn, set the value to 7
						tttBoard[$index].innerhtml.bgcolor = "#FFFFFF";
						// tttBoard[$index].innerHTML = '<img src=../images/space_marker_robodexo>';
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
				boardReset();
			} else if (winner === 2) {
				player2++;
				win = true;
				boardReset();
			} else {
				win = false;
				submitTurn(); 
			}

			if (win === true) {
				if(confirm("Want to play again?")) {
					boardReset();
				} else {
					alert("Goodbye!"); 
				}
			}

		} // closes the winCheck function

		function boardReset(){
			// What to do when a person has won the game
			if (win === true) {
				if ( winner === 1) { self.playerTurn = false; }
					else { (self.playerTurn = true); }
				// Clears the game board
				GameBoard = ["","","","","","","","",""];
				// Resets the rest of the game play variables
				self.turnCounter = 0;
				self.win = false;
				self.turnCounter = 0;
				self.playerMoves = ["", "", "", "", "", "", "", "", ""];
			}
		}

	} // closes the Game Manager Function 