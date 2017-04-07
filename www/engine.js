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
    time = new Date();
    graphics.strokeStyle = "#888888";
    graphics.lineWidth = 1;
    graphics.beginPath();
    graphics.arc(250, 250, 100, (.5 * Math.PI), (2 * Math.PI) * (time.getMilliseconds() / 1000));
    graphics.stroke();

    //Call update to render
    window.requestAnimationFrame(drawFunction);
}

function gameRenderer() {
    //Begin procedural composition
    //Clear the context
    graphics.clearRect(0, 0, 500, 500);
    //Paint black background
    graphics.fillStyle = "#0a0720";
    graphics.fillRect(0, 0, 500, 500);
    //Save default state for fallback
    graphics.save();
    //Animation stuff
    time = new Date();
    graphics.strokeStyle = "#888888";
    graphics.lineWidth = 1;
    graphics.beginPath();
    graphics.arc(250, 250, 100, 0, (2 * Math.PI));
    graphics.stroke();

    //Call update to render
    window.requestAnimationFrame(drawFunction);
}

function changeRenderer() {
    drawFunction = gameRenderer;
}

//Start animation
window.requestAnimationFrame(drawFunction);
