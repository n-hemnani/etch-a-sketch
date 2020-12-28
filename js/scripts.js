const sketchArea = document.querySelector('#sketch-area');

for (let i = 0; i < 16*16; i++) {
    const square = document.createElement('div');
    square.setAttribute('class', 'square');
    square.setAttribute('id', i.toString());
    sketchArea.appendChild(square);
}

/*
const sketchArea = document.querySelector('#sketch-area');

for (let i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.setAttribute('id', 'row');
    row.setAttribute('style', 'display: flex; flex-direction: row');
    for (let j = 0; j < 16; j++) {
        const square = document.createElement('div');
        square.setAttribute('id', i.toString() + j.toString() + " " + "square");
        console.log(square.id);
        square.setAttribute('style', 'height: 40px; width: 40px');
        square.style.border = '1px black solid';
        row.appendChild(square);
    }
    sketchArea.appendChild(row);
}
*/