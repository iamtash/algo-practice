/*
    Given a linked list and a sorted array of ints, remove all nodes at the indices found in the array. Any indices that are past the end of the linked list should be ignored. Note that the indices refer to the indices before any nodes are removed.

Example #1. Given the array [0, 2] and the linked list:
1 -> 3 -> 5 -> 2

We would remove the nodes at indices 0 and 2. Therefore, we would return:
3 -> 2

Example #2. Given the array [1, 3, 4] and the linked list:
1 -> 3 -> 5 -> 2

We would remove the nodes at indices 1, 3 and 4. Since 4 is past the end of the list, we would only remove the nodes at indices 1 and 3. Therefore, we would return:
1 -> 5
*/

class ListNode {
  constructor(value = 0, next = null) {
      this.value = value
      this.next = next
  }
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

// testing helper
function llToArr(head) {
  const arr = []
  let curr = head
  while (curr) {
    arr.push(curr.value)
    curr = curr.next
  }
  return arr
}

function removeAtIndices(indices, head) {
  if (!head) {
    return null;
  }

  const sentinel = new ListNode(0, head);
  let curr = sentinel;
  let index = 0;
  let listIndex = 0;

  while (curr && curr.next) {
    while (indices[index] < listIndex) {
      index ++;
    }

    if (indices[index] === listIndex) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
    listIndex ++;
  }

  return sentinel.next;
}

// provided examples
console.log(llToArr(removeAtIndices([0,2], arrayToLL([1,3,5,2])))) // 3 -> 2
console.log(llToArr(removeAtIndices([1,3,4], arrayToLL([1,3,5,2])))); // 1 -> 5

// remove at no indices
console.log(llToArr(removeAtIndices([], arrayToLL([1,3,5,2])))) // [1,3,5,2]
console.log(llToArr(removeAtIndices([5,6,7], arrayToLL([1,3,5,2])))) // [1,3,5,2]

//remove at all indices
console.log(llToArr(removeAtIndices([0,1,2,3], arrayToLL([1,3,5,2])))) // []
console.log(llToArr(removeAtIndices([0,1,2,3,4,5,6], arrayToLL([1,3,5,2,7,8,9])))) // []

// remove only at first index
console.log(llToArr(removeAtIndices([0], arrayToLL([1,3,5,2])))) // [3,5,2]

// remove only at last index
console.log(llToArr(removeAtIndices([3], arrayToLL([1,3,5,2])))) // [1,3,5]