// You are given an array of 0s and 1s in random order. Segregate 0s on left and 1s on the right side of the array
let list = [0, 1, 0, 1, 0, 0, 1, 1, 1, 0];

// XXX: Method 1 - Count 0s and 1s
// 1. Count the number of 0s. Let count be C
// 2. Once we have count, we can put C 0s at the beginning of the array and 1s at the remaining (n - C) positions in array
// TC: O(n)
// This method traverses the array 2 times
function segregate0and1(arr) {
  let n = arr.length;
  let count = 0; // Counts the no of zeros in arr

  for (let i = 0; i < n; i++) {
    if (arr[i] == 0) count++;
  }

  // Loop fills the arr with 0 until count
  for (let i = 0; i < count; i++) arr[i] = 0;

  // Loop fills remaining arr space with 1
  for (let i = count; i < n; i++) arr[i] = 1;
}

// ------------------------------
// XXX: Method 2 - Use 2 indexes to traverse

// Maintain 2 indexes. Initialize first index left as 0 and second index right as n - 1
// Do following while left < right
// Keep incrementing index left while there are 0s at it
// Keep decrementing index right while there are 1s at it
// If left < right, then exchange arr[left] and arr[right]
function segregate0and1TwoIndexes(arr) {
  let size = arr.length;
  /* Initialize left and right indexes */
  let left = 0,
    right = size - 1;

  while (left < right) {
    /* Increment left index while we see 0 at left */
    while (arr[left] == 0 && left < right) left++;

    /* Decrement right index while we see 1 at right */
    while (arr[right] == 1 && left < right) right--;

    /* If left is smaller than right then there is a 1 at left
        and a 0 at right. Exchange arr[left] and arr[right]*/
    if (left < right) {
      arr[left] = 0;
      arr[right] = 1;
      left++;
      right--;
    }
  }
}

// ------------------------------
// XXX: Method 3 - Use 2 indexes to traverse
// 1. Take two pointer type0(for element 0) starting from beginning (index = 0) and type1(for element 1) starting from end (index = array.length-1).
// Initialize type0 = 0 and type1 = array.length-1
// 2. It is intended to Put 1 to the right side of the array. Once it is done, then 0 will definitely towards the left side of the array.
// TC: O(n)
function segregate0and1Method3(arr) {
  let size = arr.length;
  let type0 = 0;
  let type1 = size - 1;

  while (type0 < type1) {
    if (arr[type0] == 1) {
      // Swap
      arr[type1] = arr[type1] + arr[type0];
      arr[type0] = arr[type1] - arr[type0];
      arr[type1] = arr[type1] - arr[type0];
      type1--;
    } else type0++;
  }
}
