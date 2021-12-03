import movements from "./movements.js";
import CoursePlanner from "./course_planner.js";
import Position from "./position.js";

const startingPosition = new Position();
const plan = new CoursePlanner(startingPosition, movements);
const endCoords = plan.determineEndPosition();
console.log(endCoords.horizontalPosition * endCoords.depth);