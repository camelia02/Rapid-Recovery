let path = [];
let painting = false;
let current;
let previous;

function setup() {
  createCanvas(960, 720);
}

function draw() {
 stroke("black");
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

