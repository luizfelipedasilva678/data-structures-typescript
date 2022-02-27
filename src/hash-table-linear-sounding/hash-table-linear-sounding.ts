import ValuePair from '../dictionary/value-pair';

import { defaultToString } from '../utils';

interface HashTableValueProtocol {
  [key: number | string]: any;
}

class HashTableLinearSounding {
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
      if (this.table[position] == null) {
        this.table[position] = new ValuePair(key, value);
      } else {
        let index = position + 1;
        while (this.table[index] != null) {
          index++;
        }
        this.table[index] = new ValuePair(key, value);
      }
      return true;
    }
    return false;
  }

  get(key: any) {
    const position = this.hashCode(key);
    if (this.table[position] != null) {
      if (this.table[position].key === key) {
        return this.table[position].value;
      }
      let index = position + 1;
      while (this.table[index] != null && this.table[index].key !== key) {
        index++;
      }
      if (this.table[index] != null && this.table[index].key === key) {
        return this.table[position].value;
      }
    }
    return undefined;
  }

  remove(key: any) {
    const position = this.hashCode(key);
    if (this.table[position] != null) {
      if (this.table[position].key === key) {
        delete this.table[position];
        this.verifyRemoveSideEffect(key, position);
        return true;
      }

      let index = position + 1;
      while (this.table[index] != null && this.table[index].key != key) {
        index++;
      }
      if (this.table[index] != null && this.table[index].key === key) {
        delete this.table[index];
        this.verifyRemoveSideEffect(key, index);
        return true;
      }
    }

    return false;
  }

  verifyRemoveSideEffect(key: any, removedPosition: any) {
    const hash = this.hashCode(key);
    let index = removedPosition + 1;
    while (this.table[index] != null) {
      const posHash = this.hashCode(this.table[index].key);
      if (posHash <= hash || posHash <= removedPosition) {
        this.table[removedPosition] = this.table[index];
        delete this.table[index];
        // eslint-disable-next-line no-param-reassign
        removedPosition = index;
      }
      index++;
    }
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

const hash2 = new HashTableLinearSounding();

hash2.put('Gandalf', 'gandalf@gmail.com');

console.log(hash2.hashCode('Gandalf'));

console.log(hash2.get('Gandalf'));

console.log(hash2.toString());
