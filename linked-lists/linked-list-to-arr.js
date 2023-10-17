function llToArr(head) {
  const arr = []
  let curr = head
  while (curr) {
    arr.push(curr.value)
    curr = curr.next
  }
  return arr
}

function llToArr(head, arr = []) {
  if (head == null) {
    return arr
  }
  arr.push(head.value)
  return llToArr(head.next, arr)
}