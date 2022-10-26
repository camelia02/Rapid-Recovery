function setup() {
  createCanvas(1920, 1080);
  background-color("white");
}

function square_draw(){
  let squarecolor = color("yellow");
  fill(squarecolor);
  strokeWeight(2);
  stroke("black");
  rect(800, 800, 170, 20);
}

function coin_draw(){
  let coincolor1 = color(255, 204, 0);
  fill(coincolor1);
  strokeWeight(2);
  stroke("black");
  ellipse(800, 930, 100, 10);

}

function information_text(){
  noStroke();
  textSize(20);
  fill("black");
  text('PLACE 1 ON THE COUNTER TO BEGIN', 710, 450);
}

function draw() {  
    information_text();
    square_draw();
    coin_draw();
}
