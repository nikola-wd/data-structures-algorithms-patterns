// Given an arr of integers, print the missing els that lie in range 0 - 99
// IF there are more than one missing, collate them, otherwise just return the number
// Note that the input arr may not be sorted and may contain numbers
// outside the range [0, 99], but only this range is to be considered for
// printing the missing els

let list = [88, 105, 3, 2, 200, 0, 10];
// 1, 4-9, 11-87, 89-99

let list1 = [9, 6, 900, 850, 5, 90, 100, 99];
// 0-4, 7-8, 10-89,91-98

// The idea is to use a boolean arr of size 100 to keep track of arr els that lie
// in range 0 - 99

// We first traverse the input arr and mark such present els in the boolean arr

// Once all present else are marked, the bool arr is used to print missing els
function findMissingElsInRange(arr) {
  let size = arr.length;
  const LIMIT = 99;

  let missingNumbers = [];

  const seenBoolArr = new Array(100).fill(false);

  // Mark present els in range [0 - 99] as seen
  for (let number of arr) {
    if (number < LIMIT) {
      seenBoolArr[number] = true;
    }
  }

  // Print missing els
  let i = 0;
  while (i < LIMIT) {
    // If i is missing
    if (!seenBoolArr[i]) {
      // Find if there are more missing els after i
      let j = i + 1;
      while (j < LIMIT && seenBoolArr[j] === false) {
        j++;
      }

      // Print missing single or range
      if (i + 1 === j) {
        missingNumbers.push(i + '');
      } else {
        missingNumbers.push(`${i + ''} - ${j - 1 + ''}`);
      }

      i = j;
    } else {
      i++;
    }
  }

  return missingNumbers;
}
