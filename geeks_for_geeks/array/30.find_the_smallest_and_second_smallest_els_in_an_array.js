// XXX: Method  1: An efficient solution is to find the min 2 els in one traversal
// 1. Initialize both first and second smallest as INT_MAX
// 2. Loop through all the els
// 2.1. If the current el is smaller than first, then update first ad second
// 2.2. Else if the current element is smaller than second then update second
// TC: O(n)

let list = [12, 13, 1, 10, 34, 1]; // -> smallest is 1, second smallest is 10

function findTwoSmallestEls(arr) {
  let n = arr.length;
  let first = Number.MAX_SAFE_INTEGER;
  let second = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < n; i++) {
    if (arr[i] < first) {
      second = first;
      first = arr[i];
    } else if (arr[i] < second && arr[i] !== first) {
      second = arr[i];
    }
  }

  return [first, second];
}

findTwoSmallestEls(list);
