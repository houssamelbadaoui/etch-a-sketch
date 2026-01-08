const grid = document.querySelector("#container");
//create 256 divs inside the container
for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    grid.appendChild(div);
}
//Add eventListener to the grid
const squares = document.querySelectorAll(".square");
squares.forEach(square => {
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
    let newSize = parseInt(prompt("Enter new grid size (e.g 16 for 16x16):"));
    grid.innerHTML = ""; //remove all children;
    //rebuild the grid
    for (let i = 0; i < newSize * newSize; i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        div.addEventListener("mouseenter", () => {
            div.style.backgroundColor = getRandomColor();
        });
        grid.appendChild(div);
    }
    grid.style.gridTemplateColums = `repeat(${newSize}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${newSize}, 1fr)`;
});
