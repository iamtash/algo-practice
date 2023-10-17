/*
Write a program to recursively alternate printing nodes.  You are not allowed to use loop constructs. You can assume that the head node should always be printed first. To simplify testing, return a string.

Harder variations:
1. Instead of printing alternate nodes, accept a second parameter, *frequency*, that specifies how many nodes to skip.
1. Instead of always printing the head, accept a third parameter, *offset*, that specifies how many nodes to skip initially.
 

EXAMPLE(S)
n1 = 1 -> 2 -> 3
printAlternate(n1) == "1 -> 3"
*/

function printAlternate(head) {
  const result = []

  function helper(node) {
    result.push(node.value);

    if (node.next && node.next.next) {
      helper(node.next.next)
    }
  }

  helper(head)
  console.log(result.join(' -> '))
}

// Instead of printing alternate nodes, accept a second parameter, *frequency*, that specifies how many nodes to skip.
function printAlternate(head, frequency) {
  const result = []

  function helper(node, count) {
    if (!node) {
      return
    }

    if (count == 0) {
      result.push(node.value)
    }

    count = count === 0 ? frequency : count - 1

    helper(node.next, count)
  }

  helper(head, 0)
  console.log(result.join(' -> '))
}

// Instead of always printing the head, accept a third parameter, *offset*, that specifies how many nodes to skip initially.
function printAlternate(head, frequency, offset) {
  const result = []

  function helper(node, count) {
    if (!node) {
      return
    }

    if (count == 0) {
      result.push(node.value)
    }

    count = count === 0 ? frequency : count - 1

    helper(node.next, count)
  }

  helper(head, offset)
  console.log(result.join(' -> '))
}