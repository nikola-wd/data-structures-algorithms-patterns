// Given an array and a value, find if there is a triplet in arr whose sum is equal to the given value. If there
// is such a triplet present in array, return true, else, return false.

let list = [12, 3, 4, 1, 6, 9],
  sum = 24; // (12, 3, 9)

// XXX: Method 1: A simple solution is to generate all possible triplets and compare the sum of every triplet with the given value
// TC: O(n^3)
// SC: O(1)
function findTripletNaive(arr, sum) {
  let n = arr.length;

  // Find the first el as arr[i]
  for (let i = 0; i < n - 2; i++) {
    // FInd the second el as arr[j]
    for (let j = i + 1; j < n - 1; j++) {
      // Now look for the third number
      for (let k = j + 1; k < n; k++) {
        if (arr[i] + arr[j] + arr[k] === sum) {
          return [[arr[i], arr[j], arr[k]], true];
        }
      }
    }
  }

  // No triplet found
  return false;
}

findTripletNaive(list, sum);

// ------------------------------

// XXX: Method 2: Uses sorting
// TC: O(n^2)
// SC: O(1)

// 1) Sort the arr
// 2) Fix the first el as arr[i] where i is from 0 to array size - 2.
// After fixing the first 2l of triplet, find the other 2 els using method 1
function findTripletSorting(arr, sum) {
  let n = arr.length;

  let l, r;

  /* Sort the elements */
  arr.sort((a, b) => a - b);

  // Fix the first el one by one and find the other 2 els
  for (let i = 0; i < n - 2; i++) {
    // To find the other 2 els, start the index
    // variables from 2 corners of the array
    // and move them towards each other
    l = i + 1; // Index of the first el in the remaining elements
    r = n - 1; // Index of the last el

    while (l < r) {
      if (arr[i] + arr[l] + arr[r] === sum) {
        return [[arr[i], arr[l], arr[r]], true];
      } else if (arr[i] + arr[l] + arr[r] < sum) {
        l++;
      } else {
        // (arr[i] + arr[l] + arr[r] < sum) > sum
        r--;
      }
    }
  }

  return false;
}

findTripletSorting(list, sum);

//------------------------------
// XXX: Method 3: Hashing-based solution
// TC: O(N^2)
// SC: O(N)

// Uses extra space but is simpler than the 2-pointers approach.
function findTripletHashing(arr, sum) {
  let n = arr.length;

  // Fix the first el as arr[i]
  for (let i = 0; i < n - 2; i++) {
    // Find pair in subarray arr[i+1...n-1] with sum equal to sum i arr[i]
    let s = new Set();
    let curr_sum = sum - arr[i];
    for (let j = i + 1; j < n; j++) {
      if (s.has(curr_sum - arr[j])) {
        return [[arr[i], arr[j], curr_sum - arr[j]], true];
      }
      s.add(arr[j]);
    }
  }

  return false;
}

findTripletHashing(list, sum);
