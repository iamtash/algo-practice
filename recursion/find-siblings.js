/*
'''
Find Siblings

We're given a tree, and we want to find all of the nodes in the tree that have siblings (other nodes under their parent).

Return an array of nodes representing each sibling in any order. No only children can be in your result array.
 

EXAMPLE(S)
      1
  2      3
_  4   _  _

should return [2, 3]

     12
  3      4
1  _   6  _

should return [3, 4]

        12
     3       4
  1   _    6   _
9  7      _ _

should return [3, 4, 9, 7]
'''
*/

class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function appendChildrenSiblings(root, arr) {
  if (root.left && root.right) {
    arr.push(root.left.value)
    arr.push(root.right.value)
  }
}

// our solution
function findSiblingNodes(root) {
  const result = [];
  if (!root) return result;

  function helper(root){
    if (!root.left && !root.right){
      return;
    }
    if (root.left){ 
      helper(root.left)
    }
    if (root.right){
      helper(root.right)
    }
    appendChildrenSiblings(root, result);
  }

  helper(root)
  return result;
}

// formation's solution
function findSiblingNodes(root) {
  let result = [];

  function dfs(node) {
    if (!node) return;

    if (node.left && node.right) {
      result.push(node.left);
      result.push(node.right);
    }

    dfs(node.left);
    dfs(node.right);
  }

  dfs(root);
  return result;
}

const root1 = new TreeNode(1, new TreeNode(2), new TreeNode(3)) // [2,3]

const root2 = new TreeNode(1, new TreeNode(2, null, new TreeNode(4)), new TreeNode(3)) // [2,3]

const mediumRoot = new TreeNode(12, new TreeNode(3, new TreeNode(1)), new TreeNode(4, new TreeNode(6))) // [3, 4]



const node9 = new TreeNode(9);
const node7 = new TreeNode(7);

const node1 = new TreeNode(1, node9, node7);

const node6 = new TreeNode(6);
const node4 = new TreeNode(4, node6);

const node3 = new TreeNode(3, node1);
const node12 = new TreeNode(12, node3, node4);

const largeRoot = node12; // [3, 4, 9, 7]
