
/*
'''
Binary Tree Level-By-Level

Given a binary tree, return a list of lists of the nodes' values organized as a level-by-level view from left to right.

EXAMPLE(S)
Input:
   3
 2  4
1    5

Output:
[[3], [2, 4], [1, 5]]

[3,2,4,1,5]

result = [[3]]
init q to [3]
while q has stuff [2,4]
 
  level = []
  while q
    curr = q.dq.left
    if curr.left ? append to level
    if curr.right ? append to level.  #[]

  result.append(level)
  q = level

Q [2,4, ]
do x2
  dq 2
Results [[3], [2]]
 

# [[3] , [2,4], [1,5]]

FUNCTION SIGNATURE
function levelOrder(root) {
def levelOrder(node: Node) -> list[list[int]]:
'''
*/


class TreeNode {
  constructor(value = null, left = null, right = null){
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function levelOrder(root) {
  if(!root){
    return "bye";
  }

  let q = [root]
  let result = [[root.value]];

  while (q.length){
    let level = []
    const n = q.length;
    for (let i = 0; i < n; i++) {
      let current = q.shift();

      if(current.left) {
        level.push(current.left.value);
        q.push(current.left);
      }
      if(current.right) {
        level.push(current.right.value);
        q.push(current.right);
      }
    }
    if (level.length){
      result.push(level);
    }
  }
  return result;
}
//    3
//  2  4
// 1    5
let tree = new TreeNode(3, new TreeNode(2, new TreeNode(1)), new TreeNode(4, null, new TreeNode(5)));
// console.log(tree)


//     3
//   2  4
// 1 6  7 5
const tree2 = new TreeNode(3, new TreeNode(2, new TreeNode(1), new TreeNode(6)), new TreeNode(4, new TreeNode(7), new TreeNode(5)));
console.log(levelOrder(tree2));

tree = new TreeNode(1);
console.log(levelOrder(tree));

tree = new TreeNode(2, new TreeNode(1), null);
console.log(levelOrder(tree));

tree = new TreeNode(2, null, new TreeNode(3));
console.log(levelOrder(tree));

tree = new TreeNode(3, new TreeNode(2), new TreeNode(4));
console.log(levelOrder(tree));

tree = new TreeNode(3, new TreeNode(2, new TreeNode(1)), new TreeNode(4, null, new TreeNode(5)));
console.log(levelOrder(tree));
