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

//Creating scores for each side
var wasdScore = 0;
var wasdDiv = document.getElementById("wasdScore");
var arrowKeysScore = 0;
var arrowKeysDiv = document.getElementById("arrowKeysScore");

var arrows = [];
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

// Sabrina's code
//Creating arrows at the top
  arrows.push({
    direction: ['up', 'down', 'left', 'right'][Math.floor(Math.random() * 4)],
    position: 0,
  })
  //Updating the arrows' position
  arrows = arrows.map(function(arrow) {
    arrow.position += 37;
    return arrow;
  })
  //Clearing off arrows when they reach the bottom line
  .filter(function(arrow) {
    return arrow.position <= 425;
  })
//End Sabrina's code
  if (beatCount % beatsPerMeasure == 0) {
    measureCount++;
    countInMeasure = 4;
  }
  beatCounterDiv.innerHTML = measureCount + "::" + countInMeasure;
}

//Stage for actual gameplay with users
function gameRenderer() {
  wasdDiv.textContent = wasdScore;
  arrowKeysDiv.textContent = arrowKeysScore;
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
  graphics.drawImage(arrowImage, 135, 460);

  //Upside down arrow
  arrowImage = s ? activeArrowImage : inactiveArrowImage;
  graphics.translate(117, 492);
  graphics.rotate(Math.PI);
  graphics.drawImage(arrowImage, 0, 0);
  graphics.rotate(-Math.PI);
  graphics.translate(-117, -492);

  //Right Arrow
  arrowImage = d ? activeArrowImage : inactiveArrowImage;
  graphics.translate(220, 460);
  graphics.rotate(.5 * Math.PI);
  graphics.drawImage(arrowImage, 0, 0);
  graphics.rotate(-.5 * Math.PI);
  graphics.translate(-220, -460);

  //Left arrow
  arrowImage = a ? activeArrowImage : inactiveArrowImage;
  graphics.translate(40, 492);
  graphics.rotate(-.5 * Math.PI);
  graphics.drawImage(arrowImage, 0, 0);
  graphics.rotate(.5 * Math.PI);
  graphics.translate(-40, -492);

  //ARROW KEYS
  //Shift x by 250
  graphics.translate(250, 0);
  //Normal up arrow
  arrowImage = up ? activeArrowImage : inactiveArrowImage;
  graphics.drawImage(arrowImage, 135, 460);

  //Upside down arrow
  arrowImage = down ? activeArrowImage : inactiveArrowImage;
  graphics.translate(117, 492);
  graphics.rotate(Math.PI);
  graphics.drawImage(arrowImage, 0, 0);
  graphics.rotate(-Math.PI);
  graphics.translate(-117, -492);

  //Right  Arrow
  arrowImage = right ? activeArrowImage : inactiveArrowImage;
  graphics.translate(220, 460);
  graphics.rotate(.5 * Math.PI);
  graphics.drawImage(arrowImage, 0, 0);
  graphics.rotate(-.5 * Math.PI);
  graphics.translate(-220, -460);

  //Left arrow
  arrowImage = left ? activeArrowImage : inactiveArrowImage;
  graphics.translate(40, 492);
  graphics.rotate(-.5 * Math.PI);
  graphics.drawImage(arrowImage, 0, 0);
  graphics.rotate(.5 * Math.PI);
  graphics.translate(-40, -492);

  //Bring x back to 0
  graphics.translate(-250, 0);
//Drawing arrows given the direction, color, track, and position
  arrows.forEach(function(arrow) {
    drawArrow(arrow.direction, "red", 0, arrow.position);
    drawArrow(arrow.direction, "blue", 250, arrow.position);
  })

  window.requestAnimationFrame(drawFunction);
}

//Handle game input here
function gameKeyDownHandler(event) {
  //Creating variable to compare an arrow's position
  //to a key being pressed to see if they match
  var arrowMatch = arrows[arrows.length - 1];
  // console.log(wasdScore);
  console.log(arrowKeysScore);
  switch (event.keyCode) {
    //a
    case 65: {
      a = true;
      if (arrowMatch.direction == "left") {
        wasdScore ++;
      }
      break;
    }
    //w
    case 87: {
      w = true;
      if (arrowMatch.direction == "up") {
        wasdScore ++;
      }
      break;
    }
    //s
    case 83: {
      s = true;
      if (arrowMatch.direction == "down") {
        wasdScore ++;
      }
      break;
    }
    //d
    case 68: {
      d = true;
      if (arrowMatch.direction == "right") {
        wasdScore ++;
      }
      break;
    }
    //Left
    case 37: {
      left = true;
      if (arrowMatch.direction == "left") {
        arrowKeysScore ++;
      }
      break;
    }
    //up
    case 38: {
      up = true;
      if (arrowMatch.direction == "up") {
        arrowKeysScore ++;
      }
      break;
    }
    //down
    case 40: {
      down = true;
      if (arrowMatch.direction == "down") {
        arrowKeysScore ++;
      }
      break;
    }
    //Right
    case 39: {
      right = true;
      if (arrowMatch.direction == "right") {
        arrowKeysScore ++;
      }
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
//Accepting an arrow's direction, color, track, and position
function drawArrow(dir, color, x, y) {
  graphics.strokeStyle = color;
  graphics.lineWidth = 2;
  graphics.beginPath();
  switch(dir) {
    case "left":
      graphics.moveTo(x + 40, y + 16);
      graphics.lineTo(x + 72, y + 16);
      graphics.moveTo(x + 56, y);
      graphics.lineTo(x + 40, y + 16);
      graphics.lineTo(x + 56, y + 32);
      break;
    case "down":
      graphics.moveTo(x + 100, y);
      graphics.lineTo(x + 100, y + 32);
      graphics.moveTo(x + 84, y + 16);
      graphics.lineTo(x + 100, y + 32);
      graphics.lineTo(x + 116, y + 16);
      break;
    case "up":
      graphics.moveTo(x + 150, y);
      graphics.lineTo(x + 150, y + 32);
      graphics.moveTo(x + 134, y + 16);
      graphics.lineTo(x + 150, y);
      graphics.lineTo(x + 166, y + 16);
      break;
    case "right":
      graphics.moveTo(x + 190, y + 16);
      graphics.lineTo(x + 222, y + 16);
      graphics.moveTo(x + 206, y);
      graphics.lineTo(x + 222, y + 16);
      graphics.lineTo(x + 206, y + 32);
      break;
  }
  graphics.stroke();
}

function arrowOnCanvas() {
  graphics.clearRect(0, 0, 500, 500);
  //Paint black background
  graphics.fillStyle = "#000000";
  graphics.fillRect(0, 0, 500, 500);
  //Arrows for left track
  drawArrow("left", "red", 0, 100);
  drawArrow("down", "red", 0, 100);
  drawArrow("up", "red", 0, 100);
  drawArrow("right", "red", 0, 100);
  //Arrows for right track
  drawArrow("left", "steelblue", 250, 100);
  drawArrow("down", "steelblue", 250, 100);
  drawArrow("up", "steelblue", 250, 100);
  drawArrow("right", "steelblue", 250, 100);
}
