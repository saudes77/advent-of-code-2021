/**
 * Accepts an array of strings that represent binary numbers and determines whether
 * 1 or 0 appear the most in each position. Return value is an array where a
 * positive number means 1s appeared most in a given position, a negative number
 * means 0s appeared most, and 0 means 1s and 0s appeared equally.
 * @param {Array} binaryStrings
 * @returns {Array}
 */
export const determineMostCommonBits = (binaryStrings) => {
  let bitTallies = [];

  binaryStrings.forEach((binaryString) => {
    let bits = Array.from(binaryString);

    bits.forEach((bit, index) => {
      if (typeof bitTallies[index] === "undefined") {
        bitTallies[index] = 0;
      }

      switch (bit) {
        case "1":
          bitTallies[index] += 1;
          break;
        case "0":
          bitTallies[index] -= 1;
          break;
      }
    });
  });

  return bitTallies;
}

export const determineMostCommonBit = (binaryStrings, position) => {
  let bitTally = 0;

  binaryStrings.forEach((binaryString) => {
    let bit = binaryString.charAt(position);

    switch (bit) {
      case "1":
        bitTally += 1;
        break;
      case "0":
        bitTally -= 1;
        break;
    }
  });

  return bitTally;
};
