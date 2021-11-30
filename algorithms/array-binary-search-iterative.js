const TO_FIND = 56;

const ALL_NUMBERS = [
  0, 1, 5, 7, 12, 14, 16, 20, 40, 48, 53, 56, 58, 100, 123, 1000, 10000,
];

const binarryArrFind = (arr, toFind) => {
  let start = 0,
    end = arr.length - 1;

  // Iterate while start not meets end
  while (start <= end) {
    // Find the mid index
    let midIndex = Math.floor((start + end) / 2);

    if (arr[midIndex] === toFind) {
      return midIndex;
    }

    if (arr[midIndex] < toFind) {
      start = midIndex + 1;
    } else {
      end = midIndex - 1;
    }
  }

  return 'Not Found';
};

console.log(binarryArrFind(ALL_NUMBERS, TO_FIND));
