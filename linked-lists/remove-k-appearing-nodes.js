/*
'''
Remove K-Appearing Nodes from Unsorted List

Given the head node of a singly linked list, find nodes where they have already appeared (k) or more times.

Return the head node of the new linked list, after deleting/removing the nodes.

If a node appears more than once in a list, only the nodes that are `kth` or higher must be deleted. You can still retain the nodes leading up to the `kth` occurrence.
 

EXAMPLE(S)
4 -> 3 -> 4 -> 1 -> 5, k = 2 should return 4 -> 3 -> 1 -> 5

1 -> 1 -> 2, k = 2 should return 1 -> 2

1 -> 2 -> 3, k = 3 should return 1 -> 2 -> 3

EXPLORE
- creating a new list
  - returning the head of the new list
- if k is <2, return empty list AKA null
- if input list is empty, return null

BRAINSTORM
- O(N) time to loop over input list once
- O(N) space to store occurrences in hash map

PLAN
- create a Node class
- create an empty Map object
- create variables to track old and new list 
- loop while curr.next
  - if curr.next is not in Map
      set curr.next: 1 in Map
      in new LL, include in new LL
    if curr.next is in Map 
      increment value by 1
      if value >= k, skip in new LL
    reassign curr & newCurr tracking variabls to next
  return new list head 


FUNCTION SIGNATURE
def removeKAppearingNodes(head, k)
'''
*/

function removeKAppearingNodes(head, k) {
  if (!head || k < 2) {
    return null;
  }

  const counts = new Map();
  // point to original list
  const oldDummy = new Node(null, head);
  // track current node in original list
  let oldCurr = oldDummy;

  // point to new list
  const newDummy = new Node();
  // track current node in new list
  let newCurr = newDummy;

  while (oldCurr.next) {
    if (counts.has(oldCurr.next.value)) {
      // increment appearances count of the current value
      counts.set(oldCurr.next.value, counts.get(oldCurr.next.value) + 1);
    } else {
      // initialize appearaces count of the current value to 1
      counts.set(oldCurr.next.value, 1);
    }

    if (counts.get(oldCurr.next.value) >= k) {
      // skip/delete
      newCurr.next = oldCurr.next.next;
    } else {
      // include/keep
      newCurr.next = oldCurr.next;
    }

    oldCurr = oldCurr.next;
    newCurr = newCurr.next;
  }

  return newDummy.next;
}
