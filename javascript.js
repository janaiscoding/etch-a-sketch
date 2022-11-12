// all variables
const defaultColor = '#333333';
const defaultSize = 16;
const button = document.querySelector("button");
const grid = document.querySelector(".grid");
let currentColor = defaultColor;
let currentSize = defaultSize;


// creating the og board
function createSketchboard(size){
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i ++) {
    const gridElement = document.createElement('div');
    gridElement.addEventListener("mouseover", changeColor);
    gridElement.addEventListener("mousedown",changeColor);
    gridElement.className = "grid-element";
    gridElement.innerText = "ONE";
    grid.appendChild(gridElement);
    }
}


function getCurrentSize() {
    let currentSize = window.prompt("Please specify new size:");
    grid.innerHTML = '';
    if (currentSize>50){
        alert ("Its too much! Max 50!");
        createSketchboard(defaultSize);
    }
    else if (currentSize === null) {
        createSketchboard(defaultSize);
    }
    else {
        createSketchboard(currentSize);
    }
    console.log(currentSize);
}


function clearSketchboard() {
    grid.innerHTML = '';
    if (grid.innerHTML === ''){
        createSketchboard(defaultSize);
    }
}

function changeColor(e){
    e.target.style.backgroundColor = currentColor;
}

createSketchboard(defaultSize);