import LinkedList, { Node } from './1.SinglyLinkedList';

// Problem: MERGE TWO UNSORTED LINKED LISTS
// https://www.techiedelight.com/merge-alternate-nodes-two-linked-lists/

class LinkedListMergeUnsorted extends LinkedList {
  constructor() {
    super();
  }
}

function shuffleMerge(a, b) {
  let newList = new LinkedListMergeUnsorted();
  const tempHead = new Node(0);
  newList.append(tempHead);

  let tail = tempHead;
  while (true) {
    // empty list cases
    if (a === null) {
      tail.next = b;
      break;
    } else if (b === null) {
      tail.next = a;
      break;
    } else {
      // common case: move two nodes to the tail
      tail.next = a;
      tail = a;
      a = a.next;

      tail.next = b;
      tail = b;
      b = b.next;
    }
  }

  newList.removeFirst();
  return newList;
}

// Recursive function to construct a linked list by merging
// alternate nodes of two given linked lists
function shuffleMergeRecursive(a, b) {
  // see if either list is empty
  if (a === null) return b;
  if (b === null) return a;

  // it turns out to be convenient to do the recursive call first;
  // otherwise, `a.next` and `b.next` need temporary storage
  let recur = shuffleMergeRecursive(a.next, b.next);
  let result = a; // one node from `a`
  a.next = b; // one from `b`
  b.next = recur; // then the `rest`

  return result;
}

const ll1 = new LinkedListMergeUnsorted();
ll1.append(8);
ll1.append(2);

const ll2 = new LinkedListMergeUnsorted();
ll2.append(3);
ll2.append(1);
ll2.append(6);
ll2.append(66);
ll2.append(606);

console.log('ll1', ll1.size);
console.log('ll1: ', ll1.toArray());
console.log('-------');
console.log('ll2', ll2.size);
console.log('ll2: ', ll2.toArray());

// const mergedList = shuffleMerge(ll1.head, ll2.head);
const mergedList = shuffleMergeRecursive(ll1.head, ll2.head);
console.log('mergedList: ', mergedList);

console.log('ll1', ll1.size);
console.log('ll1: ', ll1.toArray());
console.log('-------');

// console.log('mergedRecur: ', merged);
