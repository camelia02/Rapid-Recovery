let bg;
let home;
let w;
let information;
let retry;
let cLines = [];
let wLines = [];
let target = [];
let attempt = 10;
let score = 0;
let locked = false;

//add circle,
function restart(){
  attempt =11;
  score = 0;
  drawnLines.length = 0;
  setup();
}

function setup() {
  createCanvas(960, 720);
  bg = loadImage('tracing.jpg');
  w = loadSound('wsound.wav')
  
  home = createButton('home');
  home.position(900, 10);
  home.mousePressed(gotolink_menu);  
  
  information = createButton('information');
  information.position(868, 35);
  information.mousePressed(gotolink_info);
  
  retry = createButton('retry');
  retry.position(908, 60);
  retry.mousePressed(restart);
  
 
  

}

function draw() {
  background(bg);
  stroke("black");
  stroke(1);
  strokeWeight(1);
  push();
  noFill();
  translate(460, 360);
  rotate(0.95);
  scale(3.5);
  setLineDash([5, 5]);
  star(0, 0, 30, 70);
  pop();
  
  if(attempt > 0){
    cLines.forEach(drawnLine => {
    strokeWeight(10);
    stroke("green");
    line(
      drawnLine.mouseX,
      drawnLine.mouseY,
      drawnLine.pmouseX,
      drawnLine.pmouseY);
  });
    wLines.forEach(drawnLine => {
    strokeWeight(10);
    stroke("red");
    line(
      drawnLine.mouseX,
      drawnLine.mouseY,
      drawnLine.pmouseX,
      drawnLine.pmouseY);
  });
  }

  Score();
  att();
}

function mouseReleased(){
  locked = false;
  attempt--;
  if(attempt <=0){
    locked = true;
  }
}

function mouseDragged() {
  if(mouseX > 210 && mouseX < 720 && mouseY > 60 && mouseY <660){
  playing(mouseX, mouseY);
  }
  else{
    locked = true;
  }
}

function playing(x,y){
  if(!locked){
  let l1 = distToSegment(x, y, 461, 112, 521, 275);
  let l2 = distToSegment(x, y, 521, 275, 695, 286);
  let l3 = distToSegment(x, y, 695, 286, 557, 389);
  let l4 = distToSegment(x, y, 557, 389, 603, 558);
  let l5 = distToSegment(x, y, 603, 558, 453, 461);
  let l6 = distToSegment(x, y, 453, 461, 315, 553);
  let l7 = distToSegment(x, y, 315, 553, 356, 392);
  let l8 = distToSegment(x, y, 356, 392, 226, 283);
  let l9 = distToSegment(x, y, 226, 283, 399, 273);
  let l10 = distToSegment(x, y, 399, 273, 461, 112);
  
  if(int(l1) <= 10){
    cLines.push({
    mouseX: mouseX,
    mouseY: mouseY,
    pmouseX: pmouseX,
    pmouseY: pmouseY,
  });
  }
    else if(int(l2) <= 10){
    cLines.push({
    mouseX: mouseX,
    mouseY: mouseY,
    pmouseX: pmouseX,
    pmouseY: pmouseY,
  });
  }
    else if(int(l3) <= 10){
    cLines.push({
    mouseX: mouseX,
    mouseY: mouseY,
    pmouseX: pmouseX,
    pmouseY: pmouseY,
  });
  }
    else if(int(l4) <= 10){
    cLines.push({
    mouseX: mouseX,
    mouseY: mouseY,
    pmouseX: pmouseX,
    pmouseY: pmouseY,
  });
  } 
    else if(int(l5) <= 10){
    cLines.push({
    mouseX: mouseX,
    mouseY: mouseY,
    pmouseX: pmouseX,
    pmouseY: pmouseY,
  });
  } 
    else if(int(l6) <= 10){
    cLines.push({
    mouseX: mouseX,
    mouseY: mouseY,
    pmouseX: pmouseX,
    pmouseY: pmouseY,
  });
  } 
    else if(int(l7) <= 10){
    cLines.push({
    mouseX: mouseX,
    mouseY: mouseY,
    pmouseX: pmouseX,
    pmouseY: pmouseY,
  });
  } 
    else if(int(l8) <= 10){
    cLines.push({
    mouseX: mouseX,
    mouseY: mouseY,
    pmouseX: pmouseX,
    pmouseY: pmouseY,
  });
  } 
    else if(int(l9) <= 10){
    cLines.push({
    mouseX: mouseX,
    mouseY: mouseY,
    pmouseX: pmouseX,
    pmouseY: pmouseY,
  });
  } 
    else if(int(l10) <= 10){
    cLines.push({
    mouseX: mouseX,
    mouseY: mouseY,
    pmouseX: pmouseX,
    pmouseY: pmouseY,
  });
  } 
  else{
    wLines.push({
    mouseX: mouseX,
    mouseY: mouseY,
    pmouseX: pmouseX,
    pmouseY: pmouseY,
  });
  }
    
  }
}

function end(){
  
}

//score function
function Score(){
  let scr = score;
  textSize(40);
  fill("white");
  stroke("green");
  strokeWeight(8);
  text(scr, 363, 693);
}

//Attempt function
function att(){
  let atp = attempt;
  if(attempt <=0){
    atp = 0;
  }
  textSize(40);
  fill("white");
  stroke("green");
  strokeWeight(8);
  
  text(atp, 663, 693);
}

function dist2(x1, y1, x2, y2) { return sq(x1 - x2) + sq(y1 - y2) }

function distToSegmentSquared(px, py, x1, y1, x2, y2) {
  var l2 = dist2(x1, y1, x2, y2);
  if (l2 == 0) {return dist2(px, py, x1, y1)}
  var t = ((px - x1) * (x2 - x1) + (py - y1) * (y2 - y1)) / l2;
  t = max(0, min(1, t));
  return dist2(px, py,  x1 + t * (x2 - x1), y1 + t * (y2 - y1));
}

function distToSegment(px, py, x1, y1, x2, y2) { return sqrt(distToSegmentSquared(px, py, x1, y1, x2, y2)); }


function star(x, y, radius1, radius2) {
  let angle = TWO_PI / 5;
  let halfAngle = angle / 2.0;
  
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

function gotolink_retry(){
  window.open("https://editor.p5js.org/camelia02/full/98A_LKVnm");
}

function gotolink_menu(){
  window.open('https://editor.p5js.org/manas__1404/full/48Gid6pnb')
}

function gotolink_info(){
  window.open("https://editor.p5js.org/manas__1404/full/aXWsq0nJz")
}
