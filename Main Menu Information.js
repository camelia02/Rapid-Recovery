var pic_info;

function preload(){
  pic_info=loadImage("Information.png");
}

function setup() {
  createCanvas(960,720);
  background(52, 161, 235);
  
  //c
  home = createButton('home');
  home.position(960);
  home.position(900, 10);
  home.mousePressed(gotolink_act1); 

}

//link
//c
function gotolink_act1(){
  window.open('https://editor.p5js.org/manas__1404/sketches/48Gid6pnb')
}

function draw() {
  background(255,0,0);
  image(pic_info,0,0);
}
