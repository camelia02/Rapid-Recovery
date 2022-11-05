//
//Score
let width = 960;
let height = 720;
let score = 0;

//Circle
let inDia = 80;
let outDia = 160;
let rate = 1;
let balls=[];
let numBalls = 31;
let index = 0;
let font = 40;
let ms = 1200;
let inButton = false;
let onBeat = false;
let missedBeat = false;
let st = false;
let gm = false;

//Background
let bg;
let b;
let sickBeat;
let pl;
let cg;

function preload(){
  //add bg, noise feedback, and music
  bg = loadImage('bgg1.png');
  sickBeat = loadSound('fse100.mp3');
  pl = new Beat(480,360, inDia, inDia, "Start", balls);
  cg = loadSound('accurate.wav');

}

function setup() {
  
  createCanvas(width, height);
 
  
}

function draw(){
    image(bg,0,0);   
    let counter = 0;
  
    pl.display();
    overCircle(pl);
      if(mouseIsPressed && inButton){
      st = true; 
      pl.disappear();
      }
  
      if(gm){
        playing();
      }
      
      
  achievement();

}

//after n second add new value to array
//dynamic array
function createArray(){
  for(let i = 0; i<numBalls; i++){
    if(i > 0){
    createBeat(i);
    }
  else{
     balls[i] = new Beat(int(random(80, 880)),int(random(80, 540)), inDia, outDia, i+1, balls);
  }
  }
}

function createBeat(n){
   setTimeout(() =>{
    let cordinate = randCor();
    balls[n] = new Beat(cordinate[0],cordinate[1], inDia, outDia, n+1, balls);
   }, (n+1)*ms);
}

function randCor(){
  let x;
  let y;
  var dx;
  var dy;
  var distance;
  
  for(let i = 0; i < balls.length; i++){  
    for(let j = 0; j < balls.length; j++){
      do{
      x = int(random(80, 880));
      y  = int(random(80, 540));
      dx = abs(balls[i].x - x);
      dy = abs(balls[j].y - y);
      distance = sqrt(sq(dx) + sq(dy));
      }
      while(distance < 180);
      
    }
  }
      let coordinate = [x,y];
      return coordinate;
    }
     
function playing(){
  let delay = 1000;
  balls.forEach(ball => {
      ball.display();
      ball.move();
    setTimeout(() => {
      ball.disappear();
    }, 4*delay);
  });
}

function mouseClicked(){
  
  if(st){
    createArray();
    sickBeat.play();
    st = false;
    gm = true;
  }
  
  balls.forEach(ball => {
    
    if(ball.locked == false){
    overCircle(ball);
    accurate(ball);
    missed(ball);
    
      if(inButton){
        
          if(onBeat){
          Areward();
          Breward();
          //cg.play();
        }
          else if(missedBeat){
          Breward();
          }
        
        ball.disappear();
        ball.locked = true;
        
      }
    }
  });
  
    
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
}

function Breward(){
    score += 2;
}


function achievement(){
    fill("black");
    rect(width/2 - 100,height - 100,200,60);
    fill(255);
    textSize(font);
    text("Score: " + score, width/2,height - 60);
    
    
  
  }


class Beat {
    constructor(xin, yin, din, doa, count, oin) {
    this.x = xin;
    this.y = yin;
    this.diameter = din;
    this.ring = doa;
    this.count = count;
    this.others = oin;
    this.locked = false;
  }
     
    move(){
      if(this.ring >= 0.5*this.diameter){
      this.ring -= rate;
      }
    }
  
  
    display() {
      
  
    //Outer circle
    noFill();
    strokeWeight(5);
    stroke(204, 0, 204);
    ellipse(this.x, this.y, this.ring - rate, this.ring - rate);
    //Inner circle
    if(this.ring <= 1.1*this.diameter && this.ring >= 0.9*this.diameter){
    fill("rgba(228,107,228,0.83)");
    }
    else{
    fill("purple");
    }
    stroke(204, 0, 204);
    ellipse(this.x, this.y, this.diameter, this.diameter);
    //Number
    fill("white");
    stroke(125, 60, 110);
    textAlign(CENTER);
    textSize(font);
    text(this.count, this.x - 1, this.y + 15);
  }
  
    disappear(){
      this.x = "";
      this.y = "";
      this.ring = "";
      this.diameter = "";
      this.count = "";
    }
}
