angular
	.module("tttApp")
	.controller("TTTController", TTTControllerFunc);

TTTControllerFunc.$inject = ['SuperGameManager'];

function TTTControllerFunc(SuperGameManager) {
	this.gameName = "Tic Tac Toe";

	this.tttBoard = new GameBoard( 9 );
}

