import LinkedList, { Node } from './1.SinglyLinkedList';

// Write a function that counts the number of times a given int occurs in a Linked List
// https://www.geeksforgeeks.org/write-a-function-that-counts-the-number-of-times-a-given-int-occurs-in-a-linked-list/

class IndexFindCountOdRepetitions extends LinkedList {
  constructor() {
    super();
    this.count = 0;
  }

  // My iterative solution
  findDataCountOfOccurences(data) {
    if (!this.head) return false;

    let count = 0;
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.data === data) {
        count++;
      }
      currentNode = currentNode.next;
    }

    return count;
  }

  // My recursive solution
  findDataCountOfOccurencesRecursive(currentNode, data, count = 0) {
    // base case
    if (currentNode === null) return count;
    if (currentNode.data === data) count += 1;

    return this.findDataCountOfOccurencesRecursive(
      currentNode.next,
      data,
      count
    );
  }

  // geeks for geeks recursive solution
  gFgRecursiveCountOccurences(head, data) {
    // base case
    if (head === null) return this.count;
    if (head.data === data) this.count += 1;
    return this.gFgRecursiveCountOccurences(head.next, data);
  }
}

const ll1 = new IndexFindCountOdRepetitions();
ll1.append(1);
ll1.append(3);
ll1.append(5);
ll1.append(5);
ll1.append(5);
ll1.append(5);
ll1.append(5);
ll1.append(3);
ll1.append(9);
ll1.append(5);

const value = 5;
console.log(`count of ${value}: `, ll1.findDataCountOfOccurences(value));
console.log(
  `count of ${value} recursive: `,
  ll1.findDataCountOfOccurencesRecursive(ll1.head, value)
);
console.log(
  `count of ${value} recursive gFg: `,
  ll1.gFgRecursiveCountOccurences(ll1.head, value)
);
