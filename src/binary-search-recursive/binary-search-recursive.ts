import { insertionSort } from '../insertionSort/insertion-sort';
import {
  defaultCompare,
  Compare,
} from '../sorted-linked-list/sorted-linked-list';

function binarySearchRecursive(
  array: any,
  value: any,
  low: any,
  high: any,
  compareFn = defaultCompare,
): any {
  if (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const element = array[mid];

    if (compareFn(element, value) === Compare.LESS_THAN) {
      return binarySearchRecursive(array, value, mid + 1, high, compareFn);
    }

    if (compareFn(element, value) === Compare.BIGGER_THAN) {
      return binarySearchRecursive(array, value, low, mid - 1, compareFn);
    }

    return mid;
  }

  return -1;
}

export function binarySearch(
  array: any,
  value: any,
  compareFn = defaultCompare,
) {
  const sortedArray = insertionSort(array);
  const low = 0;
  const high = sortedArray.length - 1;
  return binarySearchRecursive(array, value, low, high, compareFn);
}
