class Treasure {
    constructor(){
        const randomCol = SQUARE_SIDE * Math.floor(Math.floor(Math.random() * WIDTH)/SQUARE_SIDE);
        const randomRow = SQUARE_SIDE * Math.floor(Math.floor(Math.random() * HEIGHT)/SQUARE_SIDE);
        this.col = randomCol;
        this.row = randomRow;
    }

    setRandomPosition(){
        const randomCol = SQUARE_SIDE * Math.floor(Math.floor(Math.random() * WIDTH)/SQUARE_SIDE);
        const randomRow = QUARE_SIDE * Math.floor(Math.floor(Math.random() * HEIGTH)/SQUARE_SIDE);
        this.col = randomCol;
        this.row = randomRow;
    }

    drawTreasure(){
        image(picTr, this.col, this.row, SQUARE_SIDE, SQUARE_SIDE);
    }

}