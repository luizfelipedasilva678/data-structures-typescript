/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */

import {
  defaultCompare,
  Compare,
} from '../sorted-linked-list/sorted-linked-list';

const noSortedArray = [5, 4, 3, 2, 1];

function countingSort(array: any) {
  if (array.length < 2) {
    return array;
  }

  const maxValue = findMaxValue(array);
  const counts = new Array(maxValue + 1);
  array.forEach((element: any) => {
    if (!counts[element]) {
      counts[element] = 0;
    }
    counts[element]++;
  });

  let sortedIndex = 0;
  counts.forEach((count, i) => {
    while (count > 0) {
      array[sortedIndex++] = i;
      count--;
    }
  });

  return array;
}

function findMaxValue(array: any) {
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }

  return max;
}

console.log(countingSort(noSortedArray));
