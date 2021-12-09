// Permutations are ordered combinations of values (without or with repetition)
// Example: [Walk dog, Clean toilet, Order food]
// -> combinations
// 1. [Walk dog, Clean toilet, Order food]
// 2: [Clean toilet, Walk dog, Order food]
// 3: [Order food, Clean toilet, Walk dog]
// ...
// Here, every task is done once, hence, no repetitions

// Example for a permutation with repetition: -----
// Safe combination you want to set
// You have a keypad with only 3 numbers available: [1, 5, 9]
// Combination always must be 3 chars long
// -> combinations
// 1. [1, 5, 9]
// 2. [5, 1, 9]
// 3. [5, 5, 9]
// 4. [1, 1, 1]
// ...

function getPermutations(options) {
  const permutations = [];

  // Base case
  if (options.length === 1) return [options];

  const partialPermutations = getPermutations(options.slice(1));

  const firstOption = options[0];

  // We don't know how many nested loops we will need
  // so we are using recursion
  for (let i = 0; i < partialPermutations.length; i++) {
    const partialPermutation = partialPermutations[i];

    for (let j = 0; j <= partialPermutation.length; j++) {
      const permutationInFront = partialPermutation.slice(0, j);
      const permutationAfter = partialPermutation.slice(j);
      permutations.push(
        permutationInFront.concat([firstOption], permutationAfter)
      );
    }
  }

  return permutations;
}

const todoItems = [
  'walk the dog',
  'clean the toilet',
  'buy groceries',
  'order food',
];

console.log(getPermutations(todoItems));

// O (n!) - factorial complexity (worst complexity)
// There is no better alternative to this algorithm
