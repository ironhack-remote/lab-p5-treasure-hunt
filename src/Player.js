class Player {
    constructor(){
        this.x = 0;
        this.y = 0;
        this.height = 70;
       this.width = 70;
    }

    moveLeft() {
        if (this.x <= 0) {
          return;
        }
        this.x -= 70;
      }
    
      moveRight() {
        if (this.x >= WIDTH - this.width) {
          return;
        }
        this.x += 70;
      }
    
      moveUp() {
        if (this.y <= 0) {
          return;
        }
        this.y -= 70;
      }
    
      moveDown() {
        if (this.y >= WIDTH - this.height) {
          return;
        }
        this.y += 70;
      }
    draw() {
        image(pic,this.x, this.y, this.width, this.height);
      }
}