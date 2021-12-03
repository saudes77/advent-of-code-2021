export default class Submarine {
  constructor(horizontalPosition = 0, depth = 0) {
    this.horizontalPosition = horizontalPosition;
    this.depth = depth;
  }

  get location() {
    return {
      horizontalPosition: this.horizontalPosition,
      depth: this.depth
    }
  }

  maneuver(movement) {
    switch (movement.direction) {
      case "forward":
        this.horizontalPosition += movement.distance;
        break;
      case "up":
        this.depth -= movement.distance;
        break;
      case "down":
        this.depth += movement.distance;
        break;
    }
  }

  navigate(movements) {
    movements.forEach((movement) => {
      this.maneuver(movement);
    });

    return this.location
  }
}