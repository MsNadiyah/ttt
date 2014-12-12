angular
	.module("tttApp")
	.controller("TTTController", TTTControllerFunc);

TTTControllerFunc.$inject = ["GameBoard"];

function TTTControllerFunc(GameBoard) {
	this.gameName = "Tic Tac Toe";

	this.tttBoard = new GameBoard( 9 );
}

