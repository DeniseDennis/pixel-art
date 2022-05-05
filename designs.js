// Establishes readable variables for html ids
const height = document.getElementById('inputHeight');
const width = document.getElementById('inputWidth');
const fullPic = document.getElementById('pixelCanvas');
const sizePicker = document.getElementById('sizePicker');
const colorPicker = document.getElementById('colorPicker');




// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener('submit', function() {
	event.preventDefault();
	//resets canvas if one already on page
	fullPic.innerHTML = "";
	makeGrid();
})

/**
 * @desc Takes users input to create grid of squares
 * @param row - number of squares representing the height of the grid
 * @param square - number of squares representing the width of the grid
 */

function makeGrid() {
	for (var r = 0; r < height.value; r++) {
		const row = fullPic.insertRow(r);
		for (var c = 0; c < width.value; c++) {
			const square = row.insertCell(c);
			square.onclick = addColor;
		}
	}
}

// changes background of item based on color chosen by user
function addColor() {
	this.style.background = colorPicker.value;
}
