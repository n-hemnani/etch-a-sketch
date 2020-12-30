export function initSketchArea(n=16) {
    const sketchArea = document.querySelector('#sketch-area');
    sketchArea.innerHTML = '';

    sketchArea.style['grid-template-columns'] = `repeat(${n}, 1fr)`;
    
    const squarePadding = (320 / n) - 1;
    for (let i = 0; i < n*n; i++) {
        const square = document.createElement('div');
        square.setAttribute('class', 'square');
        square.style.padding = `${squarePadding}px`;
        sketchArea.appendChild(square);
    }
    
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => square.addEventListener('mouseover', () => square.style.backgroundColor = '#000000'));
}