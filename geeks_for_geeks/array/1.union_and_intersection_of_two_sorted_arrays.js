// 1. // XXX. UNION

// The union of two sets A and B is the set of elements
// which are in A, in B or in both A and B

// For example, if the arrays are:
// [1,3,4,5,7]
// [2,3,5,6]
// then the union is: [1,2,3,4,5,6,7]
// O(m + n)
function printUnion(arr1, arr2) {
  let i = 0;
  let j = 0;
  let m = arr1.length;
  let n = arr2.length;

  const union = [];

  while (i < m && j < n) {
    if (arr1[i] < arr2[j]) {
      union.push(arr1[i++]);
    } else if (arr2[j] < arr1[i]) {
      union.push(arr2[j++]);
    } else {
      union.push(arr2[j++]);
      i++;
    }
  }

  // add remaining els if any
  // arr has been exhausted
  while (i < m) {
    union.push(arr1[i++]);
  }
  while (j < n) {
    union.push(arr2[j++]);
  }

  return union;
}
let arr1 = [1, 3, 4, 5, 7];
let arr2 = [2, 3, 5, 6];
console.log(printUnion(arr1, arr2));

// 2. // XXX: INTERSECTION
// The intersection of two sets A and B is the
// set that contains all els of a that also belong
// to B
// [1,3,4,5,7]
// [2,3,5,6]
// then the intersection is: [3,5]
function printIntersection(arr1, arr2) {
  let i = 0;
  let j = 0;
  let m = arr1.length;
  let n = arr2.length;

  const intersection = [];

  while (i < m && j < n) {
    if (arr1[i] < arr2[j]) {
      i++;
    } else if (arr2[j] < arr1[i]) {
      j++;
    } else {
      // if arr1[i] === arr2[j]
      intersection.push(arr2[j++]);
      i++;
    }
  }

  return intersection;
}
printIntersection(arr1, arr2);
