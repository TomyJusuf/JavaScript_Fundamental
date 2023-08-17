// Local scope
// can not be access from outside code blocks
// if - NOT VAR

let name = 'bobo';

function calculate() {
  const name = 'john';
  const age = 25;
  //code goes here
  becomesGlobal = 'global variables';
}

calculate();
console.log(becomesGlobal);

if (true) {
  const name = 'john';
}

//local scope
{
  const name = 'karel';
  const special = 'special';
}
// console.log(special); //ReferenceError: special is not defined

console.log(`my name is ${name} and I'm awesome`);
