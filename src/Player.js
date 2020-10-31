class Player {
  constructor(col, row) {
    this.col = col;
    this.row = row;
  }
  moveUp() {
    this.row -= 1;
  }
  moveDown() {
    this.row += 1;
  }
  moveLeft() {
    this.col -= 1;
  }
  moveRight() {
    this.col += 1;
  }

  draw() {
    image(
      pic,
      this.col * SQUARE_SIDE + MARGIN,
      this.row * SQUARE_SIDE + MARGIN,
      SQUARE_SIDE - 5,
      SQUARE_SIDE - 5
    );

    // rect(this.col * 10 + 5, this.row * 10 + 5, 20, 20);
  }
  keyPressed() {
    if (frameCount % 15 === 0) {
      if (keyIsDown(RIGHT_ARROW)) {
        this.moveRight();
      }
      if (keyIsDown(LEFT_ARROW)) {
        this.moveLeft();
      }
      if (keyIsDown(UP_ARROW)) {
        this.moveUp();
      }
      if (keyIsDown(DOWN_ARROW)) {
        this.moveDown();
      }
    }
  }
}
