/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
  const results = [];
  
  for(let i = left; i <= right; i++){
      let numStr = String(i);
      let selfDivide = true;
      for(let char in numStr){
          if(i % numStr[char] !== 0){
              selfDivide = false;
          }
      }
      
      if(selfDivide){
          results.push(i);
      }
  }
      
  return results;
};