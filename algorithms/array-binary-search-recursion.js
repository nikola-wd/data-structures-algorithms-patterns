const TO_FIND = 40;

const ALL_NUMBERS = [
  0, 1, 5, 7, 12, 14, 16, 20, 40, 48, 53, 56, 58, 100, 123, 1000, 10000,
];

const binarryArrFind = (arr, toFind, start = 0, end = arr.length - 1) => {
  let midIndex = Math.floor((start + end) / 2);

  if (arr[midIndex] === toFind) {
    return midIndex;
  } else if (arr[midIndex] > toFind) {
    return binarryArrFind(arr, toFind, start, midIndex - 1);
  } else if (arr[midIndex] < toFind) {
    return binarryArrFind(arr, toFind, midIndex + 1, end);
  } else {
    return 'not found';
  }
};

console.log(binarryArrFind(ALL_NUMBERS, TO_FIND));
