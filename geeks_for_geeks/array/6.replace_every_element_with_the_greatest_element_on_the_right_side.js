// My solution
// XXX: Method 1: O(n), method 0 would be slower, with 2 loops O(n^2)
function replaceEveryItemWithLargestFromTheRight(arr) {
  let size = arr.length;
  let currentLargest = -1;

  for (let i = size - 1; i >= 0; i--) {
    let temp = arr[i];
    arr[i] = currentLargest;

    if (temp > currentLargest) {
      currentLargest = temp;
    }
  }
}

let list = [16, 17, 4, 3, 5, 2];
replaceEveryItemWithLargestFromTheRight(list);
