class Game {
  drawGrid() {
    for (let i = 0; i < 11; i++) {
      let side = SQUARE_SIDE * i;
      line(0, side, WIDTH, side);
      line(side, 0, side, WIDTH);
    }
  }

  collisionCheck(player, obstacle) {
    if (player.row === obstacle.row && player.col === obstacle.col) {
      return true;
    } else {
      return false;
    }
  }
}
