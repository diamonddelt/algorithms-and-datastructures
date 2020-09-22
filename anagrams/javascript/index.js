// --- Directions
// Check to see if two provided strings are anagrams of each other.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// Solution 1
// Creates an inner function which generates character map objects
// Sanitizes provides strings to lowercase alphanumeric, then
// checks for character map equality by stringify-ing them

function anagrams(stringA, stringB) {

    // create a character map function
    let createCharacterMap = (str) => {
        let charMap = {};

        for (let character of str) {
            if (!charMap[character]) {
                charMap[character] = 1;
            } else {
                charMap[character] += 1;
            }
        }

        return charMap;
    }

    // sanitize strings for alphanumeric and lowercase
    let trueStringA = stringA.replace(/[\W]/g, '').toLowerCase();
    let trueStringB = stringB.replace(/[\W]/g, '').toLowerCase();

    // use the character map function on both inputs
    let mapA = createCharacterMap(trueStringA);
    let mapB = createCharacterMap(trueStringB);

    // compare both inputs for equality of values based on keys in character map
    if (JSON.stringify(Object.values(trueStringA).sort()) === JSON.stringify(Object.values(trueStringB).sort())) {
        if (JSON.stringify(Object.keys(trueStringA).sort()) === JSON.stringify(Object.keys(trueStringB).sort())) {
            return true; // all keys and values match
        } else {
            return false; // only the values match
        }
    } else {
        return false; // nothing matches lol
    }
}

module.exports = anagrams;