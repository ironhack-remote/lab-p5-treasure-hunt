class Treasure {
  constructor() {
    this.col = "";
    this.row = "";
  }
  setRandomPosition() {
    this.col = Math.floor(Math.random() * 10);
    this.row = Math.floor(Math.random() * 10);
    console.log(`Column${this.col} and Row ${this.row}`);
  }

  drawTreasure() {
    image(
      pic2,
      this.col * SQUARE_SIDE + MARGIN,
      this.row * SQUARE_SIDE + MARGIN,
      SQUARE_SIDE - 5,
      SQUARE_SIDE - 5
    );
  }
}
