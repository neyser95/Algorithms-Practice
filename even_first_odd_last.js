/**
 * @param {number[]} A
 * @return {number[]}
 */
// First solution. Faster
// Time complexity: O(n);
// Space Complexity: O(n);

const sortArrayByParity = function(A) {
    const odd = [];
    const even = [];
    
    for(let i = 0; i < A.length; i++){
      if(A[i] % 2 === 0){
          even.push(A[i]);
      }else{
          odd.push(A[i]);
      }
    }  
    
    return even.concat(odd);
};

// First solution. Slower
// Time complexity: O(n);
// Space Complexity: O(1);
const sortArrayByParity = function(A) {
  let j = A.length - 1;
  let i = 0;
  
  while(i < j){
      if(A[i] % 2 !== 0){
          // Swap both elements             
          [A[i], A[j]] = [A[j], A[i]];
          j--;
      }else{
          i++;
      }
  }
  
  return A;
};