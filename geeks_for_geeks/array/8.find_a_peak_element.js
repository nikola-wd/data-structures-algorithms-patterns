// Given an arr of integers. Find a peak el in it
// An arr el is peak if it is NOT smaller than its neighbors
// For corner els, we need to consider only one neighbor. For
// example, for arr [5, 10, 20, 15], 20 is the only peak el
// For [10, 20, 15, 2, 23, 90, 67], -> 2 peak els: 20 and 90

// We need to return only 1 peak el

// XXX: Method 1 - Linear - TC: O(n), SP: O(1)
function findPeakEl(arr) {
  let size = arr.length;

  if (size === 0) return arr[0];
  if (arr[0] >= arr[1]) return arr[0];
  if (arr[size - 1] >= arr[size - 2]) return arr[size - 1];

  for (let i = 1; i < size; i++) {
    if (arr[i] >= arr[i - 1] && arr[i] >= arr[i + 1]) {
      return arr[i];
    }
  }

  return false;
}

let list = [5, 10, 20, 15];
// let list = [10, 20, 15, 2, 23, 90, 67];

// ------------------------------

// XXX: Method 2 - Divide & Conquer - TC: O(log n), SP: O(1)
// The idea is based on the technique of Binary Search to check if the middle element
// is the peak element or not. If the middle element is not the peak element,
// then check if the element on the right side is greater than the middle element then
// there is always a peak element on the right side. If the element on the left side is
// greater than the middle element then there is always a peak element on the left side.
// Form a recursion and the peak element can be found in log n time.
function findPeakElBinary(arr, low = 0, high = arr.length - 1, n = arr.length) {
  let mid = low + parseInt((high - low) / 2);

  // Compare middle element with its
  // neighbours (if neighbours exist) (first and last)
  if (
    (mid == 0 || arr[mid - 1] <= arr[mid]) &&
    (mid == n - 1 || arr[mid + 1] <= arr[mid])
  ) {
    return arr[mid];
  }

  // If middle element is not peak and its
  // left neighbour is greater than it,
  // then left half must have a peak element
  else if (mid > 0 && arr[mid - 1] > arr[mid]) {
    return findPeakElBinary(arr, low, mid - 1, n);
  }

  // If middle element is not peak and its
  // right neighbour is greater than it,
  // then right half must have a peak element
  else return findPeakElBinary(arr, mid + 1, high, n);
}

findPeakElBinary(list);
