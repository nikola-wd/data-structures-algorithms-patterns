// https://runestone.academy/runestone/books/published/pythonds3/SortSearch/TheShellSort.html

// The Shell sort, sometimes called the “diminishing increment sort,” improves on the insertion sort by breaking the original list into a number of smaller sublists, each of which is sorted using an insertion sort. The unique way that these sublists are chosen is the key to the shell sort. Instead of breaking the list into sublists of contiguous items, the shell sort uses an increment i, sometimes called the gap, to create a sublist by choosing all items that are i items apart.

// This can be seen in Figure 6. This list has nine items. If we use an increment of three, there are three sublists, each of which can be sorted by an insertion sort. After completing these sorts, we get the list shown in Figure 7. Although this list is not completely sorted, something very interesting has happened. By sorting the sublists, we have moved the items closer to where they actually belong.

// Note that by performing the earlier sublist sorts, we have now reduced the total number of shifting operations necessary to put the list in its final order. For this case, we need only four more shifts to complete the process.

// We said earlier that the way in which the increments are chosen is the unique feature of the shell sort. The function shown in ActiveCode 1 uses a different set of increments. In this case, we begin with n2 sublists. On the next pass, n4 sublists are sorted. Eventually, a single list is sorted with the basic insertion sort. Figure 9 shows the first sublists for our example using this increment.

// The following invocation of the shell_sort function shows the partially sorted lists after each increment, with the final sort being an insertion sort with an increment of one.

// XXX: Pythonds's approach
// XXX: 234 steps on pythonTutor

function shellSort(aList) {
  let sublistCount = Math.floor(aList.length / 2);
  while (sublistCount > 0) {
    let posStart = 0;
    while (posStart < sublistCount) {
      console.log('posStart: ', posStart);
      gap_insertion_sort(aList, posStart, sublistCount);
      posStart++;
    }
    sublistCount = Math.floor(sublistCount / 2);
  }
}

function gap_insertion_sort(aList, start, gap) {
  for (let i = start + gap; i < aList.length; i += gap) {
    console.log('i: ', i, ', End: ', aList.length, ' step: ', gap);
    let curVal = aList[i];
    let curPos = i;
    while (curPos >= gap && aList[curPos - gap] > curVal) {
      aList[curPos] = aList[curPos - gap];
      curPos = curPos - gap;
    }
    aList[curPos] = curVal;
  }
}

let aList = [5, 2, 8, 0, 7, 3, 4, 6, 1];
shellSort(aList);
console.log(aList);

// ---------------------------------------------------------------

// XXX: geeks for geeks JS
// XXX: 187 steps on pythonTutor (better implementation)
function g4gShellSort(arr) {
  let n = arr.length;

  // Start with a big gap, then reduce the gap
  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    // Do a gapped insertion sort for this gap size.
    // The first gap elements a[0..gap-1] are already
    // in gapped order keep adding one more element
    // until the entire array is gap sorted
    for (let i = gap; i < n; i += 1) {
      // add a[i] to the elements that have been gap
      // sorted save a[i] in temp and make a hole at
      // position i
      let temp = arr[i];

      // shift earlier gap-sorted elements up until
      // the correct location for a[i] is found
      let j;
      for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
        arr[j] = arr[j - gap];
      }

      // put temp (the original a[i]) in its correct
      // location
      arr[j] = temp;
    }
  }
  return arr;
}

let arr = [5, 2, 8, 0, 7, 3, 4, 6, 1];
g4gShellSort(arr);
console.log(arr);
