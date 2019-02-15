// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(array){
  if(array.length === 0) return 1;
  let result = array[array.length - 1];
  array.pop();
  
  return result * productOfArray(array);
}