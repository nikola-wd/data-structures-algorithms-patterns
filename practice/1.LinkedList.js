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

  // Removes tail element, and if there's only head left, remove head (Empty the list)
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
    let lastNode = this.head;
    let nodeBeforeLastNode = lastNode;
    let index = 0;
    // Find nodeBeforeLastNode and lastNode
    while (index < this.size - 1) {
      nodeBeforeLastNode = lastNode;
      lastNode = lastNode.next;
      index++;
    }
    // Detach last element
    nodeBeforeLastNode.next = null;
    // Update size
    this.setSize(-1);
    return lastNode;
  }

  // Remove at specified index
  removeAtIndex(searchIndex) {
    if (
      searchIndex < 0 ||
      this.size < searchIndex ||
      searchIndex >= this.size ||
      !this.head
    ) {
      throw new Error(`The ${searchIndex} position doesn't exist`);
    }

    let currentNode = this.head;
    // If searched index is 0, then, the node to be deleted is the head node
    // If it has next, update elements
    // elf if not, remove head
    if (searchIndex === 0) {
      // currentNode is the head node
      if (!currentNode.next) {
        // remove head in this case
        this.head = null;
      } else {
        this.head = currentNode.next;
      }

      this.setSize(-1);
      currentNode.next = null;
      return currentNode;
    }

    // searchedNode is not the head node -> drill down to find it
    let nodeBeforeCurrentNode = currentNode;
    let currIndex = 0;
    while (currIndex < searchIndex) {
      nodeBeforeCurrentNode = currentNode;
      currentNode = currentNode.next;
      currIndex++;
    }

    console.log('Found Node At Index: ', searchIndex);
    console.log('Found Node: ', currentNode);
    console.log('Node Before Found Node Node: ', nodeBeforeCurrentNode);

    // In case the node to be deleted has next, assign that next to the previous node
    // Actually we can just assign it in eather case, even if it's null
    nodeBeforeCurrentNode.next = currentNode.next;
    // remove next of foundNode before returning it
    currentNode.next = null;
    // Update the size
    this.setSize(-1);
    return currentNode;
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
ll.append(5);
ll.append(3);
ll.append(1);
ll.prepend(0);
ll.prepend(6);
ll.append(10);
ll.print();
console.log(ll.toArray());
console.log(ll.getSize);
console.log(JSON.stringify(ll.removeFirst(), null, 2));
console.log(ll.getSize);
console.log('after delete: ', ll.toArray());
ll.removeLast();
console.log(ll.getSize);
console.log('after delete: ', ll.toArray());
