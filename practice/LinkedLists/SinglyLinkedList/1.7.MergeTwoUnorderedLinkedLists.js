import LinkedList, { Node } from './1.SinglyLinkedList';

class LinkedListMergeUnsorted extends LinkedList {
  constructor() {
    super();
  }
}

// XXX: METHOD 1 (Using Dummy Nodes)
function unsortedMerge(headA, headB) {
  // a dummy first node to hang the result on
  let dummyList = new LinkedListMergeUnsorted();
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

    tail.next = headA;
    headA = headA.next;
    tail.next = headB;
    headB = headB.next;

    // Advance the tail
    dummyList.size = 2;
    tail = tail.next;
  }

  return dummyList.next;
}

// XXX: METHOD 3 (Using Recursion)
// Merge is one of those nice recursive problems where the
// recursive solution code is much cleaner than the iterative code.
// You probably wouldn’t want to use the recursive version for production code,
// however, because it will use stack space which is proportional to the length of the lists.
function unsortedMergeRecur(a, b) {
  // a exhausted
  if (a === null) return b;
  // b exhausted
  if (b === null) return a;

  if (a.data <= b.data) {
    a.next = unsortedMergeRecur(a.next, b);
    return a;
  } else {
    b.next = unsortedMergeRecur(a, b.next);
    return b;
  }
}

const ll1 = new LinkedListMergeUnsorted();
ll1.append(3);
ll1.append(2);
ll1.append(7);

const ll2 = new LinkedListMergeUnsorted();
ll2.append(13);
ll2.append(5);
ll2.append(79);
ll2.append(8);

console.log('ll1', ll1.size);
console.log('ll1: ', ll1.toArray());
console.log('-------');
console.log('ll2', ll2.size);
console.log('ll2: ', ll2.toArray());

// Method 1
const unsortedMergedList = unsortedMerge(ll1.head, ll2.head);
console.log('unsortedMergedList: ', unsortedMergedList);

// method 3 - recursive
// const merged = unsortedMergeRecur(ll1.head, ll2.head);

console.log('AFTER SORTED MERGE ------');
console.log('ll1', ll1.size);
console.log('ll1: ', ll1.toArray());
console.log('-------');

// console.log('mergedRecur: ', merged);
