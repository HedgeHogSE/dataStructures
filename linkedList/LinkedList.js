const Node = require('./Node');

class LinkedList {
    //#arr = [];

    #head = new Node();
    #tail = new Node();
    #length = 0;

    constructor () {

    }

    addFirst (element) {
        let newNode = new Node(element);
        if (this.#length === 0) {
            this.#tail = newNode;
        }
        newNode.next = this.#head;
        this.#head = newNode;
        this.#length++;
        return true;
    }

    propend (element) {
        return this.addFirst(element);
    }

    addLast (element) {
        let newNode = new Node(element);
        if (this.#length === 0) {
            this.#head = newNode;
        }
        this.#tail.next = newNode;
        this.#tail = newNode;
        this.#length++;
        return true;
    }

    append (element) {
        return this.addLast(element);
    }

    addAt (element, index) {
        if (index > this.#length || index < 0) return false; 
        if (index === 0) {
            return this.addFirst(element);
        }
        if (index === this.#length) {
            return this.addLast(element);
        }
        let newNode = new Node(element);
        let current = this.#head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }
        newNode.next = current.next;
        current.next = newNode;
        this.#length++;
        return true;
    }
    
    removeFirst () {
        if (this.#length === 0) return false;
        this.#head = this.#head.next;
        this.#length--;
        if (this.#length === 0) this.#tail = null;
        return true;
    } 

    removeLast () {
        if (this.#length === 0) return false;
        if (this.#length === 1) return this.removeFirst();
        let current = this.#head;
        while (current.next !== this.#tail) {
            current = current.next;
        }
        current.next = null;
        this.#tail = current;
        this.#length--;
        return true;
    }

    removeAt (index) {
        if (index >= this.#length || index < 0) return false; 
        if (index === 0) return this.removeFirst();
        if (index === this.#length - 1) return this.removeLast();

        let current = this.#head;

        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }
        current.next = current.next.next;
        this.#length--;
        return true;
    }

    remove(element) {
        if (this.#length === 0) return false; 
        if (this.#head.element === element) return this.removeFirst(); 
    
        let current = this.#head;

        while (current.next !== null && current.next.element !== element) {
            current = current.next;
        }
    
        if (current.next === null) return false; 
        current.next = current.next.next;
        if (current.next === null) this.#tail = current;
    
        this.#length--;
        return true;
    }

    indexOf (element) {
        let current = this.#head;
        let index = 0;
        while (current !== null) {
            if (current.element === element) return index;
            current = current.next;
            index++;
        }
        return -1;
    }

    getFirst () {
        return this.#head.element;
    }

    getLast () {
        return this.#tail.element;
    }

    get (index) {
        if (index < 0 || index >= this.#length) return -1;
        if (index === 0) return this.getFirst();
        if (index === this.#length - 1) return this.getLast();
        let current = this.#head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current.element;
    }

    contains (element) {
        let current = this.#head;

        while (current !== null) {
            if (current.element === element) return true; 
            current = current.next;
        }

        return false;
    }

    isEmpty () {
        return this.#length === 0;
    }

    forEach(callback) {
        let current = this.#head;
        let index = 0;
    
        while (current !== null) {
            callback(current.element, index, this);
            current = current.next;
            index++;
        }
    }

    map (callback) {
        let newLinkedList = new LinkedList();
        let current = this.#head;
        let index = 0;
        while (current !== null) {
            newLinkedList.addLast(callback(current.element, index, this));
            current = current.next;
            index++;
        }
        return newLinkedList;
    }

    filter (callback) {
        let newLinkedList = new LinkedList();
        let current = this.#head;
        let index = 0;

        while (current !== null) {
            if (callback(current.element, index, this)){
                newLinkedList.addLast(current.element);
            }

            current = current.next;
            index++;
        }
        return newLinkedList;
    }

    find (callback) {
        let current = this.#head;
        let index = 0;

        while (current !== null) {
            if (callback(current.element, index, this)){
                return current.element;
            }

            current = current.next;
            index++;
        }
        return null;
    }

    reduce (callback, init) {
        let current = this.#head;
        let index = init === undefined ? 1 : 0;
        let initial = init ?? current.element;
        if (init === undefined) {
            current = current.next;
        }

        while (current !== null) {
            initial = callback(initial, current.element, index, this);
            current = current.next;
            index++;
        }
        return initial;
    }

    clear () {
        this.#head = null;
        this.#tail = null;
        this.#length = 0;
    }

    toArray () {
        if (this.#length === 0) return [];
        let result = [];
        let current = this.#head;

        while (current !== null) {
            result.push(current.element);
            current = current.next;
        }
        return result;
    }

    toString () {
        if (this.#length === 0) return "";
        if (this.#length === 1) return this.getFirst();
        return this.toArray().join(" => ");
    }

    get head () {
        return this.#head;
    }

    get tail () {
        return this.#tail;
    }

    get length () {
        return this.#length;
    }
}

module.exports = LinkedList;