function setup() {
   canvas = createCanvas(450, 400);
   video = createCapture(VIDEO)
video.hide();
  }
  
  function draw() {
      image(video,0,0,450,400);
      rect(0, 350, 450, 50);
      text('~Wow~', 110, 367, 170, 80);
      textSize(24)
      textAlign(CENTER);
      textFont('Poppins'); 
    // background(220);
  }