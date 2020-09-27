// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// Solution 1
// Uses a nested for-loop to traverse a 2D representation of a character space
// Inserts the correct character based on vector logic
// This solution is acknowledged to be less efficient = O(N^2)

function steps(n) {
    for (let i = 0; i < n; i++) { // row
        let output = '';
        for (let j = 0; j < n; j++) { // column
            if (j <= i) {
                output += '#';
            } else {
                output += ' ';
            }
        }
        console.log(output);
    }
}

module.exports = steps;