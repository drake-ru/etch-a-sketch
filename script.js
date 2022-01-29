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
                manyDivs.setAttribute("data-lightness", 70);
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
                event.target.dataset.lightness = Math.max(event.target.dataset.lightness - 10, 0);
                let currentLightness = event.target.dataset.lightness;
                event.target.style.backgroundColor = randomHSLandDarken(currentLightness);
            }

                    function randomHSLandDarken(lightness) {
                        let h = randomInt(360);
                        let l = lightness;
                        
                            return `hsl(${h}, 80%, ${l}%)`;
                     }

                            function randomInt(max) {
                                return Math.floor(Math.random() * max);
                            }