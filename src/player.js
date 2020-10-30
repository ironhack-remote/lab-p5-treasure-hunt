class Player {
  constructor(col, row) {
    this.col = col;
    this.row = row;
  }

  moveUp() {
    this.row -= 1;
  }

  moveDown() {
    this.row += 1;
  }

  moveLeft() {
    this.col -= 1;
  }

  moveRight() {
    this.col += 1;
  }

  collisionCheck(treasure) {
    const rightSide = this.col + SQUARE_SIDE;
    const trasureRightSide = treasure.col + otherPlayer.width;
    const bottomSide = this.row + SQUARE_SIDE;
    const treasureBottomSide = otherPlayer.topSide + otherPlayer.height;

    const isTouchingOnLeft = rightSide >= otherPlayer.leftSide;
    const isTouchingOnRight = this.leftSide <= otherPlayerRightSide;
    const isTouchingOnTop = bottomSide >= otherPlayer.topSide;
    const isTouchingOnBottom = this.topSide <= otherPlayerBottomSide;
  }

  draw() {
    image(pic, this.col * SQUARE_SIDE, this.row * SQUARE_SIDE, 100, 100);
  }
}
