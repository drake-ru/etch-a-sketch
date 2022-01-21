const squaresContainer = document.querySelector('.squaresContainer');
let manyDivs;

function createGridDivs() {
    for (i = 1; i <= 256; ++i) {
        manyDivs = document.createElement('div');
        manyDivs.classList.add('square');
        squaresContainer.appendChild(manyDivs);
    }
}

createGridDivs();

