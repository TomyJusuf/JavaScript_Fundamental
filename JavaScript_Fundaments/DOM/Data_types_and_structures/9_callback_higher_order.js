function morning(name) {
  return `Good morning ${name},`;
}

function greet(name, cb) {
  const myName = 'Tomy';
  console.log(`${cb(name)} my name is ${myName}`);
}

greet('Juko', morning);
greet('Peter', morning);

// Callback functions, Higher Order Functions, Functions as First Class Objects/Citizens
// Function are first class objects - stored in a variable (expression),
// passed as an argument to another function, return from the function (closure)

// Higher Order function - accepts another function as an argument or returns another function as a result

// Callback function - passed to a another function as an argument and exucted inside that function

// function greetMorning(name) {
//   const myName = 'Tomy';
//   console.log(`Good morning ${name}, my name is ${myName}`);
// }
// greetMorning('Juko');
