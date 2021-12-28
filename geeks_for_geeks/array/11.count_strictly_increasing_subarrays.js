// Count strictly increasing subarrays
// Given an array of integers, count number of sub arrays (of size more than one) that are strictly increasing
// Expected Time Complexity: O(n)
// Expecter Extra Space: O(1)

// let list = [1,4,3] // 1

// let list = [1,2,3,4] // 6

// let list = [1,2,2,4] // 2

// XXX: A simple solution is to generate all possible subarrays, and for
// every subarray check if subarray is strictly increasing or not.
// Worst case time complexity of this solution would be O(n^3)
// function countStrictlyIncreasingSubarrays(arr) {
//   let count = 0;
//   let n = arr.length;
//   for (let i = 0; i < n; i++) {
//     for (let j = i + 1; j < n; j++) {
//       let isStrictlyIncreasing = true;
//       for (let k = i; k < j; k++) {
//         if (arr[k] >= arr[k + 1]) {
//           isStrictlyIncreasing = false;
//           break;
//         }
//       }
//       if (isStrictlyIncreasing) {
//         count++;
//       }
//     }
//   }
//   return count;
// }

// ------------------------------

// XXX: Method 2 (Better solution)
// A Better Solution is to use the fact that if subarray arr[i:j] is not strictly increasing, then subarrays
// arr[i:j+1], arr[i:j+2], ..., arr[i:n-1] cannot be strictly increasing
// TC: O(m) where m is the number of strictly increasing subarr ays
// function countStrictlyIncreasingSubarrays(arr) {
//   let cnt = 0;
//   let n = arr.length;
//   // Pick starting point
//   for (let i = 0; i < n; i++) {
//     // Pick ending point
//     for (let j = i + 1; j < n; j++) {
//       if (arr[j] > arr[j - 1]) {
//         cnt++;
//       } else {
//         // If subarray arr[i..j] is not strictly increasing, then
//         // subarrays after it, i.e.
//         // arr[i..j+1], arr[i..j+2]...cannot be strictly increasing
//         break;
//       }
//     }
//   }

//   return cnt;
// }

// XXX: Method 3 O(n)
// An efficient solution can count subarrays in O(n) time.
// The idea is based on the fast that a sorted subarray of length "len" adds len * (len - 1) / 2 to result.
// For example, [10, 20, 30, 40] adds 6 to result.
function countIncreasing(arr) {
  let n = arr.length;
  let cnt = 0; // Initialize result

  // Initialize length of current
  // increasing subarray
  let len = 1;

  // Traverse through the array
  for (let i = 0; i < n - 1; ++i) {
    // If arr[i+1] is greater than
    // arr[i], then increment length
    if (arr[i + 1] > arr[i]) len++;
    // Else Update count and reset
    // length
    else {
      cnt += ((len - 1) * len) / 2;
      len = 1;
    }
  }

  // If last length is more than 1
  if (len > 1) cnt += ((len - 1) * len) / 2;

  return cnt;
}
