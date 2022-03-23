/* eslint-disable no-param-reassign */
export function defaultEquals<T>(a: T, b: T) {
  return a === b;
}

export function defaultToString(item: any) {
  if (item === null) {
    return 'NULL';
  }

  if (item === undefined) {
    return 'UNDEFINED';
  }

  if (typeof item === 'string' || item instanceof String) {
    return `${item}`;
  }

  return item.toString();
}

export function swap(array: any, a: any, b: any) {
  const temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}
