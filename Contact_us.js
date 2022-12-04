let bg;

function setup() {
  createCanvas(960,720);
  
  bg=loadImage("gameover (2).png");
  
  retrybtn = createButton('Retry');
  retrybtn.style('font-size', '25px');
  retrybtn.position(623, 344);
  retrybtn.size(78, 73);
  retrybtn.mousePressed(goHome);
}

function goHome(){
  window.open("https://editor.p5js.org/manas__1404/full/48Gid6pnb")
}

function draw() {
  background(bg);
}
