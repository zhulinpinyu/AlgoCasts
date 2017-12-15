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

class Queue {
    constructor() {
        this.in = new Stack()
        this.out = new Stack()
    }

    add(e) {
        this.in.push(e)
    }

    remove() {
        while (this.in.peek()) {
            this.out.push(this.in.pop())
        }
        const ret = this.out.pop()
        while (this.out.peek()) {
            this.in.push(this.out.pop())
        }
        return ret
    }

    peek() {
        while (this.in.peek()) {
            this.out.push(this.in.pop())
        }
        const ret = this.out.peek()
        while (this.out.peek()) {
            this.in.push(this.out.pop())
        }
        return ret
    }
}

module.exports = Queue;