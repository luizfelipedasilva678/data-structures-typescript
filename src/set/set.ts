interface SetItemsProtocol {
  [key: PropertyKey]: PropertyKey;
}

export default class Set {
  constructor(public items: SetItemsProtocol = {}) {}

  add(element: PropertyKey) {
    if (!this.has(element)) {
      this.items[element] = element;
      return true;
    }
    return false;
  }

  has(element: PropertyKey) {
    return Object.prototype.hasOwnProperty.call(this.items, element);
  }

  clear() {
    this.items = {};
  }

  size() {
    return Object.keys(this.items).length;
  }

  values() {
    const values = [];
    for (const key in this.items) {
      if (this.items.hasOwnProperty(key)) {
        values.push(this.items[key]);
      }
    }

    return values;
  }

  delete(element: PropertyKey) {
    if (this.has(element)) {
      delete this.items[element];
      return true;
    }
    return false;
  }

  union(otherSet: Set) {
    const unionSet = new Set();
    this.values().forEach((value) => unionSet.add(value));
    otherSet.values().forEach((value) => unionSet.add(value));
    return unionSet;
  }

  intersection(otherSet: Set) {
    const intersectionSet = new Set();
    const values = this.values();
    const otherValues = otherSet.values();
    let biggerSet = values;
    let smallerSet = otherValues;

    if (otherValues.length - values.length > 0) {
      biggerSet = otherValues;
      smallerSet = values;
    }

    smallerSet.forEach((value) => {
      if (biggerSet.includes(value)) {
        intersectionSet.add(value);
      }
    });

    return intersectionSet;
  }

  /*
  intersection(otherSet: Set) {
    const intersectionSet = new Set();
    const values = this.values();
    for (let i = 0; i < values.length; i++) {
      if (otherSet.has(values[i])) {
        intersectionSet.add(values[i]);
      }
    }

    return intersectionSet;
  }
  */

  diferrence(otherSet: Set) {
    const differenceSet = new Set();
    this.values().forEach((value) => {
      if (!otherSet.has(value)) {
        differenceSet.add(value);
      }
    });
    return differenceSet;
  }

  isSubsetOf(otherSet: Set) {
    if (this.size() > otherSet.size()) {
      return false;
    }

    let isSubset = true;
    this.values().every((value) => {
      if (!otherSet.has(value)) {
        isSubset = false;
        return false;
      }
      return true;
    });
    return isSubset;
  }
}

const set = new Set();
const set2 = new Set();

set.add('Oi');
set.add('Tchau');
set.add('Olá');
set.add('teste');
set.delete('Olá');

set2.add('Oi');
set2.add('Tchau');
set2.add('Olá');
set2.add('teste');
set2.add('Hello');
set2.delete('Olá');

console.log(set.items);
console.log(set.values());
console.log(set.union(set2).items);
console.log(set.intersection(set2).items);
console.log(set.diferrence(set2).items);
console.log(set.isSubsetOf(set2));
