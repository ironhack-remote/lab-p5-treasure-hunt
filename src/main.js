const game = new Game();

function preload() {
  pic = loadImage("./src/pikachu.png");
  pic2 = loadImage("../assets/treasure.png");
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  clear();
  game.drawGrid();
  game.draw(); // Player & treasure
}

function keyPressed() {
  if (keyCode === 37) {
    game.player.moveLeft();
  }
  if (keyCode === 39) {
    game.player.moveRight();
  }
  if (keyCode === 38) {
    game.player.moveUp();
  }
  if (keyCode === 40) {
    game.player.moveDown();
  }
}
