class Stack {
  constructor() {
    this.items = [];
  }

  push(value) {
    this.items.push(value);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  print() {
    return this.items.slice();
  }

  size() {
    return this.items.length;
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

const s = new Stack();
s.push(1);
s.push(2);
s.pop();
console.log(s.peek());
s.push(3);
s.push('Yo');
console.log(s.peek());
console.log(s.print());
console.log(s.size());
console.log(s.isEmpty());
