class Game {
  constructor() {
    this.player = new Player(0, 0);
  }

  drawGrid() {
    for (let i = 0; i < 11; i++) {
      let side = SQUARE_SIDE * i;
      line(0, side, WIDTH, side);
      line(side, 0, side, WIDTH);
    }
  }

  keyPressed() {
    if (keyCode === 37) {
      this.player.moveLeft();
    }
    if (keyCode === 38) {
      this.player.moveUp();
    }
    if (keyCode === 39) {
      this.player.moveRight();
    }
    if (keyCode === 40) {
      this.player.moveDown();
    }
  }
}
