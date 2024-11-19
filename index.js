const Stack = require('./Stack');
const Queue = require('./Queue');

/*let stack = new Stack();

stack.push(7);
stack.push(11);
stack.push(88);
stack.push(112);
stack.push(4);

console.log(stack.toArray());

stack.swap();

console.log(stack.toString());*/

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.toArray());
console.log(queue.front());
console.log(queue.peek());


