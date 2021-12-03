import movements from "./movements.js";
import CoursePlanner, { simpleMoveInterpretter } from "./course_planner.js";
import Position from "./position.js";

const startingPosition = new Position();
const plan = new CoursePlanner(startingPosition, movements, simpleMoveInterpretter);
const endCoords = plan.determineEndCoords();
console.log(endCoords.horizontalPosition * endCoords.depth);