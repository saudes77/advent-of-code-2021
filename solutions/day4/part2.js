import Caller from "./caller.js";
import boards from "./boards.js";
import BingoBoard from "./bingoBoard.js";

const bingoBoards = boards.map((board) => new BingoBoard(board));
const caller = new Caller();

function findLastWinner(bBoards, bCaller) {
  let currentCall = bCaller.call();
  bBoards.forEach(bBoard => bBoard.mark(currentCall));

  const nonWinningBingoBoards = bBoards.filter((bBoard, index) => !bBoard.hasBingo());
  if (nonWinningBingoBoards.length === 0) {
    return bBoards[bBoards.length - 1]
  }
  return findLastWinner(nonWinningBingoBoards, bCaller);
}

const lastWinningBoard = findLastWinner(bingoBoards, caller);
const lastScore = lastWinningBoard.sumUnmarked();
const finalCall = lastWinningBoard.markedNumbers.pop();
console.log(lastScore);
console.log(finalCall);
console.log(lastScore * finalCall);