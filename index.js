export const countDepthIncreases = (input = []) => {
  let increases = 0;
  let lastDepth = null;

  input.forEach((depth) => {
    if (lastDepth != null && lastDepth < depth) {
      increases++
    }
    lastDepth = depth;
  })

  return increases
}

const sumWindow = (window) => window.reduce((prev, curr) => prev + curr)

export const getSummedWindows = (input = [], windowSize = 3) => {
  let sums = [];

  for (let i = 0; i < input.length; i++) {
    let window = input.slice(i, i + windowSize);

    if (window.length !== windowSize) {
      break;
    }

    sums.push(sumWindow(window))
  }

  return sums
}
