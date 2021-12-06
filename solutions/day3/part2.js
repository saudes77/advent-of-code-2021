import { determineMostCommonBit } from "./binaryUtils.js";
import diagnosticOutput from "./diagnosticOutput.js";

const oxygenGeneratorBitLogic = (bitTally) => ((bitTally > -1) ? "1" : "0");
const co2ScrubberBitLogic = (bitTally) => ((bitTally > -1) ? "0" : "1");

const findRelevantData = (dataPool, bitFromTally, position = 0) => {
  if (dataPool.length <= 1) {
    return dataPool[0];
  }

  const bitTally = determineMostCommonBit(dataPool, position);
  const bitToFilterBy = bitFromTally(bitTally);
  dataPool = dataPool.filter(binaryString => binaryString.charAt(position) === bitToFilterBy)

  return findRelevantData(dataPool, bitFromTally, ++position);
}

const oxygenGeneratorRatingAsBinary = findRelevantData(diagnosticOutput, oxygenGeneratorBitLogic);
const oxygenGeneratorRating = parseInt(oxygenGeneratorRatingAsBinary, 2);
console.log(oxygenGeneratorRatingAsBinary)
console.log(oxygenGeneratorRating)
const co2ScrubberRatingAsBinary = findRelevantData(diagnosticOutput, co2ScrubberBitLogic);
const co2ScrubberRating = parseInt(co2ScrubberRatingAsBinary, 2);
console.log(co2ScrubberRatingAsBinary)
console.log(co2ScrubberRating)

console.log(oxygenGeneratorRating * co2ScrubberRating)