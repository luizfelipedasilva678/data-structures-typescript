import { defaultEquals } from '../utils';
import {
  Compare,
  defaultCompare,
} from '../sorted-linked-list/sorted-linked-list';
import { lesserOrEquals } from './binary-search';

function interpolationSearch(
  array: any,
  value: any,
  compareFn = defaultCompare,
  equalsFn = defaultEquals,
  diffFn = defaultDiff,
) {
  const { length } = array;
  let low = 0;
  let high = length - 1;
  let position = -1;
  let delta = -1;
  while (
    low <= high &&
    biggerOrEquals(value, array[low], compareFn) &&
    lesserOrEquals(value, array[high], compareFn)
  ) {
    delta = diffFn(value, array[low]) / diffFn(array[high], array[low]);
    position = low + Math.floor((high - low) * delta);

    if (equalsFn(array[position], value)) {
      return position;
    }

    if (compareFn(array[position], value) === Compare.LESS_THAN) {
      low = position + 1;
    } else {
      high = position - 1;
    }
  }

  return -1;
}

export function defaultDiff(a: any, b: any) {
  return Number(a) - Number(b);
}

export function biggerOrEquals(a: any, b: any, compareFn: any) {
  const comp = compareFn(a, b);
  return comp === Compare.BIGGER_THAN || comp === Compare.EQUALS;
}
