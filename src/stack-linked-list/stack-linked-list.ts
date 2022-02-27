import DoublyLinkedList from '../doubly-linked-list/doubly-linked-list';

export default class StackLinkedList<T> {
  constructor(public items = new DoublyLinkedList<T>()) {}

  push(element: T) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items.removeAt(this.size() - 1);
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items.getElementAt(this.size() - 1)?.element;
  }

  isEmpty() {
    return this.items.isEmpty();
  }

  size() {
    return this.items.size();
  }

  toString() {
    return this.items.toString();
  }
}
