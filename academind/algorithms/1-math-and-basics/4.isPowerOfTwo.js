// Determine whether an input us a power of two
// 8 is 2 at the power of 3
// My solution
// O(log n)
const isPowerOfTwo = (number) => {
  if (number === 1) return true;
  if (number < 1 || number % 2 !== 0) return false;

  let dividedNumber = number;
  while (dividedNumber > 1) {
    if (dividedNumber % 2 !== 0) return false;
    dividedNumber = dividedNumber / 2;
  }
  return true;
};

// console.log(isPowerOfTwo(128)); // true
// console.log(isPowerOfTwo(5)); // false

// My solution: found bitwise operator solution
// O(1)
// https://stackoverflow.com/questions/19383248/find-if-a-number-is-a-power-of-two-without-math-function-or-log-function
// function isPowerOfTwo(number) {
//   if (n === 1) return true;
//   if (n < 1 || n % 2 !== 0) return false;
//   return (n & (n - 1)) == 0;
// }

/**
 * @param {number} number
 * @param {number} powerOf
 * @return {boolean}
 */
// My solution -> generic fn
// function isPowerOf(number, powerOf) {
//   if (number === 1) return true;
//   if (number < 1 || number % powerOf !== 0) return false;

//   let temp = number;
//   while (temp > 1) {
//     if (temp % powerOf !== 0) return false;
//     temp = temp / powerOf;
//   }
//   return true;
// }
// console.log(isPowerOf(16, 2));
