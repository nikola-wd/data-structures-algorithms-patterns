// last in, first out
// An array is already a stack

// This is the implementation from scratch
var Stack = function () {
  this.count = 0;
  this.storage = {};

  this.push = (value) => {
    this.storage[this.count] = value;
    this.count++;
  };

  // Removes and returns the value at the end of the stack
  this.pop = () => {
    if (this.count === 0) {
      return undefined;
    }

    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  // Returns the value at the end of the stack
  this.peek = (value) => {
    return this.storage[this.count - 1];
  };

  this.size = () => {
    return this.count;
  };
};

var myStack = new Stack();
myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());

console.log('--------------------------------------------------------');

// This is the implementation from scratch
class ClassStack {
  constructor() {
    this.count = 0;
    this.storage = {};

    this.push = (value) => {
      this.storage[this.count] = value;
      this.count++;
    };

    // Removes and returns the value at the end of the stack
    this.pop = () => {
      if (this.count === 0) {
        return undefined;
      }

      this.count--;
      var result = this.storage[this.count];
      delete this.storage[this.count];
      return result;
    };

    // Returns the value at the end of the stack
    this.peek = (value) => {
      return this.storage[this.count - 1];
    };

    this.size = () => {
      return this.count;
    };
  }
}

var myStack = new ClassStack();
myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
