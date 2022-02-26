import LinkedList from '../liked-list/linked-list';
import DoublyNode from './models/doubly-linked-node';
import { defaultEquals } from '../utils';

export default class DoublyLinkedList<T> extends LinkedList<T> {
  private tail: DoublyNode<T> | undefined;

  protected head: DoublyNode<T> | undefined;

  constructor(equalsFn = defaultEquals) {
    super(equalsFn);
    this.tail = undefined;
    this.head = undefined;
  }

  insert(element: T, index: number) {
    if (index >= 0 && index <= this.count) {
      const node = new DoublyNode<T>(element);
      let current = this.head;
      if (index === 0) {
        if (this.head === undefined) {
          this.head = node;
          this.tail = node;
        } else {
          node.next = this.head;
          if (current !== undefined) current.prev = node;
          this.head = node;
        }
      } else if (index === this.count) {
        current = this.tail;
        if (current !== undefined) current.next = node;
        node.prev = current;
        this.tail = node;
      } else {
        const previous = this.getElementAt(index - 1);
        if (previous !== undefined) current = previous.next as DoublyNode<T>;
        node.next = current;
        if (previous !== undefined) previous.next = node;
        if (current !== undefined) current.prev = node;
        node.prev = previous as DoublyNode<T>;
      }
      this.count++;
      return true;
    }
    return false;
  }

  getTail() {
    return this.tail;
  }

  push(element: T) {
    const node = new DoublyNode<T>(element);

    if (this.head == null) {
      this.head = node;
      this.tail = node;
    } else {
      if (this.tail) this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.count++;
  }

  removeAt(index: number): T | undefined {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      if (index === 0) {
        if (current) this.head = current.next;

        if (this.count === 1) {
          this.tail = undefined;
        } else if (this.head) this.head.prev = undefined;
      } else if (index === this.count - 1) {
        current = this.tail;
        if (current) this.tail = current.prev;
        if (this.tail) this.tail.next = undefined;
      } else {
        current = this.getElementAt(index) as DoublyNode<T>;
        const previous = current.prev;
        if (previous?.next) previous.next = current.next;
        if (current.next?.prev) current.next.prev = previous;
      }
      this.count--;
      return current?.element;
    }
    return undefined;
  }
}

const doubleList = new DoublyLinkedList<number>();

doubleList.push(10);
doubleList.push(20);
doubleList.push(30);
doubleList.push(40);
doubleList.push(50);

doubleList.insert(10, 2);
console.log(doubleList.getTail());
console.log(doubleList.getElementAt(2));
console.log(doubleList.removeAt(2));
console.log(doubleList.toString());
