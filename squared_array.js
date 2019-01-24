// Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

/**
 * @param {number[]} 
 * @return {number[]}
 * * Time complexity: O(n)
 * * Space complexity: O(n)
 */

var sortedSquares = function(A) {
  return A.map(num => Math.pow(num, 2)).sort((a, b) => a - b);
};