class Game {
  constructor() {
    this.player = new Player(1, 1);
    this.treasure = new Treasure();
  }

  drawGrid() {
    for (let x = 0; x <= width; x += width / 10) {
      for (let y = 0; y <= height; y += height / 10) {
        stroke(1);
        strokeWeight(1);
        line(x, 0, x, height);
        line(0, y, width, y);
      }
    }
  }
  draw() {
    this.player.draw();
    this.treasure.drawTreasure();
  }
  //   checkIntersection(player, treasure) {
  //     if (treasure.tresRow <= player.x) {
  //         return treasure.setRandomPosition();
  //     } else
  // }
}
