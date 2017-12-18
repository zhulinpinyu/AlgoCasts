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
        this.insertAt(data, 0)
    }

    insertLast(data) {
        this.insertAt(data, this.size())
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

    getFirst() {
        return this.getAt(0)
    }

    getLast() {
        return this.getAt(this.size() - 1)
    }

    clear() {
        this.head = null
    }

    removeFirst() {
        this.removeAt(0)
    }

    removeLast() {
        this.removeAt(this.size() - 1)
    }

    getAt(i) {
        let count = 0
        let node = this.head
        while (node) {
            if (i === count) {
                return node
            }
            count++
            node = node.next
        }
        return null
    }

    removeAt(i) {
        const prev = this.getAt(i - 1)
        const current = this.getAt(i)
        const next = this.getAt(i + 1)
        if (prev) {
            prev.next = next
        } else if (next) {
            this.head = next
        } else if (current) {
            this.head = null
        }
    }

    insertAt(data, i) {
        const prev = this.getAt(i - 1) || this.getLast()
        const next = this.getAt(i)
        if (i === 0 || !prev) {
            this.head = new Node(data, next)
            return
        }
        if (i === this.size()) {
            prev.next = new Node(data)
            return
        }
        prev.next = new Node(data, next)
    }

    forEach(callback) {
        let node = this.head
        while (node) {
            callback(node)
            node = node.next
        }
    }

    *
    [Symbol.iterator]() {
        let node = this.head
        while (node) {
            yield node
            node = node.next
        }
    }
}

module.exports = { Node, LinkedList };