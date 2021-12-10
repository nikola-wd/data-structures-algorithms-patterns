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

  // Helper to print the values
  toArray() {
    let index = 0;
    let currentNode = this.head;
    const tempArr = [];
    while (index < this.size) {
      tempArr.push(currentNode.data);
      currentNode = currentNode.next;
      index++;
    }
    return tempArr;
  }

  // Insert after a given node
  insertAfter(data, afterData) {}

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
ll.print();
ll.prepend(0);
ll.print();
console.log(ll.getSize);
console.log(ll.toArray());
