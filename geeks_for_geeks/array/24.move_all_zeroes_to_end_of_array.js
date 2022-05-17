// Given an arr of random numbers, push all zeros to the end of it
// For example: [1,9,8,4,0,0,2,7,0,6,0] -> [1,9,8,4,2,7,6,0,0,0,0]
// The order of all other els should be the same
// Expected TC is O(n) and extra space is O(1)

// XXX: Solution 1
// Traverse from left to right
// While traversing, maintain count of non-zero els in array
// Let the count be 'count'
// For every non-zero el arr[i], put the el at arr[count] and increment count
// After complete traversal, all non-zero els have already been shifted to
// front end and count is set as index of first 0
// Now all we need to do is to run a loop which makes all els zero from
// count till end of the arr
function moveZeros(arr) {
  let n = arr.length;
  let count = 0; // count of non zero els

  for (let i = 0; i < n; i++) {
    if (arr[i] !== 0) {
      arr[count++] = arr[i];
    }
  }

  // Now, all non-zero els have been shifted
  // to front and count is set as index of first 0
  // Make all els 0 from count to end
  while (count < n) {
    arr[count++] = 0;
  }
}
