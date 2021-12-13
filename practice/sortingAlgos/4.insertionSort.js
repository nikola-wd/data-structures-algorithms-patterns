//  https://www.geeksforgeeks.org/insertion-sort/

// Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands.
// The array is virtually split into a sorted and an unsorted part.
// Values from the unsorted part are picked and placed at the correct position in the sorted part.
// Algorithm
// To sort an array of size n in ascending order:
// 1: Iterate from arr[1] to arr[n] over the array.
// 2: Compare the current element (key) to its predecessor.
// 3: If the key element is smaller than its predecessor, compare it to the elements before.
// Move the greater elements one position up to make space for the swapped element.

// Time Complexity: O(n^2)
// Auxiliary Space: O(1)
// Boundary Cases: Insertion sort takes maximum time to sort if
// elements are sorted in reverse order. And it takes minimum
// time (Order of n) when elements are already sorted.
// Algorithmic Paradigm: Incremental Approach
// Sorting In Place: Yes
// Stable: Yes
// Online: Yes
// Uses: Insertion sort is used when number of elements is small.
// It can also be useful when input array is almost sorted, only few
// elements are misplaced in complete big array.

// 54 steps
function insertionSort(arr) {
  let n = arr.length;

  let i, key, j;
  for (i = 1; i < n; i++) {
    key = arr[i];
    j = i - 1;
    /* Move elements of arr[0..i-1], that are 
      greater than key, to one position ahead 
      of their current position */
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
}

let arr = [12, 11, 13, 5, 6];
console.log(arr);
insertionSort(arr);
console.log(arr);

// What is Binary Insertion Sort?
// We can use binary search to reduce the number of
// comparisons in normal insertion sort.
// Binary Insertion Sort uses binary search to find the proper location
// to insert the selected item at each iteration.
// In normal insertion, sorting takes O(i) (at ith iteration) in
// worst case. We can reduce it to O(logi) by using binary search.
// The algorithm, as a whole, still has a running worst case running
// time of O(n^2) because of the series of swaps required for each insertion.
function binarySearch(a, item, low, high) {
  if (high <= low) return item > a[low] ? low + 1 : low;
  let mid = Math.floor((low + high) / 2);
  if (item == a[mid]) return mid + 1;
  if (item > a[mid]) return binarySearch(a, item, mid + 1, high);
  return binarySearch(a, item, low, mid - 1);
}

function binaryInsertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let j = i - 1;
    let x = array[i];

    // Find location to insert
    // using binary search
    let loc = Math.abs(binarySearch(array, x, 0, j));

    // Shifting array to one
    // location right

    while (j >= loc) {
      array[j + 1] = array[j];
      j--;
    }

    // Placing element at its
    // correct location
    array[j + 1] = x;
  }
}

let arr2 = [12, 11, 13, 5, 6];
console.log(arr2);
binaryInsertionSort(arr2);
console.log('binInsertionSort: ', arr2);
