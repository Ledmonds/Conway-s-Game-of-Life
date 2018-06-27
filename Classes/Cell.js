function Cell (_cell_state, _cell_color) {
	//Variables
	this.cell_state = _cell_state;
	this.cell_color = _cell_color;
	this.decay_value = 0;
	this.decay_color = [50,125,255];

	//Accessors
	this.setCellColor = setCellColor;
	this.setCellState = setCellState;
	this.setDecayValue = setDecayValue;
	this.setDecayColor = setDecayColor;
	this.getCellColor = getCellColor;
	this.getCellState = getCellState;
	this.getDecayValue = getDecayValue;
	this.getDecayColor = getDecayColor;
	this.modifyDecay = modifyDecay;
	
	//Settors
	function setCellState(_cell_state) {
		this.cell_state = _cell_state;
		if (this.cell_state) this.decay_value = 1;
	}
	function setCellColor(_cell_color) {this.cell_color = _cell_color}
	function setDecayValue(_decay_value) {this.decay_value = _decay_value}
	function setDecayColor(_decay_color) {this.decay_color = _decay_color}

	//Gettors
	function getCellColor() {return this.cell_color}
	function getCellState() {return this.cell_state}
	function getDecayValue() {return this.decay_value}
	function getDecayColor() {return [	this.decay_color[0],this.decay_color[1],this.decay_color[2],255*this.decay_value]}

	//Modifiers
	function modifyDecay(_decay_modifier) {this.decay *= _decay_modifier}
}