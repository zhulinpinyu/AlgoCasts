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

    insertLast(data) {
        const last = new Node(data)
        if (this.getLast()) {
            this.getLast().next = last
        } else {
            this.insertFirst(data)
        }

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
        return this.head
    }

    getLast() {
        let node = this.head
        while (node && node.next) {
            node = node.next
        }
        return node
    }

    clear() {
        this.head = null
    }

    removeFirst() {
        const first = this.getFirst()
        if (!first) return
        this.head = first.next
    }

    removeLast() {
        let parent = this.head
            //only one Node
        if (!parent || !parent.next) {
            this.head = null
            return
        }

        // Node count > 1
        let node = parent.next
        while (node.next) {
            parent = node
            node = node.next
        }
        parent.next = null
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
}

module.exports = { Node, LinkedList };