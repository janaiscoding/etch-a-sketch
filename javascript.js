(function createSketchboard(){

function createOneDiv() {
    let smallDiv = document.createElement('div');
    smallDiv.className = "small-div";
    smallDiv.innerText = "div";
    return smallDiv;
}

function createAllDivs() {
    let container = document.querySelector('.container');
    myDivs = [];
    i = 0;
    numOfDivs = 256;
    for (i; i < numOfDivs; i += 1) {
        myDivs.push(createOneDiv());
        container.appendChild(myDivs[i]);
      }
}
createAllDivs();
}());