/*
'''
Count Nested Arrays

Given a nested array where each element may be 1) an integer or 2) an array, whose elements themselves may be integers or further arrays, count the total number of arrays.

What is the shape or pattern of this nested array structure? There can be empty lists but never None/null.
 

EXAMPLE(S)
countArrays([1, 2, 3]) == 1
countArrays([1, [1, 2, 3], 3]) == 2
countArrays([1, [1, [1, [1, [1]]]]]) == 5
countArrays([]) == 1
 

FUNCTION SIGNATURE
function countArrays(array) {
def countArrays(nestedList: list) -> int:
'''

EXPLORE
- if input is null, return 0

BRAINSTORM
- recursion of an implicit tree
- base case: array in an empty array
- DFS
- time complexity: O(N)
- space complexity: O()

PLAN

if input is null return 0

initialize count to 1

loop over input array
  if el is array, recurse (increment count with result) --> count + recFn(elem)

return count

IMPLEMENT

*/

function countArrays(array) {
  if (array == null) {
    return 0
  }

  let count = 1

  for (let element of array) {
    if (Array.isArray(element)) {
      count += countArrays(element)
    }
  }

  return count
}

console.log(countArrays([1, 2, 3]) == 1)
console.log(countArrays([1, [1, 2, 3], 3]) == 2)
console.log(countArrays([1, [1, [1, [1, [1]]]]]) == 5)
console.log(countArrays([1, [2,2], [3,3], [4,4], 5]) == 4)
console.log(countArrays([1, [2, [], 2], [3,[6],3], [4,4], 5]) == 6)
console.log(countArrays([[[[[[[[[[[[[]]]]]]]]]]]]]) == 13)
console.log(countArrays([]) == 1)
console.log(countArrays([[]]) == 2)
console.log(countArrays([[],[],[]]) == 4)
console.log(countArrays(null) == 0)
