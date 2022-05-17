// Given a sorted arr, and a value x, the ceilig of x is the smallest
// el in arr greater or equal to x, and the floor is the greatest el
// smaller than or equal to x

// Assume that the array is sorted in inc order

// Write efficient fns to find floor and ceiling of x
let list = [1, 2, 8, 10, 10, 12, 19];

// For x = 0 -> no floor, ceil is 1
// For x = 1 -> floor is 1, ceil is 1
// For 5 -> floor is 2, ceil is 8
// For 50 -> floor is 19, no ceil

// XXX: Method 1: Linear search
// Algo to search ceiling of x
// 1. If x is smaller than or equal to the first el in arr, then return 0 (index of first el)
// 2. Else, Linearly search for an index i such that x lies between arr[i] and arr[i+1]
// 3. If we do not find an index i in step 2, then return -1
// TC: O(n)
function findFloorAndCeil(arr, x) {
  let floorIndex = floorSearch(arr, x);
  let ceilIndex = ceilSearch(arr, x);

  return [floorIndex, ceilIndex];
}
function floorSearch(arr, x) {
  let low = 0;
  let high = arr.length - 1;

  // If x is higher than or equal to last el, return the last el
  if (x >= arr[high]) {
    return high;
  }
  // Otherwise, lineaarly search for ceil value
  for (let i = high; i >= low; i--) {
    if (arr[i] === x) {
      return i;
    }
    // If x lies between arr[i] and arr[i-1], including arr[i-1]
    // then return arr[i+1]
    if (arr[i] > x && arr[i - 1] <= x) {
      return i - 1;
    }
  }

  // no ceil
  return -1;
}

function ceilSearch(arr, x) {
  let low = 0;
  let high = arr.length - 1;

  // If x is smaller than or equal to 1st el, return the first el
  if (x <= arr[low]) {
    return low;
  }
  // Otherwise, lineaarly search for ceil value
  for (let i = low; i < high; i++) {
    if (arr[i] === x) {
      return i;
    }
    // If x lies between arr[i] and arr[i+1], including arr[i+1]
    // then return arr[i+1]
    if (arr[i] < x && arr[i + 1] >= x) {
      return i + 1;
    }
  }

  // no ceil
  return -1;
}

// ----------------------------------------------------------------

// XXX: Method 2 (Binary Search)
// Reduces TC to O(log n)

// TODO: fix these functions, they don't work
// https://www.geeksforgeeks.org/ceiling-in-a-sorted-array/
function floorSearchBin(arr, low = 0, high = arr.length - 1, x) {
  let mid;

  // If x is >= last el, return the last el
  if (x >= arr[high]) {
    return high;
  }

  // If x is smaller than the first el, return -1
  if (x < arr[low]) {
    return -1;
  }

  // Get the index of middle el of arr[low..high]
  mid = Math.floor((low + high) / 2);

  // If x is same as middle el, return mid
  if (arr[mid] === x) {
    return mid;
  }

  // If x is < than arr[mid], then either arr[mid - 1]
  // is floor of x or floor lies in arr[low, mid-1]
  else if (x < arr[mid]) {
    if (mid - 1 >= low && x >= arr[mid - 1]) {
      return mid + 1;
    } else {
      return floorSearchBin(arr, low, mid - 1, x);
    }
  } else {
    // If x is > than arr[mid], then either arr[mid]
    // is ceiling of x or ceiling lies in arr[mid - 1..high]
    if (mid + 1 <= high && x < arr[mid + 1]) {
      return mid;
    } else {
      return floorSearchBin(arr, mid + 1, high, x);
    }
  }
}

function ceilSearchBin(arr, low = 0, high = arr.length - 1, x) {
  let mid;

  // If x is smaller than or equal to the first el, return the first el
  if (x <= arr[low]) {
    return low;
  }

  // If x is greater than the last el, return -1
  if (x > arr[high]) {
    return -1;
  }

  // Get the index of middle el of arr[low..high]
  mid = Math.floor((low + high) / 2);

  // If x is same as middle el, return mid
  if (arr[mid] === x) {
    return mid;
  }

  // If x is greater than arr[mid], then either arr[mid + 1]
  // is ceiling of x or ceiling lies in arr[mid+1..high]
  else if (arr[mid] < x) {
    if (mid + 1 <= high && x <= arr[mid + 1]) {
      return mid + 1;
    } else {
      return ceilSearchBin(arr, mid + 1, high, x);
    }
  } else {
    // If x is smaller than arr[mid], then either arr[mid]
    // is ceiling of x or ceiling lies in arr[mid - 1..high]
    if (mid - 1 >= low && x > arr[mid - 1]) {
      return mid;
    } else {
      return ceilSearchBin(arr, low, mid - 1, x);
    }
  }
}
