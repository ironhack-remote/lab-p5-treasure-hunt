const game = new Game();
const player = new Player(0, 0);
const treasure = new Treasure();
let allGhosts = [];
let score = 0;

const scoreElement = document.querySelector(".score span");
const restartButton = document.querySelector(".restart");
const gameOver = document.querySelector(".game-over");

function preload() {
  characterDown = loadImage("/assets/character-down.png");
  characterUp = loadImage("/assets/character-up.png");
  characterLeft = loadImage("/assets/character-left.png");
  characterRight = loadImage("/assets/character-right.png");
  ghostImg = loadImage("/assets/ghost.png");
  gem = loadImage("/assets/treasure.png");
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  clear();
  game.drawGrid();

  if (game.collisionCheck(player, treasure)) {
    treasure.setRandomPosition();
    score += 100;
    scoreElement.innerText = score;
    allGhosts.push(new Ghost());
  }

  allGhosts.forEach((ghost) => {
    if (game.collisionCheck(player, ghost)) {
      noLoop();
      gameOver.style.display = "flex";
    }
    if (game.collisionCheck(treasure, ghost)) {
      treasure.setRandomPosition();
    }
    ghost.draw();
  });

  player.draw();
  treasure.draw();
}

function keyPressed() {
  if (keyCode === 37) {
    player.moveLeft();
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

scoreElement.innerText = score;

restartButton.onclick = () => {
  score = 0;
  scoreElement.innerText = score;
  allGhosts = [];
  gameOver.style.display = "none";
  loop();
};
