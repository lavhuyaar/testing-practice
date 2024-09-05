function analyzeArray(arr) {
  return {
    average: arr.reduce((prev, curr) => prev + curr / arr.length, 0),
    min: arr.reduce((prev, curr) => Math.min(prev, curr), arr[0]),
    max: arr.reduce((prev, curr) => Math.max(prev, curr), arr[0]),
    length: arr.length,
  };
}

module.exports = analyzeArray;
