// Given an arrA[0...n-1] containint n positive integers, a subarray A[i...j] is bitonic if there is a k with i <= k <= j such that:
// A[i] <= A[i + 1] ... <= A[k] >= A[k + 1] >= A[j - 1] >= A[j]
// Write a fn that takes an arr as arg, and returns the length of max length bitonic subarray
// Expected time complexity is O(n)

// TODO: Study this problem more

let list1 = [12, 4, 78, 90, 45, 23]; // 5 [4,78,90,45,23]
let list2 = [20, 4, 1, 2, 3, 4, 2, 10]; // 5 [1,2,3,4,2]

// XXX: Method 1
// 1. COnstruct aux arr inc[] from left to r such that inc[i] contains length of the nondecreasing subarray ending at arr[i]
// For A[] = [12,4,78,90,45,23], inc[] is [1,1,2,3,1,1]

// 2. Construct another arr dec[] from r to l, such that dec[i] contains length of nondecreasing subarray starting from arr[i]
// For A[] = [12,4,78,90,45,23], dec[] is [2,1,1,3,2,1]

// Once we have inc[] and dec[] arrs, all we need to do is find the max value of (inc[i] + dec[i] - 1)
// For A[] = [12,4,78,90,45,23], the max value is 5 for i = 3
function maxLengthBitonicSubarray(arr) {
  let n = arr.length;
  let inc = new Array(n),
    dec = new Array(n);
  let i, max;

  // Length of increasing sequence ending at first index is 1
  inc[0] = 1;

  // Length of increasing sequence ending at last index is 1
  dec[n - 1] = 1;

  // Step 1: Construct inc sequence array
  for (i = 1; i < n; i++) {
    inc[i] = arr[i] > arr[i - 1] ? inc[i - 1] + 1 : 1;
  }

  // Step 2: Construct dec sequence array
  for (i = n - 2; i >= 0; i--) {
    dec[i] = arr[i] > arr[i + 1] ? dec[i + 1] + 1 : 1;
  }

  // Step 3: Find the length of max length bitonic sequence
  max = inc[0] + dec[0] - 1;
  for (i = 1; i < n; i++) {
    if (inc[i] + dec[i] - 1 > max) {
      max = inc[i] + dec[i] - 1;
    }
  }

  return max;
}
