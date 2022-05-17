// TC: O(n)

let list = [1, 2, 3, 4, 5];

function findArraySum(arr) {
  let n = arr.length;

  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += arr[i];
  }

  return sum;
}

findArraySum(list);

// Recursive

function findArraySumRecur(arr, n = arr.length) {
  if (n <= 0) return 0;
  return findArraySumRecur(arr, n - 1) + arr[n - 1];
}

findArraySumRecur(list);
