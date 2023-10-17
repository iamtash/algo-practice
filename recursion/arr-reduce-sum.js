/*
'''
Array Reduce Sum Recursively

Given an array of length n, consolidate the sum created by adding index pairs until there's only a single index.
 

EXAMPLE(S)
[1, 2, 3, 4, 5] => 48

Explanation:
* The next array would be [3, 5, 7, 9] because [1+2, 2+3, 3+4, 4+5]
* The next array would be [8, 12, 16] because [3+5, 5+7, 7+9]
* The next array would be [20, 28] because [8+12, 12+16]
* The final answer would be [48] because [20+28] and there are not enough operands to add

if array is empty, return 0
base case: array length is 1, return that number
new array 
iterate i -> arr.length - 1
  at each, append arr[i] + arr[i+1] to new array
return reduceSum(newArray)

- empty array
- single element array
- two element array
- negative and positive numbers
- all negative numbers
- all positive numbers

FUNCTION SIGNATURE
function reduceSum(array) {
def reduceSum(array: list[int]) -> int:

[3, 5, 7, 9]

'''
*/

function reduceSum(arr) {
  if (arr.length == 0) {
    return 0;
  }

  if (arr.length == 1) {
    return arr[0];
  }

  const newArr = [];

  for (let i = 0; i < arr.length - 1; i++) {
    newArr.push(arr[i] + arr[i + 1]);
  }

  return reduceSum(newArr);
}

function reduceSumInPlace(arr) {
  if (arr.length == 0) {
    return 0;
  }

  if (arr.length == 1) {
    return arr[0];
  }

  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i] + arr[i + 1];
  }
  arr.pop()

  return reduceSum(arr);
}

console.log(reduceSumInPlace([1, 2, 3, 4, 5]) == 48)
console.log(reduceSumInPlace([5]) == 5)
console.log(reduceSumInPlace([]) == 0)
console.log(reduceSumInPlace([1, 3, 5]) == 12)
console.log(reduceSumInPlace([-5, 5]) == 0)
console.log(reduceSumInPlace([-5, 5, -5, 5]) == 0)
console.log(reduceSumInPlace([-5, 5, 5, -5]) == 20)