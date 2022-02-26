import { defaultEquals } from '../utils';
import { Node } from './models/linked-list-models';

export interface EqualFunctionProtocol<T> {
  (a: T, b: T): boolean;
}

export default class LinkedList<T> {
  protected count: number = 0;

  protected head: Node<T> | undefined = undefined;

  protected equalsFn: EqualFunctionProtocol<T>;

  constructor(equalfn = defaultEquals) {
    this.equalsFn = equalfn;
  }

  push(element: T) {
    const node = new Node<T>(element);
    let current: Node<T>;

    if (this.head === undefined) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next !== undefined) {
        current = current.next;
      }
      current.next = node;
    }

    this.count++;
  }

  removeAt(index: number) {
    if (index >= 0 && index < this.count) {
      let current = this.head;

      if (index === 0) {
        this.head = current?.next;
      } else {
        let previous: Node<T> | undefined;

        for (let i = 0; i < index; i++) {
          previous = current;
          current = current?.next;
        }

        if (previous !== undefined) previous.next = current?.next;
      }

      this.count--;

      if (current !== undefined) return current.element;
    }

    return undefined;
  }

  getElementAt(index: number) {
    if (index >= 0 && index <= this.count) {
      let node = this.head;

      for (let i = 0; i < index && node != null; i++) {
        node = node.next;
      }

      return node;
    }

    return undefined;
  }

  insert(element: T, index: number) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element);

      if (index === 0) {
        const current = this.head;
        node.next = current;
        this.head = current;
      } else {
        const previous = this.getElementAt(index - 1);
        const current = previous?.next;
        node.next = current;

        if (previous !== undefined) previous.next = node;
      }

      this.count++;
      return true;
    }

    return false;
  }

  remove(element: T) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }

  indexOf(element: T) {
    let current = this.head;
    for (let i = 0; i < this.count && current !== undefined; i++) {
      if (this.equalsFn(element, current.element)) {
        return i;
      }

      current = current.next;
    }

    return -1;
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.size() === 0;
  }

  getHead(): Node<T> | undefined {
    return this.head;
  }

  toString() {
    if (this.head === undefined) {
      return '';
    }

    let objString = `${this.head.element}`;
    let current = this.head.next;

    for (let i = 0; i < this.size(); i++) {
      objString = `${objString}, ${current?.element}`;

      if (current !== undefined) current = current.next;
    }

    return objString;
  }
}
/*
const list = new LinkedList<number>();
list.push(10);
list.push(20);

console.log(list.getElementAt(0));
console.log(list.indexOf(20));
console.log(list.toString());
*/
