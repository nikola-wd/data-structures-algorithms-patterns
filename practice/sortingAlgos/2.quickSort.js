// https://www.geeksforgeeks.org/quick-sort/

// Like Merge Sort, QuickSort is a Divide and Conquer algorithm.
// It picks an element as pivot and partitions the given array around the picked pivot.
// There are many different versions of quickSort that pick pivot in different ways.

// Always pick first element as pivot.
// Always pick last element as pivot (implemented below)
// Pick a random element as pivot.
// Pick median as pivot.
// The key process in quickSort is partition().
// Target of partitions is, given an array and an element x of array as pivot,
// put x at its correct position in sorted array and put all smaller elements (smaller than x) before x,
// and put all greater elements (greater than x) after x.
// All this should be done in linear time.

// XXX: SOLUTION 1 - https://stackabuse.com/quicksort-in-javascript/
function partition(arr, start, end) {
  // Taking the last element as the pivot
  const pivotValue = arr[end];
  let pivotIndex = start;
  for (let i = start; i < end; i++) {
    if (arr[i] < pivotValue) {
      // Swapping elements
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
      // Moving to next element
      pivotIndex++;
    }
  }
  // Putting the pivot value in the middle
  [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
  return pivotIndex;
}
function quickSortRecursive(arr, start, end) {
  // Base case or terminating case
  if (start >= end) {
    return;
  }

  // Returns pivotIndex
  let index = partition(arr, start, end);

  // Recursively apply the same logic to the left and right subarrays
  quickSortRecursive(arr, start, index - 1);
  quickSortRecursive(arr, index + 1, end);
}

let array1 = [7, -2, 4, 1, 6, 5, 0, -4, 2];
console.log(array1);
quickSortRecursive(array1, 0, array1.length - 1);
console.log(array1);
