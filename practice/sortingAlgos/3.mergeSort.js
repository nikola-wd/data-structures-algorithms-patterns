// https://runestone.academy/runestone/books/published/pythonds3/SortSearch/TheMergeSort.html
// https://stackabuse.com/merge-sort-in-javascript/

// We now turn our attention to using a divide and conquer strategy as a way to improve the performance of sorting algorithms. The first algorithm we will study is the merge sort. Merge sort is a recursive algorithm that continually splits a list in half. If the list is empty or has one item, it is sorted by definition (the base case). If the list has more than one item, we split the list and recursively invoke a merge sort on both halves. Once the two halves are sorted, the fundamental operation, called a merge, is performed. Merging is the process of taking two smaller sorted lists and combining them together into a single, sorted, new list. Figure 10 shows our familiar example list as it is being split by merge_sort. Figure 11 shows the simple lists, now sorted, as they are merged back together.

const arr = [5, 2, 7, 9, 99, 20, 15, 36];

function merge(left, right) {
  let arr = [];
  // Break out of loop if any one of the array gets empty
  while (left.length && right.length) {
    // Pick the smaller among the smallest element of left and right sub arrays
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }

  // Concatenating the leftover elements
  // (in case we didn't go through the entire left or right array)
  return [...arr, ...left, ...right];
}

function mergeSort(array) {
  const half = array.length / 2;

  // Base case or terminating case
  if (array.length < 2) {
    return array;
  }

  const left = array.splice(0, half);
  return merge(mergeSort(left), mergeSort(array));
}

console.log(mergeSort(arr));
console.log(mergeSort([2, 1]));
