import { initSketchArea } from './functions.js';

initSketchArea();

const slider = document.querySelector("#myRange");
const output = document.querySelector("#demo");
slider.addEventListener('mousemove', () => output.innerHTML = slider.value);
slider.addEventListener('mouseup', () => initSketchArea(slider.value));

const clearBtn = document.querySelector('#clearbtn');
clearBtn.addEventListener('click', () => initSketchArea(slider.value))