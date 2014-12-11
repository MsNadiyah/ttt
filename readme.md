README.md

TIC TAC TOE Pseudocoding

OBJECTIVES:
	1. Create board
	2. Create players
		- switch turns
	3. Determine winner with 3x in a row
	4. Compete on 2 different computers
		- Accept player 1
		- Wait for player 2
		- Accept player 2
		- Initiate game

OBJECTS 
	1.  Object Board (Factory)
		Attributes:
			- Element (with 9 spaces) - array with 9 spaces (getIndexByClassName)
			- Height
			- Width
		Behaviors:
			- Accept/listen for player
			- Wait for player (display waiting message)*
			- Initiate game
			- Store plays (and validate moves)
				 (- pieces have height and width)
			- Determine player turn (toggle)
			- Determine winner
			- Clear Board (return all of the values to index 0)

	2. Object Game Manager (Factory)
		Attributes: 

		Behaviors: 
			- Accept/listen for player
			- Wait for player (display waiting message)*
			- Initiate game
			- Store plays (and validate moves)
				 (- pieces have height and width)
			- Determine player turn (toggle)
			- Determine winner

	3. Object Players (2) (Factory)
		Attributes:
			- Element (x2)
			- Name
		Behaviors:
			- Enter and display name
			- Select and display object (icon/piece)
			- Place moves

	4. Object Counter (2)* (Factory)
		Attributes:
			- Element (table)
			- Height
			- Width
		Behaviors:
			- Save wins
			- Sum wins
			- Determine tournament winner

---------------------------------------------------------------------------			

Consider creating a single game object that wraps everything - good coding
	Attributes:
		- Scoreboard
	Behaviors:
		- Creates board
		- Display player moves
		- Determines winner
		- Stores wins

---------------------------------------------------------------------------

Next Steps:
- Wireframe
- Begin HTML

