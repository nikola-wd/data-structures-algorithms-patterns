import { LinkedList } from './1.LinkedList.js';

class StackLL {
  constructor() {
    this.items = new LinkedList();
  }

  push(value) {
    this.items.prepend(value);
  }

  pop() {
    return this.items.deleteHead();
  }

  peek() {
    return this.items.head;
  }

  isEmpty() {
    return !this.items.head;
  }

  toArray() {
    return this.items.toArray();
  }
}

const ls = new StackLL();
ls.push(1);
ls.push(2);
console.log(ls.pop());
ls.push(3);
console.log(ls.peek());
ls.push(4);
console.log(ls.isEmpty());
ls.push(5);
ls.push(ls.toArray());
