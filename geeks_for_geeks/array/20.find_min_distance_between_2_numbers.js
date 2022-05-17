// Find the min distance between 2 numbers in an uns array

// Given an unsorted arr and 2 numbers x and y, find the minimum distance between them in arr.

// x and y can start both from left or right

// The array might also contain duplicates

// You may assume that both x and y are different and present in arr

let list = [1, 2]; // x = 1, y = 2 -> Output is 1
let list2 = [3, 4, 5]; // x = 3, y = 5 -> Output is 2
let list3 = [3, 5, 4, 2, 6, 5, 6, 6, 5, 4, 8, 3],
  x = 3,
  y = 6; // Output is 4

// XXX: Method 1: Brute Force
// 2 loops
// Inner loop picks all the els after the el picked by outer loop
// If the els picked by outer loop and inner loops have values
// as x or y then if needed update the minimum distance calculated so far
// TC: O(n^2)
function minDistance(arr, x, y) {
  let n = arr.length;
  let min_dist = Number.MAX_SAFE_INTEGER;
  let i, j;

  for (i = 0; i < n; i++) {
    for (j = i + 1; j < n; j++) {
      if (
        ((x === arr[i] && y === arr[j]) || (y === arr[i] && x === arr[j])) &&
        min_dist > Math.abs(i - j)
      ) {
        min_dist = Math.abs(i - j);
      }
    }
  }

  return min_dist;
}

// ------------------------------

// XXX: Method 2: Tricky

// Traverse arr from left and stop if either x or y is found,
// Store index of this first occurrence in a variable say prev

// Now traverse arr[] after the index prev
// If the el at current index i matches with either x or y, then check if it is different from arr[prev]
// If it is different, then update the min distance if needed
// If it is the same, then update prev, make prev = i
// My solution based on the instructions above, before watching the video
// TC: O(n)
function minDistanceMethod2(arr, x, y) {
  let n = arr.length;
  let min_dist = Number.MAX_SAFE_INTEGER;
  let prev = null;

  for (let i = 0; i < n; i++) {
    if (arr[i] === x || arr[i] === y) {
      // Found first occurence of either x or y
      if (prev === null) {
        prev = i;
        continue;
      }

      // Update min_dist here if newly found el is not the one that is prev
      if (arr[i] !== arr[prev] && i - prev < min_dist) {
        min_dist = i - prev;
        prev = i;
        continue;
      }

      // Update prev if number repeated
      if (arr[i] === arr[prev]) {
        prev = i;
      }
    }
  }

  return min_dist;
}

// g4g solution
// A bit better than my solution
function minDistanceMethod2G4G(arr, x, y) {
  let i = 0;
  let n = arr.length;
  let min_dist = Number.MAX_SAFE_INTEGER;
  let prev;

  // Find 1st occurrence of either x or y
  for (; i < n; i++) {
    if (arr[i] === x || arr[i] === y) {
      prev = i;
      break;
    }
  }

  for (; i < n; i++) {
    if (arr[i] === x || arr[i] === y) {
      // Update min_dist here if newly found el is not the one that is prev
      if (arr[i] !== arr[prev] && i - prev < min_dist) {
        min_dist = i - prev;
        prev = i;
      } else {
        // Update prev if number repeated
        prev = i;
      }
    }
  }

  return min_dist;
}
