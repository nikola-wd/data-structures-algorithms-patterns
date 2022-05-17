let list = [11, 15, 6, 8, 9, 10],
  sum = 16;

// TC: O(n)
function pairInSortedRotated(arr, x) {
  let n = arr.length;

  // Find the pivot el
  let i;
  for (i = 0; i < n - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      break;
    }
  }

  let l = (i + 1) % n; // l is now index of min el
  let r = i; // r is now index of max el

  // Keep moving either l or r till they meet
  while (l !== r) {
    // If we find a pair with sum x, we return true
    if (arr[l] + arr[r] === x) {
      return true;
    }

    // If current pair sum is less, move to the higher sum
    if (arr[l] + arr[r] < x) {
      l = (l + 1) % n;
    } else {
      // Move to the lower sum side
      r = (n + r - 1) % n;
    }
  }

  return false;
}
