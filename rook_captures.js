/*
 * @param {character[][]} board
 * @return {number}
 */

var findRook = function(board){
  let position = [];
  for(let i = 0; i < board.length; i++){
      for (let j = 0; j < board[i].length; j++){
          if(board[i][j] === 'R') {
              position = [i, j];
              break;
          };
      }
     if(position.length !== 0) break;
  } 
  
  return position;
}

var checkVertical = function(rook, board){
  let count = 0;
  let i = rook[0];
  let j = rook[1];
  
  while(i > -1){
      if(board[i][j] === 'p'){
          count++;
          break;
      }else if(board[i][j] === 'B'){
          break; 
      } 
      i--;
  }
  
  i = rook[0];
  
  while(i < 8){
      console.log(board[i], i, j);
      if(board[i][j] === 'p'){
          count++;
          break;
      }else if(board[i][j] === 'B'){
          break; 
      } 
      console.log(board[i], i, j);
      i++;
  }
  
  return count;
}

var checkHorizontal = function(rook, board){
  let count = 0;
  let i = rook[0];
  let j = rook[1];
  
  while(j > -1){
      if(board[i][j] === 'p'){
          count++;
          break;
      }else if(board[i][j] === 'B'){
          break; 
      } 
      
      j--;
  }
  
  j = rook[1];
  
  while(j < 8){
      if(board[i][j] === 'p'){
          count++;
          break;
      }else if(board[i][j] === 'B'){
          break; 
      } 
      
      j++;
  }
  
  return count;
}

var numRookCaptures = function(board) {
  let rook = findRook(board);
  let captures = 0;
  let flag = true;
  
  captures += checkVertical(rook, board);
  captures += checkHorizontal(rook, board);
     
  return captures;
}
