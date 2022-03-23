/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
import {
  defaultCompare,
  Compare,
} from '../sorted-linked-list/sorted-linked-list';
import { swap } from '../utils';

export class MinHeap {
  public compareFn: any;

  public heap: any;

  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn;
    this.heap = [];
  }

  getLeftIndex(index: any) {
    return 2 * index + 1;
  }

  getRightIndex(index: any) {
    return 2 * index + 2;
  }

  getParentIndex(index: any) {
    if (index === 0) {
      return undefined;
    }
    return Math.floor((index - 1) / 2);
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.size() <= 0;
  }

  clear() {
    this.heap = [];
  }

  findMinimum() {
    return this.isEmpty() ? undefined : this.heap[0];
  }

  insert(value: any) {
    if (value != null) {
      const index = this.heap.length;
      this.heap.push(value);
      this.siftUp(index);
      return true;
    }
    return false;
  }

  siftUp(index: any) {
    let parent = this.getParentIndex(index);
    while (
      index > 0 &&
      this.compareFn(this.heap[parent ?? 0], this.heap[index]) ===
        Compare.BIGGER_THAN
    ) {
      swap(this.heap, parent, index);
      index = parent;
      parent = this.getParentIndex(index);
    }
  }
}

const heap = new MinHeap();
heap.insert(2);
heap.insert(3);
heap.insert(4);
heap.insert(5);
heap.insert(1);

console.log(heap);
console.log(heap.findMinimum());
