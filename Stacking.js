let bg;
let coinStorage = [];
let coinNum = 10;
let index;

let widthc = 80;
let heightc = 20;
let numc = 0;
let map = new Map();

function setup() {
  // background size
  createCanvas(960, 720);

  // background
  bg=loadImage('GGG.png');
  
  //sound
  soundFormats('wav');
  correctSound = loadSound('gsound.wav');
  incorrectSound = loadSound('wsound.wav');
  
  coinX = 280;
  coinY = 495;
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
  home.position(900, 10);
  home.mousePressed(gotolink_act1);  
  
  information = createButton('information');
  information.position(868, 35);
  information.mousePressed(gotolink_info)
  
  retry = createButton('retry');
  retry.position(908, 60);
}

class Coin{
  constructor(x, y, w, h, n){
    this.x = x
    this.y = y;
    this.width = w;
    this.height = h;
    this.num = rNum(0, 10);
    this.locked = true;
  }
  // coin display setting
  displayCoin(){
    stroke("yellow");
    strokeWeight(2);
    setLineDash([0,0]);
    
    fill("yellow");
    ellipse(this.x, this.y + this.height, this.width, this.height);
  
    rect(this.x - this.width/2, this.y + this.height/20, this.width, this.height);
    stroke("gray");

    fill("gold");
    ellipse(this.x, this.y, this.width, this.height);
    
    textSize(15);
    fill("black");
    textStyle(BOLD);
    text(this.num, this.x-4, this.y +25.5);  
  }
}

//coin random number
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

function mousePressed(){
    // let index=0;
  // for(let i=0; i<coinStorage.length; i++){
  //   let d = dist(mouseX, mouseY, coinStorage[i].x, coinStorage[i].y);
  //   if(d<50){
  //     index = i;
  //   }
  // }
  // coinStorage[index].x = mouseX;
  // coinStorage[index].y = mouseY;
  
  for(let i=0; i<coinStorage.length; i++){
    let d = dist(mouseX, mouseY, coinStorage[i].x, coinStorage[i].y);
    if(d<50){
      coinStorage[i].locked = false;
      index = i;
      console.log(i);
    }
    else{
      coinStorage[i].locked = true;
    }
  }
}

function mouseReleased(){
  coinStorage[index].locked = true;
}

//*****mouse function
function mouseDragged(){  
    coinStorage.forEach(coin => {
    if(!coin.locked){
      coin.x = mouseX;
      coin.y = mouseY;
    }
  });
  
}

//*****if coin is in correct place
function correctPlace(){
  correctSound.play();
}

//*****if coin is in incorrect place
function incorrectPlace(){
  incorrectSound.play();
}

//score function
function score(){
  let scr = 0;
  textSize(46);
  fill("white");
  stroke("black");
  strokeWeight(2.5);
  text(scr, 527, 673);
}

//color change
function colorChange(){
  for(let i=0; i<coinStorage.length; i++){
    if(coinStorage[i].correctPlace){
      fill("#7cdebf");
    }
    else if(coinStorage[i].incorrectPlace){
      fill("#e02d5a");
    }
  }
  
}

//restart
function restart(){
  
}

function setLineDash(list) {
  // dashline
  drawingContext.setLineDash(list);
}

let reX;
let reY;
let reW;
let reH;

//square box to place the coin
function sqToPutIn(){
  fill("black");
  stroke("gray");
  strokeWeight(3.5);
  
  //1~5
  reX = 330;
  reY = 140;
  reW = 110;
  reH = 48.5;
  
  map.set(rect(reX,reY,reW,reH), 1);
  map.set(rect(reX,reY+63,reW,reH), 2);
  map.set(rect(reX,reY+126,reW,reH), 3);
  map.set(rect(reX,reY+189,reW,reH), 4);
  map.set(rect(reX,reY+252,reW,reH), 5);
  
  //6~10
  reX = 625;
  reY = 140;
  reW = 110;
  reH = 48.5;
  
  map.set(rect(reX,reY,reW,reH), 6);
  map.set(rect(reX,reY+63,reW,reH), 7);
  map.set(rect(reX,reY+126,reW,reH), 8);
  map.set(rect(reX,reY+189,reW,reH), 9);
  map.set(rect(reX,reY+252,reW,reH), 10);  
  
}

//text for 1~10
function textPlaceCoin(){
  textSize(27);
  fill("black");
  stroke("white");
  strokeWeight(3.3);
  let loc1 = 229;
  let loc2 = 425;
  for(let i=1; i<6; i++){
    text(i + "→→→ ", loc1, loc2);
    loc2-=63;
  }
  
  loc1 = 524;
  loc2 = 425;
  
  for(let j=6; j<11; j++){
    if(j == 10){
      text(j + "→→→ ", loc1-15, loc2);
    }
    else{
      text(j + "→→→ ", loc1, loc2);
      loc2-=63;
    }
  }
}

//link
function gotolink_act1(){
  window.open('https://editor.p5js.org/manas__1404/full/48Gid6pnb')
}

function gotolink_info(){
  window.open("https://editor.p5js.org/manas__1404/full/3ZApe30pw")
}

function draw() { 
  //background
  background(bg);

  //text 1~10 
  textPlaceCoin();
  //rect 1~10
  sqToPutIn();
  
  //display 10 coin
  for (let i = 0; i < 10; i++) {
    coinStorage[i].displayCoin();
  }
  
  //score
  score();
}

