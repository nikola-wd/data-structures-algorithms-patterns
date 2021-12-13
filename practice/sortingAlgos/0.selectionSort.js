// https://stackabuse.com/selection-sort-in-javascript/
// O(n^2)

/* Time Complexity
The time complexity of Selection Sort is not difficult to analyze.

In the first iteration, throughout the array of n elements, we make n-1 comparisons and potentially one swap. In the second iteration, we will make n-2 comparisons, and so on.

Therefore, the total number of comparisons will be (n-2) + (n-1) + ...+ 1, which adds up to n(n-1)/2 = (n2-n)/2. This leads us to a running time of O(n2).

O(n2) is a pretty bad time complexity for a sorting algorithm. When sorting a collection, you'd use faster sorting algorithms like Quicksort or Merge Sort with a time complexity of O(nlogn).

The best-case performance of Selection Sort is also O(n2), so checking whether the array or list is sorted or not is also really inefficient.

On the other hand, when compared to other quadratic time complexity algorithms like Bubble Sort, Selection Sort holds itself quite well, outperforming Bubble Sort and its variants, as well as Gnome Sort.

Insertion sort, however, can be faster than Selection Sort in case the collection is almost sorted. And Insertion Sort is pretty much unbeaten with short collections. */

function selectionSort(inputArr) {
  let n = inputArr.length;

  for (let i = 0; i < n; i++) {
    // Finding the smallest number in the subarray
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (inputArr[j] < inputArr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      // Swapping the elements
      let tmp = inputArr[i];
      inputArr[i] = inputArr[min];
      inputArr[min] = tmp;
    }
  }
}

const arr = [5, 2, 4, 6, 1, 3];
console.log('Before Sort: ', arr);
selectionSort(arr);
console.log('After Sort: ', arr);
