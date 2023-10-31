class MinStack {
    stack: number[];
    min: number;
    last: number;
    capacity: number;

    constructor() {
      this.capacity = 20;
      this.stack = new Array(this.capacity);
      this.min = Infinity;
      this.last = -1;
    }

    push(val: number): void {
      if ((this.last + 1) === this.capacity) {
        this.stack = this.stack.concat(new Array(this.capacity));
        this.capacity *= 2;
      }
      this.stack[this.last + 1] = val;
      this.last++;
      if (val < this.min) {
        this.min = val;
      }
    }

    pop(): void {
      const popped = this.stack[this.last];
      this.stack[this.last] = undefined;
      this.last--;
      if (popped === this.min) {
        this.min = this.stack.reduce((min, curr) => {
          return curr < min ? curr : min;
        }, Infinity);
      }
    }

    top(): number {
      return this.stack[this.last];
    }

    getMin(): number {
      return this.min;
    }
}