var pic;

function preload(){
  pic=loadImage("Main Menu.png");
  
}


function setup() {
  createCanvas(960,720);
  background(52, 161, 235);
  button1 = createButton('Rhythm');
  button1.style('font-size', '30px');
  //button.size(90,40) - do not use this
  button1.position(590, 125);
  
  button2 = createButton('Tracing');
  button2.style('font-size', '30px');
  button2.position(650, 225);
  
  button3 = createButton('Stacking');
  button3.style('font-size', '30px');
  button3.position(700, 325);
  
  button4 = createButton('Information');
  button4.style('font-size', '30px');
  button4.position(650, 425);
  
  button5 = createButton('Exit');
  button5.style('font-size', '30px');
  button5.position(590, 525);
  
  button6= createButton("CONTACT US");
  button6.style("font-size",'25px')
  button6.position(760,660);
  
   
  button1.mousePressed(Rhythm);
  button2.mousePressed(Tracing);
  button3.mousePressed(Stacking);
  button4.mousePressed(Info);
  button5.mousePressed(exit);
  button6.mousePressed(Contact);
  
  
}

function exit(){
  window.open("https://editor.p5js.org/kgong12/full/gzQTZk_yI");
}

function draw() {
  background(255,0,0);
  image(pic,0,0);
  
}

function Info(){
  window.open("https://editor.p5js.org/manas__1404/full/jEAAbHEnD");
}

function Contact(){
  window.open("https://editor.p5js.org/manas__1404/full/WwFaLgMUa")
}

function Rhythm(){ idk=window.open("https://editor.p5js.org/camelia02/full/Bo16jSo_Z");
}

function Tracing(){
  window.open("https://editor.p5js.org/camelia02/full/98A_LKVnm");
}

function Stacking(){
  window.open("https://editor.p5js.org/kgong12/full/vx6mXN2r3");
}
