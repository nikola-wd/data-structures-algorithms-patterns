// Split the array multiple times until we have only 2-element arrays left (recursively, split in the mid)
// -> Sort those arrays, and merge them back together
function mergeSort(arr) {
  // base cases
  if (arr.length < 2) return arr;
  if (arr.length === 2) {
    return arr[0] > arr[1] ? [arr[1], arr[0]] : arr;
  }

  const mid = Math.floor(arr.length / 2);
  // divide into 2 arrays
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  //recursive
  const leftSorted = mergeSort(left);
  const rightSorted = mergeSort(right);

  // Merge & sort arrays
  const mergedArr = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftSorted.length || rightIndex < rightSorted.length) {
    if (
      // left arr is always shorter or equal to the right one
      leftIndex >= leftSorted.length ||
      leftSorted[leftIndex] > rightSorted[rightIndex]
    ) {
      mergedArr.push(rightSorted[rightIndex]);
      rightIndex++;
    } else {
      mergedArr.push(leftSorted[leftIndex]);
      leftIndex++;
    }
  }

  return mergedArr;
}

console.log(mergeSort([3, 10, -3, 48, 5, 33, 99]));
