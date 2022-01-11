let list = [1, 2, 3, 4, 5]; // -> [5, 1, 2, 3, 4]

// Store last el in a var x
// Shift all els one pos ahead
// Replae first el with x

// TC: O(n)
// AS: O(1)
function rotateArrByOne(arr) {
  let n = arr.length;

  let x = arr[n - 1];

  for (let i = n - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = x;
}

rotateArrByOne(list);

// ------------------------------

// XXX: Method 2
function rotateArrByOneMethod2(arr) {
  let n = arr.length;

  let i = 0;
  let j = n - 1;
  while (i != j) {
    let temp;

    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
  }
}

// ------------------------------

function rotateByK(arr, k) {
  for (let i = 0; i < k; i++) {
    rotateArrByOne(arr);
  }
}
