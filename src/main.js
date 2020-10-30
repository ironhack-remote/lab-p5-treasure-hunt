const game = new Game();

function preload(){
  console.log("PRELOAD");
  pic = loadImage("assets/character-down.png")
  pic2= loadImage("assets/treasure.png")
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}
game.treasure.setRandomPosition();

function draw() {
  clear();
  game.drawGrid();
  game.drawPlayerOne();
  game.drawPlayerTwo();
  game.drawTreasure();
  
}

function keyPressed(){
    if (keyCode===37){
      game.player1.moveLeft();
    }
    if (keyCode===38){
      game.player1.moveUp();
    }
    if (keyCode===39){
      game.player1.moveRight();
    }
    if (keyCode===40){
      game.player1.moveDown();
    }
    if (keyCode===65){
      game.player2.moveLeft();
    }
    if (keyCode===87){
      game.player2.moveUp();
    }
    if (keyCode===68){
      game.player2.moveRight();
    }
    if (keyCode===83){
      game.player2.moveDown();
    }
}
