class ListNode {
  constructor(value = 0, next = null) {
      this.value = value
      this.next = next
  }
}

/*
'''
❓ PROMPT
Given an array, create a palindrome linked list by iterating through the array forwards and backwards. *The last element should not be repeated.*

Example(s)
createPalindromeLL([99]) == "99"
createPalindromeLL([1,4,5]) == "1 -> 4 -> 5 -> 4 -> 1"
                                0    1.   2.   3.   4
                                0    1.   2.   1.   0

🔎 EXPLORE
List your assumptions & discoveries:
 

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O(N)
Space: O(N)
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
function createPalindromeLL(arr) {
def createPalindromeLL(arr: list[int]) -> Node:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function llToArr(head) {
  const arr = []
  let curr = head
  while (curr) {
    arr.push(curr.value)
    curr = curr.next
  }
  return arr
}

function createPalindromeLL(arr) {
  if (arr.length === 0) {
    return null;
  }
  const result = new ListNode();
  let curr = result;
  let idx = 0;
  let forwards = true;

  for (let i = 0;  i < (arr.length * 2) - 1; i ++) {
    curr.next = new ListNode(arr[idx]);
    curr = curr.next;

    if (forwards === true) {
      if (idx === arr.length - 1) {
        forwards = false;
        idx --;
      } else {
        idx ++;
      }
    } else {
      idx --;
    }
  }

  return result.next;
}


function toString(head) {
  if (!head)
    return "<empty>"

  let parts = []
  while(head) {
    parts.push(head.value)
    head = head.next
  }

  return parts.join(" -> ")
}

console.log(toString(createPalindromeLL([])) === "<empty>")
console.log(toString(createPalindromeLL([99])))
console.log(toString(createPalindromeLL([4,2])) === "4 -> 2 -> 4")
console.log(toString(createPalindromeLL([1,4,5])) === "1 -> 4 -> 5 -> 4 -> 1")
console.log(toString(createPalindromeLL([4,9,14])) === "4 -> 9 -> 14 -> 9 -> 4")
console.log(toString(createPalindromeLL([20,15,10,5])) 
    === "20 -> 15 -> 10 -> 5 -> 10 -> 15 -> 20")
console.log(toString(createPalindromeLL([5,5,5,5]))
    === "5 -> 5 -> 5 -> 5 -> 5 -> 5 -> 5")
console.log(toString(createPalindromeLL([1,2,3,2,1]))
    === "1 -> 2 -> 3 -> 2 -> 1 -> 2 -> 3 -> 2 -> 1")