import LinkedList from './1.SinglyLinkedList';

// RUN FILE LIKE THIS: node -r esm
// (npm install esm, and in package.json add type: module)

class LinkedListWithReverse extends LinkedList {
  constructor() {
    super();
  }

  // https://www.geeksforgeeks.org/reverse-a-linked-list/?ref=lbp
  reverse() {
    // let node = this.head;
    let prev = null;
    let current = this.head;
    let next = null;
    while (current != null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }

  // 3->2->1 original
  // 1: null<-3-x-2->1  -x- = temp detached
  // 1: null<-3<-2-x-1
  // 1: null<-3<-2<-1
  // after loop: 1->2->3
}

const ll = new LinkedListWithReverse();
// ll.append(5);
ll.append(4);
ll.append(3);
ll.append(2);
ll.append(1);

// console.log(ll.size);
console.log(ll.toArray());
// ll.print();

ll.reverse();
console.log('AFTER REVERSE -----');
// console.log(ll.size);
console.log(ll.toArray());
// ll.print();

// REVERSE A LINKED LIST
