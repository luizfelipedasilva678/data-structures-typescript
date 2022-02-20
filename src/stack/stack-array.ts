export default class Stack<T> {
    private _items : Array<T>;
    
    constructor() {
        this._items = [];
    }

    push(element: T): void {
        this._items.push(element);
    }

    pop() : T | undefined {
        return this._items.pop();
    }

    peek() : T | undefined {
        return this._items[this._items.length - 1];
    }

    isEmpty() : boolean {
        return this._items.length === 0;
    }

    size() : number {
        return this._items.length;
    }

    clear() : void {
        this._items = [];
    }
}

const stack = new Stack<number>();

if(stack.isEmpty()) {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.push(5);
    stack.push(6);
    console.log(stack.size());
}
