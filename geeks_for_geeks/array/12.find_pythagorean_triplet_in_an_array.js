// Given an array of integers, write a function that returns true if there is a triplet (a,b,c) that satisfied a^2 + b^2 = c^2
// [3,1,4,6,5] -> true -> 3, 4, 5
// [10,4,6,12,5] -> false

// XXX: Method 1 - three loops - O(n^3)
function isThereAPithagoreanTriplet(arr) {
  let size = arr.length;
  for (let i = 0; i < size; i++) {
    for (let j = i + 1; j < size; j++) {
      for (let k = j + 1; k < size; k++) {
        // Calc square of arr els
        let [x, y, z] = [arr[i] * arr[i], arr[j] * arr[j], arr[k] * arr[k]];

        if (x === y + z || y === x + z || z === x + y) {
          return true;
        }
      }
    }
  }

  return false;
}

let list = [3, 1, 4, 6, 5];
isThereAPithagoreanTriplet(list);

// ------------------------------

// XXX: Method 2 - Use sorting.
// We can solve this in O(n^2) time by sorting the arr first
// 1. Do square of every el in arr. This step takes O(n) time
// 2. Sort squared arr in increasing order. This step takes O(n log n) time
// 3. To find a triplet (a,b,c) such that a = b + c, do following:
// 3.1. Fix a as last el of sorted add
// 3.2. Now search for pair (b,c) in subarray between first el and a. A paic (b,c) with given sum can be found in O(n) time
// 3.3. If no pair found for current a, then move a one pos back and repeat step 3.2
// Returns true if there is a triplet with following property
// A[i]*A[i] = A[j]*A[j] + A[k]*[k]
// Note that this function modifies given array
function isTriplet(arr) {
  let n = arr.length;
  // Square array elements
  for (let i = 0; i < n; i++) arr[i] = arr[i] * arr[i];

  // Sort array elements
  arr.sort((a, b) => a - b);

  // Now fix one element one by one and find the other two
  // elements
  for (let i = n - 1; i >= 2; i--) {
    // To find the other two elements, start two index
    // variables from two corners of the array and move
    // them toward each other
    let l = 0; // index of the first element in arr[0..i-1]
    let r = i - 1; // index of the last element in arr[0..i-1]
    while (l < r) {
      // A triplet found
      if (arr[l] + arr[r] == arr[i]) return true;

      // Else either move 'l' or 'r'
      if (arr[l] + arr[r] < arr[i]) l++;
      else r--;
    }
  }

  // If we reach here, then no triplet found
  return false;
}

// ------------------------------

// XXX: Method 3 - Using hashing - Time Complexity: O( max * max ), where max is the maximum most element in the array.
function checkTriplet(arr) {
  let n = arr.length;
  var maximum = 0;

  // Find the maximum element
  for (let i = 0; i < n; i++) {
    maximum = Math.max(maximum, arr[i]);
  }

  // Hashing array
  var hash = Array(maximum + 1).fill(0);

  // Increase the count of array elements
  // in hash table
  for (let i = 0; i < n; i++) hash[arr[i]]++;

  // Iterate for all possible a
  for (let i = 1; i < maximum + 1; i++) {
    // If a is not there
    if (hash[i] == 0) continue;

    // Iterate for all possible b
    for (let j = 1; j < maximum + 1; j++) {
      // If a and b are same and there is only one a
      // or if there is no b in original array
      if ((i == j && hash[i] == 1) || hash[j] == 0) continue;

      // Find c
      var val = parseInt(Math.sqrt(i * i + j * j));

      // If c^2 is not a perfect square
      if (val * val != i * i + j * j) continue;

      // If c exceeds the maximum value
      if (val > maximum) continue;

      // If there exists c in the original array,
      // we have the triplet
      if (hash[val] == 1) {
        return true;
      }
    }
  }
  return false;
}
