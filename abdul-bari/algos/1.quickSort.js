// https://runestone.academy/runestone/books/published/pythonds3/SortSearch/TheQuickSort.html
// https://www.youtube.com/watch?v=7h1s2SojIRw&list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O&index=36&ab_channel=AbdulBari

function quickSort(arr, first, last) {
  if (first < last) {
    let split = partition(arr, first, last);
    quickSort(arr, first, split - 1);
    quickSort(arr, split + 1, last);
  }
}

function partition(arr, first, last) {
  let pivot_val = arr[first];
  let left_mark = first + 1;
  let right_mark = last;
  let done = false;

  while (!done) {
    // Find greater than pivot
    while (left_mark <= right_mark && arr[left_mark] <= pivot_val) {
      left_mark = left_mark + 1;
    }
    // Find lesser than
    while (left_mark <= right_mark && arr[right_mark] >= pivot_val) {
      right_mark = right_mark - 1;
    }
    // If found both and should swap
    if (right_mark < left_mark) {
      done = true;
    } else {
      // swap greater and lesser
      [arr[left_mark], arr[right_mark]] = [arr[right_mark], arr[left_mark]];
    }
  }

  // Swap pivot and lesser
  [arr[first], arr[right_mark]] = [arr[right_mark], arr[first]];
  return right_mark;
}
