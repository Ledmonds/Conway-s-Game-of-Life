//Setup
function setup() {	
  	createCanvas(window.innerWidth, window.innerHeight);

	board = new Board([100,100]);
  	copy_board = new Board(board.getBoardVector());

  	board.intCellArrayDynamic();
}

function mouseMoved() { //Maps the Frame Rate speed to the relative posistion of the mouse on the x axis.
	frameRate(map(mouseX,0,window.innerWidth,5,60));
}

function windowResized() { 
	resizeCanvas(window.innerWidth,window.innerHeight);
}

function iterateBoard() { //Iterate over board looking for cells to enable and disable.
	for (var x = 0; x < board.getBoardVector()[0]; ++x) {
		for (var y = 0; y < board.getBoardVector()[1]; ++y) {
			
			//Checks neighbour living counts and enables or disbales cells based on outputs.
			var neighbour_count = board.getLivingCellNeighbourCount([x,y]);
			if (board.getCellAtPos([x,y]).getCellState() && (neighbour_count<2)) copy_board.getCellAtPos([x,y]).setCellState(false);
			else if (board.getCellAtPos([x,y]).getCellState() && (neighbour_count>3)) copy_board.getCellAtPos([x,y]).setCellState(false);
			else if (!board.getCellAtPos([x,y]).getCellState() && (neighbour_count==3)) copy_board.getCellAtPos([x,y]).setCellState(true);
			else copy_board.getCellAtPos([x,y]).setCellState(board.getCellAtPos([x,y]).getCellState());
		}
	}

	//Copyback Phase
	var temp_board = board;
	board = copy_board;
	copy_board = temp_board;
}

/*==========
Main
==========*/
function draw() {
	translate(window.innerWidth/2,window.innerHeight/2);

	//Draw Board
	iterateBoard();
	board.drawBoard();
	
}