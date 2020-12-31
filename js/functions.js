// this folder holds functions for the main scripts.js file

// this function is used to create the drawing grid
export function initSketchArea(n=16) {
    // used to control whether the sketching grid is active ot not
    let active = false;
    
    // clear the current sketch area
    const sketchArea = document.querySelector('#sketch-area');
    sketchArea.innerHTML = '';

    // set the columns to n so we can get an nxn grid
    sketchArea.style['grid-template-columns'] = `repeat(${n}, 1fr)`;

    // event listeners to control when the drawing grid is active
    sketchArea.addEventListener('click', () => active = !active);

    const radioBtns = document.querySelectorAll('input[name="color"]')
    radioBtns.forEach(radioBtn => radioBtn.addEventListener('change', () => active = false));
    
    // generate the n^2 squares inside the grid
    const squarePadding = (300 / n) - 1;
    for (let i = 0; i < n*n; i++) {
        const square = document.createElement('div');
        square.className = 'square';
        square.id = '_100';
        square.style.padding = `${squarePadding}px`;
        sketchArea.appendChild(square);
    }

    // count is an object used to help with the color functions by
    // keeping count of which color to pick from the given color lists
    let count = { 
        pinks: 0,
        ocean: 0,
        earth: 0,
        rainbow: 0
    };

    // event listeners used to draw on the squares when the mouse is pointed on them
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => square.addEventListener('mouseover', () => {
        colorSquare(square, count, active) 
    }));
    squares.forEach(square => square.addEventListener('click', () => {
        if (!active)
            colorSquare(square, count, true)
    }));
}

// these four arrays contain color schemes for the
// rainbow, pinks, ocean, and earth settings
let rainbowArray = new Array ("rgb(253, 11, 59)", "rgb(255, 126, 11)", "rgb(255, 239, 11)", "rgb(26, 242, 20)", "rgb(10, 92, 255)", "rgb(173, 17, 255)");
let pinksArray = new Array ("rgb(183, 143, 203)", "rgb(203, 153, 199)", "rgb(239, 187, 205)", "rgb(255, 203, 216)", "rgb(255, 145, 174)");
let oceanArray = new Array ("rgb(141, 246, 216)", "rgb(192, 255, 255)", "rgb(78, 232, 255)", "rgb(16, 162, 212)", "rgb(0, 81, 162)", "rgb(0, 38, 85)");
let earthArray = new Array ("rgb(162, 125, 81)", "rgb(140, 197, 64)", "rgb(96, 58, 22)", "rgb(57, 180, 74)", "rgb(116, 77, 36)", "rgb(1, 104, 59)");

// select each of the radio buttons for use in colorSquare()
const blackBtn = document.querySelector('#black');
const greyscaleBtn = document.querySelector('#greyscale');
const rainbowBtn = document.querySelector('#rainbow');
const pinksBtn = document.querySelector('#pinks');
const oceanBtn = document.querySelector('#ocean');
const earthBtn = document.querySelector('#earth');
const eraserBtn = document.querySelector('#eraser');


// this function colors a square when its event listener is fired
function colorSquare(square, count, active) {
    // if the grid is not active, then don't draw anything
    if (!active) return;

    // there are 7 if-else statements depending on which color settings is selected
    if (blackBtn.checked) {
        square.style.backgroundColor = '#000000';
    } else if (greyscaleBtn.checked) {
        // this greyscale option works by taking the current color of the square,
        // and darkening it by roughly 20%
        switch (square.id.slice(1, 3)) {
            case '10':
                square.id = '_80';
                square.style.backgroundColor = 'rgb(204, 204, 204)';
                break;
            case '80':
                square.id = '_60';
                square.style.backgroundColor = 'rgb(153, 153, 153)';
                break;
            case '60':
                square.id = '_40';
                square.style.backgroundColor = 'rgb(102, 102, 102)';
                break;
            case '40':
                square.id = '_20';
                square.style.backgroundColor = 'rgb(51, 51, 51)';
                break;
            case '20':
                square.id = '_00';
                square.style.backgroundColor = 'rgb(0, 0, 0)';
                break;
            default:
                break;
        }
    } else if (earthBtn.checked) {
        square.style.backgroundColor = earthArray[++count.earth % 6];
    } else if (pinksBtn.checked) {
        square.style.backgroundColor = pinksArray[++count.pinks % 5];
    } else if (oceanBtn.checked) {
        square.style.backgroundColor = oceanArray[++count.ocean % 6];
    } else if (rainbowBtn.checked) {
        square.style.backgroundColor = rainbowArray[++count.rainbow % 6];
    } else if (eraserBtn.checked) {
        square.style.backgroundColor = '#ffffff';
    }
}