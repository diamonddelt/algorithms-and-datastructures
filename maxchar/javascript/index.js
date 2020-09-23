// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// Solution 1
// Creates a character map object for tracking character frequency
// Iterates over character map and returns highest value

function maxChar(str) {
    let array = str.split('');
    let charMap = {};

    // for ... of will grab each iterable element
    for (let character of array) {
        if (!charMap[character]) { // the character key is not in the map
            charMap[character] = 1;
        } else {
            charMap[character]++;
        }
    }

    let max = 0;
    let maxChar = '';

    // for ... in will grab keys when used against an object
    for (let char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char];
            maxChar = char;
        }
    }

    return maxChar;
}

module.exports = maxChar;