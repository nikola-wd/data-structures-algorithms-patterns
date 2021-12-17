// Needs a sorted list
function binarySearch(arr, el) {
  let [start, end] = [0, arr.length - 1];

  while (start <= end) {
    let mid = start + Math.floor((start + end) / 2);

    if (arr[mid] === el) return mid;
    if (start > end) {
      break;
    }
    if (el < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}
// https://stackoverflow.com/questions/22697936/binary-search-in-javascript
// function binarySearch(arr, val) {
//   let start = 0;
//   let end = arr.length - 1;

//   while (start <= end) {
//     let mid = Math.floor((start + end) / 2);

//     if (arr[mid] === val) {
//       return mid;
//     }

//     if (val < arr[mid]) {
//       end = mid - 1;
//     } else {
//       start = mid + 1;
//     }
//   }
//   return -1;
// }

console.log(binarySearch([-3, -2, -1, 0, 3, 5, 7, 8, 9], -1));
