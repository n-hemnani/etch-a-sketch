const sketchArea = document.querySelector('#sketch-area');

function initSketchArea(n=16) {
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

function reset() {
    let n = prompt("How many squares per side do you want on the new grid?");
    while (n < 8 || n > 64)
        n = prompt("Pick a number between 8 and 64.");
    
    initSketchArea(n);
}

clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', () => {
    while (sketchArea.firstChild)
        sketchArea.removeChild(sketchArea.firstChild);
    reset();
});