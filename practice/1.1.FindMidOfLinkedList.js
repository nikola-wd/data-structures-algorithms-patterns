import LinkedList from './1.SinglyLinkedList';

// RUN FILE LIKE THIS: node -r esm (npm install esm, and in package.json add type: module)

const ll = new LinkedList();
ll.append(5);
ll.append(3);

ll.append(1);
ll.prepend(0);

ll.prepend(6);
ll.prepend(8);
ll.prepend(9);

// console.log(ll.size);
// console.log(ll.toArray());
// ll.print();

// FIND MIDDLE OF A LINKED LIST
// IF COUNT IS EVEN, return the second item
// If we track count
const midIndex = Math.floor(ll.size / 2);
// Mid index
console.log(ll.findNodeByIndex(midIndex));
