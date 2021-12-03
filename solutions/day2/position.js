export default class Position {
  constructor(horizontalPosition = 0, depth = 0, aim = 0) {
    this.horizontalPosition = horizontalPosition;
    this.depth = depth;
    this.aim = aim;
  }

  get coords() {
    return {
      horizontalPosition: this.horizontalPosition,
      depth: this.depth
    }
  }

}