import ValuePair from '../dictionary/value-pair';
import { defaultToString } from '../utils';

interface HashTableValueProtocol {
  [key: number | string]: any;
}

class HashTable {
  constructor(
    public toStrFn = defaultToString,
    public table: HashTableValueProtocol = {},
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

  hashCode(key: string) {
    return this.loseloseHashCode(key);
  }

  put(key: any, value: any) {
    if (key !== null && value !== null) {
      const position = this.hashCode(key);
      this.table[position] = new ValuePair(key, value);
      return true;
    }

    return false;
  }

  get(key: any) {
    const valuePair = this.table[this.hashCode(key)];
    return valuePair === null ? undefined : valuePair.value;
  }

  remove(key: any) {
    const hash = this.hashCode(key);
    const valuePair = this.table[hash];
    if (valuePair !== null) {
      delete this.table[hash];
      return true;
    }
    return false;
  }

  size() {
    return Object.keys(this.table).length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }

    const keys = Object.keys(this.table);
    let objString = `{${keys[0]} => ${this.table[keys[0]].toString()}}`;
    for (let i = 1; i < keys.length; i++) {
      objString += `${objString}, {${keys[i]} => ${this.table[
        keys[i]
      ].toString()}}`;
    }
    return objString;
  }
}

const hash = new HashTable();

hash.put('Gandalf', 'gandalf@gmail.com');

console.log(hash.hashCode('Gandalf'));
console.log(hash.get('Gandalf'));
console.log(hash.toString());
