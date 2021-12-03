import Position from "./position.js";

export const simpleMoveInterpretter = (position, movement) => {
  let newHorizontalPos = position.horizontalPosition;
  let newDepth = position.depth;
  switch (movement.direction) {
    case "forward":
      newHorizontalPos += movement.distance;
      break;
    case "up":
      newDepth -= movement.distance;
      break;
    case "down":
      newDepth += movement.distance;
      break;
  }
  return new Position(newHorizontalPos, newDepth);
}

export const advancedMoveInterpretter = (position, movement) => {
  let newHorizontalPos = position.horizontalPosition;
  let newDepth = position.depth;
  let newAim = position.aim;
  switch (movement.direction) {
    case "forward":
      newHorizontalPos += movement.distance;
      newDepth += (movement.distance * position.aim);
      break;
    case "up":
      newAim -= movement.distance;
      break;
    case "down":
      newAim += movement.distance;
      break;
  }
  return new Position(newHorizontalPos, newDepth, newAim);
}

export default class CoursePlanner {
  constructor(startPosition, movements, moveInterpretter) {
    this.startPosition = startPosition;
    this.movements = movements;
    this.moveInterpretter = moveInterpretter;
  }

  determineEndCoords() {
    const endPostion = this.movements.reduce(this.moveInterpretter, this.startPosition);
    return endPostion.coords;
  }
}