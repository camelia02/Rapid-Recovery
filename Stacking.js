let bg;
let y = 0;
let coinStorage = [];
let coinNum = 10;

let widthc = 80;
let heightc = 20;
let numc = 0;

const points = [];
let dragPoint = null;

const numPoints = 5;
const dragRadius = 20;

function setup() {
  // background size
  createCanvas(960, 720);
  // background
  bg=loadImage('ttt.png');
  
  coineg1 = new Coin(280,485, widthc, heightc, numc);
  coineg2 = new Coin(380,485, widthc, heightc, numc);
  coineg3 = new Coin(480,485, widthc, heightc, numc);
  coineg4 = new Coin(580,485, widthc, heightc, numc);
  coineg5 = new Coin(680,485, widthc, heightc, numc);
  coineg6 = new Coin(280,565, widthc, heightc, numc);
  coineg7 = new Coin(380,565, widthc, heightc, numc);
  coineg8 = new Coin(480,565, widthc, heightc, numc);
  coineg9 = new Coin(580,565, widthc, heightc, numc);
  coineg10 = new Coin(680,565, widthc, heightc, numc);
  
  coinStorage = [coineg1, coineg2, coineg3, coineg4, coineg5, coineg6, coineg7, coineg8, coineg9, coineg10];
  
  button = createButton('home');
  button.position(960);
  button.position(900, 10);
  
  information = createButton('information');
  information.position(868, 35);
  
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
  // coin display
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
    let i = 0;
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

//mouse function

//mouse drag function

//score function
function score(){
  
}

function draw() {
  background(bg);
  // display 10 coin
  for (let i = 0; i < 10; i++) {
    coinStorage[i].displayCoin();
  }
  
  // square - platform
  let squarecolor = color("#9d9ff5");
  fill(squarecolor);
  stroke("black");
  strokeWeight(3.5);
  setLineDash([0,0])
  rect(366.5, 415, 240, 22);
  
  // dashline
  strokeWeight(4.5);
  stroke("red");
  setLineDash([10, 10, 10, 10]);
  line(445.5, 415, 445.5, 120, 10, 10);
  
  setLineDash([10, 10, 10, 10]);
  line(525.5, 415, 525.5, 120, 10, 10);
}
