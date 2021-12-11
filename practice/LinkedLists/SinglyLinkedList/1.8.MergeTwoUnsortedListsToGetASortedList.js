import LinkedList, { Node } from './1.SinglyLinkedList';

// Problem: MERGE TWO UNSORTED LINKED LISTS TO GET A SORTED ONE
// Given two unsorted Linked List, the task is to merge them to get a sorted singly linked list.
// https://www.geeksforgeeks.org/merge-two-unsorted-linked-lists-to-get-a-sorted-list/
// Input: List 1 = 3 -> 1 -> 5, List 2 = 6-> 2 -> 4
// Output: 1 -> 2 -> 3 -> 4 -> 5 -> 6

// Input: List 1 = 4 -> 7 -> 5, List 2 = 2-> 1 -> 8 -> 1
// Output: 1 -> 1 -> 2 -> 4 -> 5 -> 7 -> 8

// 1. NAIVE APPROACH: THE NAIVE APPROACH IS TO SORT THE GIVEN
// LINKED LISTS AND THEN MERGE THE TWO SORTED LINKED LISTS
// TOGETHER INTO ONE LIST IN INCREASING ORDER.
// To solve the problem mentioned above the naive method
// is to sort the two linked lists individually and merge
// the two linked lists together into one list which is in increasing order.

// XXX: 2. EFFICIENT APPROACH: TO OPTIMIZE THE ABOVE METHOD WE WILL CONCATENATE THE TWO LINKED LISTS AND THEN SORT IT USING ANY SORTING ALGORITHM. BELOW ARE THE STEPS:
// 2.1Concatenate the two lists by traversing the first list until we reach it’s a tail node
// and then point the next of the tail node to the head node of the second list.
// Store this concatenated list in the first list.
// 2.2Sort the above-merged linked list. Here, we will use a bubble sort.
// So, if node->next->data is less then node->data, then swap the data of the two adjacent nodes.

// Time Complexity: O((M+N)^2) where M and N are the lengths of the two given linked lists.
// We are merging the two list and performing bubble sort on the merged list.
// The time complexity of bubble sort is quadratic.
// Auxiliary Space: O(1)

// TODO: improve with merge sort

class LinkedListMergeUnsortedToGetSorted extends LinkedList {
  constructor() {
    super();
  }
}

function mergeLists(head1, head2) {
  let tail = head1;
  // Iterate through the head1 to
  // find the last node. Join the
  // next of last node of head1
  // to the 1st node of head2
  while (tail !== null) {
    if (tail.next === null && head2 !== null) {
      tail.next = head2;
      tail.next = head2;
      break;
    }
    tail = tail.next;
  }

  //  return the concatenated
  //  lists as a single list
  //  - head1
  return head1;
}

// Sort the linked list using
// bubble sort
function sortList(head1) {
  let curr = head1;
  let temp = head1;

  // Compares two adjacent elements
  // and swaps if the first element
  // is greater than the other one.
  while (curr.next !== null) {
    temp = curr.next;
    while (temp !== null) {
      if (temp.data < curr.data) {
        // swap
        let t = temp.data;
        temp.data = curr.data;
        curr.data = t;
      }
      temp = temp.next;
    }
    curr = curr.next;
  }
}

const ll1 = new LinkedListMergeUnsortedToGetSorted();
ll1.append(8);
ll1.append(2);

const ll2 = new LinkedListMergeUnsortedToGetSorted();
ll2.append(3);
ll2.append(1);
ll2.append(6);

console.log('ll1', ll1.size);
console.log('ll1: ', ll1.toArray());
console.log('-------');
console.log('ll2', ll2.size);
console.log('ll2: ', ll2.toArray());

const mergedList = mergeLists(ll1.head, ll2.head);
console.log('merged: ', mergedList);

sortList(ll1.head);
console.log('sortedMerged: ', mergedList);

console.log('AFTER MERGE MERGE ------');
console.log('ll1', ll1.size);
console.log('ll1: ', ll1.toArray());
console.log('-------');

// console.log('mergedRecur: ', merged);
