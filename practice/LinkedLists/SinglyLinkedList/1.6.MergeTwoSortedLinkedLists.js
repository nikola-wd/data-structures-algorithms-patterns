import LinkedList, { Node } from './1.SinglyLinkedList';

// Problem: MERGE TWO SORTED LINKED LISTS
// https://www.geeksforgeeks.org/merge-two-sorted-linked-lists/?ref=lbp

// Write a SortedMerge() function that takes two lists,
// each of which is sorted in increasing order,
// and merges the two together into one list which is
// in increasing order. SortedMerge() should return the new list.
// The new list should be made by splicing together the nodes of the first two lists.

// For example if the first linked list a is 5->10->15
// and the other linked list b is 2->3->20,
// then SortedMerge() should return a pointer to the
// head node of the merged list 2->3->5->10->15->20.

class LinkedListWithMergeSecondList extends LinkedList {
  constructor() {
    super();
  }
}

// XXX: METHOD 1 (Using Dummy Nodes)
// The strategy here uses a temporary dummy node as the start of the result list.
// The pointer Tail always points to the last node in the result list, so appending new nodes is easy.

// The dummy node gives the tail something to point to initially when the result list is empty.
// This dummy node is efficient, since it is only temporary, and it is allocated in the stack.
// The loop proceeds, removing one node from either ‘a’ or ‘b’, and adding it to the tail.
// When We are done, the result is in dummy.next.
function sortedMerge(headA, headB) {
  // a dummy first node to hang the result on
  let dummyList = new LinkedListWithMergeSecondList();
  dummyList.prepend(new Node(0));
  // tail points to the last result node
  let tail = dummyList;
  while (true) {
    // if either list runs out, use the other list
    if (headA === null) {
      tail.next = headB;
      break;
    }
    if (headB === null) {
      tail.next = headA;
      break;
    }
    /* Compare the data of the two
      lists, whichever lists' data is
      smaller, append it into tail and
      advance the head to the next Node
    */
    if (headA.data <= headB.data) {
      tail.next = headA;
      headA = headA.next;
    } else {
      tail.next = headB;
      headB = headB.next;
    }
    // Advance the tail
    dummyList.size = 1;
    tail = tail.next;
  }

  return [dummyList.next, dummyList.size];
}

// XXX: METHOD 2 (Using Local References)
// This solution is structurally very similar to the above,
// but it avoids using a dummy node.
// Instead, it maintains a struct node** pointer, lastPtrRef,
// that always points to the last pointer of the result list.
// This solves the same case that the dummy node did
// — dealing with the result list when it is empty.
// If you are trying to build up a list at its tail,
// either the dummy node or the struct node** “reference”
// strategy can be used.

function MoveNode(destRef, sourceRef) {
  // if the source list empty, do nothing
  if (sourceRef === null) {
    return;
  }

  let newNode = sourceRef; // the front source node
  sourceRef = sourceRef.next; // advance the source pointer
  newNode.next = destRef; // link the old dest off the new node
  destRef = newNode; // move dest to point to the new node
}

function sortedMerge2(a, b) {
  let result = null;
  // point to the last result pointer
  let lastPtrRef = result;

  while (1) {
    // if a exhausted
    if (a === null) {
      lastPtrRef = b;
      break;
      // If b exhausted
    } else if (b === null) {
      lastPtrRef = a;
      break;
    }

    if (a.data <= b.data) {
      // TODO: define MoveNode (defined, but test if it works)
      MoveNode(lastPtrRef, a);
    } else {
      MoveNode(lastPtrRef, b);
    }

    // tricky: advance to point to the next ".next" field
    lastPtrRef = lastPtrRef.next;
  }
  return result;
}

// XXX: METHOD 3 (Using Recursion)
// Merge is one of those nice recursive problems where the
// recursive solution code is much cleaner than the iterative code.
// You probably wouldn’t want to use the recursive version for production code,
// however, because it will use stack space which is proportional to the length of the lists.
function sortedMergeRecur(a, b) {
  // a exhausted
  if (a === null) return b;
  // b exhausted
  if (b === null) return a;

  if (a.data <= b.data) {
    a.next = sortedMergeRecur(a.next, b);
    return a;
  } else {
    b.next = sortedMergeRecur(a, b.next);
    return b;
  }
}

const ll1 = new LinkedListWithMergeSecondList();
ll1.append(1);
ll1.append(2);

const ll2 = new LinkedListWithMergeSecondList();
ll2.append(5);
ll2.append(6);
ll2.append(7);

console.log('ll1', ll1.size);
console.log('ll1: ', ll1.toArray());
console.log('-------');
console.log('ll2', ll2.size);
console.log('ll2: ', ll2.toArray());

// Method 1
// [ll1.head, ll1.size] = sortedMerge(ll1.head, ll2.head);

// method 3 - recursive
const merged = sortedMergeRecur(ll1.head, ll2.head);

console.log('AFTER SORTED MERGE ------');
console.log('ll1', ll1.size);
console.log('ll1: ', ll1.toArray());
console.log('-------');

// console.log('mergedRecur: ', merged);
