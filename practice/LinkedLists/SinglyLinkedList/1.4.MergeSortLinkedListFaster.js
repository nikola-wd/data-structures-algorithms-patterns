import LinkedList, { Node } from './1.SinglyLinkedList';

// APPROACH 1
// Time Complexity: O(log n)
// Space Complexity: O(log n)

// RUN FILE LIKE THIS: node -r esm
// (npm install esm, and in package.json add type: module

// MERGE SORT IS PREFERRED FOR LINKED LISTS
// https://www.geeksforgeeks.org/merge-sort-for-linked-list/?ref=lbp
// The slow random-access performance of a linked list
// makes some other algorithms (such as quicksort)
// perform poorly, and others (such as heapsort) completely impossible.

// Approach 2: This approach is simpler and uses log n space.
// mergeSort():

// If the size of the linked list is 1 then return the head
// Find mid using The Tortoise and The Hare Approach
// Store the next of mid in head2 i.e. the right sub-linked list.
// Now Make the next midpoint null.
// Recursively call mergeSort() on both left and right sub-linked list and store the new head of the left and right linked list.
// Call merge() given the arguments new heads of left and right sub-linked lists and store the final head returned after merging.
// Return the final head of the merged linkedlist.
// merge(head1, head2):

// Take a pointer say merged to store the merged list in it and store a dummy node in it.
// Take a pointer temp and assign merge to it.
// If the data of head1 is less than the data of head2, then, store head1 in next of temp & move head1 to the next of head1.
// Else store head2 in next of temp & move head2 to the next of head2.
// Move temp to the next of temp.
// Repeat steps 3, 4 & 5 until head1 is not equal to null and head2 is not equal to null.
// Now add any remaining nodes of the first or the second linked list to the merged linked list.
// Return the next of merged(that will ignore the dummy and return the head of the final merged linked list)

class LinkedListWithMergeSort extends LinkedList {
  constructor() {
    super();
  }

  //merge
  merge(head1, head2) {
    let merged = new Node(-1);
    let temp = merged;

    while (head1 !== null && head2 !== null) {
      if (head1.data < head2.data) {
        temp.next = head1;
        head1 = head1.next;
      } else {
        temp.next = head2;
        head2 = head2.next;
      }
      temp = temp.next;
    }

    // While head1 is not null
    while (head1 !== null) {
      temp.next = head1;
      head1 = head1.next;
      temp = temp.next;
    }

    // While head2 is not null
    while (head2 !== null) {
      temp.next = head2;
      head2 = head2.next;
      temp = temp.next;
    }

    return merged.next;
  }

  // mergeSort
  mergeSort(head) {
    if (head.next === null) return head;

    let mid = this.findMid(head);
    let head2 = mid.next;
    mid.next = null;
    let newHead1 = this.mergeSort(head);
    let newHead2 = this.mergeSort(head2);
    let finalHead = this.merge(newHead1, newHead2);

    return finalHead;
  }

  // findMid utility to get the mid element (using hare and tortoise approach)
  findMid(head) {
    if (head === null) return head;

    let slow = head,
      fast = head;
    while (fast.next !== null && fast.next.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }
}

const ll = new LinkedListWithMergeSort();
ll.append(3);
ll.append(4);
ll.append(5);
ll.append(1);
ll.append(2);

// console.log(ll.size);
console.log(ll.toArray());
// ll.print();

ll.head = ll.mergeSort(ll.head);
console.log('AFTER MERGE SORT -----');
// console.log(ll.size);
console.log(ll.toArray());
// ll.print();

// MERGE SORT A LINKED LIST
