const nl = '\n';
// Variable - Most Basic Buiding Block

let name;
console.log(name); // undefined

let address, city, state;
address = '101 Waschingtor';
city = 'Waschington';
state = 'USA';
console.log(address, city, state, nl);

// LET VS CONST VS VAR
//using let
let myName = 'Tomas';

//using var
var value = 'some value';

//using const -can't re-assign
const lastName = 'jordan';
// lastName = 'peterson'; // TypeError: Assignment to constant variable.

console.log(value);
console.log(myName);
console.log(lastName);
