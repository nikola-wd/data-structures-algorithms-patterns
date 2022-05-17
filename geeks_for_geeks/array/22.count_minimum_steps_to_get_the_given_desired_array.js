// Consider an arr with n elements and value of all the els is zero. We can perform the following operations
// on the array.

// 1. Incremental operations: Choose 1 element from the arr and increment its value by 1
// 2. Doubling operation: Double the values of all the elements of array.

// We are given desired array target[] containing n elements. Compute and return the smallest possible number of the operations needed to change the array
// from all zeros to desired array.

// Test cases:

// 1. Input arr: [2, 3] -> 4
// To get the target arr from [0, 0], we first increment both elements by 1 (2 operations), then double the array (1 operation).
// Finally increment second element (one more operation)

// 2. [2, 1] -> 3
// One of the optimal solutions is to apply the incremental operation 2 times to first and once on second element.

// Take the target arr first.
// Initialize result as 0.
// If all are even, divide all elements by 2 and increment result by one.
// Find all odd elements, make them even by reducing them by 1, and for every reduction, increment result by 1.
// Finally we get all zeros in target array.
function countMinOperations(arr) {
  let n = arr.length;
  // Initialize result (Count of minimum moves)
  let result = 0;

  // Keep looping while all elements of arr
  // don't become 0.
  while (true) {
    // To store count of zeroes in current
    // arr array
    let zero_count = 0;

    let i; // To find first odd element
    for (i = 0; i < n; i++) {
      // If odd number found
      if (arr[i] % 2 == 1) break;
      // If 0, then increment zero_count
      else if (arr[i] == 0) zero_count++;
    }

    // All numbers are 0
    if (zero_count == n) return result;

    // All numbers are even
    if (i == n) {
      // Divide the whole array by 2
      // and increment result
      for (let j = 0; j < n; j++) arr[j] = arr[j] / 2;
      result++;
    }

    // Make all odd numbers even by subtracting
    // one and increment result.
    for (let j = i; j < n; j++) {
      if (arr[j] % 2 == 1) {
        arr[j]--;
        result++;
      }
    }
  }
}

const targetArr = [2, 3];

countMinOperations(targetArr);
