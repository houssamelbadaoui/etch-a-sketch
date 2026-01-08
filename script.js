const grid = document.querySelector("#container");
//create 256 divs inside the container
for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    grid.appendChild(div);
}

