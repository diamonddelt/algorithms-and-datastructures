// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
    constructor() {
        this._queue = [];
    }

    // add a new int element to the Queue
    add(n) {
        this._queue.unshift(n);
    }

    // remove the last element from the Queue
    remove() {
        return this._queue.pop();
    }

    // return the next element to exit the queue, 
    // without removing it from the queue
    glimpse() {
        return this._queue[this._queue.length - 1];
    }
}

module.exports = Queue;