export const countDepthIncreases = (measurements = []) => {
  let increases = 0;
  let lastDepth = null;

  measurements.forEach((depth) => {
    if (lastDepth != null && lastDepth < depth) {
      increases++
    }
    lastDepth = depth;
  })

  return increases
}

const sumWindow = (window) => window.reduce((prev, curr) => prev + curr)

export const getSummedWindows = (measurements = [], windowSize = 3) => {
  let sums = [];

  for (let i = 0; i < measurements.length; i++) {
    let window = measurements.slice(i, i + windowSize);

    if (window.length !== windowSize) {
      break;
    }

    sums.push(sumWindow(window))
  }

  return sums
}
