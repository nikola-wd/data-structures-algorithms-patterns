// https://www.geeksforgeeks.org/sieve-of-eratosthenes/

// XXX: Given a number n, print all primes smaller than or equal to n. It is also given that n is a small number.

// The sieve of Eratosthenes is one of the most efficient ways to find all primes smaller than n when n is smaller than 10 million or so (Ref Wiki).

// Recommended: Please solve it on “PRACTICE” first, before moving on to the solution.
// Following is the algorithm to find all the prime numbers less than or equal to a given integer n by the Eratosthene’s method:
// When the algorithm terminates, all the numbers in the list that are not marked are prime.

// Explanation with Example:
// Let us take an example when n = 50. So we need to print all prime numbers smaller than or equal to 50.
// We create a list of all numbers from 2 to 50.

// Sieve1

// According to the algorithm we will mark all the numbers which are divisible by 2 and are greater than or equal to the square of it.

// sieve2

// Now we move to our next unmarked number 3 and mark all the numbers which are multiples of 3 and are greater than or equal to the square of it.

// SieveofEratosthenes3

// javascript program to print all
// primes smaller than or equal to
// n using Sieve of Eratosthenes

function sieveOfEratosthenes(n) {
  let count = 0;
  // Create a boolean array
  // "prime[0..n]" and
  // initialize all entries
  // it as true. A value in
  // prime[i] will finally be
  // false if i is Not a
  // prime, else true.
  prime = Array.from({ length: n + 1 }, (_, i) => true);

  for (p = 2; p * p <= n; p++) {
    // If prime[p] is not changed, then it is a
    // prime
    if (prime[p] == true) {
      // Update all multiples of p
      for (i = p * p; i <= n; i += p) prime[i] = false;
    }
  }

  // Print all prime numbers
  for (i = 2; i <= n; i++) {
    if (prime[i] == true) count++;
  }

  return count;
}

// Driver Code
var n = 30;
document.write('Following are the prime numbers ');
document.write('smaller than or equal to ' + n + '<br>');
sieveOfEratosthenes(n);
