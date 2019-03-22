// *Given an 2D board, count how many battleships are in it. The battleships are represented with 'X's, empty slots are represented with '.'s. You may assume the following rules:
// * You receive a valid board, made of only battleships or empty slots.
// *  Battleships can only be placed horizontally or vertically. In other words, they can only be made of the shape 1xN (1 row, N columns) or Nx1 (N rows, 1 column), where N can be of any size.
//*  At least one horizontal or vertical cell separates between two battleships - there are no adjacent battleships.
/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
  return board.reduce((acc, curr, i, array) => {
      for(let a = 0; a < curr.length; a++){
          if(curr[a] === '.') continue;
          if(
              array[i-1] !== undefined && 
              array[i - 1][a] !== 'X' &&
              curr[a - 1] !== 'X'
          ){
              acc++;
              if(curr[a + 1] === 'X'){
                  a = a + 1;
                  continue;
              }
          }else if(
              array[i-1] === undefined &&
              curr[a - 1] !== 'X'
          ){
              acc++; 
              if(curr[a + 1] === 'X'){
                  a = a + 1;
                  continue;
              }  
          }
      }
      
      return acc;
  }, 0);
};