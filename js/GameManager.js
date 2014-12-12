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

		
	} // closes the Game Manager Function 








		 