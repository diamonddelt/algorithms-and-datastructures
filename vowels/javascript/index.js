// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// Solution 1
// Use regex to define a capture group with only vowels.
// Use string.match() with regex to find count of vowels and exclude null results

function vowels(str) {
    const regex = /[aeiou]/g;
    if (str.match(regex) != null) {
        return str.match(regex).length;
    } else {
        return 0;
    }
}

module.exports = vowels;