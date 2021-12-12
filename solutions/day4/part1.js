import Caller from "./caller.js";
import boards from "./boards.js";
import BingoBoard from "./bingoBoard.js";

const bingoBoards = boards.map(board => new BingoBoard(board));
const caller = new Caller();
let winningBoard = null;
let currentCall = null;

do {
  currentCall = caller.call();
  for (let index = 0; index < bingoBoards.length; index++) {
    const bingoBoard = bingoBoards[index];
    bingoBoard.mark(currentCall);
    if (bingoBoard.hasBingo()) {
      winningBoard = bingoBoard;
      break;
    }
  }
} while (!winningBoard);

const winningScore = winningBoard.sumUnmarked();
console.log(winningScore * currentCall);