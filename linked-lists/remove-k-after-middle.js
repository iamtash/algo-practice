/*
'''
Delete K Nodes After Middle In Linked List

Given a linked list, delete K nodes after the middle.

If N is the length of the list, the middle node is [N / 2] using zero-based indexing.

Return the head of the modified list.
 

EXAMPLE(S)
     m         e   
     |         | 
1 -> 2 -> 3 -> 4, k = 2 should return 1 -> 2

1 -> 2 -> 3 -> 4, k = 1 should return 1 -> 2 -> 4

1, k = 0 should return 1

2 -> 9 -> 4 -> 1 -> 7, k = 3 should return 2 -> 9 -> 4

2 -> 9 -> 4 -> 1 -> 7, k = 1 should return 2 -> 9 -> 4 -> 7

EXPLORE
- modifying given list, not creating new one
- if K is 0, just return the head w/o modification
- what if K is greater than N / 2? remove all nodes after middle
- if list has even number of nodes?
    after the last iteration, current.next.next will be null
    in that case, slow will remain the same and fast will move once to the end
- check for empty list, if empty return null

BRAINSTORM/PLAN
- keep track of size somehow
- fast & slow pointer
  - every iteration, fast moves twice, slow moves once
- if list has even number of elements, do lines 28-29  
 

FUNCTION SIGNATURE
function removeKAfterMiddle(head, k)
'''
*/

function removeAllAfterMiddle(head) {
  if (!head) {
    return null;
  }

  let middle = head;
  let end = head;

  while (end.next && end.next.next) {
    end = end.next.next;
    middle = middle.next;
  }

  middle.next = null;
  return head;
}

function removeOneAfterMiddle(head) {
  if (!head) {
    return null;
  }

  let middle = head;
  let end = head;

  while (end.next && end.next.next) {
    end = end.next.next;
    middle = middle.next;
  }

  middle.next = middle.next.next;
  return head;
}

function removeKAfterMiddle(head, k) {
  if (!head) {
    return null;
  }

  let middle = head;
  let end = head;

  while (end.next && end.next.next) {
    end = end.next.next;
    middle = middle.next;
  }

  let deleteCount = 0;
  while (deleteCount < k && middle.next) {
    middle.next = middle.next.next;
    deleteCount++;
  }

  return head;
}

// 1 -> 2 -> 3 -> 4, k = 2 should return 1 -> 2
// 1 -> 2 -> 3 -> 4, k = 1 should return 1 -> 2 -> 4
// 1 -> 2 -> 3 -> 4 -> 5 -> 6, k=2 should return 1 -> 2 -> 3 ->6

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
