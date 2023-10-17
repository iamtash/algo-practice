/*
'''
Flatten nested list sum

Given a nested array where each element may be 1) an integer or 2) an array, whose elements may be integers or other arrays, compute the sum of all the integers in the nested array.

What is the shape or pattern of this nested array structure?

As a follow-up, modify this code to multiply each list sum by its depth in the nesting. [1, 2] returns 3 since (1 + 2) is only inside one array.

However, [4, [2, 3]] returns 14 because the depth of [2, 3] is 2, so (2+3) * 2 = 10.
4 is added at the end to get 10 + 4 = 14.
While [4, [2, [3]]] returns 26 because the depth of [3] is 3 so 3 * 3 = 9. 
Then the depth of [2, 9] is 2 so (2+9) * 2 = 22.
4 is added at the end to get  22 + 4 = 26.
 

EXAMPLE(S)
sumNestedList([1, 2, 3]) == 6
sumNestedList([1, [1, 2, 3], 3]) == 10
sumNestedList([1, [1, [1, [1, [1]]]]]) == 5

sumNestedListWithDepth([4, [2, 3]]) == 14 because 4 + (2+3)*2
sumNestedListWithDepth([4, [2, [3]]]) == 26 because 4+(2+ (3*3))*2
 

FUNCTION SIGNATURE
function sumNestedList(list) {
function sumNestedListWithDepth(list) {

def sumNestedList(nestedList: list[int]) -> int:
def sumNestedListWithDepth(nestedList: list[int]) -> int:
'''

base case: value is an integer
*/

// [1, [1, 2, 3], 3]
//  i
// sum += list[i]
//      i

function sumNestedList(list) {
  if (list.length === 0) {
    return 0;
  }
  let [first, ...rest] = list;

  if (typeof first === 'number') {
    return first + sumNestedList(rest);
  } else {
    return sumNestedList(first) + sumNestedList(rest);
  }
}

function sumRecur(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let [first, ...rest] = arr;
  return first + sumRecur(rest);
}

function sumNestedListWithDepth(array, depth = 1) {
  let total = 0;

  for (const value of array) {
    if (Array.isArray(value)) {
      total += sumNestedListWithDepth(value, depth + 1);
    } else {
      // the value is a number
      total += value;
    }
  }
  return total * depth;
}

// [[1,2,3], [1,2,3]]
// (sumNestedListWithDepth([1,2,3], 3) * 2) + sumNestedListWithDepth([1,2,3], 3) * 2)
console.log(
  sumNestedListWithDepth([
    [1, 2, 3],
    [1, 2, 3],
  ])
); // 24
// console.log(sumNestedListWithDepth([1,2,3]))
// console.log(sumNestedListWithDepth([1,[2,3]])) // 11
// console.log(sumNestedListWithDepth([1,[2,[3]]]))
// console.log(sumNestedListWithDepth([1,[1,2,3],3]))
// console.log(sumNestedListWithDepth([1,[1,[1,[1,[1]]]]]))
// console.log(sumNestedListWithDepth([1,[1,[2],[],[],[],3],3]))
// console.log(sumNestedListWithDepth([1,[1,[2],[],[[[[]]]],[],3],3]))
// console.log(sumNestedListWithDepth([1]))
// console.log(sumNestedListWithDepth([[1]]))
// console.log(sumNestedListWithDepth([[[1]]]))
// console.log(sumNestedListWithDepth([[[[1]]]]))
// console.log(sumNestedListWithDepth([[[[]]]]))
