// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


// Solution 1
// Using Javascript built-in .reverse() function, and translating
// an array back into a string

function reverse1(str) {
    let arr = str.split('');
    arr = arr.reverse();
    return arr.join('');
}
module.exports = reverse1;

// Solution 2
// Building a new string by decrementing through original string,
// and pulling each character from the end of it, one by one.

function reverse2(str) {
    let strLength = str.length;
    let reversedString = '';

    while (strLength >= 0) {
        reversedString += str.charAt(strLength);
        strLength--
    }

    return reversedString;
}

module.exports = reverse2;