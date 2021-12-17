// Needs a sorted list
function binarySearchRecursive(arr, el, offset) {
  let start = 0;
  let end = arr.length - 1;
  let mid = start + Math.floor((start + end) / 2);
  // base case
  if (arr[mid] === el) return mid + offset;

  if (arr[mid] < el) {
    start = mid + 1;
    offset = offset + mid + 1;
  } else {
    end = mid - 1;
  }
  return binarySearchRecursive(arr.slice(start, end + 1), el, offset);
}

// https://stackoverflow.com/questions/22697936/binary-search-in-javascript
// function binarySearch(arr, val, start = 0, end = arr.length - 1) {
//   const mid = Math.floor((start + end) / 2);

//   if (val === arr[mid]) {
//     return mid;
//   }

//   if (start >= end) {
//     return -1;
//   }

//   return val < arr[mid]
//     ? binarySearch(arr, val, start, mid - 1)
//     : binarySearch(arr, val, mid + 1, end);
// }

console.log(binarySearchRecursive([-3, -2, -1, 0, 3, 5, 7, 8, 9], 7, 0));
