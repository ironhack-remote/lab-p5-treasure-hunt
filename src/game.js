class Game {
  // constructor
  constructor(){
    this.player = new Player(0,0);
    this.treasure = new Treasure(600,800);
  }

  // Method drawGrid
  drawGrid() {
    //Set the stroke weight 
    for (let i = 0; i <= WIDTH; i += SQUARE_SIDE){
      strokeWeight(6); 
      line(i, 0, i, WIDTH);
      line(0, i, HEIGHT, i);
    }

    this.player.draw();
    this.treasure.drawTreasure();

  }

}


