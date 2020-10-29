class Player {
  constructor(col, row) {
    this.col = col;
    this.row = row;
    this.width = SQUARE_SIDE;
    this.height = SQUARE_SIDE;
  }

  moveLeft() {
    if (this.col >= SQUARE_SIDE) {
      this.col -= SQUARE_SIDE;
    } else {
      return;
    }
  }

  moveRight() {
    if (this.col < WIDTH - SQUARE_SIDE) {
      this.col += SQUARE_SIDE;
    } else {
      return;
    }
  }

  moveUp() {
    if (this.row >= SQUARE_SIDE) {
      this.row -= SQUARE_SIDE;
    } else {
      return;
    }
  }

  moveDown() {
    if (this.row < HEIGHT - SQUARE_SIDE) {
      this.row += SQUARE_SIDE;
    } else {
      return;
    }
  }

  draw() {
    image(pic, this.col, this.row, this.width, this.height);
  }
}
