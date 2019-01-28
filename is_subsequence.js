// * write a function called isSubsequence which takes 2 strings and checks whether the characters in the first string form a subsequence of the characters in the second string.
// * Example: ('sing', 'sting') - true
// * Example: ('abc', 'acb') - false (order matters)

// * Time: O(n + M);
// * Space: O(1);
function isSubsequence(stringOne, stringTwo) {
  if(stringOne.length > stringTwo.length) return false;
  let i = 0; 
  let j = 0;
  
  while(j <= stringTwo.length){
      if(i === stringOne.length) return true;
      if(stringTwo[j] === stringOne[i]){
          i++;   
      }
      j++;
  }
  
  return false;
}