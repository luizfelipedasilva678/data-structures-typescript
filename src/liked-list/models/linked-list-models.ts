export class Node<T> {
    private _element : T;
    private _next : Node<T> | undefined;

    constructor(element : T) {
        this._element = element;
        this._next = undefined;
    }

    get next() : Node<T> | undefined {
        if(this._next !== undefined)
            return this._next;
        return undefined;
    }

    set next(value : Node<T> | undefined) {
        this._next = value;
    }

    get element() : T {
        return this._element;
    }
}