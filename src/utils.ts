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
