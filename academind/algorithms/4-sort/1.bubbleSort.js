// O(n^2)
function bubbleSort(arr) {
  const resArr = [...arr];

  for (let i = 0; i < resArr.length; i++) {
    for (let j = i + 1; j < resArr.length; j++) {
      if (resArr[i] > [resArr[j]]) {
        let temp = resArr[i];
        resArr[i] = resArr[j];
        resArr[j] = temp;
      }
    }
  }

  return resArr;
}

bubbleSort([3, 10, -3, 48, 5, 33, 99]);
