// all variables
const defaultColor = '#333333';
const defaultSize = 32;
const defaultMode = 'default';

const sizeButton = document.querySelector(".size-input");
const defaultButton = document.querySelector(".default-color");
const eraserButton = document.querySelector(".eraser");
const clearButton = document.querySelector(".clear");
const rainbowButton = document.querySelector(".rainbow");
const grid = document.querySelector(".grid");
const colorPicker = document.querySelector(".color-picker");

let currentColor = defaultColor;
let currentSize = defaultSize;
let currentMode = defaultMode;


eraserButton.onclick = () => setCurrentMode('eraser');
rainbowButton.onclick = () => setCurrentMode('rainbow');
clearButton.onclick = () => clearSketchboard();
sizeButton.onclick = () => getCurrentSize();
defaultButton.onclick = () => setCurrentMode('default');
colorPicker.onclick = () => setCurrentMode('picker');


//on load event https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event
window.onload = () => {
     createSketchboard(defaultSize);
     activateButton(defaultMode); 
}

// creating the og board
function createSketchboard(size){
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i ++) {
    const gridElement = document.createElement('div');
    gridElement.addEventListener("mouseover", changeColor);
    gridElement.addEventListener("mousedown", changeColor);
    gridElement.className = "grid-element";
    grid.appendChild(gridElement);
    }
}

// on click event, changing size, validating regex, creating new board
function getCurrentSize() {
    let pattern = /^\d{2}$/
    let currentSize = window.prompt("Select a new canvas size (10 - 99):");
    grid.innerHTML = '';
    if (currentSize.match(pattern)){
        createSketchboard(currentSize);
    }
    else {
        alert("Only numbers from 10 to 99 allowed.");
        createSketchboard(defaultSize);
    }
}

// clear all button, I wanted to still keep the current size but it always sets to global default... :c
function clearSketchboard() {
    grid.innerHTML = '';
    createSketchboard(defaultSize); 
}

//color mode functions
function setCurrentMode(newMode) {
    activateButton(newMode);
    currentMode = newMode;
  }

// keep track of which button is pressed, just for styling purposes 
function activateButton(newMode) { 
    
     if (newMode === 'rainbow') {
        rainbowButton.classList.add('active');
        defaultButton.classList.remove('active');
        eraserButton.classList.remove('active');
    } 
    else if (newMode === 'default') {
        defaultButton.classList.add('active');
        rainbowButton.classList.remove('active');
        eraserButton.classList.remove('active');
    }
    else if (newMode === 'eraser') {
        eraserButton.classList.add('active');
        defaultButton.classList.remove('active');
        rainbowButton.classList.remove('active');
    }
    else if (newMode === 'picker') {
        eraserButton.classList.remove('active');
        defaultButton.classList.remove('active');
        rainbowButton.classList.remove('active');
    }
}
// change color event on mouseover & mousedown
let mouseDown = false; 

function setMouseDown(){
mouseDown = true; //set true if event listener mouse down is true
    }

function setMouseUp(){
    mouseDown = false; //set false if event listener mouse up is true
    }

document.body.addEventListener("mousedown", setMouseDown);
document.body.addEventListener("mouseup", setMouseUp);


// here we check which mode is active and assign the right color
function changeColor(e){
    if (e.type === 'mouseover' && !mouseDown) return  
    if (currentMode === 'default') {
    e.target.style.backgroundColor = defaultColor;
    }
    else if (currentMode === 'eraser') {
    e.target.style.backgroundColor = "#fefefe";
    }
    else if (currentMode === 'rainbow') {
        const randomR = Math.floor(Math.random() * 256)
        const randomG = Math.floor(Math.random() * 256)
        const randomB = Math.floor(Math.random() * 256)
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    }  
    else if (currentMode === 'picker') {
        e.target.style.backgroundColor = colorPicker.value;
    }
}
    

