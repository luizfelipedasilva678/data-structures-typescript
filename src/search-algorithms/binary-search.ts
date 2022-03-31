import { defaultEquals } from '../utils';
import { insertionSort } from '../insertionSort/insertion-sort';
import {
  Compare,
  defaultCompare,
} from '../sorted-linked-list/sorted-linked-list';

function binarySearch(array: any, value: number, compareFn = defaultCompare) {
  const sortedArray = insertionSort(array);
  let low = 0;
  let high = sortedArray.length - 1;
  while (lesserOrEquals(low, high, compareFn)) {
    const mid = Math.floor((low + high) / 2);
    const element = sortedArray[mid];
    if (compareFn(element, value) === Compare.LESS_THAN) {
      low = mid + 1;
    } else if (compareFn(element, value) === Compare.BIGGER_THAN) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

function lesserOrEquals(a: any, b: any, compareFn: any) {
  const comp = compareFn(a, b);
  return comp === Compare.LESS_THAN || comp === Compare.EQUALS;
}

let c = [13, 12, 11, 10, 9, 8, 7, 6, 5];

console.log(binarySearch(c, 13));
