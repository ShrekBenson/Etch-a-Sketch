const SIZE = document.getElementById('size');
const OUTPUT = document.querySelector('output[name = "size-selected"]')
const CANVAS = document.querySelector('.canvas');
const SQUARE = document.createElement('div');
SQUARE.classList.add('square');

function makeGrid(size){
  let grid = size**2
  let width = 0;
  let height = 0;

  switch (grid) {
    case 32**2:      
      width = 1;
      height = 1;      
      break;
    
    case 48**2:
      width = .6666;
      height = .6666;      
      break;
    
    case 64**2:      
      width = .5;
      height = .5;      
      break;
    
    case 80**2:      
      width = .4;
      height = .4;      
      break;
    
    case 96**2:      
      width = .3334;
      height = .3334;      
      break;
    
    default:
      width = 2;
      height = 2;      
  }

  for (let i = 0; i < grid; i++) {
    const SQUARE = document.createElement('div');
    SQUARE.style.cssText = `width: ${width}rem; height: ${height}rem; border: 1px solid black`;
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
})