/*
Binary Tree Level-By-Level

Given a binary tree, return a list of lists of the nodes' values organized as a level-by-level view from left to right.
 

EXAMPLE(S)
Input:
   3
 2  4
1    5

Output:
[[3], [2, 4], [1, 5]]
 

FUNCTION SIGNATURE
function levelOrder(root) {
def levelOrder(node: Node) -> list[list[int]]:

[3]
level = []
curr = 3
q = []
level = [3]
q = [2,4]

*/

class TreeNode {
  constructor(value = null, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function levelOrder(root) {
  const q = [root];
  const result = [];
  
  while (q.length) {
    const level = [];
    for (let i = q.length; i >= 1; i--) {
      const curr = q.shift();
      level.push(curr.value);
      if (curr.left) {
        q.push(curr.left);
      }
      if (curr.right) {
        q.push(curr.right);
      }
    }
    result.push(level);
  }

  return result;
}

let tree = new TreeNode(3, new TreeNode(2, new TreeNode(1)), new TreeNode(4, null, new TreeNode(5)));

// 1
// Output:
// 1
tree = new TreeNode(1)

// 1
// 2    3
// Output:
// 1
// 23
tree = new TreeNode(1, new TreeNode(2), new TreeNode(3));

//     1
//   2
// 3
// Output:
// 1
// 2
// 3
tree = new TreeNode(1, new TreeNode(2, new TreeNode(3)));

console.log(levelOrder(tree));