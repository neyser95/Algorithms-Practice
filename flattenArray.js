//* flatten array
//* Time: O(n log n)
//* Space: O(log n)
function flatten(array){
  // add whatever parameters you deem necessary - good luck!
  return array.reduce((acc, curr) => {
    if(Array.isArray(curr)){
        acc.push(...flatten(curr));
        return acc;
    }else{
        acc.push(curr);
        return acc;
    }
  }, []);
}