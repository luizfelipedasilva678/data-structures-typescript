import Deque from "./deque";

function palindromeChecker(word : string) {
    if(word === undefined || word === null || (word !== null && word.length === 0)) {
        return false;
    }

    const deque = new Deque<string>();
    const lowerString = word.toLocaleLowerCase().split(' ').join(' ');
    let isEqual = true;
    let firstChar, lastChar;

    for(let i = 0; i < lowerString.length; i++) {
        deque.addBack(lowerString.charAt(i));
    }

    while(deque.size() > 1 && isEqual) {
        firstChar = deque.removeFront();
        lastChar = deque.removeBack();

        if(firstChar !== lastChar) {
            isEqual = false;
        }
    }

    return isEqual;
}

console.log(palindromeChecker('ala'));