//shape and color

//put global variable here
let c; //color
function setup() {
  createCanvas(window.innerWidth, window.innerHeight); //w, h

  colorMode(HSB); //Hue, saturation, brightness
  rectMode(CENTER);

  c = 0;
}
function draw() {
  background(c, 173, 204); //r, g, b

  //SHAPES-----------------------------------------------------

  //noStroke();
  //noStroke();

  fill(272, 53, 79);
  square(width / 2, height * 0.8, 100); //x, y, s

  fill(57, 53, 79);
  ellipse(width * 0.8, height / 2, 100, 200); //X, Y, W, H

  fill(169, 53, 79);
  rect(width * 0.2, height / 2, 100, 200); //x, y, w, h

  strokeWeight(10);
  stroke(0);
  fill(57, 53, 79); //h s b a
  triangle(300, 0, 600, 300, 0, 300);

  //Circle----------------------

  noStroke();
  fill(c + 50, 238, 255);
  circle(width / 2, height / 2, 100); //x, y, d

  //nofill();
  arc(50, 50, 80, 0, PI + QUARTER_PI);
  fill(255);

  beginShape();
  curveVertex(38, 483);
  curveVertex(38, 483);
  curveVertex(38, 483);
  curveVertex(38, 483);
  curveVertex(185, 502);
  endShape();

  c += 1;
  c = c % 360;
}

function mousePressed() {
  console.log(mouseX, mouseY);
}
