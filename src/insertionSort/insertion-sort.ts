/* eslint-disable no-param-reassign */
import {
  defaultCompare,
  Compare,
} from '../sorted-linked-list/sorted-linked-list';
import { noSortedArray } from '../bubble-sort/bubble-sort';
import { swap } from '../utils';

export function insertionSort(array: any, compareFn = defaultCompare) {
  const { length } = array;
  let temp;
  for (let i = 1; i < length; i++) {
    let j = i;
    temp = array[i];
    while (j > 0 && compareFn(array[j - 1], temp) === Compare.BIGGER_THAN) {
      array[j] = array[j - 1];
      j--;
    }
    array[j] = temp;
  }
  return array;
}

console.log('Testando insertion sort', insertionSort(noSortedArray));
