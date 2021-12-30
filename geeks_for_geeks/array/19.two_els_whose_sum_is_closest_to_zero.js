// My solution 1 (Brute force)
// TC: O(n^2)

let list = [1, 60, -10, 70, -80, 85]; // - 80, 85
function findMinSumToZero(arr) {
  let size = arr.length;

  let smallestSum = Number.MAX_SAFE_INTEGER;
  let twoSum = new Array(2);

  for (let i = 0; i < size; i++) {
    for (let j = i + 1; j < size; j++) {
      if (Math.abs(arr[i] + arr[j]) < smallestSum) {
        smallestSum = Math.abs(arr[i] + arr[j]);
        twoSum[0] = arr[i];
        twoSum[1] = arr[j];
      }
    }
  }

  return twoSum;
}

// ------------------------------

// XXX: Method 2 - Using Sorting
// 1. Sort all els
// 2. Use 2 index vars L and R to traverse from left and right
// 3. sum = a[L] + a[R]
// 4. If sum is -ve, then L++
// 5. If sum is +ve, then R--
// 6. Keep track of abs min sum
// 7. Repeat steps 3,4,5 and 6 while L < R
// TC: TC to sort + TC of finding the optimum pair = O(n log n) + O(n) = O(n log n)

// My solution: 80 steps on PythonTutor
function findMinSumToZeroSort(arr) {
  arr.sort((a, b) => a - b);
  let size = arr.length;
  let smallestSum = Number.MAX_SAFE_INTEGER;
  let twoSum = new Array(2);

  let L = 0,
    R = size - 1;

  while (L < R) {
    let newSum = Math.abs(arr[L] + arr[R]);
    if (newSum < smallestSum) {
      smallestSum = newSum;
      twoSum[0] = arr[L];
      twoSum[1] = arr[R];
      L++;
    } else {
      R--;
    }
  }

  return twoSum;
}

// ------------------------------

// Geeks For Geeks solution
// 90 steps on PythonTutor
function findMinSumToZeroSortG4G(arr) {
  arr.sort((a, b) => a - b);
  let size = arr.length;
  let sum;
  let min_sum = Number.MAX_SAFE_INTEGER;
  let twoSum = new Array(2);

  let L = 0,
    R = size - 1;

  if (size < 2) return;

  while (L < R) {
    sum = arr[L] + arr[R];

    if (Math.abs(sum) < Math.abs(min_sum)) {
      min_sum = sum;
      twoSum[0] = arr[L];
      twoSum[1] = arr[R];
    }

    if (sum < 0) {
      L++;
    } else {
      R--;
    }
  }

  return twoSum;
}
