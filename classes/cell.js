class Cell {
	//Constructor
	constructor (_cell_state) {
		this.cell_state = _cell_state;
	}


	//Settors
	setCellState(_cell_state) {
		this.cell_state = _cell_state;
	}


	//Gettors
	getCellState() {return this.cell_state;}
};