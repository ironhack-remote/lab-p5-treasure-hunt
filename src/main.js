const game = new Game();


function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  pic = loadImage("/assets/character-down.png");
  picTr = loadImage("/assets/treasure.png");
}

function draw() {
  clear();
  game.drawGrid();
  //player.draw();
}


function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    game.player.moveLeft();
  }
  if (keyCode === RIGHT_ARROW) {
    game.player.moveRight();
  }
  if (keyCode === UP_ARROW) {
    game.player.moveUp();
  }
  if (keyCode === DOWN_ARROW) {
    game.player.moveDown();
  }
}

