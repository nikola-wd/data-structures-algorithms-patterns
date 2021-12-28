// Given 2 arrays which are duplicates of each other, except one element,
// that is one element from one of the array is missing, we need to find that
// missing element
let arr1 = [1, 4, 5, 7, 9];
let arr2 = [4, 5, 7, 9];
// 1 is missing from the second array

// let arr3 = [2,3,4,5]
// let arr4 = [2,3,4,5,6]
// 6 is missing from the first array

// XXX: Method 1. SImple Solution (Brute Force)
// Requires linear time over size of array

// XXX: Method 2. Binary Search Approach
function fundMissing(arr1, arr2) {
  let m = arr1.length;
  let n = arr2.length;
  if (n === m - 1) {
    return findMissingUtil(arr1, arr2, m);
  } else if (m === n - 1) {
    return findMissingUtil(arr2, arr1, n);
  } else {
    return -1;
  }

  return missingEls;
}

function findMissingUtil(arr1, arr2, N) {
  // special case, for only element
  // which is missing in second array
  if (N == 1) return arr1[0];

  // special case, for first
  // element missing
  if (arr1[0] != arr2[0]) return arr1[0];

  // Initialize current corner points
  let lo = 0,
    hi = N - 1;

  // loop until lo < hi
  while (lo < hi) {
    let mid = parseInt((lo + hi) / 2, 10);

    // If element at mid indices are
    // equal then go to right subarray
    if (arr1[mid] == arr2[mid]) lo = mid;
    else hi = mid;

    // if lo, hi becomes
    // contiguous, break
    if (lo == hi - 1) break;
  }

  // missing element will be at hi
  // index of bigger array
  return arr1[hi];
}
