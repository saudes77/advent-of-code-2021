class BingoSquare {
  constructor(x, y, number) {
    this.position = {x, y};
    this.number = number;
  }
}

export default class BingoBoard {
  constructor(input) {
    this.unmarkedSquares = this.#arrayToSquares(input);
    this.markedSquares = [];
    this.gridSize = input.length;
  }

  #arrayToSquares(array) {
    const squares = [];

    for (let row = 0; row < array.length; row++) {
      for (let column = 0; column < array[row].length; column++) {
        const number = array[row][column];
        squares.push(new BingoSquare(row, column, number));
      }
    }

    return squares;
  }

  get markedNumbers() {
    return this.markedSquares.map(square => square.number);
  }

  mark(number) {
    this.unmarkedSquares.forEach((square, index) => {
      if (square.number === number) {
        this.markedSquares.push(square);
        this.unmarkedSquares.splice(index, 1);
        return true;
      }
    });

    return false;
  }

  hasBingo() {
    if (this.markedSquares.length < this.gridSize) {
      return false;
    }
    
    let tallyRows = {};
    let tallyColumns = {};
    for (let index = 0; index < this.markedSquares.length; index++) {
      const square = this.markedSquares[index];
      const row = square.position.x;
      const column = square.position.y;
      tallyRows[row] = tallyRows[row] ? tallyRows[row] + 1 : 1;
      tallyColumns[column] = tallyColumns[column] ? tallyColumns[column] + 1 : 1;
      if (tallyRows[row] === this.gridSize || tallyColumns[column] === this.gridSize) {
        return true;
      }
    }

    return false;
  }

  sumUnmarked() {
    return this.unmarkedSquares.reduce((sum, square) => {
      return square.number + sum
    }, 0);
  }
}