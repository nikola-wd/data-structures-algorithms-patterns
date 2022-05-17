let list = [1, 5, 7, -1],
  sum = 6;

// 2 pairs: [1, 5], and [7, -1]

// XXX: Method 1: Simple Solution
// TC: O(n^2)
// Traverse each el and check if there's another number in the array which can be added to give sum
function getPairsSumSimple(arr, sum) {
  let n = arr.length;
  let count = 0;

  // Consider all possible pairs and check their sums
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] + arr[j] === sum) count++;
    }
  }

  return count;
}

// ------------------------------

// XXX: Method 2: My hashing-based solution
// TC: O(n)
function getPairsSumHashing(arr, sum) {
  let n = arr.length;
  let s = new Set();
  let count = 0;

  for (let i = 0; i < n; i++) {
    if (s.has(sum - arr[i])) count++;
    s.add(arr[i]);
  }

  return count;
}

// ------------------------------

// XXX: Method 3: g4g method 2
function getPairsCount(arr, sum) {
  let n = arr.length;
  let hm = new Map();

  // Store counts of all elements in map hm
  for (let i = 0; i < n; i++) {
    // initializing value to 0, if key not found
    if (!hm.has(arr[i])) hm.set(arr[i], 0);

    hm.set(arr[i], hm.get(arr[i]) + 1);
  }
  let twice_count = 0;

  // iterate through each element and increment the
  // count (Notice that every pair is counted twice)
  for (let i = 0; i < n; i++) {
    if (hm.get(sum - arr[i]) != null) twice_count += hm.get(sum - arr[i]);

    // if (arr[i], arr[i]) pair satisfies the
    // condition, then we need to ensure that the
    // count is decreased by one such that the
    // (arr[i], arr[i]) pair is not considered
    if (sum - arr[i] == arr[i]) twice_count--;
  }

  // return the half of twice_count
  return twice_count / 2;
}

// ------------------------------

// XXX: Method 4: g4g method 3
function getPairsCount(arr, sum) {
  let n = arr.length;
  let m = new Map();
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (m.has(sum - arr[i])) {
      count += m.get(sum - arr[i]);
    }
    if (m.has(arr[i])) {
      m.set(arr[i], m.get(arr[i]) + 1);
    } else {
      m.set(arr[i], 1);
    }
  }
  return count;
}
