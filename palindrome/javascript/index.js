// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Solution 1
// Reverse the given input string, then compare against
// the input string to determine if palindrome exists

function palindrome1(str) {
    let strLength = str.length;
    let reversedString = '';

    while (strLength >= 0) {
        reversedString += str.charAt(strLength);
        strLength--
    }

    if (reversedString === str) {
        return true;
    } else {
        return false;
    }
}

module.exports = palindrome1;

// Solution 2
// Use the array.every() function to check each element
// of the string array that it matches the opposite element

function palindrome2(str) {
    let len = str.length;
    let arr = str.split('');

    return arr.every((c, i) => {
        return c === str[len - i - 1];
    });
}

module.exports = palindrome2;