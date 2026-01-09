const grid = document.querySelector("#container");
//create 256 divs inside the container
for (let i = 0; i < 256; i++) {
  const div = document.createElement("div");
  div.classList.add("square");
  div.dataset.opacity = 0.1;
  grid.appendChild(div);
  div.addEventListener("mouseenter", () => {
    let currentOpacity = Number(div.dataset.opacity);
    if (currentOpacity < 1) {
      currentOpacity += 0.1;
      div.dataset.opacity = currentOpacity;
      div.style.opacity = currentOpacity;
    }
  });
}
//Add eventListener to the grid
const squares = document.querySelectorAll(".square");
squares.forEach((square) => {
  square.addEventListener("mouseenter", () => {
    square.style.backgroundColor = getRandomColor();
  });
});
//Helper function to get a Random color
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
// Add eventListener to the resetButton
const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", () => {
  let newSize;
  do {
    newSize = parseInt(prompt("Enter new grid size (e.g 16 for 16x16):"));
  } while (isNaN(newSize) || newSize < 1 || newSize > 100);
  grid.innerHTML = ""; //remove all children;
  //rebuild the grid
  for (let i = 0; i < newSize * newSize; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    // initial visual + memory state
    div.style.opacity = 0.1;
    div.dataset.opacity = 0.1;
    //hover logic
    div.addEventListener("mouseenter", () => {
      let currentOpacity = Number(div.dataset.opacity);
      if (currentOpacity < 1) {
        currentOpacity += 0.1;
        div.dataset.opacity = currentOpacity;
        div.style.opacity = currentOpacity;
      }
      div.style.backgroundColor = getRandomColor();
    });
    grid.appendChild(div);
  }
  grid.style.gridTemplateColums = `repeat(${newSize}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${newSize}, 1fr)`;
});
