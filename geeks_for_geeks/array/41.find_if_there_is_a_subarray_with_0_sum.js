// Given an arr of pos and neg numbers, find if there is a subarray (of size at-least one) with 0 sum

let list = [4, 2, -3, 1, 6]; // -> TRUE -> 2 + -3 + 1 = 0
let list1 = [-3, 2, 3, 1, 6];

// XXX: Simple solution is to consider all subarrays one by one and check the sum of every subarray.
// We can run 2 loops: outer picks a starting point i and the inner one tries all subarrays starting from i
// TC: O(n^2)

// TODO: code this

// XXX: Method 2 - hashing
// TC: O(n)
const subArrayExists = (arr) => {
  const sumSet = new Set();

  // Traverse through array
  // and store prefix sums
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    // If prefix sum is 0
    // or it is already present
    if (sum === 0 || sumSet.has(sum)) return true;

    sumSet.add(sum);
  }
  return false;
};
