import LinkedList from './1.SinglyLinkedList';

// RUN FILE LIKE THIS: node -r esm
// (npm install esm, and in package.json add type: module)

class LinkedListWithFindMid extends LinkedList {
  constructor() {
    super();
  }

  // https://www.geeksforgeeks.org/write-a-c-function-to-print-the-middle-of-the-linked-list/?ref=lbp
  // Method 1: Traverse the whole linked list and count the no. of nodes.
  // Now traverse the list again till count/2 and return the node at count/2.
  findMidNodeMethod1() {
    let size = 0;
    let currentNode = this.head;
    while (currentNode) {
      currentNode = currentNode.next;
      size++;
    }

    const mid = Math.floor(size / 2);

    let index = 0;
    currentNode = this.head;
    while (index < mid) {
      currentNode = currentNode.next;
      index++;
    }

    return currentNode;
  }

  // Traverse linked list using two pointers.
  // Move one pointer by one and the other pointers by two.
  // When the fast pointer reaches the end slow pointer will
  // reach the middle of the linked list.
  findMidNodeMethod2() {
    if (this.head) {
      let slowPointer = this.head;
      let fastPointer = this.head;
      while (fastPointer !== null && fastPointer.next !== null) {
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;
      }
      return slowPointer;
    }
  }
  // Initialize mid element as head and initialize a counter as 0.
  // Traverse the list from head, while traversing increment the counter
  // and change mid to mid->next whenever the counter is odd.
  // So the mid will move only half of the total length of the list.
  findMidNodeMethod3() {
    let index = 0;
    let currentNode = this.head;
    let mid = this.head;
    while (currentNode) {
      // Update mid, when 'index'
      // is odd number
      if (index % 2 == 1) mid = mid.next;
      count++;
      currentNode = currentNode.next;
    }

    // If empty list is provided
    if (mid !== null) {
      return mid;
    }
  }
}

const ll = new LinkedListWithFindMid();
ll.append(5);
ll.append(3);

ll.append(1);
ll.prepend(0);

ll.prepend(6);
ll.prepend(8);
ll.prepend(9);

console.log(ll.size);
console.log(ll.toArray());
ll.print();

// FIND MIDDLE OF A LINKED LIST
// IF COUNT IS EVEN, return the second item
// If we track count
// const midIndex = Math.floor(ll.size / 2);
// Mid index
// Method 0
// console.log(ll.findNodeByIndex(midIndex));

// Iterative approaches
// METHOD 1
console.log('method 1', ll.findMidNodeMethod1());

// METHOD 2
console.log('method 2', ll.findMidNodeMethod2());

// METHOD 3
console.log('method 3', ll.findMidNodeMethod2());
