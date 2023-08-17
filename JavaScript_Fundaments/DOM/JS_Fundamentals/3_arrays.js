// Arrays, Function and Objects
// Arrays - [], 0 indes based

const friend1 = 'anna';
const friend2 = 'tom';
const friend3 = 'jerry';
const friend4 = 'kerry';

//# ARRAY
const friends = [friend1, friend2, friend3, friend4]; //array
console.log(friends);
friends[1] = 'Barbara';
console.log(friends[1]);

//# FUNCTION - DECLARE, INVOKE
function hello() {
  //logic
  console.log('Hello Bob');
  console.log('Hello barbara');
  console.log('Hello Jerry');
}
hello(); //<--invoke

//# function - PARAMERTS - ARGUMENTS
function hello2(params1, params2 = 'SOMEONE', params3) {
  console.log('Hello ' + params1 + ' and ' + params2 + ' AND : ' + params3);
}
hello2('SUSSY', 'JAKOB');
hello2('TOMAS');

//# RETURN
const wallHeight = 80;

function calculate(value) {
  const newValue = value * 2.54;

  return newValue;
}

const width = calculate(100);
const height = calculate(wallHeight);

const dimensions = [width, height];
console.log(dimensions);
