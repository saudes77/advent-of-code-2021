export default class CoursePlanner {
  constructor(startPosition, movements) {
    this.position = startPosition;
    this.movementPlan = movements;
  }

  maneuver(movement) {
    switch (movement.direction) {
      case "forward":
        this.position.horizontalPosition += movement.distance;
        break;
      case "up":
        this.position.depth -= movement.distance;
        break;
      case "down":
        this.position.depth += movement.distance;
        break;
    }
  }

  determineEndPosition() {
    this.movementPlan.forEach((movement) => {
      this.maneuver(movement);
    });

    return this.position.coords;
  }
}