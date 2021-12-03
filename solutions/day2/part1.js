import movements from "./movements.js";
import Submarine from "./submarine.js";

const yellow_submarine = new Submarine();
const endLocation = yellow_submarine.navigate(movements);
console.log(endLocation.horizontalPosition * endLocation.depth);