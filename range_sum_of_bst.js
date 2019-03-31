// * Given the root node of a binary search tree, return the sum of values of all nodes with value between L and R (inclusive).
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
  let totalSum = 0;
  
  function traverseRoot(root){
      if(root.val >= L && root.val <= R) totalSum += root.val;
      if(root.left !== null) traverseRoot(root.left);
      if(root.right !== null) traverseRoot(root.right);
      return;
  }
  
  traverseRoot(root);
  
  return totalSum;
};