class Game {
  constructor() {
    this.player = new Player(0, 0);
    this.treasure = new Treasure(SQUARE_SIDE, SQUARE_SIDE);
  }
  drawGrid() {
    // Vertical lines + horizontal lines
    for (let i = 0; i <= WIDTH; i += SQUARE_SIDE) {
      line(i, 0, i, WIDTH); // x1 y1 x2 y2
      line(0, i, HEIGHT, i); // x1 y1 x2 y2
    }
  }
  draw() {
    this.player.draw();
    this.treasure.drawTreasure();
  }
}
