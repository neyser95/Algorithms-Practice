/**
  * @param {number} x
  * @param {number} y
  * @return {number}
  * * Time complexity O(n)
  * * Space Complexity O(1);
*/
var hammingDistance = function(x, y) {
  // uses bitwise XOR operator and than turn the result to a string represented in base 2.
  const z = (x ^ y).toString(2);
  let counter = 0;
  
  for(let i = 0; i < z.length; i++){
    // Cheacks to see how many ones between x and y there were.
      if(z[i] === '1'){
          counter++;
      }
  }
  
  return counter;
};