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
  game.drawPlayer();
  game.drawTreasure();
  
}

function keyPressed(){
    if (keyCode===37){
      game.player.moveLeft();
    }
    if (keyCode===38){
      game.player.moveUp();
    }
    if (keyCode===39){
      game.player.moveRight();
    }
    if (keyCode===40){
      game.player.moveDown();
    }
}
