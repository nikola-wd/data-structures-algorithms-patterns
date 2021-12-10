import LinkedList from './1.SinglyLinkedList';

// RUN FILE LIKE THIS: node -r esm
// (npm install esm, and in package.json add type: module)

class LinkedListWithFindMid extends LinkedList {
  constructor() {
    super();
  }

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
}

const ll = new LinkedListWithFindMid();
ll.append(5);
ll.append(3);
ll.append(1);

ll.prepend(0);

ll.prepend(6);
ll.prepend(8);
// ll.prepend(9);

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
console.log(ll.findMidNodeMethod1());
