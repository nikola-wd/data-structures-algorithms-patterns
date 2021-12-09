// greedy solution - return min number of coins to reach the target value
// Example of a working greedy approach for a solution
function getChange(coins, amount) {
  let remainingAmount = amount;

  const calculatedChange = {
    selectedCoins: {},
    numberOfCoins: 0,
  };

  for (const coin of coins) {
    // if should be included, and if so, how often
    const count = Math.floor(remainingAmount / coin); // 100 - 129 = 1.29 -> 1
    calculatedChange.selectedCoins[coin] = count;
    calculatedChange.numberOfCoins += count;
    remainingAmount = remainingAmount - coin * count;
  }

  return calculatedChange;
}

// 100, 20, 5, 2 * 2

const availableCoins = [100, 50, 20, 10, 5, 2, 1];
const targetValue = 129;

console.log(getChange(availableCoins, targetValue));

// O(n) - or if coins array doesn't change it might be O(1)
