class Node {
    constructor (element) {
        this.element = element;
        this.next = null;
    }

    toString () {
        return this.element;
    }
}

module.exports = Node;