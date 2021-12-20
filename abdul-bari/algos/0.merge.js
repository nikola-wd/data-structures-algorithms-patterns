// XXX: TWO-WAY-MERGING

// https://www.youtube.com/watch?v=6pV2IF0fgKY&list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O&index=34&ab_channel=AbdulBari
// XXX: Abdul Bari's merge (faster than Pythonds' implementation) - 45 steps on pythonTutor
function merge(list_one, list_two) {
  let i = 0; // left arr pointer
  let j = 0; // right arr pointer
  let k = 0; // new arr index

  // We need to populate this list
  let merged_list = [];

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

// XXX: my attempt at improving (or at least trying to improve Bari's implementation) - 34 steps on pythonTutor (but space + 1 because we are creating another [] by slicing, and then spreading)
function myMerge(list_one, list_two) {
  let i = 0; // left arr pointer
  let j = 0; // right arr pointer
  let k = 0; // new arr index

  // We need to populate this list
  let merged_list = [];

  while (i <= list_one.length - 1 && j <= list_two.length - 1) {
    if (list_one[i] < list_two[j]) {
      merged_list[k++] = list_one[i++];
    } else {
      merged_list[k++] = list_two[j++];
    }
  }

  // concat the remaining els if any
  if (i >= list_one.length - 1 && j < list_two.length - 1) {
    merged_list.push(...list_two.slice(j));
  }
  if (j >= list_two.length - 1 && i < list_one.length - 1) {
    merged_list.push(...list_one.slice(i));
  }

  return merged_list;
}

// XXX: Pythonds' merge - 65 steps on pythonTutor
function pMerge(list_one, list_two) {
  let i = 0; // left arr pointer
  let j = 0; // right arr pointer
  let k = 0; // new arr index

  let merged_list = [list_one.length + list_two.length];

  while (i < list_one.length && j < list_two.length) {
    if (list_one[i] <= list_two[j]) {
      merged_list[k] = list_one[i];
      i++;
    } else {
      merged_list[k] = list_two[j];
      j++;
    }
    k++;
  }

  // concat remaining
  while (i < list_one.length) {
    merged_list[k] = list_one[i];
    i++;
    k++;
  }
  while (j < list_two.length) {
    merged_list[k] = list_two[j];
    j++;
    k++;
  }

  return merged_list;
}
