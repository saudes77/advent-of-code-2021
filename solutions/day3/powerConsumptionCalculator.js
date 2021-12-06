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
    let onesTally = determineMostCommonBits(diagnosticReport);

    let gamma = "";
    let epsilon = "";
    const splitPoint = diagnosticReport.length / 2;
    const minMajorityTally = Math.ceil(splitPoint);

    onesTally.forEach((positionTally) => {
      if (positionTally === splitPoint) {
        console.error("Unable to calculate power consumption. Check input.");
        return;
      }

      if (positionTally < minMajorityTally) {
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