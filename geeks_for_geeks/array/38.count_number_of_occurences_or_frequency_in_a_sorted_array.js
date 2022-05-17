// Given a sorted array[] and a number x, write a fn that counts the number of occurrences of x in array[].
let list = [1, 1, 2, 2, 2, 2, 3],
  x = 2; // -> 4

// XXX: Method 1: Linear Search O(n)
function countOccurrences(arr, x) {
  let n = arr.length;
  let res = 0;
  for (let i = 0; i < n; i++) {
    if (x == arr[i]) res++;
  }
  return res;
}

// ------------------------------

// XXX: Method 2 - uses Binary Search
// Time Complexity : O(Log n + count) where count is number of occurrences.
// A recursive binary search function. It returns
// location of x in given array arr[l..r] is present,
// otherwise -1
function binarySearch(arr, l, r, x) {
  if (r < l) return -1;

  var mid = l + parseInt((r - l) / 2);

  // If the element is present at the middle
  // itself
  if (arr[mid] == x) return mid;

  // If element is smaller than mid, then
  // it can only be present in left subarray
  if (arr[mid] > x) return binarySearch(arr, l, mid - 1, x);

  // Else the element can only be present
  // in right subarray
  return binarySearch(arr, mid + 1, r, x);
}

function countOccurrences(arr, x) {
  let n = arr.length;
  var ind = binarySearch(arr, 0, n - 1, x);

  // If element is not present
  if (ind == -1) return 0;

  // Count elements on left side.
  var count = 1;
  var left = ind - 1;
  while (left >= 0 && arr[left] == x) count++, left--;

  // Count elements on right side.
  var right = ind + 1;
  while (right < n && arr[right] == x) count++, right++;

  return count;
}
// ------------------------------

// XXX: Method 3, best solution using bin search
// Time Complexity: O(Logn)
// Programming Paradigm: Divide & Conquer

/* if x is present in arr[] then returns 
the count of occurrences of x, 
otherwise returns -1. */
function count(arr, x) {
  let n = arr.length;
  // Index of first occurrence of x in arr[0..n-1]
  let i;

  // Index of last occurrence of x in arr[0..n-1]
  let j;

  // Get the index of first occurrence of x
  i = first(arr, 0, n - 1, x, n);

  // If x doesn't exist in arr[] then return -1
  if (i == -1) return i;

  // Else get the index of last occurrence of x.
  // Note that we are only looking in the
  // subarray after first occurrence
  j = last(arr, i, n - 1, x, n);

  // return count
  return j - i + 1;
}

// if x is present in arr[] then returns the
// index of FIRST occurrence of x in arr[0..n-1],
// otherwise returns -1
function first(arr, low, high, x, n) {
  if (high >= low) {
    // low + (high - low)/2;
    let mid = (low + high) / 2;

    if ((mid == 0 || x > arr[mid - 1]) && arr[mid] == x) return mid;
    else if (x > arr[mid]) return first(arr, mid + 1, high, x, n);
    else return first(arr, low, mid - 1, x, n);
  }
  return -1;
}

// If x is present in arr[] then returns the
// index of LAST occurrence of x in arr[0..n-1],
// otherwise returns -1
function last(arr, low, high, x, n) {
  if (high >= low) {
    /*low + (high - low)/2;*/
    let mid = Math.floor((low + high) / 2);
    if ((mid == n - 1 || x < arr[mid + 1]) && arr[mid] == x) return mid;
    else if (x < arr[mid]) return last(arr, low, mid - 1, x, n);
    else return last(arr, mid + 1, high, x, n);
  }
  return -1;
}
