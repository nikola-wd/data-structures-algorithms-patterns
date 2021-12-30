// Given an unsorted arr, find the min difference between any pair in the given arr

let list = [1, 5, 3, 19, 18, 25]; // 1 - between 18 and 19
// let list1 = [30,5,20,9] // 4 - between 5 and 9
// let list2 = [1,19,-4,31,38,25,100] // 5 - between 1 and -4
// XXX: Method 1 (2 loops O(n^2)) (Brute force)

function findMinDifference(arr) {
  let n = arr.length;

  // Init the diff as infinite
  let diff = Number.MAX_SAFE_INTEGER;

  // Find the min diff by comparing difference
  // of all possible pairs in given arr
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (Math.abs(arr[i] - arr[j]) < diff) {
        diff = Math.abs(arr[i] - arr[j]);
      }
    }
  }

  return diff;
}

// ------------------------------

// XXX: Method 2 - Use Sorting O (n log n)
// Sort asc O(n log n)
// Initialize diff as infinity. O(1)
// Compare all adjacent pairs in sorted arr and keep track of min diff. O(n)
function findMinDifferenceSorted(arr) {
  arr.sort((a, b) => a - b);
  let n = arr.length;

  // Init the diff as infinite
  let diff = Number.MAX_SAFE_INTEGER;

  // Find the min dif by comparing adjacent pairs in sorted arr
  for (let i = 0; i < n - 1; i++) {
    if (arr[i + 1] - arr[i] < diff) {
      diff = arr[i + 1] - arr[i];
    }
  }

  return diff;
}
