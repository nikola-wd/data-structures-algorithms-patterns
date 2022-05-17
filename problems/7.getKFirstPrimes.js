function getKPrimes(n) {
  let primesArr = [];
  let br = 1,
    x = 1,
    i;
  primesArr.push(x);

  while (br < n) {
    i = 2;

    while (x % i !== 0 && i < x) {
      i++;
    }

    if (i === x) {
      primesArr.push(x);
      br++;
    }
    x++;
  }

  return primesArr;
}

getKPrimes(7);
