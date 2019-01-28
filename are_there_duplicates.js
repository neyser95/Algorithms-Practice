// * Check to see if there are duplicate arguements passed to areThereDuplicates function.
// * restrictions - Time: O(n) Space: O(n)
// * Bonus - Time: O(n log n) Space: O(1)


// *  Time: O(n) Space: O(n)
function areThereDuplicates(...args) {
  let duplicateObj = {};
  
  for(let i = 0; i < args.length; i++){
      if(duplicateObj[args[i]]){
          return true;
      }else{
          duplicateObj[args[i]] = args[i];
      }
  }
  
  return false;
}

// * Time: O(n log n) Space: O(1)
function areThereDuplicates(...args) {
  // Two pointers
  args.sort((a,b) => a > b);
  let start = 0;
  let next = 1;
  while(next < args.length){
    if(args[start] === args[next]){
        return true
    }
    start++
    next++
  }
  return false
}