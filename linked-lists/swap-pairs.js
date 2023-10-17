function swapPairs(head) {
  const newHead = new Node(null, head)
  let curr = newHead

  while (curr.next && curr.next.next) {
    const left = curr.next.next;
    curr.next.next = left.next;
    left.next = curr.next;
    curr.next = left;
    curr = left.next;
  }

  return newHead.next
}