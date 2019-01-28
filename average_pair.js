// * Write a function called averagePair. Given a sorted array and a target average, determine if there is a pair in the array where the average of the pair equal the target average.
//  * Bonus - Time: O(n) Space: O(1)

// * Time: O(n) Space: O(1)
function averagePair(array, target){
  if(array.length === 0) return false;
  let i = 0;
  let j = array.length - 1;
  
  while(i < j){
      let average = (array[i] + array[j])/2;
      if(average === target){ 
          return true;
      }else if(average > target){
          j--;
      }else{
          i++;   
      }
  }   
  
  return false;
}