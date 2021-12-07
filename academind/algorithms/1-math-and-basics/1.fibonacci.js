// return the nth element of the fibonacci sequence

// const getFibPos = (pos) => {
//   let [prev, next] = [0, 1];

//   for (let i = 3; i <= pos; i++) {
//     [prev, next] = [next, next + prev];
//     console.log(prev, ', ', next);
//   }

//   return next;
// };

// getFibPos(8);

function fib(n) {
  const numbers = [1, 1];
  for (let i = 2; i < n + 1; i++) {
    numbers.push(numbers[i - 2] + numbers[i - 1]);
  }

  return numbers[n];
}

console.log(fib(5));
