class Player {
    constructor(){
        this.x = 0;
        this.y = 0;
        this.height = SQUARE_SIDE;
       this.width = SQUARE_SIDE;
    }

    moveLeft() {
        if (this.x <= 0) {
          return;
        }
        this.x -= SQUARE_SIDE;
      }
    
      moveRight() {
        if (this.x >= WIDTH - this.width) {
          return;
        }
        this.x += SQUARE_SIDE;
      }
    
      moveUp() {
        if (this.y <= 0) {
          return;
        }
        this.y -= SQUARE_SIDE;
      }
    
      moveDown() {
        if (this.y >= WIDTH - this.height) {
          return;
        }
        this.y += SQUARE_SIDE;
      }
    draw() {
        image(pic,this.x, this.y, this.width, this.height);
      }

    collisionCheck(treasure){
      if (this.x === treasure.x && this.y === treasure.y) {
        return true; 
      } 
      return false; 
    }
}
