class Ghost {
  constructor() {
    this.col = Math.floor(Math.random() * 10) * 100;
    this.row = Math.floor(Math.random() * 10) * 100;
    this.width = SQUARE_SIDE;
    this.height = SQUARE_SIDE;
  }

  setRandomPosition() {
    this.col = Math.floor(Math.random() * 10) * 100;
    this.row = Math.floor(Math.random() * 10) * 100;
  }

  draw() {
    image(ghostImg, this.col, this.row, this.width, this.height);
  }
}
