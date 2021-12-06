import diagnosticOutput from "./diagnosticOutput.js";
import PowerConsumptionCalculator from "./powerConsumptionCalculator.js";

const calculator = new PowerConsumptionCalculator(diagnosticOutput);
console.log("gamma: ", calculator.gamma);
console.log(calculator.binaryGamma);
console.log("epsilon: ", calculator.epsilon);
console.log(calculator.binaryEpsilon);
console.log(calculator.gamma * calculator.epsilon);