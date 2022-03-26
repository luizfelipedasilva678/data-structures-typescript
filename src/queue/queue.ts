interface QueueItem<T> {
  [key: number]: T;
}

export default class Queue<T> {
  private count: number = 0;

  private lowestCount: number = 0;

  private items: QueueItem<T> = {};

  constructor() {}

  enqueue(element: T) {
    this.items[this.count] = element;
    this.count++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }

    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }

  isEmpty(): boolean {
    return this.count - this.lowestCount === 0;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }

  size() {
    return this.count - this.lowestCount;
  }

  clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }

    let objString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString}, ${this.items[i]}`;
    }

    return objString;
  }
}

/*
const nomes = new Queue<string>();

nomes.enqueue('Paulo');
nomes.enqueue('Pedro');
nomes.enqueue('Joan');
nomes.enqueue('Maria');

// nomes.dequeue();
// console.log(nomes.peek());
// console.log(nomes.toString());
*/
