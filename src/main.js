const game = new Game();
const player = new Player(0, 0);
const treasure = new Treasure();

function preload() {
  pic = loadImage("assets/character-down.png");
  pic2 = loadImage("assets/treasure.png");
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  treasure.setRandomPosition();
}

function draw() {
  game.drawGrid();
  player.draw();
  player.keyPressed();
  treasure.drawTreasure();
  game.checkFound(player, treasure);
}
const button = document.querySelector("button");

button.onclick = () => {
  console.log("clicking");
  player.col = 0;
  player.row = 0;
  treasure.setRandomPosition();
  loop();
};
