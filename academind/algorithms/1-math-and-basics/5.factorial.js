// Calculate the factorial of the number
// fact(3) -> 3 * 2 * 1 = 6
// fact(5) -> 5 * 4 * 3 * 2 * 1
// My solution O(n) - recursive
// function factorial(number) {
//   if (number === 1) return 1;
//   return number * factorial(number - 1);
// }
// My solution O(n) - iterative
function factorial(number) {
  let result = number;
  while (number > 1) {
    result *= --number;
  }
  return result;
}

console.log(factorial(5));
