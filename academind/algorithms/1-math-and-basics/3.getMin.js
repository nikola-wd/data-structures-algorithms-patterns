function getMin(numbers) {
  // return Math.min(...numbers);
  let currentMin = numbers[0];
  for (const num of numbers) {
    if (num < currentMin) currentMin = num;
  }
  return currentMin;
}

console.log(getMin([9, 2, 3, 1, 5, 20, 33]));
