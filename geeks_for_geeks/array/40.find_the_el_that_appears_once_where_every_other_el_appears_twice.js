// Given an arr of integers. All numbers occur twice except one number which occurs once.
// Find the number in O(n) time & constant extra space

let list = [7, 3, 5, 4, 5, 3, 4]; // -> 7

// XXX:  Simple solution is to check every element if it appears once or not. Once an el with single occurence is found, return in.
// TC: O(n^2)

// ------------------------------

// XXX: Method 2 - Solution using hashing
// 1. Traverse all els and put them in a hash table. El is used as key and count of occurences is used as a value in the hash table
// 2. Traverse array again and print the el with count 1 in hash table
// TC: O(n), but requires extra space
// TODO: Write this solution

// ------------------------------

// XXX: Method 3 - Solution using XOR
// The best solution is to use XOR. XOR or all array els, gives us the number with single ocurence. The idea is based on following 2 facts.
// a) XOR of a number with itself is 0
// b) XOR of a number with 0 is number itself
// TC: O(n), constant space
function findSingle(arr) {
  let ar_size = arr.length;
  // Do XOR of all els and return
  let res = arr[0];

  for (let i = 1; i < ar_size; i++) {
    res = res ^ arr[i];
  }

  return res;
}
