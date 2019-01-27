// * Write a function called same frequency. Given two positive integers, find out ifthe two numbers have the same frequency of digits. Solution must be Time: O(n).


//* Time: O(n) 
function sameFrequency(numOne, numTwo){
  numOne = String(numOne);
  numTwo = String(numTwo);
  if(numOne.length !== numTwo.length){return false;}
  const frequencyOne = {};
  const frequencyTwo = {};
  
  for(const char of numOne){
      if(frequencyOne[char]){
          frequencyOne[char]++;
      }else{
          frequencyOne[char] = 1;
      }
  }
  
  for(const char of numTwo){
      if(frequencyTwo[char]){
          frequencyTwo[char]++;
      }else{
          frequencyTwo[char] = 1;
      }
  }
  
  for(let key in frequencyOne){
      if(!frequencyTwo[key] || frequencyTwo[key] !== frequencyOne[key]){
          return false;
      }
  }
  
  return true;
}
