//* Given a string S that only contains "I" (increase) or "D" (decrease), let N = S.length.

//* Return any permutation A of [0, 1, ..., N] such that for all i = 0, ..., N-1:

//* If S[i] == "I", then A[i] < A[i+1]
//* If S[i] == "D", then A[i] > A[i+1]

/**
 * @param {string} S
 * @return {number[]}
 * * Time: O(n);
 * * Space: O(n);
 */

var diStringMatch = function(S) {
  let result = [];
  let A = 0;
  let N = S.length;
  
  for(i = 0; i < S.length; i++){
      if(S[i] === 'I'){
          result.push(A++);
      }else{
          result.push(N--);
      }
  }
  
  result.push(A++);
  return result;
};