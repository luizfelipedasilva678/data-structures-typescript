import StackObject from "./stack-object";

function baseConverter(decNumber : number, base : number) {
    const remStack = new StackObject<number>();
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let number = decNumber;
    let rem;
    let baseString = '';
    if(!(base >= 2 && base <= 36)) {
        return ''
    }
    
    while(number > 0) {
        rem = Math.floor(number % base);
        remStack.push(rem);
        number = Math.floor(number / base);
    }

    while(!remStack.isEmpty()) {
        const index = remStack.pop();

        if(index !== undefined)
            baseString += digits[index];
    }

    return baseString;
}

console.log(baseConverter(233, 16));