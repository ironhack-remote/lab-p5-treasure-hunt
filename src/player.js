class Player {
  constructor(col, row) {
    this.col = col;
    this.row = row;
    this.width = SQUARE_SIDE;
    this.height = SQUARE_SIDE;
  }

  moveLeft(steps) {
    if (this.col <= 0) {
      return;
    }
    this.col -= SQUARE_SIDE;
  }

  moveRight(steps) {
    if (this.col >= WIDTH - this.col) {
      return;
    }
    this.col += SQUARE_SIDE;
  }

  moveUp(steps) {
    if (this.row <= 0) {
      return;
    }
    this.row -= SQUARE_SIDE;
  }

  moveDown(steps) {
    if (this.row >= WIDTH - this.row) {
      return;
    }
    this.row += SQUARE_SIDE;
  }

  draw() {
    image(picCharacter, this.col, this.row, 90, 90);
  }
}
