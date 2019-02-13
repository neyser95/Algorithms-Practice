// * Find the maximum sum of a subarray with the length of the number passed to the function
// * Time Complexity O(N)
// * Space Complexity O(1)
function maxSubarraySum(array, subNum){
  if(subNum > array.length) return null;
  let maxSum = 0;
  let tempSum = 0;
  let i = 0;
  let j = 0;
  
  while(j < subNum){
      maxSum += array[j];
      j++;
  }
  
  tempSum = maxSum;
  
  while(i < array.length - subNum){
      tempSum = tempSum - array[i];
      i++;
      tempSum = tempSum + array[j];
      j++;
      maxSum = Math.max(maxSum, tempSum);
  }
  
  return maxSum;
}