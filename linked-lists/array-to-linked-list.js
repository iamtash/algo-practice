function arrayToLL(arr) {
  const dummy = new ListNode()
  let curr = dummy

  for (let el of arr) {
    curr.next = new ListNode(el)
    curr = curr.next
  }
  return dummy.next
}
  
  
function arrayToLL(arr, index = 0, result = new ListNode(), curr = result) {
  if (index < arr.length) {
    curr.next = new ListNode(arr[index])
    arrayToLL(arr, index + 1, result, curr.next)
  }

  return result.next
}