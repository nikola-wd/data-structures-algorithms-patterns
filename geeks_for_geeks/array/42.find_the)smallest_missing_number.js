// Given a sorted array of n distinct integers where each integer is in the range from
// 0 to m-1 and m>n. Find the smallest number that is missing from the array.

let list = [0, 1, 2, 6, 9],
  n = 5,
  m = 10;

// -> Output should be 3

let list1 = [4, 5, 10, 11],
  n1 = 4,
  m1 = 12;

// -> Output should be 0

// -----------------------------------------
// XXX: Method 1: Simple solution (Linear Searh)
// If arr[0] is not 0, return 0. Otherwise traverse the input array starting from index 0,
// and for each pair of els arr[i] and arr[i+1], find the difference between them.
// If the difference is greater than 1, then arr[i] + 1 is the missing number.
// TC: O(n), constant space
function printFirstMissingNumberLinear(arr, n, m) {
  if (arr[0] !== 0) return 0;

  for (let i = 0; i <= n - 1; i++) {
    if (arr[i + 1] - arr[i] > 1) {
      return arr[i] + 1;
    }
  }
}

// ------------------------------
// XXX: Method 2: (Use Binary Search)
// For i = 0 to m - 1, do binary search for i in the array. If i is not present in the array, then return i.
// TC: O(m log n)

// TODO: Code this solution

// ------------------------------

// XXX: Method 3: Use Modified Binary Search
// In the standard Bin Search process, the el to be searched is compared
// with the middle el and on the basis of comparison result, we decide whether
// the search is over or to go to left half or right half
// In this method, we modify the standard Bin Search algo to compare the
// middle el with its index and make decision on the basis of this comparison

// 1) If the 1st el is not same as its index, return first index
// 2) Else, get the middle index mid
// 2.1) If arr[mid] greater than mid, then the required el lies in left half
// 2.2) Else, the required el lies in right half
function printFirstMissingNumberBinaryModified(array, start, end) {
  if (start > end) return end + 1;

  if (start != array[start]) return start;

  let mid = parseInt((start + end) / 2, 10);

  // Left half has all elements from 0 to mid
  if (array[mid] == mid)
    return printFirstMissingNumberBinaryModified(array, mid + 1, end);

  return printFirstMissingNumberBinaryModified(array, start, mid);
}

printFirstMissingNumberBinaryModified(list1, 0, n1 - 1);
