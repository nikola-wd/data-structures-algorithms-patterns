import LinkedList, { Node } from './1.SinglyLinkedList';

// Alternate Odd and Even Nodes in a Singly Linked List
// Given a singly linked list, rearrange the list so that even and odd nodes are alternate in the list.
// There are two possible forms of this rearrangement.
// If the first data is odd, then the second node must be even.
// The third node must be odd and so on.
// Notice that another arrangement is possible where the first node is even, second odd, third even and so on.
// https://www.geeksforgeeks.org/alternate-odd-even-nodes-singly-linked-list/?ref=lbp

class AlternateOddEven extends LinkedList {
  constructor() {
    super();
  }

  // This only works if the number of odds and evens is equal
  // gFg solution 1
  alternateOddEven() {
    let curNode = this.head;
    let odd = [];
    let even = [];
    let i = 1;

    while (curNode !== null) {
      if (curNode.data % 2 !== 0 && i % 2 === 0) {
        // Odd Value in Even Position
        // Add pointer to current node
        // in odd stack
        odd.push(curNode);
      } else if (curNode.data % 2 === 0 && i % 2 !== 0) {
        // Even Value in Odd Position
        // Add pointer to current node
        // in even stack
        even.push(curNode);
      }

      curNode = curNode.next;
      i++;
    }

    console.log('odd: ', odd);
    console.log('even: ', even);

    while (odd.length > 0 && even.length > 0) {
      // Swap Data at the top of two stacks
      let k = odd[odd.length - 1].data;
      odd[odd.length - 1].data = even[even.length - 1].data;
      even[even.length - 1].data = k;
      odd.pop();
      even.pop();
    }
  }

  //   XXX: Method 2 (Efficient)
  // Segregate odd and even values in the list. After this, all odd values will occur together followed by all even values.
  // Split the list into two lists odd and even.
  // Merge the even list into odd list
  //   Time Complexity : O(n)
  // Auxiliary Space : O(1)
  alternateOddEvenSegregateMerge() {
    // Step 1: Segregate even and odd nodes
    // Step 2: Split odd and even lists
    // Step 3: Merge even list into odd list
    let head = this.head;
    var even;
    var temp, prev_temp;
    var i,
      j,
      k,
      l,
      ptr = null;

    // Step 1: Segregate Odd and Even Nodes
    temp = head.next;
    prev_temp = head;

    while (temp != null) {
      // Backup next pointer of temp
      var x = temp.next;

      // If temp is odd move the node
      // to beginning of list
      if (temp.data % 2 != 0) {
        prev_temp.next = x;
        temp.next = head;
        head = temp;
      } else {
        prev_temp = temp;
      }

      // Advance Temp Pointer
      temp = x;
    }

    // Step 2
    // Split the List into Odd and even
    temp = head.next;
    prev_temp = head;

    while (temp != null && temp.data % 2 != 0) {
      prev_temp = temp;
      temp = temp.next;
    }

    even = temp;

    // End the odd List (Make last node null)
    prev_temp.next = null;

    // Step 3:
    // Merge Even List into odd
    i = head;
    j = even;

    while (j != null && i != null) {
      // While both lists are not
      // exhausted Backup next
      // pointers of i and j
      k = i.next;
      l = j.next;

      i.next = j;
      j.next = k;

      // ptr points to the latest node added
      ptr = j;

      // Advance i and j pointers
      i = k;
      j = l;
    }

    if (i == null) {
      // Odd list exhausts before even,
      // append remainder of even list to odd.
      ptr.next = j;
    }

    // The case where even list exhausts before
    // odd list is automatically handled since we
    // merge the even list into the odd list
    return head;
  }
}

const ll1 = new AlternateOddEven();
ll1.append(1);
ll1.append(3);
ll1.append(4);
ll1.append(7);
ll1.append(8);
ll1.append(10);
ll1.append(20);
console.log(ll1.toArray());

console.log('After rearange ----');
// ll1.alternateOddEven();
ll1.head = ll1.alternateOddEvenSegregateMerge();
console.log(ll1.toArray());
