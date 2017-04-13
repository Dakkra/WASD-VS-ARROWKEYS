//Stage for actual gameplay with users
function gameRenderer() {
  //Clear graphics context
  graphics.clearRect(0, 0, 500, 500);
  //Draw background
  graphics.fillStyle = "#0a0720";
  graphics.fillRect(0, 0, 500, 500);
  //Get time for time-based calculations
  var time = new Date();
  //Draw virtical split line
  graphics.strokeStyle = "#000000";
  graphics.lineWidth = 2;
  graphics.beginPath();
  graphics.moveTo(250, 0);
  graphics.lineTo(250, 500);
  graphics.stroke();
  //Draw horizontal line guard
  graphics.beginPath();
  graphics.moveTo(0, 450);
  graphics.lineTo(500, 450);
  graphics.stroke();

  //Arrows at bottom
  //Normal up arrow
  graphics.drawImage(inactiveArrowImage, 10, 460);

  //Upside down arrow
  graphics.translate(80, 492);
  graphics.rotate(Math.PI);
  graphics.drawImage(inactiveArrowImage, 0, 0);
  graphics.rotate(-Math.PI);
  graphics.translate(-80, -492);

  //Left Arrow
  graphics.translate(120, 460);
  graphics.rotate(.5*Math.PI);
  graphics.drawImage(inactiveArrowImage, 0, 0);
  graphics.rotate(-.5*Math.PI);
  graphics.translate(-120, -460)

  //Right arrow
  graphics.translate(120, 492);
  graphics.rotate(-.5*Math.PI);
  graphics.drawImage(inactiveArrowImage, 0, 0);
  graphics.rotate(.5*Math.PI);
  graphics.translate(-120, -492)

  window.requestAnimationFrame(drawFunction);
}

//Handle game input here
function gameKeyHandler(event) {
  switch (event.keyCode) {
    default: {
      break;
    }
  }
}
