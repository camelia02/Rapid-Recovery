let bg;
let home;
let button;

function setup() {
  createCanvas(960, 720);
  bg = loadImage('tracing.png');
  button = createButton('home');
  button.position(900, 10);
  button.mousePressed(gotolink_act1);  
}

function draw() {
  background(bg);
  stroke("black");
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}



function gotolink_act1(){
  window.open('https://editor.p5js.org/manas__1404/sketches/48Gid6pnb')
}
