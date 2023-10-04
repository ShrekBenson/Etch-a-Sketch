const SIZE = document.getElementById('size');
const OUTPUT = document.querySelector('output[name = "size-selected"]')
const COLOR = document.getElementById(`color`);
const OUTPUT_COLOR = document.querySelector('output[name = "color-selected"]');
const DARKENING = document.querySelector('#darkening');
const OUTPUT_DARKENING = document.querySelector(`output[name = "darkening-status"]`);
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
    SQUARE.style.cssText = `width: ${width}rem; height: ${height}rem;`;
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
  let color = COLOR.value
  e.target.style.backgroundColor = color;
  down = true;
})
CANVAS.addEventListener('mousemove', (e) =>{
  if (down && e.target.className !== 'canvas') {
    let color = COLOR.value;
    if (DARKENING.checked === true) {      
      e.target.style.filter = `brightness(.8)`
    } else {
      e.target.style.filter = `brightness(1)`
      e.target.style.backgroundColor = color;         
    }
  }
})

window.addEventListener('DOMContentLoaded', () => {
  makeGrid(SIZE.value);  
});

DARKENING.addEventListener('input', () => {
  if (DARKENING.checked === true) {
    OUTPUT_DARKENING.innerText = `On`    
  } else {
    OUTPUT_DARKENING.innerText = `off`
  }
});

COLOR.addEventListener('input', () => {
  OUTPUT_COLOR.textContent = `${COLOR.value}`;
});

SIZE.addEventListener('input', () => {
  CANVAS.innerHTML = '';
  makeGrid(SIZE.value);
  OUTPUT.textContent = `${SIZE.value}px`;
});

console.log(COLOR.value);