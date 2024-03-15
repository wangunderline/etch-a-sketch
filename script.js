const container = document.querySelector("#main-container");
const gridContainer = document.querySelector("#grid-container");
const button = document.querySelector("button");
const clearButton = document.querySelector("#clear-button");

function hoverOnGrid() {
  let allSquares = document.querySelectorAll(".square");
  allSquares.forEach((square) => {
    let rgb1 = Math.floor(Math.random() * 255) + 0;
    let rgb2 = Math.floor(Math.random() * 255) + 0;
    let rgb3 = Math.floor(Math.random() * 255) + 0;
    let brightness = 100;

    square.addEventListener("mouseenter", () => {
      brightness -= 10;
      square.style.filter = `brightness(${brightness}%)`;
      square.style.backgroundColor = `rgb(${rgb1}, ${rgb2}, ${rgb3})`;
      console.log(square.style.backgroundColor);
    });

    square.addEventListener('click', () => {
      square.style.backgroundColor = "white";
      square.style.filter = "brightness(100%)";
    })
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

  let userPrompt = prompt("Choose a number between 0 and 100");

  while (userPrompt > 100 || userPrompt < 0) {
    userPrompt = prompt("No! Below 100 and above 0");
  }

  while (!userPrompt) {
    userPrompt = prompt("Come on, man, just type any number");
  }

  while (isNaN(userPrompt)) {
    userPrompt = prompt("A letter, really? Did you lost your numbers?");
  }

  createGrid(userPrompt);
});

clearButton.addEventListener("click", () => {
  let allSquares = document.querySelectorAll(".square");
  allSquares.forEach((square) => {
    square.style.backgroundColor = "white";
    square.style.filter = "brightness(100%)";
  });
});
