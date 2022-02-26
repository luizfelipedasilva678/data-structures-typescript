import StackObject from './stack-object';

function decimalToBinary(decNumber: number) {
  const remStack = new StackObject<number>();
  let number = decNumber;
  let rem;
  let binaryString = '';

  while (number > 0) {
    rem = Math.floor(number % 2);
    remStack.push(rem);
    number = Math.floor(number / 2);
  }

  while (!remStack.isEmpty()) {
    // eslint-disable-next-line no-unsafe-optional-chaining
    binaryString += remStack.pop()?.toString();
  }

  return binaryString;
}

console.log(decimalToBinary(233));
