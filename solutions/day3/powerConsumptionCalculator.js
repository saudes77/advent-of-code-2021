import { determineMostCommonBits } from "./binaryUtils.js";

class PowerConsumptionCalculator {
  constructor(diagnosticReport) {
    const binaryRates = PowerConsumptionCalculator.calculateRatesInBinary(diagnosticReport);
    this.binaryGamma = binaryRates.gamma;
    this.binaryEpsilon = binaryRates.epsilon;
  }

  get gamma() {
    return parseInt(this.binaryGamma, 2);
  }

  get epsilon() {
    return parseInt(this.binaryEpsilon, 2);
  }

  static calculateRatesInBinary = (diagnosticReport) => {
    let bitTallies = determineMostCommonBits(diagnosticReport);

    let gamma = "";
    let epsilon = "";

    bitTallies.forEach((positionTally) => {
      if (positionTally === 0) {
        console.error("Unable to calculate power consumption. Check input.");
        return;
      }
      else if (positionTally < 0) {
        gamma += "0";
        epsilon += "1";
      }
      else {
        gamma += "1";
        epsilon += "0";
      }
    });

    return {gamma, epsilon}
  }
}

export default PowerConsumptionCalculator;