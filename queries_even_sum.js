/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 * * Time Complecity O(n^2)
 * * Space Complexity O(n)
 */
var sumEvenAfterQueries = function(A, queries) {
  let result = [];
  let val, index;
  
  for(let i = 0; i < queries.length; i++){
      val = queries[i][0];
      index = queries[i][1];
      
      A[index] = A[index] + val;
      
      result.push(
          A.reduce((sum, val) => {
              if(val % 2 === 0){
                  sum = sum + val;
              }
              
              return sum;
          }, 0)
      );
  }
  
  return result;
};