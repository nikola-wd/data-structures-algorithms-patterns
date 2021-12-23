// XXX: Method 1: Linear search O(n)
function findFixedPoint(arr) {
  let size = arr.length;

  for (let i = 0; i < size; i++) {
    if (i === arr[i]) {
      return arr[i];
    }
  }

  return -1;
}

let list = [-10, -5, 0, 3, 7];
let list = [0, 2, 5, 8, 17];
let list = [-10, -5, 3, 4, 7, 9];

findFixedPoint(list);

// ------------------------------

// XXX: Method 2. Binary Search - O(log n)
// First check whether middle element is Fixed Point or not. If it is, then return it;
// otherwise if the index of middle + 1 element is less than or equal to the value at the high index,
// then Fixed Point(s) might lie on the right side of the middle point (obviously only if there is a Fixed Point).
// Similarly, check if the index of middle – 1 element is greater than or equal to the value at the low index,
// then Fixed Point(s) might lie on the left side of the middle point.
function binarySearch(arr, low = 0, high = arr.length - 1) {
  if (high >= low) {
    let mid = Math.floor(low + (high - low) / 2);
    if (mid == arr[mid]) return mid;
    let res = -1;
    if (mid + 1 <= arr[high]) res = binarySearch(arr, mid + 1, high);
    if (res != -1) return res;
    if (mid - 1 >= arr[low]) return binarySearch(arr, low, mid - 1);
  }

  /* Return -1 if there is no Fixed Point */
  return -1;
}

binarySearch(list);
