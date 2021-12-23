// An element is a leader if it is greater than all the elements to its
// right side. And the rightmost element is always a leader

// Example: [16,17,4,3,5,2] -> leaders are17, 5 and 2

// XXX: Method 1: 2 loops
// O(n^2) O (n * n)
function findLeaders(arr) {
  let size = arr.length;
  const leaders = [];

  for (let i = 0; i < size; i++) {
    let j;
    for (j = i + 1; j < size; j++) {
      if (arr[i] <= arr[j]) {
        break;
      }
    }
    // The loop didn't break
    if (j === size) {
      leaders.push(arr[i]);
    }
  }

  return leaders;
}

const list = [16, 17, 4, 3, 5, 2];
findLeaders(list);

// XXX: Method 2: Scan from right
// Scan all the els from right to left in array and keep
// track of maximum till now. When max changes its value, add it
// O(n)
function findLeadersBackwards(arr) {
  let size = arr.length;
  const leaders = [];

  let max_from_right = arr[size - 1];
  // Rightmost el is always a leader
  leaders.push(max_from_right);

  for (let i = size - 2; i >= 0; i--) {
    if (arr[i] > max_from_right) {
      max_from_right = arr[i];
      leaders.push(max_from_right);
    }
  }

  return leaders;
}
findLeadersBackwards(list);
