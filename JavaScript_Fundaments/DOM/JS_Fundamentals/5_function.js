// function definistion/declaration
function addValue(num1, num2) {
  return num1 + num2;
}

const firstValue = addValue(1, 2);
const secondValue = addValue(2, 3);
const thirtValue = addValue(4, 5);

//anonymous - expression
const add = function (num1, num2) {
  return num1 + num2;
};

var values = [firstValue, secondValue, thirtValue];
console.log(values);

var values = [firstValue, secondValue, add(1, 2)];
console.log(values);

//arrow function
const multiply = (n1, n2) => n1 * n2;
