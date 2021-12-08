// Use pivot elements to split array into smaller chunks - elements
// bigger, smaller and equal than the pivot element. Repeat that
// process for all chunks and concat the sorted chunks.
// Pivot is ofter the first element
// Worst case (items sorted already) - O(n^2)
// Best and average - O (n * log n)
function quickSort(arr) {
  const resArr = [...arr];

  //base case
  if (resArr.length <= 1) {
    return resArr;
  }

  const smallerElsArr = [];
  const biggerElsArr = [];
  const pivotElement = resArr.shift();
  const centerElsArr = [pivotElement];

  while (resArr.length) {
    const poppedEl = resArr.pop();
    if (poppedEl < pivotElement) {
      smallerElsArr.push(poppedEl);
    } else if (poppedEl > pivotElement) {
      biggerElsArr.push(poppedEl);
    } else {
      centerElsArr.push(poppedEl);
    }
  }

  const smallerElsSortedArr = quickSort(smallerElsArr);
  const biggerElsSortedArr = quickSort(biggerElsArr);

  return [...smallerElsSortedArr, ...centerElsArr, ...biggerElsSortedArr];
}

const sorted = quickSort([
  3, 10, -3, 48, 5, 33, 99, 101, 200, 301, 2, 1, 56, 78,
]);
console.log(sorted);

// Improved space time complexity qs:
// https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/sorting/quick-sort/QuickSortInPlace.js
