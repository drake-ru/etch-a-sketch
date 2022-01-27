const clearButton = document.querySelector('.reset-button');
clearButton.addEventListener('click', clearAndReset);

function clearAndReset() {
    deleteGrid();
    let gridNumber = prompt("Enter grid size: ", 100);
        if (gridNumber > 100) {
            alert("Please enter a number under 100.")
            return;
        }
    createGridDivs(gridNumber);
}

        function deleteGrid() {
            removeAllChildNodes(squaresContainer);
        }

                function removeAllChildNodes(parent) {
                    while (parent.firstChild) {
                        parent.removeChild(parent.firstChild);
                    }
                }


        const squaresContainer = document.querySelector('.squares-container');
        let manyDivs;

        function createGridDivs(gridNumber) {
            let totalGridNumber = gridNumber * gridNumber;
            for (let i = 1; i <= totalGridNumber; ++i) {
                manyDivs = document.createElement('div');
                manyDivs.classList.add('square');
                squaresContainer.appendChild(manyDivs);
                squaresContainer.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
            }

            const squares = document.querySelectorAll('.square');
            //squares is now a nodelist
                for (let i = 0; i < squares.length; ++i) {
                    squares[i].addEventListener('mouseenter', colorChange); 
                }
        }


            function colorChange(event) {
                event.target.style.backgroundColor = randomHSL();
            }

                    function randomHSL() {
                        let h = randomInt(360);
                        return `hsl(${h}, 80%, 70%)`;
                    }

                            function randomInt(max) {
                                return Math.floor(Math.random() * max);
                            }








//study: data attribute (MDN)

/*Add a button to the top of the screen 
to clear the current grid 
send the user a popup 
ask for the number of squares per side for the new grid. 
Once entered, the new grid should be generated in the same total space as before (e.g. 960px wide) 
so that you’ve got a new sketch pad. 
Tip: Set the limit for the user input to a maximum of 100. 
A larger number of squares results in more computer resources being used, potentially causing delays, freezing, or crashing that we want to prevent.
*/