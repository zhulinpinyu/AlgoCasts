// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

// 实现队列Queue Solution #1
// class Queue {
//     constructor() {
//         this.data = []
//     }

//     add(e) {
//         this.data.push(e)
//     }

//     remove() {
//         return this.data.shift()
//     }

// }


// 实现队列Queue Solution #2
class Queue {
    constructor() {
        this.data = []
    }

    add(e) {
        this.data.unshift(e)
    }

    remove() {
        return this.data.pop()
    }

}

module.exports = Queue;