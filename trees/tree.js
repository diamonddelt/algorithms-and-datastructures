// basic Tree datastructure, which uses the Node class in the containing directory

class Tree {
    constructor() {
        this.root = null; // a node must be explicitly assigned to the tree's root
    }

    // traverse methods

    // Breadth-First Search
    traverseBF(fn) {
        let arr = [this.root]; // create FIFO queue
        while (arr.length) {
            let node = arr.shift(); // take first node out
            arr.push(...node.children); // push the children of the removed node into the master array

            fn(node); // evaluation function AKA "Is this the node you were searching for?"
        }
    }

    
}

module.exports = Tree;