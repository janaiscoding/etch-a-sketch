const currentColor = '#333333';

(function createSketchboard(){

function createOneDiv() {
    let gridElement = document.createElement('div');
    gridElement.className = "grid-element";
    gridElement.innerText = "div";
    gridElement.addEventListener("mouseover", changeColor);
    return gridElement;
}

function createAllDivs() {
    let grid = document.querySelector('.grid');
    smallDivs = [];
    for (let i = 0; i < 256; i += 1) {
        smallDivs.push(createOneDiv());
        grid.appendChild(smallDivs[i]);
      }
}
createAllDivs();
}());

function changeColor(e){
    e.target.style.backgroundColor = currentColor;
}