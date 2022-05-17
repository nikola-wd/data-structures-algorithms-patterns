// Given an array of integers, find the first repeating el in it.
// We need to find the el that occurs more than once and whose index of first occurence is smallest.

let list = [10, 5, 3, 4, 3, 5, 6]; // -> 5
let list1 = [6, 10, 5, 4, 9, 12, 4, 6, 10]; // -> 6

// ------------------------------

// XXX: Method 1: Simple Solution.
// Is to use 2 nested loops. The outer loop picks an el one by one,
// the inner loop checks whether the el is repeated or not.
// Once we find an el that repeats, we break the loops and print the el.
// TC: O(n^2)

function findDuplElBruteForce(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] === arr[j]) {
        return [arr[i], i];
      }
    }
  }

  // If no repeated el found
  return false;
}

// ------------------------------

// XXX: Method 2. (Use sorting)
// TC: O(n log n)
// 1. Copy the given array to aux array temp[]
// 2. Sort the temp arr using a O(n log n) sorting algo
// 3. Scan the input array from left to right. For every el, count its occurences
// in temp[] using binary search. As soon as we find an el that occurs more than once, we return the el.
// This step can be done in O(n log n) time
// TODO: Code this solution

// ------------------------------

// XXX: Method 3 - My approach using hashing
// TC: O(n), AS: O(n)
function findDuplElHashing(arr) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (!map.get(arr[i])) {
      map.set(arr[i], { count: 1, indexes: [i] });
    } else {
      const storedEl = map.get(arr[i]);
      map.set(arr[i], {
        count: storedEl.count + 1,
        indexes: [...storedEl.indexes, i],
      });
    }
  }

  // Find the smallest index
  let index = Number.MAX_SAFE_INTEGER;
  for (const [, value] of map) {
    if (value.count >= 2 && value.indexes[0] < index) {
      index = value.indexes[0];
    }
  }

  if (index < Number.MAX_SAFE_INTEGER) {
    return index;
  }

  return false;
}

// // XXX: Method 4 - g5g solution using hashing
function printFirstRepeating(arr) {
  // Initialize index of first
  // repeating element
  let min = -1;

  // Creates an empty hashset
  let set = new Set();

  // Traverse the input array from right to left
  for (let i = arr.length - 1; i >= 0; i--) {
    // If element is already in
    // hash set, update min
    if (set.has(arr[i])) min = i;
    // Else add element to hash set
    else set.add(arr[i]);
  }

  // Print the result
  if (min != -1) return [arr[min], min];
  return false;
}
