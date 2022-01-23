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

const squares = document.querySelectorAll('.square');
//squares is now a nodelist

for (i = 0; i < squares.length - 1; ++i) {
    squares[i].addEventListener('mouseenter', colorChange); 
}

function colorChange(event) {
    event.target.classList.add('colored');
}
/*

*/