let names = ['John', 'Tom', 'Jerry', 'Gerry'];

// length
console.log(names.length);
console.log(names[names.length - 1]);

let last = ['Maria', 'Karel'];
let add = names.concat(last);

console.log(add); //[ 'John', 'Tom', 'Jerry', 'Gerry', 'Maria', 'Karel' ]

// reverse
console.log(add.reverse()); //[ 'Karel', 'Maria', 'Gerry', 'Jerry', 'Tom', 'John' ]

//unshift
add.unshift('michale');
console.log(add); //['michale', 'Karel', 'Maria', 'Gerry', 'Jerry', 'Tom', 'John'];

//shift
add.shift();
add.shift();
console.log(add); //[ 'Maria', 'Gerry', 'Jerry', 'Tom', 'John' ]

//push
add.push('sussy');
console.log(add); // [ 'Maria', 'Gerry', 'Jerry', 'Tom', 'John', 'sussy' ]

//pop
add.pop();
console.log(add); //[ 'Maria', 'Gerry', 'Jerry', 'Tom', 'John' ]
