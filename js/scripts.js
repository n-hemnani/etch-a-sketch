const sketchArea = document.querySelector('#sketch-area');
const n = null;

function initSketchArea(n=16) {
    while (sketchArea.firstChild)
        sketchArea.removeChild(sketchArea.firstChild);

    sketchArea.style['grid-template-columns'] = `repeat(${n}, 1fr)`;
    
    const squarePadding = (320 / n) - 1;
    for (let i = 0; i < n*n; i++) {
        const square = document.createElement('div');
        square.setAttribute('class', 'square');
        square.setAttribute('id', i.toString());
        square.style.padding = `${squarePadding}px`;
        sketchArea.appendChild(square);
    }
    
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => square.addEventListener('mouseover', squareHover));
}

initSketchArea();

function squareHover(e) {
    console.log(e.target.id);
    e.target.style.backgroundColor = '#000000';
}

function clear() {
    n ? initSketchArea(n) : initSketchArea();
}

clearBtn = document.querySelector('#clearbtn');
clearBtn.addEventListener('click', () => clear());

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;
slider.addEventListener('mousemove', () => output.innerHTML = slider.value);
slider.addEventListener('mouseup', () => initSketchArea(slider.value));