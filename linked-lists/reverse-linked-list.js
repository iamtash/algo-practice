// traverse through list
// at each node, save a reference to the next node, and point curr to the previous node
// reassign curr to the saved reference to the next node
function reverseLinkedList(head) {
  if (head == null) {
    return null
  }

  let curr = head
  let prev = null

  while (curr.next) {
    const next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }
  // at this point curr is at the last node, need to flip its next pointer to prev
  curr.next = prev
  return curr
}

// reverse linked list recursively
function reverse(head) {
  let newHead = new Node();

  function reverseHelper(node) {
    if (node == null) {
      return newHead;
    }
  
    const reverseHead = reverseHelper(node.next);
    reverseHead.next = node;
    node.next = null;
    return reverseHead.next;
  }

  reverseHelper(head);
  return newHead.next;
}

// one less stack frame than the previous function
function reverse(head) {
  let newHead = null;

  function reverseHelper(node) {
    if (node == null || node.next == null) {
      newHead = node;
      return node;
    }
  
    const reverseHead = reverseHelper(node.next);
    reverseHead.next = node;
    node.next = null;
    return reverseHead.next;
  }

  reverseHelper(head);
  return newHead;
}