// We are given an arr of positive integers. We need to make the given arr a "Palindrome". Only
// allowed operation on array is merge. Merging 2 adjacent elements means replacing them with their sum.
// The task is to find nim number of merge operations required to make given array a "Palindrome"

// To make an array palindromic we can simply apply merging operations n-1 times where n is the size of array (Note a single element arr is always
// a palindrome similar to single character string). In that case, size of array will be reduced to 1. But in this problem we are asked to do it
// in minimum number of operations.

// Examples: [15, 4, 15] -> 0 -> Already a palindrome
// [1,4,5,1] -> 1 -> [1, 9, 1] -> 1 merge needed
// [11, 14, 15, 99] -> 3 -> We need to merge all elements to make a palindrome

// Let f(i, j) be minimum merging operations to make subarray arr[i..j] a palindrome. If i == j answer is 0. We start i from 0 and j from n - 1.
// 1. If arr[i] === arr[j], then there is no need to do any merging operations at index i or index j. Our answer in this case will be f(i + 1, j - 1)
// 2. Else, we need to do merging operations. Following cases arise.
// 2.1. If arr[i] > arr[j], then we should do merging operation at index j. We merge index j - 1 and j, and update arr[j-1] = arr[j-1] + arr[j].
// Our answer in this case will be 1 + f(i, j - 1).
// 2.2. For the case when arr[i] < arr[j], update arr[i+1] = arr[i+1] + arr[i]. Our answer in this case will be 1 + f(i+1, j).
// 3. Our answer will be f(0, n-1), where n is size of array arr[].
function findMinOps(arr) {
  let ans = 0;

  let n = arr.length;
  let i = 0,
    j = n - 1;

  while (i <= j) {
    // If corner els are the same, problem reduces
    if (arr[i] === arr[j]) {
      i++;
      j--;
    }

    // If left el is greater, then we merge right 2 els.
    else if (arr[i] > arr[j]) {
      j--;
      arr[j] += arr[j + 1];
      ans++;
    }

    // Else we merge left 2 els
    else {
      i++;
      arr[i] += arr[i - 1];
      ans++;
    }
  }

  return ans;
}

let a = [1, 4, 5, 9, 1];
findMinOps(a);
