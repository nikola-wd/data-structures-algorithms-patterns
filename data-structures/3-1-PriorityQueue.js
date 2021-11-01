function PriorityQueue() {
  const collection = [];

  this.print = () => console.log(collection);

  this.enqueue = (element) => {
    if (this.isEmpty()) {
      collection.push(element);
    } else {
      let added = false;
      for (let i = 0; i < collection.length; i++) {
        // Checking priorities
        if (element[1] < collection[i][1]) {
          collection.splice(i, 0, element);
          added = true;
          break;
        }
      }

      if (!added) {
        collection.push(element);
      }
    }
  };

  this.dequeue = () => {
    const value = collection.shift();
    return value[0];
  };

  this.front = () => collection[0];

  this.size = () => collection.length;

  this.isEmpty = () => collection.length === 0;
}

var q = new PriorityQueue();
q.enqueue(['Beau Carnes', 2]);
console.log('Front: ', q.front());

q.enqueue(['Nikola Ivanov', 3]);
q.enqueue(['Stefan Andonovic', 1]);

q.print();
q.enqueue(['John Snow', 2]);
q.print();

console.log('Front: ', q.front());

q.dequeue();

q.print();
