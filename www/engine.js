var canvas = document.getElementById('canvas');
var graphics = canvas.getContext("2d");
var testTimer = window.setTimeout(changeRenderer, 1000 * 5);
var drawFunction = loadingRenderer;

function loadingRenderer() {
    //Begin procedural composition
    //Clear the context
    graphics.clearRect(0, 0, 500, 500);
    //Paint black background
    graphics.fillStyle = "#000000";
    graphics.fillRect(0, 0, 500, 500);
    //Save default state for fallback
    graphics.save();
    //Animation stuff
    var time = new Date();
    graphics.strokeStyle = "#888888";
    graphics.lineWidth = 1;
    graphics.beginPath();
    graphics.arc(250, 250, 100, (.5 * Math.PI), (2 * Math.PI) * (time.getMilliseconds() / 1000));
    graphics.stroke();
    //Draw loading text
    graphics.fillStyle = "#888888";
    graphics.font = "30px Arial";
    graphics.fillText("Loading...", 185, 260);

    //Call update to render
    window.requestAnimationFrame(drawFunction);
}

function menuRenderer() {
    //Begin procedural composition
    //Clear the context
    graphics.clearRect(0, 0, 500, 500);
    //Paint black background
    graphics.fillStyle = "#0a0720";
    graphics.fillRect(0, 0, 500, 500);
    //Save default state for fallback
    graphics.save();
    //Animation stuff
    var time = new Date();
    graphics.strokeStyle = "#888888";
    graphics.lineWidth = 1;
    graphics.beginPath();
    var rad = 100 * (time.getMilliseconds()/1000);
    graphics.arc(250, 250, rad, 0, (2 * Math.PI));
    graphics.stroke();

    //Menu text
    graphics.font = "30px Arial";
    graphics.fillStyle = "#FFFFFF";
    graphics.fillText("Play", 220, 260);

    //Call update to render
    window.requestAnimationFrame(drawFunction);
}

//Stage for actual gameplay with users
function stageRenderer() {
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

  window.requestAnimationFrame(drawFunction);
}

function changeRenderer() {
    drawFunction = menuRenderer;
}

//Start animation
window.requestAnimationFrame(drawFunction);
