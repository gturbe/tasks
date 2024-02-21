/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const newNum: number[] = [];
    const numLength = numbers.length;
    if (numLength === 0) {
        return newNum;
    }
    newNum.push(numbers[0]);
    if (numLength === 1) {
        newNum.push(numbers[0]);
    } else {
        newNum.push(numbers[numLength - 1]);
    }
    return newNum;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripleNumber = numbers.map((digit: number): number => digit * 3);
    return tripleNumber;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const words = [...numbers];
    const ints = words.map((word: string): number => parseInt(word));
    const noNaN = ints.map((int: number): number =>
        isNaN(int) ? (int = 0) : int
    );
    return noNaN;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const words = [...amounts];
    const noDollar = words.map((word: string): string =>
        word[0] === "$" ? word.slice(1) : word
    );
    const ints = noDollar.map((word: string): number => parseInt(word));
    const noNaN = ints.map((int: number): number =>
        isNaN(int) ? (int = 0) : int
    );
    return noNaN;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const newMessage = [...messages];
    const noQuestion = newMessage.filter(
        (message: string): boolean => message[message.length - 1] !== "?"
    );
    const upperCase = noQuestion.map((message: string): string =>
        message[message.length - 1] === "!" ? message.toUpperCase() : message
    );
    return upperCase;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const length = words.length;
    let count = 0;
    for (let i = 0; i < length; i++) {
        if (words[i].length < 4) {
            count += 1;
        }
    }
    return count;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const length = colors.length;
    if (length === 0) {
        return true;
    }
    const RGB = colors.every(
        (color: string): boolean =>
            color === "red" || color === "blue" || color === "green"
    );
    return RGB;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const copy = [...addends];
    const length = addends.length;
    const total = copy.reduce((partialSum, a) => partialSum + a, 0);
    if (length === 0) {
        return "0=0";
    }
    const addend = copy.join("+");
    return total.toString() + "=" + addend;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const copy: number[] = values;
    if (copy.every((cpy: number): boolean => cpy > 0)) {
        const posSum = copy.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        copy.push(posSum);
    }
    //I didnt have the time to figure out the insert after negative
    //IDK how to get the sum of just the #'s before the negative
    //I know I have to use splice in order to insert it at the correct index
    return copy;
}
