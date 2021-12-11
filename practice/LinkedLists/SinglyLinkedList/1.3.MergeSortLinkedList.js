import LinkedList from './1.SinglyLinkedList';

// APPROACH 1
// Time Complexity: O(n*log n)
// Space Complexity: O(n*log n)

// RUN FILE LIKE THIS: node -r esm
// (npm install esm, and in package.json add type: module

// MERGE SORT IS PREFERRED FOR LINKED LISTS
// https://www.geeksforgeeks.org/merge-sort-for-linked-list/?ref=lbp
// The slow random-access performance of a linked list
// makes some other algorithms (such as quicksort)
// perform poorly, and others (such as heapsort) completely impossible.

// MergeSort(headRef)
// 1) If the head is NULL or there is only one element in the Linked List
//     then return.
// 2) Else divide the linked list into two halves.
//       FrontBackSplit(head, &a, &b); /* a and b are two halves */
// 3) Sort the two halves a and b.
//       MergeSort(a);
//       MergeSort(b);
// 4) Merge the sorted a and b (using SortedMerge() discussed here)
//    and update the head pointer using headRef.
//      *headRef = SortedMerge(a, b);

class LinkedListWithMergeSort extends LinkedList {
  constructor() {
    super();
  }

  //sortedMerge
  sortedMerge(a, b) {
    let result = null;
    // Base cases
    if (a === null) return b;
    if (b === null) return a;

    // Pick either a or b, and recur
    if (a.data <= b.data) {
      result = a;
      result.next = this.sortedMerge(a.next, b);
    } else {
      result = b;
      result.next = this.sortedMerge(a, b.next);
    }
    return result;
  }

  // mergeSort
  mergeSort(h) {
    // Base case: if head is null
    if (h === null || h.next === null) {
      return h;
    }
    // get the middle of the list
    let middle = this.getMiddle(h);
    let nextOfMiddle = middle.next;

    // set the next of mid node to null
    middle.next = null;

    // Apply merge sort on left list
    let left = this.mergeSort(h);
    // Apply merge sort on the right list
    let right = this.mergeSort(nextOfMiddle);

    // Merge the left and right lists
    const sortedList = this.sortedMerge(left, right);
    return sortedList;
  }

  // getMiddle utility to get the mid element
  getMiddle(head) {
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
