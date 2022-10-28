let bg;
let y = 0;

function setup() {
  createCanvas(960, 720);
  bg=loadImage('ttt.jpg');
}

function setLineDash(list) {
  drawingContext.setLineDash(list);
}

function coin_draw(){
  
}

function draw() {
  background(bg);
  
  let squarecolor = color("yellow");
  fill(squarecolor);
  stroke("green");
  strokeWeight(3);
  setLineDash([0,0])
  rect(423, 500, 130, 20);
  
  strokeWeight(5);
  stroke("red");
  setLineDash([10, 10, 10, 10]);
  line(425, 494, 425, 230, 10, 10);
  
  setLineDash([10, 10, 10, 10]);
  line(551, 494, 551, 230, 10, 10);
  
  noStroke();
  textStyle(BOLD);
  textSize(20);
  fill("white");
  text('PLACE 1 ON THE COUNTER TO BEGIN', 313, 180);
}
