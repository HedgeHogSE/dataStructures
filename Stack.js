class Stack {
    #arr = [];

    constructor () {
        
    }

    push (element) {
        this.#arr.push(element);
    }

    pop () {
        return this.#arr.pop();
    }

    peek () {
        return this.#arr[this.#arr.length - 1];
    }

    contains (element) {
        return this.#arr.includes(element);
    }

    isEmpty () {
        return this.#arr.length === 0;
    }

    clear () {
        this.#arr = [];
    }

    toArray () {
        return [...this.#arr];
    }

    reverse () {
        this.#arr.reverse();
    }

    clone () {
        let newStack = new Stack();
        newStack.#arr = [...this.#arr];
        return newStack;
    }

    equals (stack) {
        if (stack === this) return true;
        if (!(stack instanceof Stack)) return false;
        if (this.length !== stack.length) return false;

        for (let i = 0; i < this.length; i++) {
            if (this.#arr[i] !== stack.toArray()[i]) {
                return false;
            }
        }

        return true;
    }

    swap () {
        if (this.#arr.length < 2) {
            throw new Error("Недостаточно элементов для обмена.");
        }
        [this.#arr[this.#arr.length - 1], this.#arr[this.#arr.length - 2]] = 
        [this.#arr[this.#arr.length - 2], this.#arr[this.#arr.length - 1]];
    }

    get length () {
        return this.#arr.length;
    }

    toString () {
        return this.#arr.map(item => item.toString ? item.toString() : String(item)).join(" => ");
    }
}

module.exports = Stack;