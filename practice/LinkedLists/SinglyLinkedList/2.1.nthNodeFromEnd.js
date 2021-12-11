import LinkedList, { Node } from './1.SinglyLinkedList';

// FIND Nth NODE FROM THE END OF A LL
// https://www.geeksforgeeks.org/nth-node-from-the-end-of-a-linked-list/?ref=lbp

class NthNodeFromEndLL extends LinkedList {
  constructor() {
    super();
  }

  //   XXX: Method 1 (Use length of linked list)
  // 1) Calculate the length of Linked List. Let the length be len.
  // 2) Print the (len – n + 1)th node from the beginning of the Linked List.
  // Double pointer concept : First pointer is used to store the address of
  // the variable and second pointer used to store the address of the first pointer.
  // If we wish to change the value of a variable by a function, we pass pointer to it.
  // And if we wish to change value of a pointer (i. e., it should start pointing to something else),
  // we pass pointer to a pointer.
  printNthFromLast(n) {
    let len = 0;
    let temp = this.head;

    // 1) count the number of nodes in Linked List
    while (temp != null) {
      temp = temp.next;
      len++;
    }

    // check if value of n is not more than length of
    // the linked list
    if (len < n) return;

    temp = this.head;

    // 2) get the (len-n+1)th node from the beginning
    for (let i = 1; i < len - n + 1; i++) temp = temp.next;

    return temp;
  }

  //   XXX: Method 2 (Use two pointers)
  // Maintain two pointers – reference pointer and main pointer.
  // Initialize both reference and main pointers to head.
  // First, move the reference pointer to n nodes from head.
  // Now move both pointers one by one until the reference pointer reaches the end.
  // Now the main pointer will point to nth node from the end. Return the main pointer.
  // Below image is a dry run of the above approach:
  printNthFromLastTwoPointers(n) {
    let main_ptr = this.head;
    let ref_ptr = this.head;

    let count = 0;

    if (this.head !== null) {
      while (count < n) {
        if (ref_ptr === null) {
          return;
        }
        ref_ptr = ref_ptr.next;
        count += 1;
      }
      if (ref_ptr === null) {
        this.head = this.head.next;
        if (this.head !== null) {
          return main_ptr.data;
        }
      } else {
        while (ref_ptr !== null) {
          main_ptr = main_ptr.next;
          ref_ptr = ref_ptr.next;
        }
        return main_ptr.data;
      }
    }
  }
}

// Doesn't work
function printNthFromLastRecursive(head, n) {
  let i = 0;

  if (head === null) return;

  printNthFromLastRecursive(head.next, n);
  i++;
  if (i === n) {
    return head.data;
  }
}

const ll1 = new NthNodeFromEndLL();
ll1.append(1);
ll1.append(3);
ll1.append(5);
ll1.append(7);
ll1.append(9);
console.log(ll1.toArray());

// console.log('2', ll1.printNthFromLast(3));

// Doens't work
// console.log('2', printNthFromLastRecursive(ll1.head, 3));

// console.log('3', ll1.printNthFromLastTwoPointers(3));
