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

    let count = { 
        pinks: 0,
        ocean: 0,
        earth: 0,
        rainbow: 0
    };
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => square.addEventListener('mouseover', function() { colorSquare(square, count) } ));
}

let rainbowArray = new Array ("rgb(253, 11, 59)", "rgb(255, 126, 11)", "rgb(255, 239, 11)", "rgb(26, 242, 20)", "rgb(10, 92, 255)", "rgb(173, 17, 255))");
let pinksArray = new Array ("rgb(183, 143, 203)", "rgb(203, 153, 199)", "rgb(239, 187, 205)", "rgb(255, 203, 216)", "rgb(255, 145, 174)");
let oceanArray = new Array ("rgb(141, 246, 216)", "rgb(192, 255, 255)", "rgb(78, 232, 255)", "rgb(16, 162, 212)", "rgb(0, 81, 162)", "rgb(0, 38, 85)");
let earthArray = new Array ("rgb(162, 125, 81)", "rgb(140, 197, 64)", "rgb(96, 58, 22)", "rgb(57, 180, 74)", "rgb(116, 77, 36)", "rgb(1, 104, 59)");


function colorSquare(square, count) {
    const blackBtn = document.querySelector('#black');
    const greyscaleBtn = document.querySelector('#greyscale');
    const rainbowBtn = document.querySelector('#rainbow');
    const pinksBtn = document.querySelector('#pinks');
    const oceanBtn = document.querySelector('#ocean');
    const earthBtn = document.querySelector('#earth')

    if (blackBtn.checked) {
        square.style.backgroundColor = '#000000';
    } else if (greyscaleBtn.checked) {
        let r = parseInt(rgb2hex(window.getComputedStyle(square).backgroundColor).slice(1, 3), 16) - 50;
        let g = parseInt(rgb2hex(window.getComputedStyle(square).backgroundColor).slice(3, 5), 16) - 50;
        let b = parseInt(rgb2hex(window.getComputedStyle(square).backgroundColor).slice(5, 7), 16) - 50;

        if (r !== g && g !== b && r !== b)
            return square.style.backgroundColor = "rgb(205, 205, 205)";
        
        square.style.backgroundColor = '#' + r.toString(16) + g.toString(16) + b.toString(16);
        if (r < 10)
            square.style.backgroundColor = '#' + '0' + r.toString(16) + '0' + g.toString(16) + '0' + b.toString(16);
    } else if (earthBtn.checked) {
        square.style.backgroundColor = earthArray[(count.earth + 1) % 6];
        count.earth += 1;
    } else if (pinksBtn.checked) {
        square.style.backgroundColor = pinksArray[(count.pinks + 1) % 5];
        count.pinks += 1;
    } else if (oceanBtn.checked) {
        square.style.backgroundColor = oceanArray[(count.ocean + 1) % 5];
        count.ocean += 1;
    } else if (rainbowBtn.checked) {
        square.style.backgroundColor = rainbowArray[(count.rainbow + 1) % 6];
        count.rainbow += 1;
    }
}

// convert rgb value to hex (function from Seth Rickard)
let hexDigits = new Array ("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"); 
function rgb2hex(rgb) {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}
function hex(x) {
    return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
}