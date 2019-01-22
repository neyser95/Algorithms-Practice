// Given an integer array with even length, where different numbers in this array represent different kinds of candies. Each number means one candy of the corresponding kind. You need to distribute these candies equally in number to brother and sister. Return the maximum number of kinds of candies the sister could gain.
/**
 * @param {number[]} candies
 * @return {number}
 */
// Time Complexty O(n);
// Space Complexty O(n);

var distributeCandies = function (candies) {
  const candySet = new Set(candies);
  const max = candies.length / 2;
  return max < candySet.size ? max : candySet.size;
};