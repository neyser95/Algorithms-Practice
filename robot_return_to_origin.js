/**
 * @param {string} moves
 * @return {boolean}
 */

//* Time: O(n)
//* Space: O(1)
var judgeCircle = function(moves) {
  const movesArr = moves.split('');
  let x = 0;
  let y = 0;
  
  for(let i = 0; i < movesArr.length; i++){
      if(movesArr[i] === 'U'){
          x += 1;
      }else if(movesArr[i] === 'D'){
          x -=   1;
      }else if(movesArr[i] === 'L'){
          y -= 1;
      }else{
          y += 1;
      }
  }
  
  
  return (x === 0 && y === 0) ? true : false;
};