const game = new Game();

function preload() {
  pic = loadImage("/assets/character-down.png");
  treasurePic = loadImage("/assets/treasure.png");
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  clear();
  background("cyan");
  game.drawGrid();
  game.Draw();
}

function keyPressed() {
  if (keyCode === 37) {
    game.player.moveLeft();
    return;
  }

  if (keyCode === 39) {
    game.player.moveRight();
    return;
  }

  if (keyCode === 38) {
    game.player.moveUp();
    return;
  }

  if (keyCode === 40) {
    game.player.moveDown();
    return;
  }
}
