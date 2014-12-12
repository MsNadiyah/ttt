angular
	.module("tttApp")
	.controller("TTTController", TTTControllerFunc);

TTTControllerFunc.$inject = ["GameBoard"];

function TTTControllerFunc(GameBoard) {
	var self = this;

	self.gameName = "Tic Tac Toe";

	self.tttBoard = new GameBoard( 9 );
}

