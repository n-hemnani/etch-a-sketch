import { initSketchArea } from './functions.js';

// initialize the grid (16x16 by default)
initSketchArea();

// select the slider and its onscreen value
const slider = document.querySelector(".slider");
const output = document.querySelector("#n");

// change the size value on screen for the user
slider.addEventListener('mousemove', () => output.innerHTML = slider.value);
// resize the grid with the new value
slider.addEventListener('mouseup', () => initSketchArea(slider.value));

// clear the grid
const clearBtn = document.querySelector('#clearbtn');
clearBtn.addEventListener('click', () => initSketchArea(slider.value))