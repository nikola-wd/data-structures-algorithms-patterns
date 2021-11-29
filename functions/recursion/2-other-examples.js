// 1. Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.
const sum = (arr, n) => {
  // Only change code below this line
  if (n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
  // Only change code above this line
};
// console.log(sum([1, 2, 3, 4, 5], 3));

// ---------------------------------------------------

// 2. add (techsith yt)
// sum integers from a range from n to 1
const add = (n) => {
  if (n <= 0) return 0;
  // It doesn't return until we get to 0
  // That's why it works
  return n + add(n - 1);
};

/*
// add(12000) causes stack overflow
// add(3);
// Steps
3 + add(2);
3 + 2 + add(1);
3 + 2 + 1 + add(0);
3 + 2 + 1 + 0;
*/
console.log(add(5));

// funfunfunction example
let countDownFrom = (num) => {
  if (num === 0) return;
  console.log(num);
  countDownFrom(num - 1);
};

countDownFrom(10);

console.log('------------------------------------');

// babel-node to run
let categories = [
  { id: 'animals', parent: null },
  { id: 'mammals', parent: 'animals' },
  { id: 'cats', parent: 'mammals' },
  { id: 'dogs', parent: 'mammals' },
  { id: 'chihuahua', parent: 'dogs' },
  { id: 'labrador', parent: 'dogs' },
  { id: 'persian', parent: 'cats' },
  { id: 'siamese', parent: 'cats' },
];

let makeTree = (categories, parent) => {
  let node = {};

  categories
    .filter((c) => c.parent === parent)
    .forEach((c) => (node[c.id] = makeTree(categories, c.id)));

  return node;
};

console.log(JSON.stringify(makeTree(categories, 'yo'), null, 2));

console.log('-------------------------------------');

// ColtStele examples
// StackOverflow is a recursive version of the infinite loop
const cScountDown = (num) => {
  if (num <= 0) return;
  console.log(num);
  num--;
  cScountDown(num);
};
console.log('cScountDown');
cScountDown(23);

console.log('-------------------------------------');
console.log('sumRange');

const sumRange = (num) => {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
};
console.log(sumRange(3));

console.log('-------------------------------------');
console.log('lhCountDown');
// Leigh Halliday
const lhCountDown = (num) => {
  console.log(num);
  if (num > 1) {
    lhCountDown(num - 1);
  }
};
lhCountDown(9);

console.log('-------------------------------------');
console.log('Summing Array Elements');
function lhArrSum(elems) {
  if (elems.length === 0) return 0;
  console.log('elems: ', elems);
  const [head, ...rest] = elems;
  return head + lhArrSum(rest);
}
console.log('lhArrSum');
console.log(lhArrSum([1, 2, 3, 4, 5]));
console.log('-------------------------------------');

console.log('lhPower');
// Calculating the power: 4^4
function lhPower(num, pow) {
  if (pow === 1) return num;
  return num * lhPower(num, pow - 1);
}
console.log('lhPower');
console.log(lhPower(4, 3));
console.log('-------------------------------------');

console.log('lhFactorial');
// Calculating factorial: 5! (5 * 5 * 3 * 2 * 1)
function lhFactorial(num) {
  if (num <= 1) return 1;
  return num * lhFactorial(num - 1);
}
console.log(lhFactorial(5));
console.log('-------------------------------------');

console.log('lhFibonacci');
// 0, 1, 1, 2, 3, 5, 8, 13 ...
function lhFibonacci(rem, acc = [0, 1]) {
  if (rem <= 2) {
    return acc;
  } else {
    const [second, last] = acc.slice(-2);
    return lhFibonacci(rem - 1, [...acc, second + last]);
  }
}
console.log(lhFibonacci(5));
console.log('-------------------------------------');

console.log('lhPrintTree');
const root = {
  node: 'arabica',
  children: [
    {
      node: 'heriloom',
      children: [],
    },
    {
      node: 'bourbon',
      children: [
        { node: 'caturra', children: [] },
        { node: 'mokka', children: [] },
      ],
    },
    {
      node: 'typica',
      children: [
        { node: 'kona', children: [] },
        { node: 'java', children: [] },
      ],
    },
  ],
};

function lhPrintTree({ node, children }) {
  console.group(node);
  children.forEach((child) => lhPrintTree(child));
  console.groupEnd(node); // end group when the node has ended;
}
lhPrintTree(root);

// Yt Davve Gray ---------------------------
// Fibonacci
// loop
const fibLoop = (num, array = [0, 1]) => {
  while (num > 2) {
    const [nextToLast, last] = array.slice(-2);
    array.push(nextToLast + last);
    num -= 1;
  }
  return array;
};

// recursion
const fibRec = (num, array = [0, 1]) => {
  if (num <= 2) return array;
  const [nextToLast, last] = array.slice(-2);
  return fibRec(num - 1, [...array, nextToLast + last]);
};

console.log(fibRec(1000));
// -----------------------------------
console.log('-----------------------------------');

// fibonacciPos
// no rec
const fibonacciPos = (pos) => {
  if (pos <= 1) return pos;
  const seq = [0, 1];
  for (let i = 2; i <= pos; i++) {
    const [nextToLast, last] = seq.slice(-2);
    seq.push(nextToLast + last);
  }
  console.log('seq up to 8 places: ', seq);
  return seq[pos];
};

console.log(fibonacciPos(11));

// pos recursion
console.log('fib position with recursion');

const fibPosRec = (pos) => {
  if (pos < 2) return pos;
  return fibPosRec(pos - 1) + fibPosRec(pos - 2);
};

console.log(fibPosRec(10));
// 0, 1, 1, 2, 3 ,5, 8, 13, 21, 34, 55

// https://www.youtube.com/watch?v=Q0alTGQ-lXk&ab_channel=DaveGray - has async await recursion example

const artistsByGenre = {
  jazz: ['Miles Davis', 'John Coltrane'],
  rock: {
    classic: ['Bob Seger', 'The Eagles'],
    hair: ['Def Leppard', 'Whitesnake', 'Poison'],
    alt: {
      classic: ['Pearl Jam', 'The Killers'],
      current: ['Joywave', 'Sir Sly'],
    },
  },
  unclassified: {
    new: ['Caamp', 'Neil Young'],
    classic: ['Seal', 'Morcheeba', 'Chris Stapleton'],
  },
};

const getArtistNames = (dataObj, arr = []) => {
  Object.keys(dataObj).forEach((key) => {
    if (Array.isArray(dataObj[key])) {
      return dataObj[key].forEach((artist) => {
        arr.push(artist);
      });
    }
    getArtistNames(dataObj[key], arr);
  });
  return arr;
};

// All Things Javascript, LLC YT ------------------------------------------------------------
const ujFactorial = (num) => {
  if (num === 1) return 1;
  return num * ujFactorial(num - 1);
};
console.log(ujFactorial(3));
