// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// Solution 1
// Uses built-in ES6 functions to determine sign, and reverse stringified number
// Keeps track of sign if present and appends to re-converted number

function reverseInt(n) {

    // determine if the number is positive or negative (ES6 way)
    let isNegative = Math.sign(n) === -1 ? true : false;

    // convert the absolute value of n to string
    let str = Math.abs(n).toString();

    // reverse string
    str = str.split('').reverse().join('');

    // convert back to integer which will strip leading zeroes
    let reversedN = Number(str);

    // add sign back
    if (isNegative) {
        return -reversedN;
    } else {
        return reversedN;
    }
}

module.exports = reverseInt;