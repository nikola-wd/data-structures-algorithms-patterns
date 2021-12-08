// Needs a sorted list
function binarySearch(arr, el) {
  let [start, end] = [0, arr.length - 1];

  while (start <= end) {
    let mid = start + Math.floor((start + end) / 2);

    if (arr[mid] === el) return mid;
    if (start > end) {
      break;
    }
    if (el < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return 'not found';
}

console.log(binarySearch([-3, -2, -1, 0, 3, 5, 7, 8, 9], -1));
