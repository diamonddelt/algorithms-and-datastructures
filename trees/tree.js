// basic Tree datastructure, which uses the Node class in the containing directory

class Tree {
    constructor() {
        this.root = null; // a node must be explicitly assigned to the tree's root
    }

    // traverse methods

    // Breadth-First Search
    // the "gotcha" = this requires "APPENDING" elements to the queue,
    // which simulates the same-level search behavior
    traverseBF(fn) {
        let arr = [this.root]; // queue
        while (arr.length) {
            let node = arr.shift(); // take first node out
            arr.push(...node.children); // append all children node to the queue

            fn(node); // evaluation function AKA "Is this the node you were searching for?"
        }
    }

    // Depth-First Search
    // the "gotcha" = this requires "PREPENDING" elements to the queue,
    // which simulates the depth-first search behavior
    traverseDF(fn) {
        let arr = [this.root]; // queue
        while (arr.length) {
            let node = arr.shift(); // take the first node out
            arr.unshift(...node.children); // prepend all children node to the queue

            fn(node);
        }
    }

    
}

module.exports = Tree;