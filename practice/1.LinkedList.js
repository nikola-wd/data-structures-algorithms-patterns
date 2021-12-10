class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Without a saved pointer to the tail.
// If we have a tail pointer -> then append() is O(1), else it's O(n)
class LinkedList {
  constructor() {
    this.size = 0;
    this.head = null;
  }

  get getSize() {
    return this.size;
  }

  setSize(val) {
    this.size += val;
  }

  getHead() {
    return this.head;
  }

  // getTail

  // Adds at the end of the list
  append(data) {
    const newNode = new Node(data);

    // In case we don't have a head, make this node a head
    if (!this.head) {
      // O(1)
      this.head = newNode;
      // Keep track of size
      this.setSize(1);
      return;
    }
    // Traverse till the last node
    // O(n)
    let last = this.head;
    while (last.next) {
      last = last.next;
    }
    // Change the next of last node
    last.next = newNode;

    // Keep track of size
    this.setSize(1);
  }

  // Adds at the front of the list
  prepend(data) {
    // O(1)
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    // Keep track of size
    this.setSize(1);
  }

  // Removes the head element and returns it
  removeFirst() {
    if (!this.head) {
      throw new Error("List doesn't have any elements");
    }
    const head = this.head;
    this.head = head.next;

    head.next = null;
    this.setSize(-1);
    return head;
  }

  removeLast() {
    if (!this.head) {
      throw new Error("List doesn't have any elements");
    }

    // Remove head in this case, since we don't have any last elements after it
    if (!this.head.next) {
      const head = this.head;
      this.head = null;
      this.setSize(-1);
      return head;
    }
    let last = this.head;
    let beforeLast = last;
    let index = 0;
    // Find beforeLast and last
    while (index < this.size - 1) {
      beforeLast = last;
      last = last.next;
      index++;
    }
    // Detach last element
    beforeLast.next = null;
    // Update size
    this.setSize(-1);
    return last;
  }

  // Insert after a given node
  insertAfter(data, afterData) {}

  // Helper to print the values
  toArray() {
    let currentNode = this.head;
    const tempDataArr = [];
    while (currentNode) {
      tempDataArr.push(currentNode.data);
      currentNode = currentNode.next;
    }
    return tempDataArr;
  }

  // Print the whole list starting from head
  print() {
    const head = this.getHead();
    console.log(JSON.stringify(head, null, 2));
  }
}

// -------------------------
const ll = new LinkedList();
ll.print();
ll.append(5);
ll.append(3);
ll.append(1);
ll.prepend(0);
ll.print();
// ll.print();
// console.log(ll.getSize);
// console.log(ll.toArray());
// console.log(JSON.stringify(ll.removeFirst(), null, 2));
// console.log(ll.getSize);
// console.log(ll.toArray());
// ll.print();
// ll.removeFirst();
// ll.print();
console.log('-----------------');
console.log('Remove Last');
console.log('prevSize: ', ll.getSize);
console.log(ll.removeLast(), 'shouldBe: ', 1);
console.log('newSize: ', ll.getSize);
console.log(ll.toArray());

ll.print();

console.log('-----------------');
console.log('Remove Last');
console.log('prevSize: ', ll.getSize);
console.log(ll.removeLast(), 'shouldBe: ', 3);
console.log('newSize: ', ll.getSize);
console.log(ll.toArray());

ll.print();

console.log('-----------------');
console.log('Remove Last');
console.log('prevSize: ', ll.getSize);
console.log(ll.removeLast(), 'shouldBe: ', 5);
console.log('newSize: ', ll.getSize);
console.log(ll.toArray());
ll.print();

console.log('-----------------');
console.log('Remove Last');
console.log('prevSize: ', ll.getSize);
console.log(ll.removeLast(), 'shouldBe: ', 0);
console.log('newSize: ', ll.getSize);
console.log(ll.toArray());

console.log('-----------------');
console.log('Should throw error:');
try {
  ll.removeLast();
} catch (err) {
  console.log(err.message);
}
console.log('newSize: ', ll.getSize);
console.log(ll.toArray());
