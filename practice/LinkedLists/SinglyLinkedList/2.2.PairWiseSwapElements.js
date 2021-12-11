import LinkedList, { Node } from './1.SinglyLinkedList';

// Pairwise swap elements of a given linked list
// https://www.geeksforgeeks.org/pairwise-swap-elements-of-a-given-linked-list/

// XXX: Given a singly linked list, write a function to swap elements pairwise.
// Input : 1->2->3->4->5->6->NULL
// Output : 2->1->4->3->6->5->NULL

class LLPairWiseSwap extends LinkedList {
  constructor() {
    super();
  }

  //   XXX: METHOD 1 (Iterative)
  // Start from the head node and traverse the list.
  // While traversing swap data of each node with its next node’s data.
  // Time complexity: O(n)
  pairWiseSwap() {
    let temp = this.head;
    /* Traverse only till there are 
        at least 2 nodes left */
    while (temp !== null && temp.next !== null) {
      // swap data
      let k = temp.data;
      temp.data = temp.next.data;
      temp.next.data = k;
      temp = temp.next.next;
    }
  }

  // XXX: METHOD 2 (Recursive)
  // If there are 2 or more than 2 nodes in Linked List
  // then swap the first two nodes and recursively call for the rest of the list.
  pairWiseSwapRecursive(head) {
    /* There must be at-least two nodes in the list */
    if (head != null && head.next != null) {
      /* Swap the node's data with data of next node */
      this.swap(head, head.next);

      /* Call pairWiseSwap() for rest of the list */
      this.pairWiseSwapRecursive(head.next.next);
    }
  }

  swap(a, b) {
    let tempData = a.data;
    a.data = b.data;
    b.data = tempData;
  }
}

const ll1 = new LLPairWiseSwap();
ll1.append(1);
ll1.append(3);
ll1.append(5);
ll1.append(7);
ll1.append(9);
console.log(ll1.toArray());

// ll1.pairWiseSwap();
ll1.pairWiseSwapRecursive(ll1.head);

console.log('after swap');
console.log(ll1.toArray());
