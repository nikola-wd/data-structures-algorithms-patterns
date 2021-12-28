// Find duplicates in O(n) time and O(1) extra space.
// Given an arr of n elements, which contains els from 0 to n - 1, with any of these numbers appearing any number of times.
// Find these repeating numbers in O(n) and using only constant memory space
// For example, let n be 7, and array be [1,2,3,1,3,6,6], the answer should be [1,3,6]
let list = [1, 2, 3, 1, 3, 6, 6];
// CoPilot code
function findDuplicates(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let index = Math.abs(arr[i]) - 1;
    if (arr[index] < 0) {
      result.push(Math.abs(arr[i]));
    } else {
      arr[index] = -arr[index];
    }
  }
  return result;
}

findDuplicates(list);

// g4g code
function printRepeating(arr) {
  let duplicates = [];
  let i;
  let size = arr.length;
  for (i = 0; i < size; i++) {
    if (arr[Math.abs(arr[i])] >= 0) {
      arr[Math.abs(arr[i])] = -arr[Math.abs(arr[i])];
    } else {
      duplicates.push(Math.abs(arr[i]));
    }
  }
  return duplicates;
}
