export const determineMostCommonBits = (binaryStrings) => {
  let onesTally = [];

  binaryStrings.forEach((binaryString) => {
    let bits = Array.from(binaryString);

    bits.forEach((bit, index) => {
      if (typeof onesTally[index] === "undefined") {
        onesTally[index] = 0;
      }

      if (bit === "1") {
        onesTally[index] += 1;
      }
    });
  });

  return onesTally
}
