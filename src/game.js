class Game {
  constructor (){
    this.player = new Player();
    this.treasure = new Treasure();
  }
  drawGrid() {
      for (let x = 0; x <= WIDTH; x += SQUARE_SIDE) {
        for (let y = 0; y <= HEIGHT; y += SQUARE_SIDE) {
          stroke(0);
          strokeWeight(1);
          line(x, 0, x, HEIGHT);
          line(0, y, WIDTH, y);
        }
      }
    }

    draw() {
      this.player.draw();
      this.treasure.drawTreasure();
  }

 

}
