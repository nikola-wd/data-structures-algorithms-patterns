function linearSearch(arr, el) {
  let i = 0;
  for (const item of arr) {
    if (item == el) {
      return i;
    }
    i++;
  }
  return -1;
}

console.log(linearSearch([5, 3, 10, -10, 33, 51], -10));
