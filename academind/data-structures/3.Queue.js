class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.unshift(item);
  }

  dequeue() {
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

const q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
console.log(q.print());
q.enqueue(4);
q.dequeue();
console.log(q.size());
q.enqueue(5);
console.log(q.peek());
console.log(q.print());
