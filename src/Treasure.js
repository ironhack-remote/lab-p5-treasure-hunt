class Treasure {
  constructor() {
    this.tresRow = 500;
    this.tresCol = 500;
  }

  setRandomPosition() {
    this.tresRow = Math.floor(Math.random() * 1000);
    this.tresCol = Math.floor(Math.random() * 1000);
  }

  drawTreasure() {
    image(pic2, this.tresRow, this.tresCol, 90, 90);
  }

  //   checkIntersection(player) {
  //       if (this.tresRow <= player.x) {
  //           return this.setRandomPosition();
  //       } else
  //   }
}
