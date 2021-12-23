// Find me one missing number in the list of n-1 integers
// range 1 - n
// the are no duplicates

// XXX: Method 1 (Use sum formula)
// total = n * (n + 1)/2

// Subtract all the numbers from sum and
// you will get the missing number
// O(n)
function getMissingNo(arr) {
  let n = arr.length;
  let total = ((n + 1) * (n + 2)) / 2;
  for (let i = 0; i < n; i++) {
    total -= arr[i];
  }
  return total;
}

const list = [1, 2, 4, 5, 6];
getMissingNo(list);

// XXX: Method 2 (Use XOR)
// XOR all the arr els, let the result of XOR be X1
// XOR all numbers from 1 to n, let XOR be X2
// XOR of X1 and X2 gives the missing number
// O(n)
function xorMissingNumber(arr) {
  let n = arr.length;
  let i;
  let x1 = arr[0]; // for xor of all the els in array
  let x2 = 1; // for xor of all the els from 1 to n + 1

  for (i = 1; i < n; i++) {
    x1 = x1 ^ arr[i];
  }
  for (i = 2; i <= n + 1; i++) {
    x2 = x2 ^ i;
  }

  return x1 ^ x2;
}

xorMissingNumber(list);
