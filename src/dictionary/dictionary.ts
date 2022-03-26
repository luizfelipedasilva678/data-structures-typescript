import { defaultToString } from '../utils';
import ValuePair from './value-pair';

export interface TableValuesProtocol {
  [key: string]: any;
}

export default class Dictionary {
  constructor(
    public toStrFn = defaultToString,
    public table: TableValuesProtocol = {},
  ) {}

  hasKey(key: any): boolean {
    return this.table[this.toStrFn(key)] !== null;
  }

  set(key: any, value: any) {
    if (key !== null && value !== null) {
      const tableKey = this.toStrFn(key);
      this.table[tableKey] = new ValuePair(key, value);
      return true;
    }
    return false;
  }

  remove(key: any): boolean {
    if (this.hasKey(key)) {
      delete this.table[this.toStrFn(key)];
      return true;
    }
    return false;
  }

  get(key: any): any {
    // eslint-disable-next-line no-shadow
    const valuePair = this.table[this.toStrFn(key)];
    return valuePair === null ? undefined : valuePair.value;
  }

  keyValues() {
    return Object.values(this.table);
  }

  keys() {
    return this.keyValues().map((valuePair) => valuePair.key);
  }

  values() {
    return this.keyValues().map((valuePair) => valuePair.value);
  }

  forEach(callbackFn: any) {
    const valuePairs = this.keyValues();
    for (let i = 0; i < valuePairs.length; i++) {
      const result = callbackFn(valuePairs[i].key, valuePairs[i].value);
      if (result === false) {
        break;
      }
    }
  }

  size() {
    return Object.keys(this.table).length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  clear() {
    this.table = {};
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }

    const valuePairs = this.keyValues();
    let objString = `${valuePairs[0].toString()}`;
    for (let i = 0; i < valuePairs.length; i++) {
      objString = `${objString}, ${valuePairs[i].toString()}`;
    }
    return objString;
  }
}

/*
const dictionary = new Dictionary();

dictionary.set('Nome', 'Luiz');
dictionary.set('Nome do meio', 'Pedro');
dictionary.set('Nome final', 'José');

console.log(dictionary.keyValues());
*/
