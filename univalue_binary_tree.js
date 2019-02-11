/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// * Time Complexity O(n)
// * Space Complexity O(1)
var isUnivalTree = function (root) {
  let curr = root;
  let univalued = true;

  if (root.left) {
    if (curr.val === curr.left.val && univalued) {
      univalued = isUnivalTree(curr.left);
    } else {
      univalued = false;
    }
  }

  if (root.right) {
    if (curr.val === curr.right.val && univalued) {
      univalued = isUnivalTree(curr.right);
    } else {
      univalued = false;
    }
  }

  return univalued;
};

// * Time Complexity O(n)
// * Space Complexity O(n)
var isUnivalTree = function (root) {
  if (!root) return true;
  var set = new Set();
  function inOrder(root) {
    if (!root) return;
    inOrder(root.left);
    set.add(root.val);
    inOrder(root.right);
  }
  inOrder(root);
  return set.size === 1;
};