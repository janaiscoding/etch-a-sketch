(function createSketchboard(){

function createDiv() {
    let smallDiv = document.createElement('div');
    smallDiv.className = "small-div";
    smallDiv.innerText = "div";
    return smallDiv;
}

function rowDivs() {
    let container = document.querySelector('.container');
    myDivs = [];
    i = 0;
    numOfDivs = 256;
    for (i; i < numOfDivs; i += 1) {
        myDivs.push(createDiv());
        container.appendChild(myDivs[i]);
      }
    
}
rowDivs();
}());