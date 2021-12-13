import LinkedList, { Node } from './1.SinglyLinkedList';

// Intersection of two Sorted Linked Lists
// https://www.geeksforgeeks.org/intersection-of-two-sorted-linked-lists/

class llIntersection extends LinkedList {
  constructor() {
    super();
  }
}

// XXX: Method 1: Using Dummy Node
// The idea is to use a temporary dummy node at the start of the result list.
// The pointer tail always points to the last node in the result list,
// so new nodes can be added easily. The dummy node initially gives the tail
// a memory space to point to. This dummy node is efficient, since it is only temporary,
// and it is allocated in the stack. The loop proceeds, removing one node from either ‘a’ or ‘b’
// and adding it to the tail. When the given lists are traversed the result is in dummy. next,
// as the values are allocated from next node of the dummy. If both the elements are equal then
// remove both and insert the element to the tail. Else remove the smaller element among both the lists.
function push(head_ref, new_data) {
  let new_node = new Node(new_data);

  new_node.next = head_ref;
  // Move the head to point to the new node
  head_ref = new_node;
  return head_ref;
}
function sortedIntersect1(a, b) {
  let dummy = new Node();
  let tail = dummy;
  dummy.next = null;

  while (a !== null && b !== null) {
    if (a.data === b.data) {
      tail.next = push(tail.next, a.data);
      tail = tail.next;
      a = a.next;
      b = b.next;
      // Advance the smaller list
    } else if (a.data < b.data) {
      a = a.next;
    } else {
      b = b.next;
    }
  }
  return dummy.next;
}

// XXX: Method 2: Recursive
// The recursive approach is very similar to the the above two approaches.
// Build a recursive function that takes two nodes and returns a linked list node.
// Compare the first element of both the lists.

// If they are similar then call the recursive function with the next node of both the lists.
// Create a node with the data of the current node and put the returned node from the recursive
// function to the next pointer of the node created. Return the node created.
// If the values are not equal then remove the smaller node of both the lists and call the recursive function.
function sortedIntersectRecur(a, b) {
  // Base case
  if (a === null || b === null) return null;
  // If both lists are not empty
  // Advance the smaller list and call recursively
  if (a.data < b.data) {
    return sortedIntersectRecur(a.next, b);
  }
  if (a.data > b.data) {
    return sortedIntersectRecur(a, b.next);
  }

  // This is executed only when a.data === b.data
  let temp = new Node(a.data);
  temp.next = sortedIntersectRecur(a.next, b.next);
  return temp;
}

const ll1 = new llIntersection();
ll1.append(1);
ll1.append(2);
ll1.append(3);
ll1.append(4);
ll1.append(5);
ll1.append(6);

const ll2 = new llIntersection();
ll2.append(2);
ll2.append(4);
ll2.append(6);
ll2.append(8);

// Expected output: 2->4->6
// console.log(sortedIntersect1(ll1.head, ll2.head));
console.log(sortedIntersectRecur(ll1.head, ll2.head));
