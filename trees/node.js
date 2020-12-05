// base Node object to be used to understand Trees
// must implement a basic add() and remove() method

class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    // add a new Node as a direct sibling to this Node with arbitrary data
    add(data) {
        this.children.push(new Node(data));
    }

    // remove an immediate sibling Node fron this Node
    // this is done by filtering that Node out and resetting the siblings array
    // the node to remove contained the provided data argument
    remove(data) {
        this.children = this.children.filter(d => {
            return d.data !== data;
        });
    }
}

module.exports = Node;