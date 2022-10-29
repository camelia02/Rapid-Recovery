//
//Score
let width = 960;
let height = 720;
let score = 0;

let coin


//Circle
let inDia = 80;
let outDia = 160;
let rate = 1;
let balls=[];
let font = 40;
let ms = 3000;
let inButton = false;
let onBeat = false;
let missedBeat = false;

//Background
let bg;
let b;

function preload(){
  //add bg, noise feedback, and music
  bg = loadImage('bgg1.png');
}

function setup() {
  
  createCanvas(width, height);
  createArray();
  
}

//after n second add new value to array
//dynamic array
function createArray(){
  balls[0] = new Beat(160,160, inDia, outDia, 1);
  setTimeout(() => {balls[1] = new Beat(320,320, inDia, outDia, 2);} ,ms);
  setTimeout(() => {balls[2] = new Beat(400,210, inDia, outDia, 3);} ,2*ms);
  setTimeout(() => {balls[3] = new Beat(560,370, inDia, outDia, 4);} ,3*ms);
  setTimeout(() => {balls[4] = new Beat(200,440, inDia, outDia, 5);} ,4*ms);
  setTimeout(() => {balls[5] = new Beat(540,200, inDia, outDia, 6);} ,5*ms);
  setTimeout(() => {balls[6] = new Beat(700,180, inDia, outDia, 7);} ,6*ms);
  setTimeout(() => {balls[7] = new Beat(460,530, inDia, outDia, 8);} ,7*ms);
  setTimeout(() => {balls[8] = new Beat(720,400, inDia, outDia, 9);} ,8*ms);
  setTimeout(() => {balls[9] = new Beat(270,200, inDia, outDia, 10);} ,9*ms);
}

function draw(){
    image(bg,0,0);
  
    balls.forEach(ball => {
      ball.display();
      ball.move();
      overCircle(ball);
      accurate(ball);
      missed(ball);
  });   

  achievement();
}
  
function mouseClicked() {
    if(inButton){
        if(onBeat){
        Areward();
        Breward();
      }
        else if(missedBeat){
        Breward();
        }
    }
    
}

function overCircle(b){
        const disX = b.x - mouseX;
        const disY = b.y - mouseY;
        if(sqrt(sq(disX) + sq(disY)) < inDia/2 ) {
          inButton =  true;
        } else {
          inButton = false;
        }
}

function accurate(b) {
  let dif = abs(b.ring - b.diameter);
      if((dif >= 0) && (dif <=10)){
        onBeat = true;
        } 

      else{
        onBeat =  false;
      }
   }

function missed(b){
  if(b.ring <= 2*b.diameter){
    missedBeat = true;
  }
  else{
    missedBeat = false;
  }
}


function Areward(){
    score += 3;
    console.log("button click +3");
}

function Breward(){
    score += 2;
  console.log("button click +2");
}


function achievement(){
    fill("black");
    rect(width/2 - 100,height - 100,200,60);
    fill(255);
    text("Score: " + score, width/2,height - 60);
  }


class Beat {
    constructor(xin, yin, din, doa, count) {
    this.x = xin;
    this.y = yin;
    this.diameter = din;
    this.ring = doa;
    this.count = count;
  }
     
    move(){
      if(this.ring >= 0.5*this.diameter){
      this.ring -= rate;
      }
    }
  //one ellipse
  //rectangle
  
    display() {
    //Outer circle
    noFill();
    strokeWeight(5);
    stroke(204, 0, 204);
    ellipse(this.x, this.y, this.ring - rate, this.ring - rate);
    //Inner circle
    fill("purple");
    stroke(204, 0, 204);
    ellipse(this.x, this.y, this.diameter, this.diameter);
    //Number
    fill("white");
    stroke(125, 60, 110);
    textAlign(CENTER);
    textSize(font);
    text(this.count, this.x - 1, this.y + 15);
    
  }
}
