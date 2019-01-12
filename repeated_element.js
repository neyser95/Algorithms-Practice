// In a array A of size 2N, there are N+1 unique elements, and exactly one of these elements is repeated N times.

// Return the element repeated N times.

/**
 * @param {number[]} A
 * @return {number}
 */

// worst time complexity: O(n)
// worst space complexity: O(n)
var repeatedNTimes = function (A) {
  let obj = {};

  for (const el of A) {
    if (obj[el]) {
      return el;
    } else {
      obj[el] = 1;
    }
  }
  return null;
};