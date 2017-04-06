var canvas = document.getElementById('canvas');
var graphics = canvas.getContext("2d");

function draw() {
  //Begind procedural composition
  //Clear the context
  graphics.clearRect(0, 0, 500, 500);
  //Paint black background
  graphics.fillStyle = "#000000";
  graphics.fillRect(0, 0, 500, 500);
  //Save default state for fallback
  graphics.save();
  //Animation stuff
  time = new Date();
  // graphics.rotate(-90 * (Math.PI/180));
  graphics.strokeStyle = "#FF0000";
  graphics.lineWidth = 5;
  graphics.beginPath();
  graphics.arc(250, 250, 100, 0, (2*Math.PI) * (time.getMilliseconds()/1000));
  graphics.stroke();
  // graphics.rotate(90 * (Math.PI/180));

  //Call update to render
  window.requestAnimationFrame(draw);
}

//Start animation
window.requestAnimationFrame(draw);
