class Player {
    // constructor
    constructor(col, row){
        this.col = col;
        this.row = row;
    }

    // methods
    moveUp(){
        this.row -= SQUARE_SIDE;
    }

    moveDown(){
        this.row += SQUARE_SIDE;
    }

    moveLeft() {
        this.col -= SQUARE_SIDE;
    }

    moveRight() {
        this.col += SQUARE_SIDE; 
    }

    draw(){
        image(pic, this.col, this.row, SQUARE_SIDE, SQUARE_SIDE);
    }

}