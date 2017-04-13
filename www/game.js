//Declare variables for which keys are active
var w = false;
var a = false;
var s = false;
var d = false;
var up = false;
var down = false;
var left = false;
var right = false;

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
  graphics.rotate(.5*Math.PI);
  graphics.drawImage(arrowImage, 0, 0);
  graphics.rotate(-.5*Math.PI);
  graphics.translate(-120, -460)

  //Left arrow
  arrowImage = a ? activeArrowImage : inactiveArrowImage;
  graphics.translate(120, 492);
  graphics.rotate(-.5*Math.PI);
  graphics.drawImage(arrowImage, 0, 0);
  graphics.rotate(.5*Math.PI);
  graphics.translate(-120, -492)

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
  graphics.rotate(.5*Math.PI);
  graphics.drawImage(arrowImage, 0, 0);
  graphics.rotate(-.5*Math.PI);
  graphics.translate(-120, -460)

  //Left arrow
  arrowImage = left ? activeArrowImage : inactiveArrowImage;
  graphics.translate(120, 492);
  graphics.rotate(-.5*Math.PI);
  graphics.drawImage(arrowImage, 0, 0);
  graphics.rotate(.5*Math.PI);
  graphics.translate(-120, -492)

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
}
