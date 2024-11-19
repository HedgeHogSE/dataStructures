class Queue {
    #arr = [];

    constructor () {

    }

    enqueue (element) {
        this.#arr.push(element);
    }

    dequeue () {
        return this.#arr.shift();
    }

    front () {
        return this.#arr[0];
    }

    peek () {
        return this.front();
    }

    isEmpty () {
        return this.#arr.length === 0;
    }

    reverse () {
        this.#arr.reverse();
    }

    getLast () {
        return this.#arr[this.#arr.length - 1];
    }

    toArray () {
        return [...this.#arr];
    }

    contains(element) {
        return this.#arr.includes(element);
    }

    clear() {
        this.#arr = [];
    }

    equals (queue) {
        if (queue === this) return true;
        if (!(queue instanceof Queue)) return false;
        if (this.length !== queue.length) return false;

        for (let i = 0; i < this.length; i++) {
            if (this.#arr[i] !== queue.toArray()[i]) {
                return false;
            }
        }

        return true;
    }

    get length () {
        return this.#arr.length;
    }
}

module.exports = Queue;