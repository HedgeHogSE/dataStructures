const Stack = require('./Stack');

let stack = new Stack();

stack.push(7);
stack.push(11);
stack.push(88);
stack.push(112);
stack.push(4);

console.log(stack.toArray());

stack.swap();

console.log(stack.toString());

