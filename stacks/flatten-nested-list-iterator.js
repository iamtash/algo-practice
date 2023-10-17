class NestedIterator {
  stack;

  constructor(nestedList) {
    this.stack = [];
    for (let i = nestedList.length - 1; i >= 0; i--) {
      this.stack.push(nestedList[i]);
    }
  }

  hasNext() {
    if (!this.stack.length) {
      return false;
    }
    const peek = this.stack.at(-1);
    if (peek.isInteger()) {
      return true;
    } else {
      const list = this.stack.pop().getList();
      for (let i = list.length - 1; i >= 0; i--) {
        this.stack.push(list[i]);
      }
      return this.hasNext();
    }
  }

  next() {
    return this.stack.pop().getInteger();
  }
}