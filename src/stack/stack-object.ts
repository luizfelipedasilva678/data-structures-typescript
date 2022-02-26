interface StackObjectItem<T> {
  [key: number]: T;
}

export default class StackObject<T> {
  private count: number = 0;

  private items: StackObjectItem<T> = {};

  // eslint-disable-next-line class-methods-use-this
  consctructor() {}

  push(element: T) {
    this.items[this.count] = element;
    this.count++;
  }

  size(): number {
    return this.count;
  }

  isEmpty(): boolean {
    return this.count === 0;
  }

  pop(): T | undefined {
    if (this.isEmpty()) return undefined;

    this.count--;
    const result = this.items[this.count];
    console.log(result);
    delete this.items[this.count];
    return result;
  }

  peek(): T | undefined {
    if (this.isEmpty()) return undefined;

    return this.items[this.count - 1];
  }

  clear(): void {
    this.items = {};
    this.count = 0;
  }

  toString(): string {
    if (this.isEmpty()) {
      return '';
    }

    let objString = `${this.items[0]}`;
    for (let i = 1; i < this.count; i++) {
      objString = `${objString}, ${this.items[i]}`;
    }

    return objString;
  }
}

const stackObject = new StackObject<number>();
stackObject.push(1);
stackObject.push(2);
stackObject.push(3);
stackObject.push(4);
stackObject.push(5);
stackObject.push(6);

console.log(stackObject.peek());
console.log(stackObject.toString());
