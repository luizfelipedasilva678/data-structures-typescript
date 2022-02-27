import LinkedList from '../liked-list/linked-list';
import { defaultEquals } from '../utils';
import { Node } from '../liked-list/models/linked-list-models';

export default class CircleLinkedList<T> extends LinkedList<T> {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn);
  }

  insert(element: T, index: number) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element);
      let current = this.head;
      if (index === 0) {
        if (this.head === undefined) {
          this.head = node;
          node.next = this.head;
        } else {
          node.next = current;
          current = this.getElementAt(this.size());
          this.head = node;
          if (current) current.next = this.head;
        }
      } else {
        const previous = this.getElementAt(index - 1);
        node.next = previous?.next;
        if (previous) previous.next = node;
      }
      this.count++;
      return true;
    }
    return false;
  }

  removeAt(index: number) {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      if (index === 0) {
        if (this.size() === 1) {
          this.head = undefined;
        } else {
          const removed = this.head;
          current = this.getElementAt(this.size());
          this.head = this.head?.next;
          if (current) current.next = this.head;
          current = removed;
        }
      } else {
        const previous = this.getElementAt(index - 1);
        if (previous) current = previous.next;
        if (previous) previous.next = current?.next;
      }

      this.count--;
      if (current) return current.element;
    }
    return undefined;
  }
}
/*
const circularLinkedList = new CircleLinkedList<number>();
circularLinkedList.insert(10, 0);
circularLinkedList.insert(10, 1);
circularLinkedList.insert(10, 2);
circularLinkedList.insert(10, 3);

console.log(circularLinkedList.getElementAt(3)?.next);
*/
