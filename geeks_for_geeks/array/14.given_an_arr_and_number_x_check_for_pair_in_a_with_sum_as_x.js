let list = [1, 4, 45, 6, 10, -8],
  x = 16;

// XXX: Method 1 - use sorting
// 1. Sort the arr in increasing order.
// 2. Initialize 2 index vars to find the candidate els in the sorted arr
// 2.2. First index is 0, second index is size - 1
// 3. Loop while l < r
// 3.1. If arr[l] + arr[r] === sum -> return 1
// 3.2. Else if arr[l] + arr[r] < sum -> l++
// 3.3. Else r--
// 4. No candidates in whole arr -> return 0
// TC: depends on what sorting alg we use. If we use MergeSort or HeapSort, then O(n log n) in worst case.
// If we use QuickSort, then O(n^2) in worst case
// Auxiliary Space: O(n) for mergesort and O(1) for Heap Sort

function isThereASumMethod1(arr, sum) {
  let size = arr.length;
  let l = 0,
    r = size - 1;

  arr.sort((a, b) => a - b);

  while (l < r) {
    if (arr[l] + arr[r] === sum) {
      return [arr[l], arr[r]];
    } else if (arr[l] + arr[r] < sum) {
      l++;
    } else {
      r--;
    }
  }

  return false;
}
// isThereASumMethod1(list, x);

// ------------------------------

// XXX: Method 2 - Use Hash Map
// This method works in O(n) time if range of numebrs is known.
// Let sum be the given sum and A[] be the array in which we need to find the pair
function isThereASumMethod2(arr, sum) {
  let size = arr.length;
  let map = new Map();

  for (let i = 0; i < size; i++) {
    if (map.get(sum - arr[i])) {
      return [arr[i], sum - arr[i]];
    }
    map.set(arr[i], true);
  }

  return false;
}
