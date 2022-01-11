// Let AB be 2 parts of the input arr where A = arr[0..d-1] and B = arr[d..n-1]

// Reverse A to get ArB
// Reverse B to get ArBr
// Reverse all to get (ArBr)r = BA

let list = [1, 2, 3, 4, 5, 6, 7],
  d = 2;

// A = [1,2] and B = [3,4,5,6,7]
// Reverse A, we get ArB = [2,1,3,4,5,6,7]
// Reverse B, we get ArBr = [2,1,7,6,5,4,3]
// Reverse all, we get (ArBr)r = [3,4,5,6,7,1,2]

// TC: O(n)
function leftRotate(arr, d) {
  let n = arr.length;

  // Reverse first part
  reverse(arr, 0, d - 1);
  // Reverse second part
  reverse(arr, d, n - 1);
  // Reverse whole arr
  reverse(arr, 0, n - 1);
}

function reverse(arr, start, end) {
  while (start < end) {
    let temp = arr[start];
    arr[start++] = arr[end];
    arr[end--] = temp;
  }
}

leftRotate(list, d);
