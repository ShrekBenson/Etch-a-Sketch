const CANVAS = document.querySelector('.canvas');
const SQUARE = document.createElement('div');
SQUARE.classList.add('square');

function makeGrid(){
  for (let i = 0; i < 256; i++) {
    const SQUARE = document.createElement('div');
    SQUARE.classList.add('square');
    CANVAS.appendChild(SQUARE);
  }
  const SQUARES = CANVAS.querySelectorAll('.square');
  SQUARES.forEach(square => {
    square.addEventListener('mousedown', () => {
      square.style.cssText = 'background-color: black;'
    })
  })
}
makeGrid();