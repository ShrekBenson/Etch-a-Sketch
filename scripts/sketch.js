const SIZE = document.getElementById('size');
const OUTPUT = document.querySelector('output[name = "size-selected"]')
const CANVAS = document.querySelector('.canvas');
const SQUARE = document.createElement('div');
SQUARE.classList.add('square');

function makeGrid(size){
  let grid = size**2
  for (let i = 0; i < grid; i++) {
    const SQUARE = document.createElement('div');
    SQUARE.classList.add('square');
    CANVAS.appendChild(SQUARE);
  }
}

let down = false;
CANVAS.addEventListener('mouseup', () =>{
  down = false;
})
CANVAS.addEventListener('mouseleave', () =>{
  down = false;
})
CANVAS.addEventListener('mousedown', (e) =>{
  e.preventDefault();
  e.target.classList.add('draw');
  down = true;
})
CANVAS.addEventListener('mousemove', (e) =>{
  if (down && e.target.className !== 'canvas') {
    e.target.classList.add('draw');    
  }
})
window.addEventListener('DOMContentLoaded', () => {
  makeGrid(SIZE.value);
  
})
window.addEventListener('input', () => {
  CANVAS.innerHTML = '';
  makeGrid(SIZE.value);
  OUTPUT.textContent = `${SIZE.value}px`;
  switch (SIZE.value) {
    case 32:      
      SQUARE.style.cssText = 'width: 1rem;';
      SQUARE.style.cssText = 'height: 1rem;';
      break;
  
    default:
      SQUARE.style.cssText = 'width: 2rem;';
      SQUARE.style.cssText = 'height: 2rem;';
      break;
  }
})