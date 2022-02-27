import ValuePair from '../dictionary/value-pair';
import LinkedList from '../liked-list/linked-list';
import { defaultToString } from '../utils';

export interface HashTableSeparateChainingTable<T> {
  [key: number]: LinkedList<ValuePair>;
}

class HashTableSeparateChaining<T> {
  constructor(
    public toStrFn = defaultToString,
    public table: HashTableSeparateChainingTable<T> = {},
  ) {}

  loseloseHashCode(key: any) {
    if (typeof key === 'number') {
      return key;
    }

    const tableKey = this.toStrFn(key);
    let hash = 0;
    for (let i = 0; i < tableKey.length; i++) {
      hash += tableKey.charCodeAt(i);
    }
    return hash % 37;
  }

  hashCode(key: any) {
    return this.loseloseHashCode(key);
  }

  put(key: number | string, value: T) {
    if (key !== null && value !== null) {
      const position = this.hashCode(key);
      if (this.table[position] === undefined) {
        this.table[position] = new LinkedList<ValuePair>();
      }
      this.table[position].push(new ValuePair(key, value));
      return true;
    }
    return false;
  }

  get(key: any) {
    const position = this.hashCode(key);
    const linkedList = this.table[position];
    if (linkedList !== null && !linkedList.isEmpty()) {
      let current = linkedList.getHead();
      while (current !== undefined) {
        if (current.element.key === key) {
          return current.element.value;
        }
        current = current.next;
      }
    }
    return undefined;
  }

  remove(key: any) {
    const position = this.hashCode(key);
    const linkedList = this.table[position];
    if (linkedList !== null && !linkedList.isEmpty()) {
      let current = linkedList.getHead();
      while (current !== undefined) {
        if (current.element.key === key) {
          linkedList.remove(current.element);
          if (linkedList.isEmpty()) {
            delete this.table[position];
          }
          return true;
        }
        current = current.next;
      }
    }
    return false;
  }
}

const hashSeparate = new HashTableSeparateChaining<string>();

hashSeparate.put('Sargeras', 'gandalf@gmail.com');
hashSeparate.put('Nathan', 'ganda2lf@gmail.com');

console.log(hashSeparate.get('Nathan'));
