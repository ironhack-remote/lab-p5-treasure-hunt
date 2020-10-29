const game = new Game();
const player = new Player(0, 0); // needs to be defined for function keyPressed() below? accesses the Class "Player" (after "new")
const treasure = new Treasure();

function preload() {
  picCharacter = loadImage("../assets/character-down.png");
  picTreasure = loadImage("../assets/treasure.png");
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  clear();
  game.drawGrid();
  player.draw(); //var palyer is defined above
  treasure.draw();
}

function keyPressed() {
  if (keyCode === 37) {
    player.moveLeft(); //player = defined in Variable above or is it the class player, but the function does not work without the defining the var above!
  }
  if (keyCode === 38) {
    player.moveUp();
  }
  if (keyCode === 39) {
    player.moveRight();
  }
  if (keyCode === 40) {
    player.moveDown();
  }
}
