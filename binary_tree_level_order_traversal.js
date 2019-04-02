// * Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  let queue = [root.left, root.right];
  let result = [[root.val]];

  while (queue.length !== 0) {
    let level = [];
    // * queueInx will keep track of the nodes inside the queue of each level on the BST
    let queueLength = queue.length;
    for (let j = 0; j < queueLength; j++) {
      let node = queue.shift();
      if (!node) continue;
      level.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    if (level.length !== 0) result.push(level);
  }

  return result;
}