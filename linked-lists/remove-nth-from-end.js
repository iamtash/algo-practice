class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function arrayToLL(arr) {
  const dummy = new Node()
  let curr = dummy

  for (let el of arr) {
    curr.next = new Node(el)
    curr = curr.next
  }
  return dummy.next
}

function llToArr(head) {
  const arr = []
  let curr = head
  while (curr) {
    arr.push(curr.value)
    curr = curr.next
  }
  return arr
}

/*
Remove the nth node from the end of a linked list. n is 1-indexed. Assume n will always be smaller or equal to the length of the linked list.

Example:
Input: [1,2,3,4,5], n = 2
Output: [1,2,3,5]
slow should be 3 (2 from end/fast)

I: [1,2,3], n = 2
O: [1,3]
slow should be 1 (2 from end/fast)

I: [1,2,3], n = 1
O: [1,2]
slow should be 2 (1 from end/fast)

every time slow moves once, fast will move n nodes in front of it
stop when fast.next is null
*/

function removeNthFromEnd(head, n) {
  if (!head) {
    return null;
  }
  
  const dummy = new Node(null, head);
  let slow = dummy;
  let fast = slow;
  let cont = true;

  while (fast && fast.next && cont) {
    const prev = slow;
    slow = slow.next;

    // move fast n nodes in front of slow
    let i = n;
    fast = slow;
    while (i > 0) {
      if (!fast.next) {
        slow = prev;
        cont = false;
        break;
      }
      fast = fast.next;
      i--;
    }
  }
  slow.next = slow.next.next;
  return dummy.next;
}

console.log(llToArr(removeNthFromEnd(arrayToLL([]), 0)))
console.log(llToArr(removeNthFromEnd(arrayToLL([1]), 1)))
console.log(llToArr(removeNthFromEnd(arrayToLL([1,2]), 1)))
console.log(llToArr(removeNthFromEnd(arrayToLL([1,2]), 2)))
console.log(llToArr(removeNthFromEnd(arrayToLL([1,2,3]), 1)));
console.log(llToArr(removeNthFromEnd(arrayToLL([1,2,3]), 2)))
console.log(llToArr(removeNthFromEnd(arrayToLL([1,2,3,4,5]), 2)))