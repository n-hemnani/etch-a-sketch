import { initSketchArea } from './functions.js';

initSketchArea();

const slider = document.querySelector(".slider");
const output = document.querySelector("#n");
slider.addEventListener('mousemove', () => output.innerHTML = slider.value);
slider.addEventListener('mouseup', () => initSketchArea(slider.value));

const clearBtn = document.querySelector('#clearbtn');
clearBtn.addEventListener('click', () => initSketchArea(slider.value))