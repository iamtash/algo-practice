/*
Q. Given a linked list and a target integer, remove all nodes with the value target.

Examples:
• Given a linked list: 4 ➞ 2 ➞ 3 ➞ 2 ➞ 2, target: 2 // returns 4 ➞ 3
• Given a linked list: 4, target: 4  // returns an empty list

EXPLORE:
- Assumptions/Clarification:
  - Empty linked list / null -> return null
  - Target doesn't exist within the list -> return the original list unmodified
  - If all node values are equal target -> return null
  - Target undefined? -> return original list
- Insightful test cases:
  - null, 1 => null
  - [1,2,3], 4 => [1,2,3]
  - [1,1,1], 1 => null
  - [1,2], undefined => [1,2]
  - [1,0], null => [1,0]
  - [1,2], 1 => [2]

BRAINSTORM:
T:
S:

PLAN: 
iterative approach
base case for null LL that returns null
create a dummy that points to head
point curr to head
set prev to dummy
traverse through LL
  while curr exists
    if node value is target value, delete node
      repoint prev.next to curr.next
    else
      prev = curr
    reassign curr to curr.next

return head

*/


class ListNode {
  constructor(value = 0, next = null) {
      this.value = value
      this.next = next
  }
}



function remove(head, target) {
  if (!head) {
    return null
  }

  if (target == null || target == undefined) {
    return head;
  }

  const dummy = new ListNode(0, head);
  let curr = head;
  let prev = dummy;

  while(curr) {
    if (curr.value === target) {
      prev.next = curr.next
    } else {
      prev = curr
    }
    curr = curr.next
  }

  return dummy.next;
}
/*
1 -> 2 -> 3, 3

dummy -> 1-> 2 -> 3
             |    | 
             P    C 
dummy(0, 1)
curr = 1
prev = dummy

*/

// empty list
const empty = null;
// list of one
const one = new ListNode(1)
// first node gets deleted
const first = new ListNode(4)
// last node gets deleted
const last = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))))
// multiple nodes get deleted
const mult = new ListNode(4, new ListNode(3, new ListNode(2, new ListNode(4))))

