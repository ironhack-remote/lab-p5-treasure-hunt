class Treasure {
  constructor() {
    this.y =Math.floor(Math.random()*(WIDTH/SQUARE_SIDE))*SQUARE_SIDE;
    this.x =Math.floor(Math.random()*(WIDTH/SQUARE_SIDE))*SQUARE_SIDE;
  }
  setRandomPosition() {
    const randomX = Math.floor(Math.random()*(WIDTH/SQUARE_SIDE))*SQUARE_SIDE;
    const randomY = Math.floor(Math.random()*(WIDTH/SQUARE_SIDE))*SQUARE_SIDE;
    this.x = randomX;
    this.y = randomY;
  }

  drawTreasure(){
    image(tres,this.x, this.y,SQUARE_SIDE,SQUARE_SIDE);
  }
}
