class Game {
  constructor(){
    this.player1 = new Player (0, 0);
    this.player2 = new Player (900,900);
    this.treasure = new Treasure;
  }
  drawGrid() {
    for (var x = 0; x <= WIDTH; x += WIDTH / 10) {
      for (var y = 0; y <= HEIGHT; y += HEIGHT / 10) {
        stroke(0);
        strokeWeight(1);
        line(x, 0, x, HEIGHT);
        line(0, y, HEIGHT, y);
      }
    }
  }

  drawPlayerOne (){
    this.player1.draw();
  }

  drawPlayerTwo (){
    this.player2.draw();
  }

  drawTreasure(){
    this.treasure.draw();
  }
}
