// Select color input
// Select size input
const height = document.getElementById('inputHeight');
const width = document.getElementById('inputWidth');
const fullPic = document.getElementById('pixelCanvas');
const sizePicker = document.getElementById('sizePicker');
const colorPicker = document.getElementById('colorPicker');




// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener('submit', function() {
  event.preventDefault();
  fullPic.innerHTML = "";
  makeGrid();
})


function makeGrid() {
  for(var r = 0; r < height.value; r++) {
    const row = fullPic.insertRow(r);
    for(var c = 0; c < width.value; c++){
      const square = row.insertCell(c);
      square.onclick = addColor;
    }
  }
}


function addColor() {
  this.style.background = colorPicker.value;
}
