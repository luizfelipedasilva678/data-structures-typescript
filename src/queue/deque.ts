interface DequeItem<T> {
    [key: number] : T;
}

export default class Deque<T> {
    private count : number = 0;
    private lowestCount : number = 0;
    private items : DequeItem<T> = {};

    constructor() {}


    isEmpty() : boolean {
        return this.count  - this.lowestCount === 0;
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
        if(this.isEmpty()) {
            return '';
        }

        let objString = `${this.items[this.lowestCount]}`;
        for(let i = this.lowestCount + 1; i < this.count; i++) {
            objString = `${objString}, ${this.items[i]}`;
        }

        return objString;
    }

    removeFront() {
        if(this.isEmpty()) {
            return undefined;
        }

        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    }

    removeBack() : T | undefined {
        if(this.isEmpty()) return undefined;
        
        this.count--;
        const result = this.items[this.count];
        console.log(result);
        delete this.items[this.count];
        return result;
    }

    peekFront() {
        if(this.isEmpty()) {
            return undefined;
        }
        return this.items[this.lowestCount];
    }

    peekBack() : T | undefined {
        if( this.isEmpty() ) return undefined;

        return this.items[this.count - 1];
    }

    addBack(element: T) {
        this.items[this.count] = element;
        this.count++;
    }

    addFront(element: T) {
        if(this.isEmpty()) {
            this.addBack(element);
        } else if(this.lowestCount > 0) {
            this.lowestCount--;
            this.items[this.lowestCount] = element;
        } else {
            for (let i = this.count; i > 0; i--) {
                this.items[i] = this.items[i - 1];
            }

            this.count++;
            this.lowestCount = 0;
            this.items[0] = element;
        }

    }
} 
