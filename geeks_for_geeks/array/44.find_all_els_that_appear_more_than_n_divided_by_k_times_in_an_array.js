// Given an array of size n, find all els in array that appear more than n/k
// times. For example, if the input arr is [3,1,2,2,1,2,3,3], and k is 4, n/k is 8/4 = 2 then the
// output should be [2,3]
let list = [3, 1, 2, 2, 1, 2, 3, 3],
  k = 4; // -> [2,3]

// XXX: Method 1: A simple solution is to pick all els one by one.
// Count occurences by traversing for each, if count becomes more than n/k
// print that el
// TC: O(n^2)
// TODO: Code this brute force solution

// ------------------------------

// XXX: Method 2: My solution - uses hashing
// TC: O(n), AS: O(n)
function findElsAppearingMoreThan(arr, k) {
  let n = arr.length;
  let freq = n / k;

  let results = [];
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) {
      map.set(arr[i], 1);
    } else {
      let tempCount = map.get(arr[i]);
      map.set(arr[i], tempCount + 1);
      if (tempCount + 1 > freq) {
        results.push(arr[i]);
      }
    }
  }

  return results;
}

// ------------------------------

// XXX: Method 3: g4g
// First, sort all els using o(n log n) algo.
// Once it is sorted, we can find all required els in a linear scan of arr
// TC: O(n log n) + O(n) -> O(n log n)
