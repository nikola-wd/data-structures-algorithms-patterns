// 1 => 1
// 2 -> 10
// 4 in binary = 100
// 8 -> 1000
// 16 -> 10000 (we always hae one in only one position for each of these numbers)
// ...
// 4 and 9 comparison in binary
// [0]100 -> compares "columns" -> ends up with 0000 for all 4 "columns" 0000 = 0
// [1]000
// O(1)
const isPowerOfTwoBitwise = (number) => {
  if (number < 1) return false;
  return (number & (number - 1)) === 0;
};

console.log(isPowerOfTwoBitwise(16));
