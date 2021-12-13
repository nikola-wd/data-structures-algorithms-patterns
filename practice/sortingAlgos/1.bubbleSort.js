// https://stackabuse.com/bubble-sort-and-cocktail-shaker-sort-in-javascript/
// O(n^2)
// 116 steps
function bubbleSort(inputArr) {
  let n = inputArr.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // COmparing and swapping elements
      if (inputArr[j] > inputArr[j + 1]) {
        let t = inputArr[j];
        inputArr[j] = inputArr[j + 1];
        inputArr[j + 1] = t;
      }
    }
  }

  return inputArr;
}

let inputArr = [5, 1, 4, 2, 8];
console.log(inputArr);
bubbleSort(inputArr);
console.log(inputArr);

// XXX: optimization 1
// he first optimization we can implement is - terminate the algorithm
// if the array is sorted - i.e. no swaps are made.
// This can be done via a boolean flag. Each time we swap any elements, it's set to true:
// 82 steps
function bubbleSortOptimized1(inputArr) {
  let n = inputArr.length;
  let sorted = false;

  while (!sorted) {
    sorted = true;
    for (let i = 0; i < n; i++) {
      if (inputArr[i] > inputArr[i + 1]) {
        let t = inputArr[i];
        inputArr[i] = inputArr[i + 1];
        inputArr[i + 1] = t;
        sorted = false;
      }
    }
  }
  return inputArr;
}

let inputArr2 = [5, 1, 4, 2, 8];
console.log(inputArr2);
bubbleSortOptimized1(inputArr2);
console.log(inputArr2);

// A thing that's worth noting is that with the first iteration finished, t
// he largest element will be located at the end of the array.
// The next iteration will place the second largest element before the largest one, and so on.

// This means that with each iteration, we don't really need to
//  look at the last element, since we know it's in the right place. Thus,
//  in the k-th iteration, we only really need to take a look at n-k+1 iterations:
// XXX: optimization 2
// 63 steps
function bubbleSortOptimized2(inputArr) {
  let n = inputArr.length;
  let sorted = false;
  let numOfIterations = 0;

  while (!sorted) {
    sorted = true;
    for (let i = 0; i < n - numOfIterations + 1; i++) {
      if (inputArr[i] > inputArr[i + 1]) {
        let t = inputArr[i];
        inputArr[i] = inputArr[i + 1];
        inputArr[i + 1] = t;
        sorted = false;
        numOfIterations++;
      }
    }
  }
  return inputArr;
}

let inputArr3 = [5, 1, 4, 2, 8];
console.log(inputArr3);
bubbleSortOptimized2(inputArr3);
console.log(inputArr3);

// XXX: Cocktail Shaker Sort vs Bubble Sort
// is algorithm extends Bubble Sort by operating in two directions.
// Instead of going from the start to finish, and repeating that,
// it goes from start to finish, and then from finish to start again,
// in a single full iteration. Effectively,
// it accomplishes double the work of Bubble Sort in a single full iteration,
// though in practice it doesn't typically perform two times faster.

// This is because it has a similar comparison-count. It compares more
// elements per iteration than regular Bubble Sort and it does double the swaps
// per iteration. The reason it's faster is because the range of possible
// swaps per iteration gets smaller and smaller, giving it a slightly better performance.

// TODO: this code is bugged. Fix it
function cocktailShakerSort(inputArr) {
  let n = inputArr.length;
  let sorted = false;

  while (!sorted) {
    sorted = true;
    for (let i = 0; i < n - 1; i++) {
      if (inputArr[i] > inputArr[i + 1]) {
        let tmp = inputArr[i];
        inputArr[i] = inputArr[i + 1];
        inputArr[i + 1] = tmp;
        sorted = false;
      }
    }

    if (sorted) break;
    sorted = true;

    for (let j = n - 1; j > 0; j--) {
      if (inputArr[j - 1] > inputArr[j]) {
        let tmp = inputArr[j];
        inputArr[j] = inputArr[j + 1];
        inputArr[j + 1] = tmp;
        sorted = false;
      }
    }
  }
  return inputArr;
}
console.log('coctail shaker');
let inputArr4 = [5, 1, 4, 2, 8];
console.log(inputArr4);
console.log(cocktailShakerSort(inputArr4));
