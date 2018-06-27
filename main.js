/*==========
Global Variables
==========*/
//#include Cell.js, Board.js;
var node_size = 8;

/*==========
Arbitary Helper Functions
==========*/
function generateRandomBool() {return random() >= 0.5 ? true:false}
function generate() {
	for (var x = 0; x < board.getMaxX(); ++x) {
		for (var y = 0; y < board.getMaxY(); ++y) {
			//Cell Rules Phase
			var neighbour_count = board.getLivingCellNeighbourCount(x,y);

			if (board.getCellAtPos(x,y).getCellState() && (neighbour_count<2)) copy_board.getCellAtPos(x,y).setCellState(false);
			else if (board.getCellAtPos(x,y).getCellState() && (neighbour_count>3)) copy_board.getCellAtPos(x,y).setCellState(false);
			else if (!board.getCellAtPos(x,y).getCellState() && (neighbour_count==3)) copy_board.getCellAtPos(x,y).setCellState(true);
			else copy_board.getCellAtPos(x,y).setCellState(board.getCellAtPos(x,y).getCellState());
		}
	}

	//Copyback Phase
	var temp = board;
	board = copy_board;
	copy_board = temp;
}

/*==========
Setup
==========*/
function setup() {
	
  	createCanvas(window.innerWidth, window.innerHeight);

	board = new Board(floor(window.innerWidth/node_size),floor(window.innerHeight/node_size));
  	copy_board = new Board(floor(window.innerWidth/node_size),floor(window.innerHeight/node_size));

  	board.intCellArrayDynamic();
  	copy_board.intCellArrayBlank();}

/*==========
Main
==========*/
function draw() {

	//Scene Setup Phase
	clear();
	translate(width/2,height/2);
	background(0);
	noStroke();

	if (mouseIsPressed && (floor(mouseX/node_size)>=0 && floor(mouseX/node_size)<board.getMaxX()) && (floor(mouseY/node_size)>=0 && floor(mouseY/node_size)<board.getMaxY())) {
		board.getCellAtPos(floor(mouseX/node_size),floor(mouseY/node_size)).setCellState(true);
	}

	//Drawing Phase
	for (var x = 0; x < board.getMaxX(); ++x) {
		for (var y = 0; y < board.getMaxY(); ++y) {
			if (board.getCellAtPos(x,y).getCellState()) {
				fill(board.getCellAtPos(x,y).getCellColor())
				rect(node_size*x-window.innerWidth/2, node_size*y-window.innerHeight/2, node_size, node_size,3);
			}
		}
	}

	//Iterate Cell Generation Phase
	generate();
}