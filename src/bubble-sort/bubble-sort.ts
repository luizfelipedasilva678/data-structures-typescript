import {
  Compare,
  defaultCompare,
} from '../sorted-linked-list/sorted-linked-list';
import { swap } from '../utils';

export const noSortedArray = [5, 4, 3, 2, 1];

export function bubbleSort(array: any, compareFn = defaultCompare) {
  const { length } = array;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1; j++) {
      if (compareFn(array[j], array[j + 1]) === Compare.BIGGER_THAN) {
        swap(array, j, j + 1);
      }
    }
  }

  return array;
}

export function bubbleSortV2(array: any, compareFn = defaultCompare) {
  const { length } = array;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (compareFn(array[j], array[j + 1]) === Compare.BIGGER_THAN) {
        swap(array, j, j + 1);
      }
    }
  }

  return array;
}

console.log(bubbleSortV2(noSortedArray, defaultCompare));
