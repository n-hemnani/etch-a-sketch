const sketchArea = document.querySelector('#sketch-area');
let n = 16;

function initSketchArea() {
    while (sketchArea.firstChild)
        sketchArea.removeChild(sketchArea.firstChild);

    sketchArea.style['grid-template-columns'] = `repeat(${n}, 1fr)`;
    
    const squarePadding = (320 / n) - 1;
    for (let i = 0; i < n*n; i++) {
        const square = document.createElement('div');
        square.setAttribute('class', 'square');
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
    if (n) {
        initSketchArea(n);
     } else {
         n = 16;
         initSketchArea();
     }
}

clearBtn = document.querySelector('#clearbtn');
clearBtn.addEventListener('click', () => clear());

let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
output.innerHTML = slider.value;
slider.addEventListener('mousemove', () => {
    n = slider.value;
    output.innerHTML = slider.value;
});
slider.addEventListener('mouseup', () => initSketchArea());