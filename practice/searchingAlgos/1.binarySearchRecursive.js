// XXX: g4g working implementation
// https://www.geeksforgeeks.org/binary-search/

function binarySearch(arr, target, l = 0, r = arr.length - 1) {
  if (r >= l) {
    let mid = l + Math.floor((r - l) / 2);
    if (arr[mid] == target) return mid;
    if (arr[mid] > target) return binarySearch(arr, target, l, mid - 1);
    return binarySearch(arr, target, mid + 1, r);
  }
  return -1;
}

let nums = [6, 3, 5, 9, 80, 99, 0, 15],
  target = 99;
console.log(nums, target);
