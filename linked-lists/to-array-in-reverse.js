/*
'''
❓ PROMPT
Given a linked list, return an array with all the elements in reverse.

Example(s)
head = 1 -> 3 -> 5 -> 2
createArrayInReverse(head) == [2,5,3,1]
 

🔎 EXPLORE
List your assumptions & discoveries:
- return empty array if head is null
 

Insightful & revealing test cases:
- empty list
- list of one
- list of two
- list of three
- list of many
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
use recursion to capture list in reverse
Time: O(N)
Space: O(N)
 

📆 PLAN
Outline of algorithm #: 
initialize result to empty array
helper function accepts a node arg
  base: if node is null, return
  recurse: helper(node.next)
  backwards: append node.value to result

call helper(head)
return result

'''
*/

class ListNode {
  constructor(value = 0, next = null) {
    this.value = value;
    this.next = next;
  }
}

// solution
function createArrayInReverse(node) {
  let result = [];

  function helper(node) {
    if (node == null) {
      return;
    }

    helper(node.next);

    result.push(node.value);
  }

  helper(node);
  return result;
}

// testing helper
function arrayToLL(arr) {
  const dummy = new ListNode()
  let curr = dummy

  for (let el of arr) {
    curr.next = new ListNode(el)
    curr = curr.next
  }
  return dummy.next
}

console.log(createArrayInReverse(arrayToLL([1,3,5,2]))) // [2,5,3,1]
console.log(createArrayInReverse(arrayToLL([]))) // []
console.log(createArrayInReverse(arrayToLL([1]))) // [1]
console.log(createArrayInReverse(arrayToLL([1,2]))) // [2,1]
console.log(createArrayInReverse(arrayToLL([1,3,5]))) // [5,3,1]


