const squaresContainer = document.querySelector('.squares-container');
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

for (i = 0; i < squares.length; ++i) {
    squares[i].addEventListener('mouseenter', colorChange); 
}

function colorChange(event) {
    event.target.style.backgroundColor = randomHSL();
}

function randomInt(max) {
    return Math.floor(Math.random() * max);
}

function randomHSL() {
    let h = randomInt(360);
    return `hsl(${h}, 80%, 70%)`;
}

//study: data attribute (MDN)