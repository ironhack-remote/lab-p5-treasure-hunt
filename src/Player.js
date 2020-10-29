class Player {
  constructor(col, row) {
    this.col = col;
    this.row = row;
    this.width = SQUARE_SIDE;
    this.height = SQUARE_SIDE;
    this.direction = "down";
  }

  moveUp() {
    if (this.row <= 0) {
      return;
    }
    this.row -= SQUARE_SIDE;
    this.direction = "up";
  }

  moveDown() {
    if (this.row >= WIDTH - SQUARE_SIDE) {
      return;
    }
    this.row += SQUARE_SIDE;
    this.direction = "down";
  }

  moveRight() {
    if (this.col >= WIDTH - SQUARE_SIDE) {
      return;
    }
    this.col += SQUARE_SIDE;
    this.direction = "right";
  }

  moveLeft() {
    if (this.col <= 0) {
      return;
    }
    this.col -= SQUARE_SIDE;
    this.direction = "left";
  }

  draw() {
    if (this.direction === "down") {
      image(characterDown, this.col, this.row, this.width, this.height);
    } else if (this.direction === "up") {
      image(characterUp, this.col, this.row, this.width, this.height);
    } else if (this.direction === "right") {
      image(characterRight, this.col, this.row, this.width, this.height);
    } else if (this.direction === "left") {
      image(characterLeft, this.col, this.row, this.width, this.height);
    }
  }
}
