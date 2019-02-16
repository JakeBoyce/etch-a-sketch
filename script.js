const container = document.querySelector(".container");
let numOfColumns = 16;
let numOfRows = 16;

container.setAttribute("style", "grid-template: repeat(" + numOfColumns + 
                        ", 1fr) / repeat(" + numOfRows + ", 1fr);");

for(let i=0; i < numOfColumns; i++) {
  for(let j=0; j < numOfRows; j++) {
    const box = document.createElement("div");
    box.setAttribute("class", "box");
    container.appendChild(box);
  }
}

const boxes = document.querySelectorAll(".box");
boxes.forEach(box => {
  box.addEventListener("mouseover", e => {
    e.target.style.background = "black";
  })
})