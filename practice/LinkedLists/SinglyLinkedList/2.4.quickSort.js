import LinkedList, { Node } from './1.SinglyLinkedList';

// MTASK: QuickSort on Singly Linked List
// https://www.geeksforgeeks.org/quicksort-on-singly-linked-list/

class QuickSortLL extends LinkedList {
  constructor() {
    super();
  }
}

// In partition(), we consider last element as pivot.
// We traverse through the current list and if a node has value greater than pivot,
// we move it after tail. If the node has smaller value, we keep it at its current position.

// In QuickSortRecur(), we first call partition() which places pivot at correct
// position and returns pivot. After pivot is placed at correct position,
// we find tail node of left side (list before pivot) and recur for left list.
// Finally, we recur for right list.
function quickSortRecur(start, end) {
  if (start == null || start == end || start == end.next) return;

  // split list and partition recurse
  let pivot_prev = partitionLast(start, end);
  quickSortRecur(start, pivot_prev);

  // if pivot is picked and moved to the start,
  // that means start and pivot is same
  // so pick from next of pivot
  if (pivot_prev != null && pivot_prev == start) {
    quickSortRecur(pivot_prev.next, end);
  } else if (pivot_prev != null && pivot_prev.next != null) {
    // if pivot is in between of the list,
    // start from next of pivot,
    // since we have pivot_prev, we move two nodes
    quickSortRecur(pivot_prev.next.next, end);
  }
}

// takes first and last node,
// but do not break any links in
// the whole linked list
function partitionLast(start, end) {
  if (start == end || start == null || end == null) return start;

  var pivot_prev = start;
  var curr = start;
  var pivot = end.data;

  // iterate till one before the end,
  // no need to iterate till the end
  // because end is pivot
  while (start != end) {
    if (start.data < pivot) {
      // keep tracks of last modified item
      pivot_prev = curr;
      var temp = curr.data;
      curr.data = start.data;
      start.data = temp;
      curr = curr.next;
    }
    start = start.next;
  }

  // swap the position of curr i.e.
  // next suitable index and pivot
  var temp = curr.data;
  curr.data = pivot;
  end.data = temp;

  // return one previous to current
  // because current is now pointing to pivot
  return pivot_prev;
}

const ll1 = new QuickSortLL();
ll1.append(1);
ll1.append(50);
ll1.append(7);
ll1.append(3);
ll1.append(9);

let n = ll1.head;
while (n.next != null) n = n.next;
quickSortRecur(ll1.head, n);

console.log(ll1.toArray());
