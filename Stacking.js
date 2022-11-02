let bg;
let y = 0;

let coineg;
let widthc = 80;
let heightc = 20;

function setup() {
  createCanvas(960, 720);
  bg=loadImage('ttt.jpg');
  coineg1 = new Coin(285,560, widthc, heightc, 1);
  coineg2 = new Coin(385,560, widthc, heightc, 2);
  coineg3 = new Coin(485,560, widthc, heightc, 3);
  coineg4 = new Coin(585,560, widthc, heightc, 4);
  coineg5 = new Coin(685,560, widthc, heightc, 5);
  coineg6 = new Coin(285,630, widthc, heightc, 6);
  coineg7 = new Coin(385,630, widthc, heightc, 7);
  coineg8 = new Coin(485,630, widthc, heightc, 8);
  coineg9 = new Coin(585,630, widthc, heightc, 9);
  coineg10 = new Coin(685,630, widthc, heightc, 10);
}

function setLineDash(list) {
  drawingContext.setLineDash(list);
}

class Coin{
  constructor(x, y, w, h, n){
    this.x = x
    this.y = y;
    this.width = w;
    this.height = h;
    this.num = n;
  }
  
  displayCoin(){
    //strokeWeight(1);
    //stroke("black");
    fill("yellow");
     ellipse(this.x, this.y + this.height, this.width, this.height)
    fill("yellow");
    rect(this.x - this.width/2, this.y + this.height/20, this.width, this.height);
    fill("gold");
    ellipse(this.x, this.y, this.width, this.height);
    
    textSize(15);
    fill("black");
    text(this.num, this.x-4, this.y +25.5);  }
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

  let squarecolor = color("#3a3ea1");
  fill(squarecolor);
  stroke("black");
  strokeWeight(4);
  setLineDash([0,0])
  rect(367.2, 500, 240, 18);
  
  strokeWeight(3);
  stroke("red");
  setLineDash([10, 10, 10, 10]);
  line(440.5, 498, 440.5, 230, 10, 10);
  
  setLineDash([10, 10, 10, 10]);
  line(530.5, 498, 530.5, 230, 10, 10);
  
  noStroke();
  textStyle(BOLD);
  textSize(35);
  stroke("blue");
  strokeWeight(6);
  setLineDash([0,0])
  fill("white");
  text('PLACE 1 ON THE COUNTER TO BEGIN', 180, 110);
  noStroke();
}
