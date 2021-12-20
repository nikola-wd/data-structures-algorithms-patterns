// XXX: M-WAY-MERGING (uses 2-way-merging)

// XXX: My approach that worked before finishing the tutorial
function mWayMerge(...sortedLists) {
  if (sortedLists.length === 1) {
    return sortedLists[0];
  }

  let merged_list = [...sortedLists[0]];

  let index = 1;
  while (index < sortedLists.length) {
    merged_list = [...twoWayMerge(merged_list, sortedLists[index++])];
  }

  return merged_list;
}

// twoWayMerge is merge
function twoWayMerge(list_one, list_two) {
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
