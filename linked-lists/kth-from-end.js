/*
▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁
✏️ Description
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
Q. Given a linked list, return the kth element from the end of the list.
   If the k exceeds the length of the list, return -1.

Examples:
• Given a linked list: 13 ➞ 1 ➞ 5 ➞ 3 ➞ 7 ➞ 10, k: 1 // returns 10
• Given a linked list: 13 ➞ 1 ➞ 5 ➞ 3 ➞ 7 ➞ 10, k: 7 // returns -1

3 -> 5 -> 1 -> 7, k: 2
          e
kth element is 1 behind tail 
kth element is k - 1 behind tail

two pointers
fast will move forward k - 1 times to create the distance between it and the result node
  if fast becomes null, that means k exceeds the length of the list, return -1
loop while
  move fast and slow each by 1 until fast is at the end 
return slow.value 


▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁
🟨 Javascript
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
class ListNode {
    constructor(value = 0, next = null) {
        this.value = value
        this.next = next
    }
}

function kthFromLast(head, k) {
    // Write your code here.
    return -1
}

// Test Cases
var LL1 = new ListNode(13, new ListNode(1, new ListNode(5, new ListNode(3, new ListNode(7, new ListNode(10))))))
console.log(kthFromLast(LL1, 1)) // 10
console.log(kthFromLast(LL1, 3)) // 3 
console.log(kthFromLast(LL1, 6)) // 13
console.log(kthFromLast(LL1, 7)) // -1


*/

class ListNode {
  constructor(value = 0, next = null) {
      this.value = value
      this.next = next
  }
}

// my version
function kthFromLast(head, k) {
  if (!head) {
    return -1;
  }

  let fast = head;
  let slow = head;
  let index = 1;

  while (index < k) {
    fast = fast.next;
    if (fast == null) {
      return -1;
    }
    index ++;
  }

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow.value
} 

// Joy's version
function kthFromLast(head, k) {
  if (!head) {
    return -1;
  }

  let fast = head;
  let slow = head;

  for(let i=0; i<k;i++){
    if(fast){
      fast=fast.next;
    }else{
      return -1
    }
  }

  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow.value
} 

var LL1 = new ListNode(13, new ListNode(1, new ListNode(5, new ListNode(3, new ListNode(7, new ListNode(10))))))
console.log(kthFromLast(LL1, 1)) // 10
console.log(kthFromLast(LL1, 3)) // 3 
console.log(kthFromLast(LL1, 6)) // 13
console.log(kthFromLast(LL1, 7)) // -1