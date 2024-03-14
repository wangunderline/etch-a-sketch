const container = document.querySelector("#main-container");
const gridContainer = document.querySelector("#grid-container");
const button = document.querySelector("button");

let userPrompt = 256;

function createGrid (squareNum) {
  for (let i = 0; i < squareNum; i++) {
    const grid = document.createElement("div");
    grid.classList.add('grid')
    gridContainer.appendChild(grid);

    for (let i = 0; i < squareNum; i++) {
      const square = document.createElement('div')
      square.classList.add('square')
      grid.appendChild(square)
    }
  }
}

createGrid(16)

button.addEventListener("click", () => {
  while (gridContainer.hasChildNodes()) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
  const userPrompt = prompt("The fuck?");
  createGrid(userPrompt);
});
