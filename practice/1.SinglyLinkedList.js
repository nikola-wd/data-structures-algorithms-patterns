// SINGLY LINKED LIST -----------------------------------

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
    this.length = 0;
    this.head = null;
  }

  get size() {
    return this.length;
  }

  set size(val) {
    this.length += val;
  }

  getHead() {
    return this.head;
  }

  // getTail node
  getTail() {
    let currentNode = this.head;

    if (!currentNode) {
      throw new Error('List is empty');
    }

    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  // Adds at the end of the list
  append(data) {
    const newNode = new Node(data);

    // In case we don't have a head, make this node a head
    if (!this.head) {
      // O(1)
      this.head = newNode;
      // Keep track of size
      this.size = +1;
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
    this.size = +1;
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
    this.size = +1;
  }

  addAt(index, data) {
    // o(n)
    const newNode = new Node(data);
    let currentNode = this.head;

    if (index < 0 || index >= this.size) {
      throw new Error(
        `Either index doesn't exist or we can't add at ${index} index`
      );
    }

    if (index === 0) {
      // add in front of the current head
      newNode.next = currentNode;
      this.head = newNode;
    } else {
      let currentIndex = 0;
      let previousNode;
      while (currentIndex < index) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        currentIndex++;
      }
      newNode.next = currentNode;
      previousNode.next = newNode;
    }
    // Keep track of size
    this.size = +1;
  }

  // TODO: addAllAt index

  findIndexByValue(value) {
    if (!this.head) {
      throw new Error(`List is empty`);
    }

    let currentNode = this.head;
    let currentIndex = 0;
    while (currentNode) {
      if (currentNode.data === value) {
        return currentIndex;
      }
      currentNode = currentNode.next;
      currentIndex++;
    }

    // If not found
    return -1;
  }

  findNodeByIndex(index) {
    if (index < 0 || index >= this.size) {
      throw new Error(`Specifiend index doesn't ${index} exist`);
    }

    let currentNode = this.head;
    let currentIndex = 0;
    while (currentIndex < index) {
      currentNode = currentNode.next;
      currentIndex++;
    }

    return currentNode;
  }

  // Removes the head element and returns it
  removeFirst() {
    if (!this.head) {
      throw new Error("List doesn't have any elements");
    }
    const head = this.head;
    this.head = head.next;

    head.next = null;
    this.size = -1;
    return head;
  }

  // Removes tail element, and if there's only head left, remove head (Empty the list)
  removeLast() {
    if (!this.head || this.size === 0) {
      throw new Error("List doesn't have any elements");
    }

    // Remove head in this case, since we don't have any last elements after it
    if (!this.head.next) {
      const head = this.head;
      this.head = null;
      this.size = -1;
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
    this.size = -1;
    return lastNode;
  }

  // Remove at specified index
  removeAtIndex(searchIndex) {
    if (
      searchIndex < 0 ||
      this.size < searchIndex ||
      searchIndex >= this.size ||
      !this.head ||
      this.size === 0
    ) {
      return false;
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

      this.size = -1;
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

    // In case the node to be deleted has next, assign that next to the previous node
    // Actually we can just assign it in eather case, even if it's null
    nodeBeforeCurrentNode.next = currentNode.next;
    // remove next of foundNode before returning it
    currentNode.next = null;
    // Update the size
    this.size = -1;
    return currentNode;
  }

  // TODO: remove If we find the the first node with the matching value (data)
  removeByValue(value) {
    if (!this.head || this.size === 0) {
      throw new Error('List is empty');
    }

    if (this.head.data === value) {
      return this.removeFirst();
    }

    const foundIndex = this.findIndexByValue(value);
    if (foundIndex === -1) {
      return false;
    } else {
      return this.removeAtIndex(foundIndex);
    }
  }

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
// ll.print();
// console.log(ll.toArray());
// console.log(ll.size);
// console.log(JSON.stringify(ll.removeFirst(), null, 2));
// console.log(ll.size);
// console.log('after delete: ', ll.toArray());
// ll.removeLast();
// console.log(ll.size);
// console.log('after delete: ', ll.toArray());

// TESTING ADDAT
try {
  ll.addAt(3, 23);
} catch (err) {
  console.log(err.message);
}
// ll.print();
// console.log(ll.toArray());
// console.log(ll.size);
ll.append(3);
ll.append(5);

// ll.print();
// console.log(ll.toArray());
// console.log(ll.size);

// console.log(ll.getTail());

// console.log('Find by index: 3');
// console.log(ll.findNodeByIndex(3));

// console.log('Find index by value: 3');
// console.log(ll.findIndexByValue(3));

ll.print();
console.log(ll.toArray());
console.log(ll.size);

console.log('removeByVal: ', ll.removeByValue(23));

// ll.print();
console.log(ll.toArray());
console.log(ll.size);
