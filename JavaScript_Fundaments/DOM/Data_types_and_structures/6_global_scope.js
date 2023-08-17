// Global Scope vs Local Scope
// any variable outside code block {} is said to be in Global Scope
// can be access anywhere in the probram
//

let myname = 'jojo';
myname = 'peter';

function calculate() {
  console.log(myname);
  myname = 'orange';
  function inner() {
    myname = 'inner name value';
    console.log(`this is from inner function ${myname}`);
  }
  inner();
}
calculate();

if (true) {
  console.log(myname);
  myname = 'morano';
}

console.log(`my name is ${myname} and I'm awesome`);
