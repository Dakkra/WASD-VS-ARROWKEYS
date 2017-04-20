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

window.requestAnimationFrame(arrowOnCanvas);

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
