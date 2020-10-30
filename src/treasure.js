class Treasure {
  constructor() {
    this.row = Math.floor(Math.random() * 10);
    this.col = Math.floor(Math.random() * 10);
  }

  setRandomPosition() {
    this.row = Math.floor(Math.random() * 10);
    this.col = Math.floor(Math.random() * 10);
  }

  draw() {
    image(treasurePic, this.row * 100, this.col * 100, 100, 100);
  }
}
