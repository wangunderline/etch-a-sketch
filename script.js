const container = document.querySelector("#main-container");
const gridContainer = document.querySelector("#grid-container");
const button = document.querySelector("button");

function createGrid (gridSize) {
  for (let i = 0; i < gridSize; i++) {
    const grid = document.createElement("div");
    grid.classList.add('grid')
    gridContainer.appendChild(grid);

    for (let j = 0; j < gridSize; j++) {
      const square = document.createElement('div')
      square.classList.add('square')
      grid.appendChild(square)
    }
  }
  let allSquares = document.querySelectorAll('.square')
  allSquares.forEach((square) => {
    square.addEventListener('mouseenter', () => {
      square.style.filter = 'drop-shadow(5px 5px 15px red)'
      square.style.backgroundColor = 'red'
    })
  })
}

createGrid(16)

button.addEventListener("click", () => {
  while (gridContainer.hasChildNodes()) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
  const userPrompt = prompt("Grid size");
  createGrid(userPrompt);
});

