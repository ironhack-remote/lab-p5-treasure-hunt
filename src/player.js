class Player {
  constructor(col, row) {
    this.row = row;
    this.col = col;
  }

  moveUp() {
    if (this.col<= 0) {
      return;
    }
    this.col -= SQUARE_SIDE;
  }

  moveDown() {
    if (this.col >= HEIGHT - SQUARE_SIDE) {
      return;
    }
    this.col += SQUARE_SIDE;
  }

  moveLeft() {
    if (this.row <= 0) {
      return;
    }
    this.row -= SQUARE_SIDE;
  }

  moveRight() {
    if (this.row >= WIDTH - SQUARE_SIDE) {
      return;
    }
    this.row += SQUARE_SIDE;
  }

  draw() {
    image(
      pic,
      this.row,
      this.col,
      SQUARE_SIDE,
      SQUARE_SIDE
    );
  }
}
