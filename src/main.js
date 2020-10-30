const game = new Game();



function preload() {
  pic = loadImage("/assets/character-down.png")
  tres = loadImage("/assets/treasure.png")
}
function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  
}

function draw() {
  clear();
  game.drawGrid();
  game.draw();
}

function keyPressed() {
  if (keyCode === 38) {
    game.player.moveUp();
  } else if (keyCode === 40) {
    game.player.moveDown();
  } else if (keyCode === 37) {
    game.player.moveLeft();
  } else if (keyCode === 39) {
    game.player.moveRight();
  }
}