class Board {
	//Constructor
	constructor (_board_vector) {
		this.board_vector = _board_vector;
		this.cell_color = [253,95,0,255];
		this.background_color = [0,0,0,255];
		this.cell_array = [];
		this.node_size = 6;
		
		this.intCellArrayBlank();
	};


	//Gettors
	getBoardVector() {return this.board_vector;}
	getCellAtPos(_cell_vector) {return this.cell_array[_cell_vector[0]][_cell_vector[1]];}


	//Setup
	intCellArrayDynamic() {
		this.cell_array = new Array(this.board_vector[0]);
		for (var x = 0; x < this.board_vector[0]; ++x) {
			this.cell_array[x] = new Array(this.board_vector[1]);
	  		for (var y = 0; y < this.board_vector[1]; ++y) {
	  			this.cell_array[x][y] = new Cell(this.generateRandomBool());
	  		}
  		}
	}
	intCellArrayBlank() {
		this.cell_array = new Array(this.board_vector[0]);
		for (var x = 0; x < this.board_vector[0]; ++x) {
			this.cell_array[x] = new Array(this.board_vector[1]);
	  		for (var y = 0; y < this.board_vector[1]; ++y) {
	  			this.cell_array[x][y] = new Cell(false);
	  		}
  		}
	}


	//Modifiers
	getLivingCellNeighbourCount(_cell_vector) {
		var _neighbour_count = 0;

		if (this.isValidCellCoOrds([_cell_vector[0]-1,_cell_vector[1]-1])) {if (this.cell_array[_cell_vector[0]-1][_cell_vector[1]-1].getCellState()) {++_neighbour_count}}
		if (this.isValidCellCoOrds([_cell_vector[0],_cell_vector[1]-1])) {if (this.cell_array[_cell_vector[0]][_cell_vector[1]-1].getCellState()) {++_neighbour_count}}
		if (this.isValidCellCoOrds([_cell_vector[0]+1,_cell_vector[1]-1])) {if (this.cell_array[_cell_vector[0]+1][_cell_vector[1]-1].getCellState()) {++_neighbour_count}}

		if (this.isValidCellCoOrds([_cell_vector[0]-1,_cell_vector[1]])) {if (this.cell_array[_cell_vector[0]-1][_cell_vector[1]].getCellState()) {++_neighbour_count}}
		if (this.isValidCellCoOrds([_cell_vector[0]+1,_cell_vector[1]])) {if (this.cell_array[_cell_vector[0]+1][_cell_vector[1]].getCellState()) {++_neighbour_count}}

		if (this.isValidCellCoOrds([_cell_vector[0]-1,_cell_vector[1]+1])) {if (this.cell_array[_cell_vector[0]-1][_cell_vector[1]+1].getCellState()) {++_neighbour_count}}
		if (this.isValidCellCoOrds([_cell_vector[0],_cell_vector[1]+1])) {if (this.cell_array[_cell_vector[0]][_cell_vector[1]+1].getCellState()) {++_neighbour_count}}
		if (this.isValidCellCoOrds([_cell_vector[0]+1,_cell_vector[1]+1])) {if (this.cell_array[_cell_vector[0]+1][_cell_vector[1]+1].getCellState()) {++_neighbour_count}}

		return _neighbour_count;
	}


	//Checkers
	isCellWalled(_cell_vector) {return (_cell_vector[0] <= 0 || _cell_vector[1] <= 0 || _cell_vector[0] >= this.board_vector[0] || _cell_vector[1] >= this.board_vector[1]) ? true:false}
	isValidCellCoOrds(_cell_vector) {return (_cell_vector[0] < 0 || _cell_vector[1] < 0 || _cell_vector[0] > this.board_vector[0]-1 || _cell_vector[1] > this.board_vector[1]-1) ? false:true}


	//Randomisers
	generateRandomBool() {return random() >= 0.5 ? true:false}


	//Drawers
	drawBoard() {
		clear();
		background(this.background_color);
		fill(this.cell_color);

		for (var x = 0; x < this.board_vector[0]; ++x) {
			for (var y = 0; y < this.board_vector[1]; ++y) {
				if (this.cell_array[x][y].getCellState()) rect(this.node_size*x-((this.board_vector[0]/2)*this.node_size), this.node_size*y-((this.board_vector[1]/2)*this.node_size), this.node_size, this.node_size,3);
			}
		}
	}
};