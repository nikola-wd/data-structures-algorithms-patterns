// O(n)
// This memoized version skips unnecessary branches
function memoizedFib(n, memo) {
  let result;
  if (memo[n]) return memo[n];

  if (n === 1) {
    result = 1;
  } else if (n === 0) {
    result = 0;
  } else {
    result = memoizedFib(n - 1, memo) + memoizedFib(n - 2, memo);
  }

  memo[n] = result;
  // console.log(memo);
  return result;
}

console.log(memoizedFib(60, {}));
