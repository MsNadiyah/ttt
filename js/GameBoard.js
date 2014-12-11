angular
	.module("tttApp")
	.factory("GameBoard", GameBoardFunc);

function GameBoardFunc() {

	var SPACE_STATES = ["unselected", "player1", "player2"];

	var GameBoard = function( numSpaces ) {
		this.numSpaces = numSpaces;
		this.spaces = new Array( numSpaces );
		this.turnCounter = 0; // Initialized to 0

		this.togglePace = togglePace;
		this.getSpaceState = getSpaceState;
	
		// The toggleSpace function will need to change in order to reflect player selections

		function togglePace( num ) {
			this.spaces[num] = (this.spaces[num] + 1) % 2; 
			this.turnCounter++; // Increments the turn counter
		}

		function getSpaceState( num ) {
			return SPACE_STATES[this.spaces[num]];
		} 
 	
		for (var i = 0; i < this.spaces.length; i++) {
			this.spaces[i] = 0;
		}
 	}

 	

 	return GameBoard;

} // closes the playerMove function	
