import LinkedList, { Node } from './1.SinglyLinkedList';

// MOVE LAST ELEMENT TO FRONT OF A GIVEN LINKED LIST
// https://www.geeksforgeeks.org/move-last-element-to-front-of-a-given-linked-list/

// Write a function that moves the last element to the front in a
// given Singly Linked List. For example, if the given Linked List is 1->2->3->4->5,
//  then the function should change the list to 5->1->2->3->4.

// Algorithm:
// Traverse the list till last node. Use two pointers:
// one to store the address of last node and other for address of second last node.
// After the end of loop do following operations.
// i) Make second last as last (secLast->next = NULL).
// ii) Set next of last as head (last->next = *head_ref).
// iii) Make last as head ( *head_ref = last)

class LinkedListMergeSortedInPlace extends LinkedList {
  constructor() {
    super();
  }

  moveLastToFront() {
    /*
     * If linked list is empty or it contains only one node then simply return.
     */
    if (this.head == null || this.head.next == null) return;

    /* Initialize second last and last pointers */
    var secLast = null;
    var last = this.head;
    /*
     * After this loop secLast contains address of second last node and last
     * contains address of last node in Linked List
     */
    while (last.next != null) {
      secLast = last;
      last = last.next;
    }
    /* Set the next of second last as null */
    secLast.next = null;
    /* Set the next of last as head */
    last.next = this.head;
    /* Change head to point to last node. */
    this.head = last;
  }
}

const ll1 = new LinkedListMergeSortedInPlace();
ll1.append(1);
ll1.append(3);
ll1.append(5);
ll1.append(7);
ll1.append(9);

console.log(ll1.toArray());
console.log('after swap');
ll1.moveLastToFront();
console.log(ll1.toArray());
