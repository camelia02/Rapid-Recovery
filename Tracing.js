let bg;
let home;
let information;
let retry;
let drawnLines = [];
let attempt = 10;
let locked = false;
let image = [];

function restart(){
  attempt =11;
  score = 0;
  drawnLines.length = 0;
  setup();
}

function setup() {
  createCanvas(960, 720);
  bg = loadImage('tracing.jpg');
  home = createButton('home');
  home.position(900, 10);
  home.mousePressed(gotolink_act1);  
  information = createButton('information');
  information.position(868, 35);
  retry = createButton('retry');
  retry.position(908, 60);
  retry.mousePressed(restart);
}

function draw() {
  background(bg);
  stroke("gray");
  strokeWeight(1.5);
  push();
  noFill();
  translate(460, 360);
  rotate(0.95);
  scale(3.5);
  setLineDash([5, 5]);
  star(0, 0, 30, 70);
  pop();
  
  if(attempt > 0){
    drawnLines.forEach(drawnLine => {
      stroke("black");
      strokeWeight(9);
      line(
        drawnLine.mouseX,
        drawnLine.mouseY,
        drawnLine.pmouseX,
        drawnLine.pmouseY);
    });
    noStroke();
  }
  
  console.log(attempt);
}

function mouseReleased(){
  locked = false;
  attempt--;
}

function mouseDragged() {
  if(mouseX > 210 && mouseX < 720 && mouseY > 60 && mouseY <660){
    playing();
  }
  else{
    locked = true;
  }
}

function playing(){
  if(!locked){
    drawnLines.push({
      mouseX: mouseX,
      mouseY: mouseY,
      pmouseX: pmouseX,
      pmouseY: pmouseY,
    });
  }
}

function scores(){
  
}

function star(x, y, radius1, radius2) {
  let angle = TWO_PI / 5;
  let halfAngle = angle / 2.0;
  //rotate(PI/4);
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function setLineDash(list) {
  drawingContext.setLineDash(list);
}

function gotolink_act1(){
  window.open('https://editor.p5js.org/manas__1404/sketches/48Gid6pnb')
}
