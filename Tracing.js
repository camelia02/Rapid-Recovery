let bg;
let home;
let information;
let drawnLines = [];
let attempt = 10;
let locked = false;

function setup() {
  createCanvas(960, 720);
  bg = loadImage('tracing.png');
  home = createButton('home');
  home.position(900, 10);
  home.mousePressed(gotolink_act1);  
  information = createButton('information');
  information.position(868, 35);
  
}

function draw() {
  background(bg);
  stroke("black");
  if(attempt > 0){
  drawnLines.forEach(drawnLine => {
    line(
      drawnLine.mouseX,
      drawnLine.mouseY,
      drawnLine.pmouseX,
      drawnLine.pmouseY);
  });
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

function gotolink_act1(){
  window.open('https://editor.p5js.org/manas__1404/sketches/48Gid6pnb')
}
