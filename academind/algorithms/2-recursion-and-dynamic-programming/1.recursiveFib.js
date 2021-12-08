// Exponential time complexity O(2^n) (not exactly, but close to it, if we follow the trend)
const recursiveFib = (n) => {
  if (n === 1) return 1;
  if (n === 0) return 0;
  return recursiveFib(n - 1) + recursiveFib(n - 2);
};

console.log(recursiveFib(6));
