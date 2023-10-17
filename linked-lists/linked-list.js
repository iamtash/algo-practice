const util = require('util');
const EMPTY_LIST = null

class Node {
  static fromArray(array) {
    if (array.length === 0) {
      return EMPTY_LIST;
    }

    let [first, ...rest] = array;

    return prepend(first, Node.fromArray(rest));
  }

  constructor(value, next = EMPTY_LIST) {
    this.value = value;
    this.next = next;
  }

  toString() {
    // Use an external function so we can display empty lists as "()"
    // rather than "null"
    return listToString(this);
  }

  // Changes how instances are displayed in the Node console/repl
  // This is like Python's __repr__ magic method and is Node-specific
  [util.inspect.custom]() {
    return this.toString();
  }
}

function listToString(list) {
  if (isEmpty(list)) {
    return '()';
  }

  let [first, rest] = unprepend(list);

  return `${first} -> ${listToString(rest)}`;
}

function isEmpty(list) {
  return list === EMPTY_LIST;
}

function isSingleton(list) {
  return isEmpty(list) || isEmpty(list.next);
}

function prepend(val, list) {
  if (isEmpty(list)) {
    return new Node(val);
  }

  return new Node(val, list);
}

function unprepend(list) {
  return [list.value, list.next];
}

function add(x, y) {
  return x + y;
}

function sum(list) {
  // List<Int> := EmptyList
  if (isEmpty(list)) {
    return 0;
  }

  // List<Int> := prepend(Int, List<Int>)
  let [first, rest] = unprepend(list);

  return add(first, sum(rest));
}

function mul(x, y) {
  return x * y;
}

function product(list) {
  // List<Int> := EmptyList
  if (isEmpty(list)) {
    return 1;
  }

  // List<Int> := prepend(Int, List<Int>)
  let [first, rest] = unprepend(list);

  return mul(first, product(rest));
}

function larger(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

function max(list) {
  if (isEmpty(list)) {
    return -Infinity;
  }

  let [first, rest] = unprepend(list);

  return larger(first, max(rest));
}

/**
 * Given a list and a function checkFn, return a new list containing
 * only the elements of the original list for which checkFn returns true.
 *
 * filter(10 -> 11 -> 12, n => n % 2 === 0); // 10 -> 12
 */

function prependIfCheck(val, list, checkFn) {
  if (checkFn(val)) {
    return prepend(val, list);
  } else {
    return list;
  }
}

function filter(list, checkFn) {
  if (isEmpty(list)) {
    return list;
  }

  let [first, rest] = unprepend(list);

  // Other logic can go here
  return prependIfCheck(first, filter(rest, checkFn), checkFn);

  let shouldKeep = checkFn(first);
  let filteredRest = filter(rest, checkFn);

  if (shouldKeep) {
    return prepend(first, filteredRest);
  } else {
    return filteredRest;
  }
}

function append(list, val) {
  if (isEmpty(list)) {
    return new Node(val);
  }

  let [first, rest] = unprepend(list);

  return prepend(first, append(rest, val));
}

function reverse(list) {
  if (isEmpty(list)) {
    return list;
  }

  let [first, rest] = unprepend(list);

  return append(reverse(rest), first);
}

// A list is either:
//   1. The empty list, or
//   2. A value prepended to another (shorter) list
// type List<Int> := EmptyList
// type List<Int> := prepend(Int, List<Int>)

let list = Node.fromArray([10, 20, 30, 88, -17]);

console.log('list:    ', list);
console.log('sum:     ', sum(list));
console.log('max:     ', max(list));
console.log('reverse: ', reverse(list));

function createLL(count, value) {
  const dummy = new Node('dummy');
  let numNodesCreated = 0;
  let curr = dummy;

  // Algo Practice: Linked list with X num of Ys
  while (numNodesCreated < count) {
    curr.next = new Node(value);
    curr = curr.next;
    numNodesCreated++;
  }

  return dummy.next;
}
