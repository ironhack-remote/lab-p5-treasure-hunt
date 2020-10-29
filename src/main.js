const game = new Game();

function preload() {
  pic = loadImage("/lab-p5-treasure-hunt/assets/character-down.png");
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  clear();
  game.drawGrid();
  game.player.draw();
  game.keyPressed();
}
