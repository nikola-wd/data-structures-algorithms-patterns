// Maximum difference between 2 els such that larger el appears after the smaller number
// Given an array arr[] of integers, find out the max difference between any 2 els such that larger el appears after the smaller number in arr[]

// Examples:
// [2,3,10,6,4,8,1] -> returned value is 8 (diff between 10 and 2)

// [7,9,5,6,3,2] -> 2 (diff between 7 and 9)

// XXX: Method 1: SImple (Brute force)
// 2 loops. In the outer loop, pick els one by one and in the inner loop calc the diff of the picked el with every other el in the array
// and compare the diff with the max diff calculated so far

let test = [2, 3, 10, 6, 4, 8, 1];

// TC: O(n*n)
// Auxiliary Space: O(1)
function findMaxDiffBruteForce(arr) {
  let n = arr.length;
  let max_diff = arr[1] - arr[0];

  let i, j;
  for (i = 0; i < n; i++) {
    for (j = i + 1; j < n; j++) {
      if (arr[j] - arr[i] > max_diff) {
        max_diff = arr[j] - arr[i];
      }
    }
  }

  return max_diff;
}

// ------------------------------

// XXX: Method 2 (Tricky and Efficient)
// Instead of taking the difference of the picked el with every other el, we take the diff with the min el found so far
// So, we need to keep track of 2 things
// 1. Max diff found so far (max_diff)
// 2. Minimum number visited so far (min_element)
// TC: O(n)
// Auxiliary Space: O(1)
function findMaxDiffMethod1(arr) {
  const n = arr.length;
  let max_diff = arr[1] - arr[0];
  let min_element = arr[0];
  let i;
  for (i = 1; i < n; i++) {
    if (arr[i] - min_element > max_diff) {
      max_diff = arr[i] - min_element;
    }
    if (arr[i] < min_element) {
      min_element = arr[i];
    }
  }

  return max_diff;
}

// ----------------------------------------------------------------

// XXX: Method 3
// First find the diff between the adjacent els of the arr and store all differences in an aux array diff[] of size n-1
// Now this problem turns into finding the max sum subarray of the difference array
// TC: O(n)
// Aux Space: O(n)
function findMaxDiffMethod2(arr) {
  const n = arr.length;
  // Create a diff array of size n-1. The array will hold the differences of adjacent elements
  let diff = new Array(n - 1);
  for (let i = 0; i < n - 1; i++) {
    diff[i] = arr[i + 1] - arr[i];
  }

  // Now find the max sum subarray in the diff array
  let max_diff = diff[0];
  for (let i = 1; i < n - 1; i++) {
    if (diff[i - 1] > 0) {
      diff[i] += diff[i - 1];
    }
    if (max_diff < diff[i]) {
      max_diff = diff[i];
    }
  }

  return max_diff;
}

// We can modify the above method to work in O(1) extra space.
// Instead of creating an aux array, we can calc diff and max sum in the same loop

// ------------------------------
// TC: O(n)
// Aux Space: O(1)
function findMaxDiffMethod2Optimized(arr) {
  const n = arr.length;
  let diff = arr[1] - arr[0];
  let curr_sum = diff;
  let max_sum = curr_sum;

  for (let i = 1; i < n - 1; i++) {
    // Calculate current diff
    diff = arr[i + 1] - arr[i];

    // Calculate current sum
    if (curr_sum > 0) {
      curr_sum += diff;
    } else {
      curr_sum = diff;
    }

    // Update max sum if needed
    if (curr_sum > max_sum) {
      max_sum = curr_sum;
    }
  }

  return max_sum;
}
