function isPrime(n) {
  // Corner case
  if (n <= 1) return false;

  // Check from 2 to n-1
  for (let i = 2; i < n; i++) if (n % i == 0) return false;

  return true;
}
// Function to print primes
function printPrime(n) {
  let count = 0;
  for (let i = 2; i < n; i++) {
    if (isPrime(i)) count++;
  }
  return count;
}

let n = 7;
printPrime(n);

// not very efficient
// Use sieve of eratosthenes for best time complexity
