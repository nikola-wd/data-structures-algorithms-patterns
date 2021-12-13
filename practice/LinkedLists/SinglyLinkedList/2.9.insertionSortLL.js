import LinkedList, { Node } from './1.SinglyLinkedList';

// Insertion Sort for Singly Linked Lis
// https://www.geeksforgeeks.org/insertion-sort-for-singly-linked-list/#

class LLInsertionSort extends LinkedList {
  constructor() {
    super();
  }
}

// function to sort a singly linked list using insertion sort
// TODO: Fix. doesn't work properly. Ommits 1
function insertionSort(headref = this.head) {
  // Initialize sorted linked list
  let sorted = null;
  let current = headref;
  // Traverse the given linked list and insert every
  // node to sorted
  while (current != null) {
    // Store next for next iteration
    let next = current.next;
    // insert current in sorted linked list
    sorted = sortedInsert(sorted, current);
    // Update current
    current = next;
  }
  // Update head_ref to point to sorted linked list
  headref = sorted;
  return headref;
}

/*
 * function to insert a new_node in a  Note that this function expects a
 * pointer to head_ref as this can modify the head of the input linked list
 * (similar to push())
 */
function sortedInsert(headref, newnode) {
  let current = null;

  /* Special case for the head end */
  if (headref == null || headref.data >= newnode.data) {
    newnode.next = headref;
    headref = newnode;
  } else {
    current = headref;
    /* Locate the node before the point of insertion */
    while (current.next != null && current.next.data < newnode.data) {
      current = current.next;
    }
    newnode.next = current.next;
    current.next = newnode;
  }
  return headref;
}

const ll1 = new LLInsertionSort();
ll1.append(3);
ll1.append(5);
ll1.append(1);
ll1.append(9);
ll1.append(7);

console.log(ll1.toArray());

console.log('After sort');
insertionSort(ll1.head);
console.log(ll1.toArray());
