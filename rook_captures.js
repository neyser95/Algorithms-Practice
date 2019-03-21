// * On an 8 x 8 chessboard, there is one white rook.  There also may be empty squares, white bishops, and black pawns.  These are given as characters 'R', '.', 'B', and 'p' respectively. Uppercase characters represent white pieces, and lowercase characters represent black pieces.

// * The rook moves as in the rules of Chess: it chooses one of four cardinal directions (north, east, west, and south), then moves in that direction until it chooses to stop, reaches the edge of the board, or captures an opposite colored pawn by moving to the same square it occupies.  Also, rooks cannot move into the same square as other friendly bishops.

// * Return the number of pawns the rook can capture in one move.

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
