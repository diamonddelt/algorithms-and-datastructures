// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// Solution 1
// Big O = O(N)
// Pre-populate the initial 2 seed values of the array,
// then iterate up to n and add previous 2 numbers to results array

function fib1(n) {
    // we take this for granted
    // i.e. n must be > 2 to observe Fibonnaci
    let result = [0, 1];

    for (let i = 2; i <= n; i++) {
        // calculate next Fibonnaci number
        result.push(result[i - 1] + result[i - 2]);
    }

    console.log(result[n]);
}

// Solution 2
// Recursive solution - you have either seen this, or you havent;
// I'm sure no one gets this without seeing it before,
// especially in an interview setting, lol

function fib2(n) {
    if (n < 2) {
        return n;
    }

    return fib(n - 1) + fib(n - 2);
}

// Solution 3
// Recursive solution with memoization
// Learned something new today; this changes th Big O from exponential to 

function fib3(n) {
    if (n < 2) {
        return n;
    }

    return fib3(n - 1) + fib3(n - 2);
}

// generic memoizer - used to improve runtime efficiency
function memoize(fn) {

    let cache = {};
    return function (...args) {
        if (cache[args]) {
            return cache[args];
        }

        const result = fn.apply(this, args);

        // store the pre-computed result in the cache to enable memoization
        cache[args] = result;

        return result;
    }
}

// applies memoization to speed-up the slower recursive solution
fib3 = memoize(fib3);

module.exports = fib1;
module.exports = fib2;
module.exports = fib3;