let bg;
let coinStorage = [];
let coinNum = 10;
let index;
let numberList = [];

let widthc = 80;
let heightc = 20;
let numc = 0;

let reX;
let reY;
let reW;
let reH;
let recs = [];

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
  home.mousePressed(goHome);  
  
  information = createButton('information');
  information.position(868, 35);
  information.mousePressed(goInfo);
  
  retry = createButton('retry');
  retry.position(908, 60);
}

function draw() { 
  //background
  background(bg);
  //console.log(mouseX + " " + mouseY);
  //text 1~10 
  textPlaceCoin();
  //rect 1~10
  sqToPutIn();
  
  //display 10 coin
  for (let i = 0; i < 10; i++) {
    let coin = coinStorage[i];
    coin.displayCoin();
    
    for(let j = i+1; j < 10; j++){
    if(i != j){
    coinStorage[i].collisionChecker(coinStorage[j]);
    }
      
  }
  }
  //score
  score();
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
  
  //check that it is not overlapping with any existing coins
  //a brute force method
  //very clunky need to fix this part
  collisionChecker(other){
    const dX = abs(this.x - other.x);
    const dY = abs(this.y - other.y);
    if(dX <= 85 && dY <= 45){
      // this.x -= 5;
      // this.y -= 5;
      other.x += 5;
      other.y += 5;
      other.locked = true;
    }
  }
}

//Numbers related functions below
//coin random number
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

//All mouse functions are below
function mousePressed(){  
  for(let i=0; i<coinStorage.length; i++){
    //let d = dist(mouseX, mouseY, coinStorage[i].x, coinStorage[i].y);
    const dx = abs(coinStorage[i].x - mouseX);
    const dy = abs(coinStorage[i].y + 20 - mouseY);
    if(dx < 80 && dy < 40 ){
      coinStorage[i].locked = false;
      index = i;
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

//Achievements related functions below
//score function
function score(){
  let scr = 0;
  textSize(40);
  fill("white");
  stroke("green");
  strokeWeight(8);
  text(scr, 527, 671);
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

//Boxes related functions below
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
  
  recs[0] = rect(reX,reY,reW,reH);
  recs[1] = rect(reX,reY+63,reW,reH);
  recs[2] = rect(reX,reY+126,reW,reH);
  recs[3] = rect(reX,reY+189,reW,reH);
  recs[4] = rect(reX,reY+252,reW,reH);
  
  //6~10
  reX = 625;
  reY = 140;
  reW = 110;
  reH = 48.5;
  
  recs[5] = rect(reX,reY,reW,reH);
  recs[6] = rect(reX,reY+63,reW,reH);
  recs[7] = rect(reX,reY+126,reW,reH);
  recs[8] = rect(reX,reY+189,reW,reH);
  recs[9] = rect(reX,reY+252,reW,reH);  
  
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

//restart
function restart(){
  
}

function setLineDash(list) {
  // dashline
  drawingContext.setLineDash(list);
}

//link
function goHome(){
  window.open('https://editor.p5js.org/manas__1404/full/48Gid6pnb')
}

//link
function goInfo(){
  window.open("https://editor.p5js.org/manas__1404/full/3ZApe30pw")
}
