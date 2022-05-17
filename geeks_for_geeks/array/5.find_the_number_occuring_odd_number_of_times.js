// Given an arr of positive integers. All numbers occur even number
// of times except one number which occurs odd number of times

let list = [1, 2, 3, 2, 3, 1, 3];

// XXX: Method 1: TC: O(n^2)
// Simple solution is to run 2 nested loops. The outer loop picks all
// els one by one and inner loop counts number of occurences of the el picked
// by the outer loop
function findElOccuringOddNoOfTimes(arr) {
  let size = arr.length;
  for (let i = 0; i < size; i++) {
    let count = 0;
    for (let j = 0; j < size; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
    if (count % 2 !== 0) {
      return arr[i];
    }
  }
  return -1;
}

findElOccuringOddNoOfTimes(list);

// -------------------------------

// XXX: Method 2: Better, uses hashing and takes O(n)
// but it requires O(n) extra space for hashing
function findElOccuringOddNoOfTimesHash(arr) {
  let size = arr.length;
  let map = new Map();

  for (let i = 0; i < size; i++) {
    if (map.has(arr[i])) {
      let newVal = map.get(arr[i]) + 1;
      map.set(arr[i], newVal);
    } else {
      map.set(arr[i], 1);
    }
  }

  for (let [key, value] of map.entries()) {
    if (value % 2 !== 0) {
      return key;
    }
  }
  return -1;
}
findElOccuringOddNoOfTimesHash(list);

// -------------------------------

// XXX: Method 3. Best solution. Usex XOR
// The best solution is to do bitwise XOR of all the els. XOR all the els
// gives us odd occurring els. Please not that the XOR of 2 els
// is 0 if both els are the same and the XOR of a number X with 0 is X\
// TC: O(n)
// SC: O(1)
function findElOccuringOddTimesXor(arr) {
  let size = arr.length;
  let res = 0;

  for (let i = 0; i < size; i++) {
    res = res ^ arr[i];
  }

  return res;
}
findElOccuringOddTimesXor(list);
