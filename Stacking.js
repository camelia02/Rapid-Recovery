let bg;
let y = 0;

let coineg;
let widthc = 80;
let heightc = 20;

function setup() {
  createCanvas(960, 720);
  bg=loadImage('ttt.jpg');
  coineg1 = new Coin(285,560, widthc, heightc);
  coineg2 = new Coin(285,630, widthc, heightc);
  coineg3 = new Coin(385,560, widthc, heightc);
  coineg4 = new Coin(385,630, widthc, heightc);
  coineg5 = new Coin(485,560, widthc, heightc);
  coineg6 = new Coin(485,630, widthc, heightc);
  coineg7 = new Coin(585,560, widthc, heightc);
  coineg8 = new Coin(585,630, widthc, heightc);
  coineg9 = new Coin(685,560, widthc, heightc);
  coineg10 = new Coin(685,630, widthc, heightc);
}


function setLineDash(list) {
  drawingContext.setLineDash(list);
}

class Coin{
  constructor(x, y, w, h){
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
  }
  
  displayCoin(){
    strokeWeight(3);
    //stroke("Yellow");
    fill("yellow");
     ellipse(this.x, this.y + this.height, this.width, this.height)
    fill("yellow");
    rect(this.x - this.width/2, this.y + this.height/20, this.width, this.height);
    fill("gold");
    ellipse(this.x, this.y, this.width, this.height);
  }
}

function draw() {
  background(bg);
  coineg1.displayCoin();
  coineg2.displayCoin();
  coineg3.displayCoin();
  coineg4.displayCoin();
  coineg5.displayCoin();
  coineg6.displayCoin();
  coineg7.displayCoin();
  coineg8.displayCoin();
  coineg9.displayCoin();
  coineg10.displayCoin();

  let squarecolor = color("yellow");
  fill(squarecolor);
  stroke("green");
  strokeWeight(3);
  setLineDash([0,0])
  rect(400, 500, 170, 30);
  
  strokeWeight(5);
  stroke("red");
  setLineDash([10, 10, 10, 10]);
  line(401.5, 498, 401.5, 230, 10, 10);
  
  setLineDash([10, 10, 10, 10]);
  line(567.5, 498, 567.5, 230, 10, 10);
  
  noStroke();
  textStyle(BOLD);
  textSize(30);
  fill("white");
  text('PLACE 1 ON THE COUNTER TO BEGIN', 210, 180);
}
