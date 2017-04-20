//Declare variables for which keys are active
var w = false;
var a = false;
var s = false;
var d = false;
var up = false;
var down = false;
var left = false;
var right = false;

//Variables for music and timing
//TODO make a song for the game
var beatCount = 0;
var measureCount = 1;
var beatsPerMeasure = 4;
var countInMeasure = 0;
var bpm = 128;
var bps = bpm / 60;
//Milliseconds between beat counts
var timerInterval = 1000 / bps;
var beatTimer;

function initPlayStage() {
  beatCount++;
  countInMeasure++;
  beatCounterDiv.innerHTML = measureCount + "::" + countInMeasure;
  beatTimer = window.setInterval(countBeat, timerInterval);
  createjs.Sound.play(songSID);
}

function countBeat() {
  if (countInMeasure == 4) {
    countInMeasure = 0;
  }

  beatCount++;
  countInMeasure++;

  if (beatCount % beatsPerMeasure == 0) {
    measureCount++;
    countInMeasure = 4;
  }
  beatCounterDiv.innerHTML = measureCount + "::" + countInMeasure;
}

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
  //WASD
  //Normal up arrow
  arrowImage = w ? activeArrowImage : inactiveArrowImage;
  graphics.drawImage(arrowImage, 10, 460);

  //Upside down arrow
  arrowImage = s ? activeArrowImage : inactiveArrowImage;
  graphics.translate(80, 492);
  graphics.rotate(Math.PI);
  graphics.drawImage(arrowImage, 0, 0);
  graphics.rotate(-Math.PI);
  graphics.translate(-80, -492);

  //Right Arrow
  arrowImage = d ? activeArrowImage : inactiveArrowImage;
  graphics.translate(120, 460);
  graphics.rotate(.5 * Math.PI);
  graphics.drawImage(arrowImage, 0, 0);
  graphics.rotate(-.5 * Math.PI);
  graphics.translate(-120, -460);

  //Left arrow
  arrowImage = a ? activeArrowImage : inactiveArrowImage;
  graphics.translate(120, 492);
  graphics.rotate(-.5 * Math.PI);
  graphics.drawImage(arrowImage, 0, 0);
  graphics.rotate(.5 * Math.PI);
  graphics.translate(-120, -492);

  //ARROW KEYS
  //Shift x by 250
  graphics.translate(250, 0);
  //Normal up arrow
  arrowImage = up ? activeArrowImage : inactiveArrowImage;
  graphics.drawImage(arrowImage, 10, 460);

  //Upside down arrow
  arrowImage = down ? activeArrowImage : inactiveArrowImage;
  graphics.translate(80, 492);
  graphics.rotate(Math.PI);
  graphics.drawImage(arrowImage, 0, 0);
  graphics.rotate(-Math.PI);
  graphics.translate(-80, -492);

  //Right  Arrow
  arrowImage = right ? activeArrowImage : inactiveArrowImage;
  graphics.translate(120, 460);
  graphics.rotate(.5 * Math.PI);
  graphics.drawImage(arrowImage, 0, 0);
  graphics.rotate(-.5 * Math.PI);
  graphics.translate(-120, -460);

  //Left arrow
  arrowImage = left ? activeArrowImage : inactiveArrowImage;
  graphics.translate(120, 492);
  graphics.rotate(-.5 * Math.PI);
  graphics.drawImage(arrowImage, 0, 0);
  graphics.rotate(.5 * Math.PI);
  graphics.translate(-120, -492);

  //Bring x back to 0
  graphics.translate(-250, 0);

  window.requestAnimationFrame(drawFunction);
}

//Handle game input here
function gameKeyDownHandler(event) {
  switch (event.keyCode) {
    //w
    case 87: {
      w = true;
      break;
    }
    //a
    case 65: {
      a = true;
      break;
    }
    //s
    case 83: {
      s = true;
      break;
    }
    //d
    case 68: {
      d = true;
      break;
    }
    //up
    case 38: {
      up = true;
      break;
    }
    //down
    case 40: {
      down = true;
      break;
    }
    //Left
    case 37: {
      left = true;
      break;
    }
    //Right
    case 39: {
      right = true;
      break;
    }
    default: {
      break;
    }
  }
  event.preventDefault();
}

function gameKeyUpHandler(event) {
  switch (event.keyCode) {
    //w
    case 87: {
      w = false;
      break;
    }
    //a
    case 65: {
      a = false;
      break;
    }
    //s
    case 83: {
      s = false;
      break;
    }
    //d
    case 68: {
      d = false;
      break;
    }
    //up
    case 38: {
      up = false;
      break;
    }
    //down
    case 40: {
      down = false;
      break;
    }
    //Left
    case 37: {
      left = false;
      break;
    }
    //Right
    case 39: {
      right = false;
      break;
    }
    default: {
      break;
    }
  }
  event.preventDefault();  
}

//Sabrina's code below
function drawArrow(dir, color, x, y) {
  graphics.strokeStyle = color;
  graphics.lineWidth = 2;
  graphics.beginPath();
  switch(dir) {
    case "left":
      graphics.moveTo(x + 40, y + 10);
      graphics.lineTo(x + 60, y + 10);
      graphics.moveTo(x + 48, y + 2);
      graphics.lineTo(x + 40, y + 10);
      graphics.lineTo(x + 48, y + 18);
      break;
    case "up":
      graphics.moveTo(x + 100, y);
      graphics.lineTo(x + 100, y + 20);
      graphics.moveTo(x + 92, y + 8);
      graphics.lineTo(x + 100, y);
      graphics.lineTo(x + 108, y + 8);
      break;
    case "right":
      graphics.moveTo(x + 140, y + 10);
      graphics.lineTo(x + 160, y + 10);
      graphics.moveTo(x + 152, y + 2);
      graphics.lineTo(x + 160, y + 10);
      graphics.lineTo(x + 152, y + 18);
      break;
    case "down":
      graphics.moveTo(x + 200, y);
      graphics.lineTo(x + 200, y + 20);
      graphics.moveTo(x + 192, y + 12);
      graphics.lineTo(x + 200, y + 20);
      graphics.lineTo(x + 208, y + 12);
      break;
  }
  graphics.stroke();
}

// var arrows = []

function arrowOnCanvas() {
  graphics.clearRect(0, 0, 500, 500);
  //Paint black background
  graphics.fillStyle = "#000000";
  graphics.fillRect(0, 0, 500, 500);
  //Arrows for left track
  drawArrow("up", "red", 0, 100);
  drawArrow("down", "red", 0, 100);
  drawArrow("left", "red", 0, 100);
  drawArrow("right", "red", 0, 100);
  //Arrows for right track
  drawArrow("up", "steelblue", 250, 100);
  drawArrow("down", "steelblue", 250, 100);
  drawArrow("left", "steelblue", 250, 100);
  drawArrow("right", "steelblue", 250, 100);
  // arrows.forEach(function(arrow) {
  //   drawArrow(arrow.direction, arrow.color, arrow.track, arrow.position)
  // })
  // window.requestAnimationFrame(arrowOnCanvas)
}

// window.requestAnimationFrame(arrowOnCanvas);

// function addArrow() {
//   arrows.push({
//     direction: ['up', 'down', 'left', 'right'][Math.floor(Math.random() * 4)],
//     color: ['red', 'yellow', 'green', 'blue'][Math.floor(Math.random() * 4)],
//     track: [0, 250][Math.floor(Math.random() * 2)],
//     // position: Math.floor(Math.random() * 500),
//     position: 0,
//   })
// }

// window.setInterval(function() {
//   addArrow()
// }, 1000)
//
// window.setInterval(function() {
//   arrows = arrows.map(function(arrow) {
//     arrow.position += 2
//     return arrow
//   })
//   .filter(function(arrow) {
//     return arrow.position < 500
//   })
// }, 15)
