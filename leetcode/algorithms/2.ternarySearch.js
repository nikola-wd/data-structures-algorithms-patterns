function ternarySearch(n, x) {
  let low = 1;
  let high = n;
  while (low <= high) {
    let mid1 = Math.floor(low + (high - low) / 3);
    let mid2 = Math.floor(high - (high - low) / 3);
    if (mid1 === x) {
      return mid1;
    }
    if (mid2 === x) {
      return mid2;
    } else if (x < mid1) high = mid1 - 1;
    else if (x > mid2) low = mid2 + 1;
    else {
      low = mid1 + 1;
      high = mid2 - 1;
    }
  }
  return -1;
}

let n = 20,
  x = 17;
ternarySearch(n, x);
