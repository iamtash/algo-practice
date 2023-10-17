function numPairs(head) {
  let count = 0;
  let pairs = new Map();
  let curr = head;

  while (curr) {
    if (pairs.get(curr.value) === 2) {
      pairs.set(curr.value, pairs.get(curr.value) + 1);
      count--;
    } else if (pairs.get(curr.value) === 1) {
      pairs.set(curr.value, pairs.get(curr.value) + 1);
      count++;
    } else if (!pairs.has(curr.value)) {
      pairs.set(curr.value, 1);
    }
    curr = curr.next;
  }
  return count;
}
