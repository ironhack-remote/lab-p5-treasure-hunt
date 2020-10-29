class Player {
  constructor(row, col) {
    this.row = row;
    this.col = col;
  }
  moveUp() {
    this.col -= 100;
  }
  moveDown() {
    this.col += 100;
  }
  moveLeft() {
    this.row -= 100;
  }
  moveRight() {
    this.row += 100;
  }
  draw() {
    image(pic, this.row, this.col, 100, 100);
  }
}
