// Pythonds

// This approachs starts by sorting smallest to largest
// (left-hand side is being sorted first)
// 115 steps on pythonTutor
// XXX: minimum steps on pythonTutor
function selectionSortMin(list) {
  for (let i = 0; i < list.length; i++) {
    let minIdx = list.length - 1;
    for (let j = i; j < list.length; j++) {
      if (list[j] < list[minIdx]) {
        minIdx = j;
      }
    }
    if (minIdx != i) {
      let tempIdx = list[minIdx];
      list[minIdx] = list[i];
      list[i] = tempIdx;
    }
  }
}

let a_list = [54, 26, 93, 17, 77, 31, 44, 55, 20];
selectionSortMin(a_list);
console.log(a_list);

// This approachs starts by sorting largest to smalest
// (right-hand side is being sorted first)
// XXX: My Solution
// Both i and j go from right to left
// 116 steps on pythonTutor
function selectionSortMax(list) {
  for (let i = list.length - 1; i >= 0; i--) {
    let maxIdx = 0;
    for (let j = i; j >= 0; j--) {
      if (list[j] > list[maxIdx]) {
        maxIdx = j;
      }
    }
    if (maxIdx != i) {
      let tempIdx = list[maxIdx];
      list[maxIdx] = list[i];
      list[i] = tempIdx;
    }
  }
}

// variation (same but with es6 swap)
// Both i and j go from right to left
// 116 steps on pythonTutor
function selectionSortMaxEs6(list) {
  for (let i = list.length - 1; i >= 0; i--) {
    let maxIdx = 0;
    for (let j = i; j >= 0; j--) {
      if (list[j] > list[maxIdx]) maxIdx = j;
    }
    if (maxIdx != i) {
      [list[maxIdx], list[i]] = [list[i], list[maxIdx]];
    }
  }
}

// variation (same but with es6 swap) but
// i goes right-to-left, j goes left-to-right
// 117 steps on pythonTutor
function selectionSortMaxEs6(list) {
  for (let i = list.length - 1; i >= 0; i--) {
    let maxIdx = 0;
    for (let j = 0; j <= i; j++) {
      if (list[j] > list[maxIdx]) maxIdx = j;
    }
    if (maxIdx != i) {
      [list[maxIdx], list[i]] = [list[i], list[maxIdx]];
    }
  }
}

// let a_list = [54, 26, 93, 17, 77, 31, 44, 55, 20]
let a_list = [5, 2, 4, 6, 1, 3];
selectionSortMax(a_list);
console.log(a_list);
