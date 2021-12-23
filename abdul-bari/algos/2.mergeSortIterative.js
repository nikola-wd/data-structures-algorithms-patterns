// twoWayMerge is an iterative approach to mergeSort
// mergeSort is a recursive approach

// O(n log n)
// XXX: My solution before watching the tutorial
function twoWayMerge(unsorted_list) {
  let array_chunks = [];

  let index = 0;
  while (index < unsorted_list.length) {
    // partialize into arrays
    if (unsorted_list[index + 1] !== undefined) {
      let list_of_two = [unsorted_list[index], unsorted_list[index + 1]];
      swap(list_of_two);
      array_chunks.push(list_of_two);
      index += 2;
    } else {
      // Only one item left (in case of an odd list)
      array_chunks.push([unsorted_list[index]]);
      index++;
    }
  }

  return mWayMerge(...array_chunks);
}

// helper
function swap(list) {
  if (list[0] > list[1]) {
    let tempA = list[0];
    list[0] = list[1];
    list[1] = tempA;
  }
}

function mWayMerge(...sortedLists) {
  if (sortedLists.length === 1) {
    return sortedLists[0];
  }

  let merged_list = [...sortedLists[0]];

  let index = 1;
  while (index < sortedLists.length) {
    merged_list = [...merge(merged_list, sortedLists[index++])];
  }

  return merged_list;
}

function merge(list_one, list_two) {
  const merged_list = new Array(list_one.length + list_two.length);

  if (list_two === undefined) {
    return merged_list;
  }

  let i = 0; // left arr pointer
  let j = 0; // right arr pointer
  let k = 0; // new arr index

  // We need to populate this list
  // merged_list

  while (i <= list_one.length - 1 && j <= list_two.length - 1) {
    if (list_one[i] < list_two[j]) {
      merged_list[k++] = list_one[i++];
    } else {
      merged_list[k++] = list_two[j++];
    }
  }

  // concat the remaining els if any
  for (; i <= list_one.length - 1; i++) {
    merged_list[k++] = list_one[i];
  }
  for (; j <= list_two.length - 1; j++) {
    merged_list[k++] = list_two[j];
  }
  return merged_list;
}

let uns_list = [9, 3, 7, 5, 6, 4, 8, 2];
twoWayMerge(uns_list);
