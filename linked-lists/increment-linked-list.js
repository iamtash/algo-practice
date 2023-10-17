function addOne(head, node = head) {
    if (node == null) {
        return 1
    }
    const sum = node.value + addOne(head, node.next)
    if (sum === 10) {
        node.value = 0
        return node == head ? new ListNode(1, head) : 1
    } else {
        node.value = sum
        return node == head ? head : 0;
    }
}