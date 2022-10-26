let coin;

function setup() {
  createCanvas(1920, 1080);
  background-color("white");

  coin = new Coin(800, 930 ,100, 20);
  
  let squarecolor = color("yellow");
  fill(squarecolor);
  strokeWeight(2);
  stroke("black");
  rect(823, 800, 130, 20);
  
  setLineDash([10, 10, 10, 10]);
  line(823, 800, 823, 500, 10, 10);
  
  setLineDash([10, 10, 10, 10]);
  line(953, 800, 953, 500, 10, 10);
  
  noStroke();
  textSize(20);
  fill("black");
  text('PLACE 1 ON THE COUNTER TO BEGIN', 710, 450);
}

function setLineDash(list) {
  drawingContext.setLineDash(list);
}

function draw() {
  coin.show(mouseX, mouseY);
}

function mousePressed() {
  coin.pressed(mouseX, mouseY);
}

function mouseReleased() {
  coin.notPressed();
}

class Coin {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.offsetX = 0;
    this.offsetY = 0;
    this.dragging = false;
    this.rollover = false;
  }

  show(px, py) {
    if (this.dragging) {
      this.x = px + this.offsetX;
      this.y = py + this.offsetY;
    }

    stroke(255);
    noFill();
    ellipse(mouseX, mouseY, 20, 20);
  }

  pressed(px, py) {
    if (px > this.x && px < this.x + this.w && py > this.y && py < this.y + this.h) {
      this.dragging = true;
      this.offsetX = this.x - px;
      // print(this.offsetX);
      this.offsetY = this.y - py;
      // print(this.offsetY);
    }
  }

  notPressed(px, py) {
      this.dragging = false;
  }
}
