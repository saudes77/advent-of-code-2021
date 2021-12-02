import input from '../../data/input.js'
import { countDepthIncreases, getSummedWindows } from "../../index.js";

const windowSums = getSummedWindows(input)
console.log(countDepthIncreases(windowSums))