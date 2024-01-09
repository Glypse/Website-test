let cols, rows; // Number of columns and rows in the grid
let rectW, rectH;

function setup() {
  createCanvas(windowWidth, windowHeight/2);
  background(0);
}

canvas.parent('sketch-holder');

function draw() {
  //resizeCanvas(windowWidth, windowHeight);
  background('rgba(0,0,0, 0.03)');
  if (width > height) {
    rectW = height/10;
  } else {
    rectW = width/15;
  }
  let rectH = rectW / 4;
  let angle = 0; // Rotation angle for each rectangle
  let rectWSpacing = 1.25;
  let rectHSpacing = 5;
  cols = floor((width - rectW) / (rectW * rectWSpacing));
  rows = floor((height - rectH) / (rectH * rectHSpacing));
  
  // Nested loops to create a grid of rectangles
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      // Can't manage to get the proper occupied space by the rectangle grid
      let x = i * rectW * rectWSpacing + ((width - (cols * rectW * rectWSpacing))/2) + rectW/2;
      let y = j * rectH * rectHSpacing + ((height - (rows * rectW * rectWSpacing))/2) + rectW/2;
    
      push();
      let noiseScale = 0.05;
      noiseDetail(1, 1);
      angle = map(noise(i * noiseScale, j * noiseScale, (frameCount * 0.01)), 0, 1, -2*PI, 2*PI);
      //angle = PI/2;
      //angle = angle + (Math.max((dist(mouseX, mouseY, x, y))*0.001), 100)*10 ;
      translate(x, y); // Translate to the center of the rectangle
      rotate(angle); // Rotate the rectangle
      rectMode(CENTER);
      stroke(255);
      strokeWeight(0.2);
      noFill(); // Set fill color
      //drawingContext.shadowBlur = rectW/2;
      //drawingContext.shadowColor = color('rgba(255,255,255, 0.1)');
      rect(0, 0, rectW, rectH); // Draw the rectangle
      pop(); // Restore the previous transformation state
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}