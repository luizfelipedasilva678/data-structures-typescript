/* eslint-disable no-param-reassign */

/* eslint-disable class-methods-use-this */

import {
  defaultCompare,
  Compare,
} from '../sorted-linked-list/sorted-linked-list';

import { swap, reverseCompare } from '../utils';
import { MinHeap } from './min-heap';

export class MaxHeap extends MinHeap {
  constructor(compareFn = defaultCompare) {
    super(compareFn);
    this.compareFn = reverseCompare(compareFn);
  }
}

const heap = new MaxHeap();
heap.insert(2);
heap.insert(3);
heap.insert(4);
heap.insert(5);
heap.insert(1);
console.log(heap);

console.log(heap.findMinimum());
