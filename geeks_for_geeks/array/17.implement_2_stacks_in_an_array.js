// Create a data structure twoStacks taht represents 2 stacks.
// Implementation of twoStacks should use onl yone array, i.e., both stacks
// should use the same array for storing elements. Following functions must be
// supported by twoStacks

// push1(int x) -> pushes x to first stack
// push2(int x) -> pushes x to second stack

// pop1() -> pops an element from first stack and returns the popped el
// pop2() -> pops an element from 2nd stack and returns the popped el

// XXX: Method 1 - Divide the space in two halves
// A simple way to implement 2 stacks is to divide the arr in 2 halves
// and assign the half space to 2 stacks, i.e. use arr[0] to arr[n/2] for stack1,
// and arr[n / 2 + 1] to arr[n - 1] for stack 2 where arr[] is the array
// to be used to implement 2 stacks and size of array be n

// The problem with this method is inefficient use of arr space

// A stack push operation may result in stack overflow even if there is space available in arr[]

// For example, say the array size is 6 and we push 3 els to stack1 and do not push anything to second stack2
// When we push 4th el to stack1, there will be an overflow even if we have space for 3 more els in array

// XXX: Method 2 (A space efficient implementation)
// This method efficiently utilizes the available space
// It doesn't cause an overflow if there is space available in arr[]
// The idea is to start 2 stacks from two extreme corners of arr[]
// Stack1 starts from the leftmost el, the first el in stack1 is pushed at index 0
// Stack 2 starts from n - 1
// Both stacks grow (or shrink) in opposite direction.
// To check for overflow, all we need to check is for space between top els of both stacks
class TwoStacks {
  constructor(n) {
    this.size = n;
    this.arr = new Array(n);
    this.top1 = -1;
    this.top2 = n;
  }

  push1(x) {
    // There is at least one empty space for new el
    if (this.top1 < this.top2 - 1) {
      this.top1++;
      this.arr[this.top1] = x;
    } else {
      console.log('Stack Overflow');
    }
  }

  push2(x) {
    // There is at least one empty space for new el
    if (this.top1 < this.top2 - 1) {
      this.top2--;
      this.arr[this.top2] = x;
    } else {
      console.log('Stack Overflow');
    }
  }

  pop1() {
    if (this.top1 >= 0) {
      let x = this.arr[this.top1];
      this.top1--;
      return x;
    } else {
      console.log('Stack Underflow');
    }
  }

  pop2() {
    if (this.top2 < this.size) {
      let x = this.arr[this.top2];
      this.top2++;
      return x;
    } else {
      console.log('Stack Underflow');
    }
  }

  print() {
    console.log(this.arr);
  }
}

const ts = new TwoStacks(6);
ts.push1('one');
ts.push1('two');
ts.push1('three');
ts.push1('four');
ts.push2('six');
ts.push2('five');
console.log(ts.pop1());
ts.push2('five');
console.log(ts.pop2());
ts.push1('oneee');
ts.print();
