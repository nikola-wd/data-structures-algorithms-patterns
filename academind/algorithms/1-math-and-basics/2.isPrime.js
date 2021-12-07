// My solution
// function isPrime(n) {
//   if (n % 2 === 0) return false;

//   const dividers = [2, 3, 5, 7];
//   if (dividers.indexOf(n) !== -1) return true;
//   return dividers.every((d) => n % d !== 0);
// }

// console.log(isPrime(17));

// academind's solution
// O(n)
// function isPrime(number) {
//   for (let i = 2; i < number; i++) {
//     if (number % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isPrime(17));

// academind's better solution
// Every number, that's not a prime has a product that consists of
// two factors a & b that are both beither 1 nor the number itself
// __
// at least one factor is smaller or equal to the square root of the number
// sqrt(9) = 3 -> 9 = 3 * 3 -> Both factors are equal to the sqrt
// 9 = 3  * 3

// O(sqrt(n))
// function betterIsPrime(number) {
//   for (let i = 2; i <= Math.sqrt(number); i++) {
//     if (number % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(betterIsPrime(17));

// Academind's best solution ----
/**
 * @param {number} number
 * @return {boolean}
 */
function trialDivision(number) {
  // Check if number is integer.
  if (number % 1 !== 0) {
    return false;
  }

  if (number <= 1) {
    // If number is less than one then it isn't prime by definition.
    return false;
  }

  if (number <= 3) {
    // All numbers from 2 to 3 are prime.
    return true;
  }

  // If the number is not divided by 2 then we may eliminate all further even dividers.
  if (number % 2 === 0) {
    return false;
  }

  // If there is no dividers up to square root of n then there is no higher dividers as well.
  const dividerLimit = Math.sqrt(number);
  for (let divider = 3; divider <= dividerLimit; divider += 2) {
    if (number % divider === 0) {
      return false;
    }
  }

  return true;
}
