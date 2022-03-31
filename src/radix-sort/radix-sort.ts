/* eslint-disable no-param-reassign */
import {
  defaultCompare,
  Compare,
} from '../sorted-linked-list/sorted-linked-list';

export function findMaxValue(array: any, compareFn = defaultCompare) {
  if (array && array.length > 0) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
      if (compareFn(max, array[i]) === Compare.LESS_THAN) {
        max = array[i];
      }
    }
    return max;
  }
  return undefined;
}
export function findMinValue(array: any, compareFn = defaultCompare) {
  if (array && array.length > 0) {
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
      if (compareFn(min, array[i]) === Compare.BIGGER_THAN) {
        min = array[i];
      }
    }
    return min;
  }
  return undefined;
}

export function radixSort(array: any, radixBase = 10) {
  if (array.length < 2) {
    return array;
  }

  const minValue = findMinValue(array);
  const maxValue = findMaxValue(array);
  let significantDigit = 1;

  while ((maxValue - minValue) / significantDigit >= 1) {
    array = countingSortForRadix(array, radixBase, significantDigit, minValue);
    significantDigit *= radixBase;
  }

  return array;
}

function countingSortForRadix(
  array: any,
  radixBase: any,
  significantDigit: any,
  minValue: any,
) {
  let bucketIndex: any = [];
  const buckets = [];
  const aux: any = [];

  for (let i = 0; i < radixBase; i++) {
    buckets[i] = 0;
  }

  for (let i = 0; i < array.length; i++) {
    bucketIndex = Math.floor(
      ((array[i] - minValue) / significantDigit) % radixBase,
    );

    buckets[bucketIndex]++;
  }

  for (let i = 1; i < radixBase; i++) {
    buckets[i] += buckets[i - 1];
  }

  for (let i = array.length - 1; i >= 0; i--) {
    bucketIndex = Math.floor(
      ((array[i] - minValue) / significantDigit) % radixBase,
    );

    aux[--buckets[bucketIndex]] = array[i];
  }

  for (let i = 0; i < array.length; i++) {
    array[i] = aux[i];
  }

  return array;
}
