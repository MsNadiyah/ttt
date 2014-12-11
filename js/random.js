
	var self = this;

	var moveArchive = new Array ( numSpaces );

	function playerTurnManager() { // Determines whose turn it is

		if (turnCounter % 2 = 1) { // odd number turns are player 1 turns
			playerTurn = true;
		} else { 				  // even number turns are player 2 turns
			playerTurn = false;
		}
		return playerTurn;
	}



