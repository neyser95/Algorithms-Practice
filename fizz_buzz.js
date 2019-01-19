/**
 * @param {number} n
 * @return {string[]}
 */

//  time complexity O(n)
//  time complexity O(n)

var fizzBuzz = function (n) {
  const result = [];

  for (let i = 1; i <= n; i++) {

    if(i % 3 === 0 && i % 5 === 0){
      result.push('FizzBuzz');
    }else if (i % 3 === 0) {
      result.push('Fizz');
    }else if (i % 5 === 0) {
      result.push('Buzz');
    }

  }

  return result;
};