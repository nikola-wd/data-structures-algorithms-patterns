let test = [2, 3, 10, 6, 4, 8, 1];

function reverseArr(arr) {
  let n = arr.length;

  let i = 0,
    j = n - 1;
  while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
  }
}

function reverseArrRecursive(arr, start = 0, end = arr.length - 1) {
  let temp;

  if (start >= end) {
    return;
  }

  temp = arr[start];
  arr[start] = arr[end];
  arr[end] = temp;

  reverseArrRecursive(arr, start + 1, end - 1);
}
