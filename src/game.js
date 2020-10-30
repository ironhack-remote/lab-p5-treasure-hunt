class Game {
  constructor() {
    this.player = new Player(5, 2);
    this.treasure = new Treasure();
  }

  drawGrid() {
    for (let x = 0; x <= WIDTH; x += SQUARE_SIDE) {
      line(0, x, 1000, x);
    }

    for (let y = 0; y <= WIDTH; y += SQUARE_SIDE) {
      line(y, 0, y, 1000);
    }
  }

  Draw() {
    this.player.draw();
    this.treasure.draw();
  }
}
