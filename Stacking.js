let bg;
let coinStorage = [];
let coinNum = 10;

let widthc = 80;
let heightc = 20;
let numc = 0;

let coinX;
let coinY;
let coinMove=false;

function setup() {
  // background size
  createCanvas(960, 720);
  // background
  bg=loadImage('ttt.png');
  
  coinX = 280;
  coinY = 485;
  coineg1 = new Coin(coinX,coinY, widthc, heightc, numc);
  coinX += 100;
  coineg2 = new Coin(coinX,coinY, widthc, heightc, numc);
  coinX += 100;
  coineg3 = new Coin(coinX,coinY, widthc, heightc, numc);
  coinX += 100;
  coineg4 = new Coin(coinX,coinY, widthc, heightc, numc);
  coinX += 100;
  coineg5 = new Coin(coinX,coinY, widthc, heightc, numc);
  
  coinX = 280;
  coinY = 565;
  coineg6 = new Coin(coinX,coinY, widthc, heightc, numc);
  coinX += 100;
  coineg7 = new Coin(coinX,coinY, widthc, heightc, numc);
  coinX += 100;
  coineg8 = new Coin(coinX,coinY, widthc, heightc, numc);
  coinX += 100;
  coineg9 = new Coin(coinX,coinY, widthc, heightc, numc);
  coinX += 100;
  coineg10 = new Coin(coinX,coinY, widthc, heightc, numc);
  
  coinStorage = [coineg1, coineg2, coineg3, coineg4, coineg5, coineg6, coineg7, coineg8, coineg9, coineg10];
  
  home = createButton('home');
  home.position(960);
  home.position(900, 10);
  home.mousePressed(gotolink_act1);  
  
  information = createButton('information');
  information.position(868, 35);
  
  // retry = createButton('retry');
  // retry.position(908, 60);
}

function setLineDash(list) {
  // dashline
  drawingContext.setLineDash(list);
}

class Coin{
  constructor(x, y, w, h, n){
    this.x = x
    this.y = y;
    this.width = w;
    this.height = h;
    this.num = rNum(0, 10);
  }
  // coin display setting
  displayCoin(){
    stroke("yellow");
    strokeWeight(2);
    setLineDash([0,0]);

    fill("yellow");
    ellipse(this.x, this.y + this.height, this.width, this.height)
    fill("yellow");
    rect(this.x - this.width/2, this.y + this.height/20, this.width, this.height);
    fill("gold");
    ellipse(this.x, this.y, this.width, this.height);
    
    textSize(15);
    fill("black");
    textStyle(BOLD);
    text(this.num, this.x-4, this.y +25.5);  
  }
}

// coin random number
let numberList = [];
function rNum(min, max) {
    let n;
    for (let i = 0; i < 10; i++) {
        n = Math.floor(Math.random() * 10) + 1;
        if (! sameNum(n)) {
            numberList.push(n);
            return n;
            break;
        }
        else{
          i--;
        }
    }
}
function sameNum(n) {
    return numberList.find((e) => (e === n));
}

// mouse function
function mousePressed(){
  let d = dist(mouseX, mouseY, coinX, coinY);
  
  if(d>coinStorage){
    coinMove=true;
  }
  else{
    coinMove=false;  
  }
}

function mouseReleased(){
  coinMove = false;
}

function mouseDrag(){
  if(coinMove){
    coinX = mouseX;
    coinY = mouseY;
  }
}

// link
function gotolink_act1(){
  window.open('https://editor.p5js.org/manas__1404/sketches/48Gid6pnb')
}

function draw() {
  background(bg);
  // display 10 coin
  for (let i = 0; i < 10; i++) {
    coinStorage[i].displayCoin();
  }
  
  // square - platform
  let squarecolor = color("skyblue");
  fill(squarecolor);
  stroke("black");
  strokeWeight(5.5);
  setLineDash([0,0])
  rect(366.5, 415, 240, 22);
  
  // dashline
  strokeWeight(5.5);
  stroke("red");
  setLineDash([10, 10, 10, 10]);
  line(445.5, 412, 445.5, 120, 10, 10);
  
  setLineDash([10, 10, 10, 10]);
  line(525.5, 412, 525.5, 120, 10, 10);
}
