/*

Prompt:

You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.

*/

// Original solution:
const positiveSum = arr => {
  const positiveNums = [];
  arr.map((item) => {
    if (Math.sign(item) === 1) {
      positiveNums.push(item);
    }
  });
  if (positiveNums.length > 0) {
    return positiveNums.reduce((a, b) => a + b);
  } else {
    return 0;
  }
}

// Refactor One:
const positiveSum = arr => {
  let sumOfPositives = 0;
  arr.map((item) => {
    if (Math.sign(item) === 1) {
      sumOfPositives += item;
    }
  });
  return sumOfPositives;
}

// Final Refactor:
const positiveSum = arr => arr.reduce((sum, n) => n > 0 ? sum + n : sum, 0); 