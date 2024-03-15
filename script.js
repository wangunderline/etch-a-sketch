const container = document.querySelector("#main-container");
const gridContainer = document.querySelector("#grid-container");
const button = document.querySelector("button");

function hoverOnGrid() {
  let allSquares = document.querySelectorAll(".square");
  allSquares.forEach((square) => {
    let rgb1 = Math.floor(Math.random() * 255) + 0;
    let rgb2 = Math.floor(Math.random() * 255) + 0;
    let rgb3 = Math.floor(Math.random() * 255) + 0;
    let brightness = 100

    square.addEventListener("mouseenter", () => {
      brightness -= 10
      square.style.filter = `brightness(${brightness}%)`
      square.style.backgroundColor = `rgb(${rgb1}, ${rgb2}, ${rgb3})`;
      console.log(square.style.backgroundColor);
    });
  });
}

function createGrid(gridSize) {
  for (let i = 0; i < gridSize; i++) {
    const grid = document.createElement("div");
    grid.classList.add("grid");
    gridContainer.appendChild(grid);

    for (let j = 0; j < gridSize; j++) {
      const square = document.createElement("div");
      square.classList.add("square");
      grid.appendChild(square);
    }
  }
  hoverOnGrid();
}

createGrid(16);

button.addEventListener("click", () => {
  while (gridContainer.hasChildNodes()) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
  const userPrompt = prompt("Grid size");
  createGrid(userPrompt);
});
