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
console.log(number.splice(1,0,10, 20));
console.log(number);

const matrix3x3x3 = [ [ [1,2,3], [4,5,6], [7,8,9] ], [ [10, 11, 12], [13, 14, 15], [16, 17, 18] ], [ [19, 20, 21], [22, 23, 24], [24, 25, 26] ]];

const matrix = [ [ 1,2,3 ], [4,5,6 ] ]
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log("Matrix", matrix[i][j]);
    } 
}

for (let i = 0; i < matrix3x3x3.length; i++) {
    for (let j = 0; j < matrix3x3x3[i].length; j++) {
        for (let k = 0; k < matrix3x3x3[i][j].length; k++) {
            console.log("Matrix 3x3x3", matrix3x3x3[i][j][k]);
        }
    } 
}

const a = [0];

console.log(a, a.concat(10, 20), a);


function isEven(x : number): boolean {
    console.log(x);
    return x % 2 === 0;
}

const numbers = [0, 1, 2, 3, 4, 5, 6];

console.log(number.every(isEven))
console.log(number.some(isEven))
const map = numbers.map(isEven);
const filter = numbers.filter(isEven);

number.forEach(( value ) => console.log(value))
console.log(map)
console.log(filter)
console.log(numbers.reduce((previous, current) => previous + current));

for(const n of numbers) {
    console.log(n)
}

let iterator = numbers[Symbol.iterator]();
console.log(iterator.next().value);
let entries = numbers.entries();
console.log(entries.next().value)
let keys = numbers.keys();
console.log(keys.next())
let values = numbers.values();
console.log(values.next())
Array.from(numbers);
Array.of(1);
let b : number[] = [1];
console.log(b.fill(0));
console.log(number.copyWithin(0,3))
console.log("Sort", numbers.reverse().sort())
numbers.sort((a,b) => a - b);
console.log(numbers.indexOf(6))

function multipleOf13(element : number, index: number, array: number[]) {
    return element % 13 === 0;
}

console.log(numbers.find(multipleOf13))

console.log(numbers.includes(6))
console.log(numbers.join('-'))

const teste = new Int16Array(10);

console.log(teste)