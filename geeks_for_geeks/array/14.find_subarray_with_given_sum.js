// Given an unsorted arr of nonnegative integers, find a contiguous subarray which adds to a given number
let list = [1, 4, 20, 3, 10, 5],
  sum = 33;

let list1 = [1, 4, 0, 0, 3, 10, 5],
  sum1 = 7;

// XXX: A simple solution is to consider all subarrays one by one and check the sum of every subarray
// TC: O(n^2)
function subArraySumSimple(arr, sum) {
  let n = arr.length;

  let curr_sum, i, j;

  // Pick a starting point
  for (i = 0; i < n; i++) {
    curr_sum = arr[i];

    // Try all subarrays starting with '1'
    for (j = i + 1; j <= n; j++) {
      if (curr_sum === sum) {
        return `Sum found between indexes ${i} and ${j - 1}`;
      }

      if (curr_sum > sum || j === n) {
        break;
      }
      curr_sum = curr_sum + arr[j];
    }
  }

  return false;
}

// ------------------------------

// XXX: Method 2 - Efficient Solution
// 1) Initialize a variable curr_sum as first el. curr_sum indicates the sum of the current subarray.
// Start from the second element and add all elements one by one to the curr_sum.
// If curr_sum becomes equal to sum, print the solution.
// If curr_sum exceeds the sum, then remove trailing elements while curr_sum is greater than sum.
function subArraySumEfficient(arr, sum) {
  let n = arr.length;
  let curr_sum = arr[0],
    start = 0,
    i;

  // Add els one by one to curr_sum and if the curr_sum exceeds the sum, then remove starting el
  for (i = 1; i <= n; i++) {
    // If curr_sum exceeds the sum, then remove the starting elements
    while (curr_sum > sum && start < i - 1) {
      curr_sum = curr_sum - arr[start];
      start++;
    }

    // If curr_sum === sum, return true
    if (curr_sum === sum) {
      return `Sum found between indexes ${start} and ${i - 1}`;
    }

    // Add this el to curr_sum
    if (i < n) {
      curr_sum = curr_sum + arr[i];
    }
  }

  return false;
}
