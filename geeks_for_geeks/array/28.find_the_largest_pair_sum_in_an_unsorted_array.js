// Given an unsorted array of distinct integers, find the largest pair sum in it.

let list = [1, 5, 9, 20, 3, 2, 18, 103, 99, 0, 4]; // -> 103 + 99 = 202

// TC: O(n)
function findLargestSum(arr) {
  let n = arr.length;

  let first = Math.max(arr[0], arr[1]);
  let second = Math.min(arr[0], arr[1]);

  for (let i = 2; i < n; i++) {
    // If the current el is greater than first, then update first and second
    if (arr[i] > first) {
      second = first;
      first = arr[i];
    }
    // Else if the current element is greater than second, than update second
    else if (arr[i] > second) {
      second = arr[i];
    }
  }

  return first + second;
}

findLargestSum(list);
