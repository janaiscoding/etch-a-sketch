// all variables
const defaultColor = '#333333';
const defaultSize = 16;
const button = document.querySelector("button");
const grid = document.querySelector(".grid");
let currentColor = defaultColor;
let currentSize = defaultSize;

//on load event https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event
window.onload = createSketchboard(defaultSize); 


// creating the og board
function createSketchboard(size){
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i ++) {
    const gridElement = document.createElement('div');
    gridElement.addEventListener("mouseover", changeColor);
    gridElement.addEventListener("mousedown",changeColor);
    gridElement.className = "grid-element";
    grid.appendChild(gridElement);
    }
}

// on click event, changing size, validating regex, creating new board
function getCurrentSize() {
    let pattern = /^\d{2}$/
    let currentSize = window.prompt("Please specify new size:");
    grid.innerHTML = '';
    if (currentSize.match(pattern)){
        createSketchboard(currentSize);
    }
    else {
        alert("Only numbers from 10 to 99 allowed.");
        createSketchboard(defaultSize);
    }
}

// erase all button, I wanted to still keep the current size but it always sets to global default... :c
function clearSketchboard() {
    grid.innerHTML = '';
    createSketchboard(defaultSize); 
}

// change color event on mouseover / mousedown
function changeColor(e){
    e.target.style.backgroundColor = currentColor;
}
