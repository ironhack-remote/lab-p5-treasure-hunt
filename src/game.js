class Game {
  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line

    background(220);
    //For (var BEGIN; END; INTERVAL){
    //DO SOMETHING }
    for (var x = 0; x <= WIDTH; x += SQUARE_SIDE) {
      for (var y = 0; y <= HEIGHT; y += SQUARE_SIDE) {
        stroke(0);
        strokeWeight(1);
        line(x, 0, x, HEIGHT);
        line(0, y, WIDTH, y);
      }
    }
  }
  checkFound(player, treasure) {
    if (player.col == treasure.col && player.row == treasure.row) {
      console.log("colided");
      noLoop();
      // reset();
    }
  }
}
