/*
'''
❓ PROMPT
A restaurant has a dedicated cook making flapjacks (pancakes) in the mornings. First, they're removed from the griddle and added to a stack as they're ready. Then, servers remove them from the stack to serve customers. The manager wants to serve fresh flapjacks, meaning they never want the stack to be taller than 4. At the same time, they want the stack never to be empty so that no orders have to wait for pancakes.

Write a function that takes a series of numbers representing flapjacks being added and removed from the stack (positive for fresh off the grill, negative for an order being served). Return a tuple (or pair), where the first value is true or false to reflect if the manager's constraints are always satisfied, and the second value is the max height of the stack.

Example(s)
goldilockFlapjacks([2, -1]) => [true, 2]
2 - true
1 - true

goldilockFlapjacks([-1, 2]) => [false, 1]
-1 - false
1

goldilockFlapjacks([2, -1, 3, -3, 2, -1]) => [true, 4]
2 - true
1 - true
4 - true
1 - true
3 - true
2 - true 
 

🔎 EXPLORE
List your assumptions & discoveries:
- can the series be empty?
- can a number be 0?
- is it possible to have a series such that more flapjacks are served than are available?
 

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
initialize a count variable to 0
initialize a max variable to 0
initialize satisfied to true

loop through the series
  add the current value to count
  if count > max, reassign max to count
  if count > 4 || count < 1, satisfied = false

return [satisfied, max]

 

🛠️ IMPLEMENT
function goldilockFlapjacks(pancakes) {
def goldilockFlapjacks(pancakes: list[int]) -> list:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function goldilockFlapjacks(pancakes) {
  let count = 0;
  let max = 0;
  let satisfied = true;

  for (const action of pancakes) {
    count += action;
    if (count > max) {
      max = count;
    }
    if (count < 1 || count > 4) {
      satisfied = false;
    }
  }

  return [satisfied, max];
}

// formation's solution
function goldilockFlapjacks(pancakes) {
  let isValid = true;
  let maxHeight = 0;
  let currHeight = 0;

  for (let i = 0; i < pancakes.length; i++) {
    currHeight = currHeight + pancakes[i];
    if (currHeight <= 0) {
      isValid = false;
    }
    maxHeight = Math.max(maxHeight, currHeight);
  }
  if (maxHeight > 4) {
    isValid = false;
  }
  return [isValid, maxHeight];
}

console.log(goldilockFlapjacks([2, -1])) // => [true, 2]

console.log(goldilockFlapjacks([-1, 2])) // => [false, 1]

console.log(goldilockFlapjacks([2, -1, 3, -3, 2, -1])) // => [true, 4]

console.log(goldilockFlapjacks([0])) // => [false, 0]

console.log(goldilockFlapjacks([1, 1, 1, 1, 1])) // => [false, 5]

console.log(goldilockFlapjacks([1, 1, -1, 2, -1])) // => [true, 3]

console.log(goldilockFlapjacks([1, 1, 1, 1, -4])) // => [false, 4]

console.log(JSON.stringify(goldilockFlapjacks([2])) === JSON.stringify([true, 2]))
console.log(JSON.stringify(goldilockFlapjacks([-2])) === JSON.stringify([false, 0]))
console.log(JSON.stringify(goldilockFlapjacks([4])) === JSON.stringify([true, 4]))
console.log(JSON.stringify(goldilockFlapjacks([5])) === JSON.stringify([false, 5]))
console.log(JSON.stringify(goldilockFlapjacks([4, -2, 1, -2])) === JSON.stringify([true, 4]))
console.log(JSON.stringify(goldilockFlapjacks([2, -1, 1, -1, 1])) === JSON.stringify([true, 2]))
console.log(JSON.stringify(goldilockFlapjacks([4, -2, 1, -2, 4])) === JSON.stringify([false, 5]))
console.log(JSON.stringify(goldilockFlapjacks([4, -2, 1, -2, -4])) === JSON.stringify([false, 4]))
