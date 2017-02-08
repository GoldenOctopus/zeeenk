var circleX = 200
var circleY = 300
var circleD = 20
var value = 0
var value2 = 255

function setup() {
  createCanvas (1000, 1000)
}

function draw() {
  
  
  noStroke ()
 //stroke (255)
  fill (value, value2)
  ellipse (circleX, circleY, circleD)

  
  circleX = mouseX + random (+10, 10)
  circleY = mouseY + random (-10, 10)
  circleD = circleD + random (-5, 5)
}

function mousePressed() {
  if (value == 0) {
    value = 255;
  } else {
    value = 0;
  }
}

function mousePressed() {
  if (value2 == 255) {
    value2 = 0;
  } else {
    value2 = 255;
  }
}