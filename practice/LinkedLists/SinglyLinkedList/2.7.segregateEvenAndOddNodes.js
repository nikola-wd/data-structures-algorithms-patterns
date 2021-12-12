import LinkedList, { Node } from './1.SinglyLinkedList';

// Segregate even and odd nodes in a Linked List
// https://www.geeksforgeeks.org/segregate-even-and-odd-elements-in-a-linked-list/

// Given a Linked List of integers, write a function to modify the linked list such that
// all even numbers appear before all the odd numbers in the modified linked list.
// Also, keep the order of even and odd numbers same.
// Examples:

// Input: 17->15->8->12->10->5->4->1->7->6->NULL
// Output: 8->12->10->4->6->17->15->5->1->7->NULL

// Input: 8->12->10->5->4->1->6->NULL
// Output: 8->12->10->4->6->5->1->NULL

// // If all numbers are even then do not change the list
// Input: 8->12->10->NULL
// Output: 8->12->10->NULL

// // If all numbers are odd then do not change the list
// Input: 1->3->5->7->NULL
// Output: 1->3->5->7->NULL

class SegregateEvenOdd extends LinkedList {
  constructor() {
    super();
  }

  //   XXX: Method 1
  // The idea is to get pointer to the last node of list. And then traverse the list starting
  // from the head node and move the odd valued nodes from their current position to end of the list.
  // Thanks to blunderboy for suggesting this method.
  // Algorithm:
  // …1) Get pointer to the last node.
  // …2) Move all the odd nodes to the end.
  // ……..a) Consider all odd nodes before the first even node and move them to end.
  // ……..b) Change the head pointer to point to the first even node.
  // ……..b) Consider all odd nodes after the first even node and move them to the end.
  // Doesn't work. TODO: figureout why
  segregateEvenOdd() {
    let head = this.head;
    var end = head;
    var prev = null;
    var curr = head;

    /* Get pointer to last Node */
    while (end.next != null) end = end.next;

    var new_end = end;

    // Consider all odd nodes before getting first even node
    while (curr.data % 2 != 0 && curr != end) {
      new_end.next = curr;
      curr = curr.next;
      new_end.next.next = null;
      new_end = new_end.next;
    }

    // do following steps only if there is an even node
    if (curr.data % 2 == 0) {
      head = curr;

      // now curr points to first even node
      while (curr != end) {
        if (curr.data % 2 == 0) {
          prev = curr;
          curr = curr.next;
        } else {
          /* Break the link between prev and curr */
          prev.next = curr.next;

          /* Make next of curr as null */
          curr.next = null;

          /* Move curr to end */
          new_end.next = curr;

          /* Make curr as new end of list */
          new_end = curr;

          /* Update curr pointer */
          curr = prev.next;
        }
      }
    } else prev = curr;

    /* We have to set prev before executing rest of this code */

    if (new_end != end && end.data % 2 != 0) {
      prev.next = end.next;
      end.next = null;
      new_end.next = end;
    }
  }

  // XXX: Method 2
  // The idea is to split the linked list into two: one containing all even nodes and other containing all odd nodes.
  // And finally, attach the odd node linked list after the even node linked list.
  // To split the Linked List, traverse the original Linked List and move all odd
  // nodes to a separate Linked List of all odd nodes. At the end of loop, the original list
  // will have all the even nodes and the odd node list will have all the odd nodes.
  // To keep the ordering of all nodes same, we must insert all the odd nodes at the end of the odd node list.
  // And to do that in constant time, we must keep track of last pointer in the odd node list.

  // Doesn't work. TODO: figure out why
  segregateEvenOdd2() {
    let head = this.head;
    var evenStart = null;
    var evenEnd = null;
    var oddStart = null;
    var oddEnd = null;
    var currentNode = head;

    while (currentNode != null) {
      var element = currentNode.data;

      if (element % 2 == 0) {
        if (evenStart == null) {
          evenStart = currentNode;
          evenEnd = evenStart;
        } else {
          evenEnd.next = currentNode;
          evenEnd = evenEnd.next;
        }
      } else {
        if (oddStart == null) {
          oddStart = currentNode;
          oddEnd = oddStart;
        } else {
          oddEnd.next = currentNode;
          oddEnd = oddEnd.next;
        }
      }
      // Move head pointer one
      // step in forward direction
      currentNode = currentNode.next;
    }

    if (oddStart == null || evenStart == null) {
      return;
    }

    evenEnd.next = oddStart;
    oddEnd.next = null;
    head = evenStart;
  }
}

const ll1 = new SegregateEvenOdd();
ll1.append(1);
ll1.append(3);
ll1.append(5);
ll1.append(7);
ll1.append(9);
ll1.append(10);
ll1.append(12);
ll1.append(99);

console.log(ll1.toArray());
console.log('after segregation');
ll1.segregateEvenOdd2();
console.log(ll1.toArray());
