// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

// Solution 1
// This strategy uses breadth-first search and some "tricks" I would have never come to immediately lol
function levelWidth(root) {
    let answersArray = [0]; // this array represents a set of counters for each tree level
    let queue = [root, 'END']; // the "trick"; inserting a junk data separator

    while (queue.length > 1) {
        if (queue[0] != 'END') {
            let node = queue.shift(); // take first node out
            queue.push(...node.children); // append all children to the node
            answersArray[answersArray.length - 1]++; // increment the level counter
        } else {
            let node = queue.shift();
            queue.push(node); // designate the end of the new level
            answersArray.push(0); // create a new level counter
        }
    }

    return answersArray;
}

module.exports = levelWidth;
