class Treasure {
  constructor(col, row) {
    this.col = col;
    this.row = row;
    this.width = SQUARE_SIDE;
    this.height = SQUARE_SIDE;
  }

  setRandomPosition() {
    const randomCol = Math.floor(Math.random() * WIDTH - this.SQUARE_SIDE);
    const randomRow = Math.floor(Math.random() * WIDTH - this.SQUARE_SIDE);
    this.randomCol = this.col;
    this.randomRow = this.row;
  }

  draw() {
    image(picTreasure, this.col, this.row, 60, 60);
  }
}
