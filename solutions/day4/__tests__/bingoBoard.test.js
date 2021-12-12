import BingoBoard from "../bingoBoard.js"

const sampleBoardInput = [
  [22, 13, 17, 11, 0],
  [8, 2, 23, 4, 24],
  [21, 9, 14, 16, 7],
  [6, 10, 3, 18, 5],
  [1, 12, 20, 15, 19]
]

describe("BingoBoard", () => {
  it("is markable", () => {
    const board = new BingoBoard(sampleBoardInput);
    expect(board.markedNumbers).toEqual([]);
    board.mark(9);
    expect(board.markedNumbers).toEqual([9]);
  });

  it("recognizes horizontal bingo", () => {
    const board = new BingoBoard(sampleBoardInput);
    expect(board.hasBingo()).toEqual(false);
    board.mark(21);
    expect(board.hasBingo()).toEqual(false);
    board.mark(9);
    expect(board.hasBingo()).toEqual(false);
    board.mark(14);
    expect(board.hasBingo()).toEqual(false);
    board.mark(16);
    expect(board.hasBingo()).toEqual(false);
    board.mark(7);
    expect(board.hasBingo()).toEqual(true);
  });

  it("recognizes vertical bingo", () => {
    const board = new BingoBoard(sampleBoardInput);
    expect(board.hasBingo()).toEqual(false);
    board.mark(13);
    expect(board.hasBingo()).toEqual(false);
    board.mark(2);
    expect(board.hasBingo()).toEqual(false);
    board.mark(9);
    expect(board.hasBingo()).toEqual(false);
    board.mark(10);
    expect(board.hasBingo()).toEqual(false);
    board.mark(12);
    expect(board.hasBingo()).toEqual(true);
  });

  it("can sum its unmarked numbers", () => {
    const board = new BingoBoard(sampleBoardInput);
    expect(board.sumUnmarked()).toEqual(300);
    board.mark(20);
    expect(board.sumUnmarked()).toEqual(280);
  });
});