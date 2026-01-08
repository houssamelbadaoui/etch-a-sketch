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
