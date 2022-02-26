export class Node<T> {
  protected _element: T;

  protected _next: Node<T> | undefined;

  constructor(element: T, next = undefined) {
    this._element = element;
    this._next = next;
  }

  get next(): Node<T> | undefined {
    if (this._next !== undefined) return this._next;
    return undefined;
  }

  set next(value: Node<T> | undefined) {
    this._next = value;
  }

  get element(): T {
    return this._element;
  }
}
