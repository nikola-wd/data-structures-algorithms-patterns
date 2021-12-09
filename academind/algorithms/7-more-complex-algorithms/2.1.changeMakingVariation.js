// Greedy Approach here is wrong because: 8 * 1 + 1 * 3. And we needed a better solution
// that is 6 * 1 + 5 * 1
/* function getChange(coins, amount) {
  let remainingAmount = amount;

  const calculatedChange = {
    selectedCoins: {},
    numberOfCoins: 0,
  };

  for (const coin of coins) {
    const count = Math.floor(remainingAmount / coin);
    calculatedChange.selectedCoins[coin] = count;
    calculatedChange.numberOfCoins += count;
    remainingAmount = remainingAmount - coin * count;
  }

  return calculatedChange;
}

const availableCoins = [8, 6, 5, 1];
const targetValue = 11;

console.log(getChange(availableCoins, targetValue)); */

// Brute Force approach
function computeChange(coins, amount) {
  let remainingAmount = amount;

  const calculatedChange = {
    selectedCoins: {},
    numberOfCoins: 0,
  };

  for (const coin of coins) {
    const count = Math.floor(remainingAmount / coin);
    calculatedChange.selectedCoins[coin] = count;
    calculatedChange.numberOfCoins += count;
    remainingAmount = remainingAmount - coin * count;
  }

  return calculatedChange;
}

function computeChangeBruteForce(coins, amount) {
  const results = [];

  for (let i = 0; i < coins.length; i++) {
    // [8, 6, 5, 1], [6, 5, 1] ... We get all the variations and compare
    results.push(computeChange(coins.slice(i), amount));
  }

  let smallestAmount = Number.MAX_SAFE_INTEGER;
  let finalResult;
  for (const result of results) {
    if (result.numberOfCoins < smallestAmount) {
      smallestAmount = result.numberOfCoins;
      finalResult = result;
    }
  }

  return finalResult;
}

const availableCoins = [8, 6, 5, 1];
const targetValue = 11;

console.log(computeChangeBruteForce(availableCoins, targetValue));
// 5 * 1 + 6 * 1
// TC: O(n^2) -> tendency towards O(n^2) because in each iteration we reduce the number of arr items
