import {
  defaultCompare,
  Compare,
} from '../sorted-linked-list/sorted-linked-list';
import { noSortedArray } from '../bubble-sort/bubble-sort';
import { swap } from '../utils';

export const selectionSort = (array: any, compareFn = defaultCompare) => {
  const { length } = array;
  let indexMin;
  for (let i = 0; i < length; i++) {
    indexMin = i;
    for (let j = i; j < length; j++) {
      if (compareFn(array[indexMin], array[i]) === Compare.BIGGER_THAN) {
        indexMin = j;
      }
    }
    if (i !== indexMin) {
      swap(array, i, indexMin);
    }
  }

  return array;
};

console.log(selectionSort(noSortedArray));
