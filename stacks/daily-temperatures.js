// brute force O(N^2)
function dailyTemperaturesBf(temps) {
  const result = [];
  for (let i = 0; i < temps.length; i++) {
    let count = 0;
    let current = temps[i];
    let future = current;
    let k = i + 1;
    while (future <= current && k < temps.length) {
      future = temps[k];
      count ++;
      k ++;
    }
    result.push(future > current ? count : 0);
  }
  return result;
}

class Stack {
  constructor() {
    this.stack = [];
    this.size = 0;
  }

  push(val) {
    this.stack.push(val);
    this.size++;
  }

  pop() {
    if (this.size) {
      this.size--;
      return (this.stack.pop());
    }
  }

  peek() {
    if (this.size) {
      return this.stack[this.stack.length - 1];
    }
  }
}

// monotonic decreasing stack O(N)
function dailyTemperatures(temps) {
  const result = new Array(temps.length).fill(0);
  const stack = new Stack();

  for (let i = temps.length - 1; i >= 0; i--) {
    const current = temps[i];
    let future = current;
    while (stack.size && future <= current) {
      const futureIndex = stack.peek();
      future = temps[futureIndex];
      if (future > current) {
        result[i] = futureIndex - i;
      } else {
        stack.pop();
      }
    }
    stack.push(i);
  }

  return result;
}