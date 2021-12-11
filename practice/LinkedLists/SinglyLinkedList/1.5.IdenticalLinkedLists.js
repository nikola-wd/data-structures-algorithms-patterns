import LinkedList, { Node } from './1.SinglyLinkedList';

// https://www.geeksforgeeks.org/identical-linked-lists/?ref=lbp
// Two Linked Lists are identical when they have the same data and the arrangement of
// data is also the same. For example, Linked lists a (1->2->3) and b(1->2->3) are identical.
// Write a function to check if the given two linked lists are identical.

// Method 1 (Iterative)
// To identify if two lists are identical,
// we need to traverse both lists simultaneously,
// and while traversing we need to compare data.

class LinkedListWithIdentical extends LinkedList {
  constructor() {
    super();
  }

  // GeeksForGeeks solution 1
  // Method 1 - iterative
  GfGIterativeIsIdenticalTo(listB) {
    let a = this.head;
    let b = listB.head;
    while (a != null && b != null) {
      if (a.data !== b.data) return false;
      //  If we reach here, then a and b
      //  are not null and their data is
      //  same, so move to next nodes
      //  in both lists
      a = a.next;
      b = b.next;
    }
    // If linked lists are identical,
    // then 'a' and 'b' must be null
    // at this point.
    return a == null && b == null;
  }
}

// My Working Solution (before using GfG solutions)
function areTwoListsIdentical(list1, list2) {
  let current1 = ll1.getHead(),
    current2 = ll2.getHead();

  if (!current1 || !current2 || list1.size !== list2.size) return false;

  while (current1 && current2) {
    if (current1.data !== current2.data) {
      return false;
    }
    current1 = current1.next;
    current2 = current2.next;
  }

  return true;
}

// GeeksForGeeks solution 2
// Method 2 - recursive
// Recursive solution code is much cleaner than iterative code.
// You probably wouldn’t want to use the recursive version for production code,
// however, because it will use stack space which is proportional to the length of the lists
// TODO: something doesn't work here
function gFgRecursiveAreListsIdentical(a, b) {
  // If both lists are empty
  if (a === null && b === null) return true;

  // If both lists are not empty,
  // then data of current nodes must match,
  // and same should be recursively true
  // for rest of the nodes.
  if (a !== null && b !== null) {
    return a.data === b.data && gFgRecursiveAreListsIdentical(a.next, b.next);
  }
  // If we reach here, then they are not identical
  return false;
}

const ll1 = new LinkedListWithIdentical();
ll1.append(3);
ll1.append(4);
ll1.append(5);
ll1.append(2);
ll1.append(1);

const ll2 = new LinkedListWithIdentical();
ll2.append(3);
ll2.append(4);
ll2.append(5);
ll2.append(2);
ll2.append(1);

console.log('ll1', ll1.size);
console.log('ll1: ', ll1.toArray());
console.log('-------');
console.log('ll2', ll2.size);
console.log('ll2: ', ll2.toArray());

// console.log("mySolution: ", areTwoListsIdentical(ll1, ll2) ? 'IDENTICAL' : 'NOT IDENTICAL');
// console.log(
//   'gFgSolution1',
//   ll1.GfGIterativeIsIdenticalTo(ll2) ? 'IDENTICAL' : 'NOT IDENTICAL'
// );
console.log(
  'gFgSolution2',
  gFgRecursiveAreListsIdentical(ll1.getHead(), ll2.getHead())
    ? 'IDENTICAL'
    : 'NOT IDENTICAL'
);

// console.log(gFgRecursiveAreListsIdentical(ll1, ll2));

// MERGE SORT A LINKED LIST
