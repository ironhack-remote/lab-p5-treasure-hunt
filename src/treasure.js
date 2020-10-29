class Treasure {
    setRandomPosition(){
        this.col=Math.floor(Math.random()*(WIDTH/SQUARE_SIDE))*SQUARE_SIDE;
        this.row=Math.floor(Math.random()*(WIDTH/SQUARE_SIDE))*SQUARE_SIDE;
    }

    draw(){
        image (pic2, this.row, this.col, SQUARE_SIDE, SQUARE_SIDE);
    }
}