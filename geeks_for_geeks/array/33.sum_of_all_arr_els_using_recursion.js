let list = [1, 2, 3, 4, 5];

function findArraySumRecur(arr, n = arr.length) {
  if (n <= 0) return 0;
  return findArraySumRecur(arr, n - 1) + arr[n - 1];
}

findArraySumRecur(list);
