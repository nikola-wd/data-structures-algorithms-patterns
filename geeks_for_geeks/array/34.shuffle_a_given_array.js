let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getRandomFromRange(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// XXX: Method: 1: TC: O(n^2)
function shuffleArray(arr) {
  let n = arr.length;

  // Temp copy of original arr
  let temp = [...arr];

  // Randomly select an element from temp[]
  // Copy the randomly selected el to arr[0], and remove the selected el from temp[]
  let i = 0;
  while (temp.length) {
    let r = getRandomFromRange(0, temp.length - 1);
    arr[i++] = temp[r];
    temp.splice(r, 1);
  }
}

// ------------------------------

// XXX: Method 2:
// Given a function rand() that generates random number in O(1) time
// Swap the last element with a randomly selected element from the whole array
// Now consider the array from 0 to n - 2 and repeat the process till we hit the
// first el

// TC: O(n) if random fn takes O(1) time
function shuffleFisherYates(arr) {
  let n = arr.length;
  for (let i = n - 1; i > 0; i--) {
    let r = getRandomFromRange(0, i);
    [arr[i], arr[r]] = [arr[r], arr[i]];
  }
}
