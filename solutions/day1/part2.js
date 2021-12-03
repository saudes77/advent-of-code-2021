import measurements from './depthMeasurements.js'
import { countDepthIncreases, getSummedWindows } from "./depthChangeUtils.js";

const windowSums = getSummedWindows(measurements)
console.log(countDepthIncreases(windowSums))