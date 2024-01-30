function setup() {
  createCanvas(800, 800);
  background(225);
}
//
function draw() {
  noStroke();
  //example 1
  fill(0,255,0);
  rect(4,19,250, 160)
  stroke(0);
  strokeWeight(2);
  fill(255);
  square(140, 60, 80)
  circle(55, 100, 90, 90);

  //example 2
  noStroke();
  rect(4,200,170).fill(255);
  fill(0,0,255,100);
  circle(60, 320, 100, 60);
  fill(0,255,0, 100);
  circle(120, 320, 100, 60);
  fill(200,0,0,100, 100);
  circle(85, 270, 100, 60);

  //example 3 
  fill(0);
  rect(300,19,250, 160);
  fill(255,248,74)
  arc(350, 90, 80, 80, 10, -PI + -QUARTER_PI);
  fill(234,68,44)
  square(430, 40, 90, 40, 40, 0, 0);
  fill(350);
  circle(450,77,30,40);
  circle(495,77,30,40);
  fill(0,68,247);
  circle(450,77,18,30);
  circle(495,77,18,30);

  //example 4
  fill(0,0,129,255);
  square(300, 200, 200)
  fill(0,128,0)
  stroke(600);
  strokeWeight(3);
  circle(400,300,150,140);
  fill(252,8,7)
  drawStar(400, 303, 30, 70, 5);
  
  

function drawStar(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = -PI/2; a < TWO_PI - PI/2; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
}
