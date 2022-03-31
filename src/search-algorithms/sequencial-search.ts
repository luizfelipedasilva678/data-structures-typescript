import { defaultEquals } from '../utils';

const DOES_NOT_EXIST = -1;
function sequencialSearch(array: any, value: any, equalsFn = defaultEquals) {
  for (let i = 0; i < array.length; i++) {
    if (equalsFn(value, array[i])) {
      return i;
    }
  }

  return DOES_NOT_EXIST;
}
