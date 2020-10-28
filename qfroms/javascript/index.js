// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

// Solution 1
// Reversing the order of stackA by to simulate FIFO,
// by moving the elements one by one to stackB.
// Similar to a Towers of Hanoi problem (only easier).
// I'm not sure why this is important to be able to code in an interview;
// if you didn't already know how to solve this, you'd probably never figure it out

class Queue {
    constructor() {
        this.stackA = new Stack();
        this.stackB = new Stack();
    }

    add(n) {
        this.stackA.push(n);
    }

    remove() {
        let value;

        // reverse order by swap over to second stack
        while (this.stackA.peek()) {
            this.stackB.push(this.stackA.pop());
        }

        // retrieve FIFO entry from second stack
        value = this.stackB.pop();

        // return stackB elements to original position in stackA for a future dequeue
        while (this.stackB.peek()) {
            this.stackA.push(this.stackB.pop());
        }

        return value;
    }

    // same as remove except you don't actually pop off the element from stackB
    peek() {
        let value;

        while (this.stackA.peek()) {
            this.stackB.push(this.stackA.pop());
        }

        value = this.stackB.peek();

        while (this.stackB.peek()) {
            this.stackA.push(this.stackB.pop());
        }

        return value;
    }
}

module.exports = Queue;