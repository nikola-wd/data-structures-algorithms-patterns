let list = [10, 20, 4]; // -> should be 20

let list1 = [20, 10, 20, 4, 100]; // -> 100

// XXX: Method 1: The solution is to initialize max as first el, then traverse the given array
// from second el till end. For every traversed el, compare it with max, if it is greater than max,
// then update max
// TC: O(n);
function findMax(arr) {
  let n = arr.length;

  let max = arr[0];
  for (let i = 1; i < n; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

findMax(list1);

// Second solution would be to sort O(nlogn), and return last element in arr
