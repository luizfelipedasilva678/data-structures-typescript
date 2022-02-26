import { Node } from '../../liked-list/models/linked-list-models';

export default class DoublyNode<T> extends Node<T> {
  private _prev: DoublyNode<T> | undefined = undefined;

  protected _next: DoublyNode<T> | undefined;

  constructor(element: T, next = undefined) {
    super(element, next);
  }

  get prev(): DoublyNode<T> | undefined {
    return this._prev;
  }

  set prev(element: DoublyNode<T> | undefined) {
    this._prev = element;
  }

  get next(): DoublyNode<T> | undefined {
    if (this._next !== undefined) return this._next;
    return undefined;
  }

  set next(value: DoublyNode<T> | undefined) {
    this._next = value;
  }
}
