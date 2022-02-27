import LinkedList from '../liked-list/linked-list';
import { defaultEquals } from '../utils';

const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
};

function defaultCompare<T>(a: T, b: T) {
  if (a === b) {
    return 0;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

export default class SortedLinkedList<T> extends LinkedList<T> {
  constructor(public compareFn = defaultCompare, equalsFn = defaultEquals) {
    super(equalsFn);
  }

  insert(element: T, index = 0) {
    if (this.isEmpty()) {
      return super.insert(element, 0);
    }
    const pos = this.getIndexNextSortedElement(element);
    return super.insert(element, pos);
  }

  getIndexNextSortedElement(element: T) {
    let current = this.head;
    let i = 0;
    for (; i < this.size() && current !== undefined; i++) {
      const comp = this.compareFn(element, current.element);
      if (comp === Compare.LESS_THAN) {
        return i;
      }
      current = current.next;
    }
    return i;
  }
}

const sortedLinkedList = new SortedLinkedList<number>();

sortedLinkedList.insert(5);
sortedLinkedList.insert(4, 1);
sortedLinkedList.insert(3, 2);
sortedLinkedList.insert(2, 3);
sortedLinkedList.insert(1, 4);

console.log(sortedLinkedList.toString());
