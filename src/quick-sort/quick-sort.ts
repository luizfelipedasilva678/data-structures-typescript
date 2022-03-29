/* eslint-disable no-undef */
import {
  defaultCompare,
  Compare,
} from '../sorted-linked-list/sorted-linked-list';
import { noSortedArray } from '../bubble-sort/bubble-sort';
import { swap } from '../utils';

function quickSort(array: any, compareFn = defaultCompare) {
  return quick(array, 0, array.length - 1, compareFn);
}

function quick(
  array: any,
  left: number,
  right: number,
  compareFn = defaultCompare,
) {
  if (array.length > 1) {
    const index = partition(array, left, right, compareFn);
    if (left < index - 1) {
      quick(array, left, index - 1, compareFn);
    }

    if (index < right) {
      quick(array, index, right, compareFn);
    }
  }

  return array;
}

function partition(
  array: any,
  left: number,
  right: number,
  compareFn = defaultCompare,
) {
  const pivot = array[Math.floor(right + left) / 2];
  let i = left;
  let j = right;
  while (i <= j) {
    while (compareFn(array[i], pivot) === Compare.LESS_THAN) {
      i++;
    }

    while (compareFn(array[j], pivot) === Compare.BIGGER_THAN) {
      j--;
    }

    if (i <= j) {
      swap(array, i, j);
      i++;
      j--;
    }
  }
  return i;
}

console.log('QuickSort', quickSort(noSortedArray));
