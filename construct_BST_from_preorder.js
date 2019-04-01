// * Return the root node of a binary search tree that matches the given preorder traversal.
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
function bstFromPreorder(preorder){
  const root = new TreeNode(preorder[0]);

  for(let i = 0; i < preorder.length; i++){
    addNode(preorder[i], root);
  }

  function addNode(val, node){
    if(node.val > val){
      if(node.left !== null){
        addNode(val, node.left);
      }else{
        node.left = new TreeNode(val);
      }
    }

    if(node.val < val){
      if(node.right !== null){
        addNode(val, node.right);
      }else{
        node.right = new TreeNode(val);
      }
    }

    return;
  }

  return root;
}