// A majority el in an array of size n is an el that
// appears more than n/2 times (and hence, there is at most
// one such el)

// Return the el if it exists, or return false

// XXX: Method 1 (Basic)
// Uses 2 loops to keep max count for all different elements
// If max count becomes greater than n/2, then break the loops
// and return the el having max count
// If max count doesn't become more than n/2, then majority el
// doesn't exist
// TC: O(n^2)
// Auxiliary Space: O(1)
function findMajorityEl(arr) {
  let n = arr.length;

  let maxCount = 0;
  let index = -1; // sentinels

  for (let i = 0; i < n; i++) {
    let count = 0;
    for (let j = 0; j < n; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
    // Update maxCount if count of
    // cur el is greater
    if (count > maxCount) {
      maxCount = count;
      index = i;
    }
  }

  // If maxCount is greater than n/2
  // return the el
  if (maxCount > n / 2) {
    return arr[index];
  } else {
    return false;
  }
}

const list = [3, 3, 4, 2, 4, 4, 2, 4, 4];
findMajorityEl(list);

// --------------------------------------------------

// XXX: TODO: Method 2 uses a BST
// O(n^2)
// or;
// o(n log n) if we use a self-balancing tree
// Auxiliary space: O(n)

// --------------------------------------------------

// XXX: Method 3 (Moore's Voting Algo)
// 2-step process
// Get an el occuring most of the time in the arr. This
// phase will make sure that if there is a majority el, then
// it will return that only

// Check if the el obtained from the above step is a majority el

// Finding a candidate

// The algo for the first phase that works in O(n) is known
// as Moore's Voting Algorithm
// Basic idea of it is if we cancel out each occurence of
// an el E with all the other els that are different from E
// then, E will exist till end if it is a majority el

// This 1st part only gives us the candidate el
function findCandidateMVA(arr) {
  let size = arr.length;
  // Init index and count of maj el
  let maj_index = 0;
  let count = 1;
  for (let i = 1; i < size; i++) {
    if (arr[maj_index] === arr[i]) {
      count++;
    } else {
      count--;
    }
    if (count === 0) {
      maj_index = i;
      count = 1;
    }
  }

  return arr[maj_index];
}

// 2nd phase is simple and can easily be done in O(n) time. We just
// need to check if count of the candidate el is greater than n / 2
function isMajElMVA(arr) {
  let size = arr.length;
  let candidate = findCandidateMVA(arr);
  let i;
  let count = 0;
  for (i = 0; i < size; i++) {
    if (arr[i] === candidate) {
      count++;
    }
  }
  if (count > parseInt(size / 2, 10)) {
    return arr[candidate];
  } else {
    return false;
  }
}

isMajElMVA(list);

// -----------------------------------------------

// XXX: Method 4 - Using hashMap
// Same as Moore=s in terms of Time Complexity,
// But, Space Complexity becomes O(n)
function isMajElHashMap(arr) {
  let size = arr.length;

  let map = new Map();

  for (let i = 0; i < size; i++) {
    if (map.has(arr[i])) {
      let count = map.get(arr[i]) + 1;
      if (count > size / 2) {
        return arr[i];
      } else {
        map.set(arr[i], count);
      }
    } else {
      map.set(arr[i], 1);
    }
  }
  return false;
}

isMajElHashMap(list);

// -----------------------------------------------

// XXX: Method 5:
// The idea is to sort the arr. Sorting makes similar els in the arr adjacent,
// so, traverse the arr and update the count until the present el is similar
// to the prev one. If the freq is more than the half the size of the arr, return
// that maj el
// TC: O(n log n) -> Sorting requires O(n log n) TC
// Auxiliary Space: No extra space is required
function isMajElSort(arr) {
  let size = arr.length;
  arr.sort((a, b) => a - b);

  let count = 1;
  let max_ele = -1;
  let temp = arr[0];
  let ele = 0;
  let f = 0;

  for (let i = 1; i < arr.length; i++) {
    // Increase the count if the
    // same el occurs, otherwise
    // start counting new el
    if (temp === arr[i]) {
      count++;
    } else {
      count = 1;
      temp = arr[i];
    }

    // Sets max count and stores
    // max occured el so far
    // if max count becomes greater
    // than size/2, it breaks out of
    // setting the flag
    if (max_ele < count) {
      max_ele = count;
      ele = arr[i];

      if (max_ele > parseInt(size / 2, 10)) {
        f = 1;
        break;
      }
    }
  }

  // Returns max occurred el,
  // if there is no such el, return false
  return f === 1 ? ele : false;
}

isMajElSort(list);
