class Treasure {
  constructor() {
    this.z=Math.floor(Math.random() * 500);
    this.w= Math.floor(Math.random() * 500);
  }
  setRandomPosition() {
    this.z = Math.floor(Math.random() * 1000);
    this.w = Math.floor(Math.random() * 1000);
  }

  drawTreasure(){
    image(tres,this.z, this.w, 70,70);
  }
}
