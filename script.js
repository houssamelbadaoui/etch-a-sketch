const grid = document.querySelector("#container");
const resetButton = document.querySelector("#reset");
const clearButton = document.querySelector("#clear");
const randomBtn = document.querySelector("#random");
const singleBtn = document.querySelector("#single");
const colorPicker = document.querySelector("#colorPicker");
const hoverBtn = document.querySelector("#hover");
const clickBtn = document.querySelector("#click");

let gridSize = 16;
let colorMode = "random"; // "random" | "single"
let interactionMode = "hover";

/* ---------- Helper ---------- */
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

/* ---------- Grid Creation ---------- */
function createGrid(size) {
  grid.innerHTML = "";
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    // initial state
    square.style.opacity = 0.1;
    square.dataset.opacity = 0.1;
    square.style.backgroundColor = "black";

    square.addEventListener("mouseenter", () => {
      if (interactionMode !== "hover") return;
      let currentOpacity = Number(square.dataset.opacity);
      if (currentOpacity < 1) {
        currentOpacity += 0.1;
        square.dataset.opacity = currentOpacity;
        square.style.opacity = currentOpacity;
      }

      if (colorMode === "random") {
        square.style.backgroundColor = getRandomColor();
      } else {
        square.style.backgroundColor = colorPicker.value;
      }
    });
    square.addEventListener("click", () => {
      if (interactionMode !== "click") return;
      let currentOpacity = Number(square.dataset.opacity);
      if (currentOpacity < 1) {
        currentOpacity += 0.1;
        square.dataset.opacity = currentOpacity;
        square.style.opacity = currentOpacity;
      }

      if (colorMode === "random") {
        square.style.backgroundColor = getRandomColor();
      } else {
        square.style.backgroundColor = colorPicker.value;
      }
    });

    grid.appendChild(square);
  }
}

/* ---------- Buttons ---------- */

// Reset grid (rebuild)
resetButton.addEventListener("click", () => {
  let newSize;
  do {
    newSize = parseInt(prompt("Enter new grid size (1–100):"));
  } while (isNaN(newSize) || newSize < 1 || newSize > 100);

  gridSize = newSize;
  createGrid(gridSize);
});

// Clear colors (keep grid)
clearButton.addEventListener("click", () => {
  const squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.style.backgroundColor = "black";
    square.style.opacity = 0.1;
    square.dataset.opacity = 0.1;
  });
});
function clearGridColors() {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.style.backgroundColor = "black";
    square.style.opacity = 0.1;
    square.dataset.opacity = 0.1;
  });
}

// Color mode buttons
randomBtn.addEventListener("click", () => {
  colorMode = "random";
  clearGridColors();
});

singleBtn.addEventListener("click", () => {
  colorMode = "single";
  clearGridColors();
});

/* ---------- Initial Load ---------- */
createGrid(gridSize);

// Add logic to hover and click buttons
hoverBtn.addEventListener("click", () => {
  interactionMode = "hover";
});
clickBtn.addEventListener("click", () => {
  interactionMode = "click";
});
