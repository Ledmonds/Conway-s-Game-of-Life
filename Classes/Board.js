function Board (_max_x, _max_y) {
	//Variables
	this.max_x = _max_x;
	this.max_y = _max_y;
	this.cell_array = [];

	//Accessors
	this.intCellArrayStatic = intCellArrayStatic;
	this.intCellArrayDynamic = intCellArrayDynamic;
	this.intCellArrayBlank = intCellArrayBlank;
	this.getMaxX = getMaxX;
	this.getMaxY = getMaxY;
	this.getCellAtPos = getCellAtPos;
	this.getCellArray = getCellArray;
	this.isValidCellCoOrds = isValidCellCoOrds;
	this.isCellWalled = isCellWalled;
	this.getLivingCellNeighbourCount = getLivingCellNeighbourCount;

	//Instantiators
	function intCellArrayStatic() {
		this.cell_array = new Array(this.getMaxX());
		for (var x = 0; x < this.max_x; ++x) {
			this.cell_array[x] = new Array(this.getMaxY());
	  		for (var y = 0; y < this.max_y; ++y) {
	  			this.cell_array[x][y] = new Cell(true,[253,95,0]);
	  		}
  		}
	}
	function intCellArrayDynamic() {
		this.cell_array = new Array(this.getMaxX());
		for (var x = 0; x < this.max_x; ++x) {
			this.cell_array[x] = new Array(this.getMaxY());
	  		for (var y = 0; y < this.max_y; ++y) {
	  			this.cell_array[x][y] = new Cell(generateRandomBool(),[253,95,0]);
	  		}
  		}
	}
	function intCellArrayBlank() {
		this.cell_array = new Array(this.getMaxX());
		for (var x = 0; x < this.max_x; ++x) {
			this.cell_array[x] = new Array(this.getMaxY());
	  		for (var y = 0; y < this.max_y; ++y) {
	  			this.cell_array[x][y] = new Cell(false,[253,95,0]);
	  		}
  		}
	}

	//Gettors
	function getMaxX() {return this.max_x}
	function getMaxY() {return this.max_y}
	function getCellAtPos(_x, _y) {return this.cell_array[_x][_y]}
	function getCellArray() {return this.cell_array}

	//Modifiers
	function isCellWalled(_x,_y) {return (_x <= 0 || _y <= 0 || _x >= this.max_x || _y >= this.max_y) ? true:false}
	function isValidCellCoOrds(_x,_y) {return (_x < 0 || _y < 0 || _x > this.max_x-1 || _y > this.max_y-1) ? false:true}
	function getLivingCellNeighbourCount(_x,_y) {
		var _neighbour_count = 0;

		if (this.isValidCellCoOrds(_x-1,_y-1)) {if (this.cell_array[_x-1][_y-1].getCellState()) {++_neighbour_count}}
		if (this.isValidCellCoOrds(_x,_y-1)) {if (this.cell_array[_x][_y-1].getCellState()) {++_neighbour_count}}
		if (this.isValidCellCoOrds(_x+1,_y-1)) {if (this.cell_array[_x+1][_y-1].getCellState()) {++_neighbour_count}}

		if (this.isValidCellCoOrds(_x-1,_y)) {if (this.cell_array[_x-1][_y].getCellState()) {++_neighbour_count}}
		if (this.isValidCellCoOrds(_x+1,_y)) {if (this.cell_array[_x+1][_y].getCellState()) {++_neighbour_count}}

		if (this.isValidCellCoOrds(_x-1,_y+1)) {if (this.cell_array[_x-1][_y+1].getCellState()) {++_neighbour_count}}
		if (this.isValidCellCoOrds(_x,_y+1)) {if (this.cell_array[_x][_y+1].getCellState()) {++_neighbour_count}}
		if (this.isValidCellCoOrds(_x+1,_y+1)) {if (this.cell_array[_x+1][_y+1].getCellState()) {++_neighbour_count}}

		return _neighbour_count;
	}
}