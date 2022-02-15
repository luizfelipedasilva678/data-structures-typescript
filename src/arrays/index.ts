const array = new Array();
const array2 = new Array('1', '2', '3');

const fibonacci = () => {
  const result = [];

  result[1] = 1;
  result[2] = 2;

  for (let i = 3; i < 20; i++) {
    result[i] = result[i - 1] + result[i - 2];
  }

  return result;
};

interface Array<T> {
  insertFirstPosition(value: T): void;
  removeFirstPosition(): void;
  reIndex(myArray: T[]): T[];
}

// eslint-disable-next-line func-names
Array.prototype.insertFirstPosition = function (value) {
  for (let i = this.length; i >= 0; i--) {
    this[i] = this[i - 1];
  }

  this[0] = value;
};

Array.prototype.reIndex = function (myArray) {
  const newArray = [];

  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] !== undefined) {
      newArray.push(myArray[i]);
    }
  }

  return newArray;
};

Array.prototype.removeFirstPosition = function () {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i + 1];
  }

  return this.reIndex(this);
};

const number: number[] = [1, 2, 3];
number.insertFirstPosition(10);
number.insertFirstPosition(20);
number.unshift(100);
number.pop();
console.log(number);
console.log(number.removeFirstPosition());
console.log(number.shift());
