// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    insertFirst(data) {
        this.head = new Node(data, this.head)
    }

    size() {
        let count = 0
        let node = this.head
        while (node) {
            count++
            node = node.next
        }

        return count
    }
}

module.exports = { Node, LinkedList };