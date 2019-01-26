// implement a function the counts the number of unique values in an array
// Bonus: Do this in O(n) time and O(1) space.

// Time: O(n)
// Space: O(1)
function countUniqueValues(array){
  console.log(array);
if(array.length === 0) return 0;
//Create two pointers, (i and j), to help find unique values.
let i = 0;
let j = 1;

//Compare i to j if i is not equal to to j replace array[i + 1] with j and increment i by 1. If i is equal to j then increment j by 1.
while(j < array.length && i <= j){
  if(array[i] !== array[j]){
      array[i + 1] = array[j];
      i++;
  }
  
  j++;
}

// return the value of i plus 1.
return i + 1;
}