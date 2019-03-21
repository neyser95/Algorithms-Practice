// * In a 2 dimensional array grid, each value grid[i][j] represents the height of a building located there. We are allowed to increase the height of any number of buildings, by any amount (the amounts can be different for different buildings). Height 0 is considered to be a building as well. 

//* At the end, the "skyline" when viewed from all four directions of the grid, i.e. top, bottom, left, and right, must be the same as the skyline of the original grid. A city's skyline is the outer contour of the rectangles formed by all the buildings when viewed from a distance. See the following example.

//* What is the maximum total sum that the height of the buildings can be increased?
/**
 * @param {number[][]} grid
 * @return {number}
 */

// * Finds the max top to bottom view of skyline in grid
var findMaxTopToBot = function(grid){
    const result = grid[0].slice();

    for(let i = 1; i < grid.length; i++){
        grid[i].forEach((num, index) => {
            result[index] = Math.max(result[index], num);
        });
    }
    
    return result;
}

// * Finds max the left to right view of skyline in grid
var findMaxLeftToRight = function(grid){
    const result = [];
    for(let i = 0; i < grid.length; i++){
       result.push(Math.max(...grid[i]));
    }
    
    return result;
}

var maxIncreaseKeepingSkyline = function(grid) {
    const topToBot = findMaxTopToBot(grid);
    const LeftToRight = findMaxLeftToRight(grid);
    let totalSum = 0;
    
    console.log(topToBot, LeftToRight);
    for(let i = 0; i < grid.length; i++){
        grid[i].forEach((num, index) => {
            let maxHeight = Math.min(topToBot[i], LeftToRight[index]);
            totalSum = totalSum + (maxHeight - num);            
        });
    }
    
    return totalSum;
};