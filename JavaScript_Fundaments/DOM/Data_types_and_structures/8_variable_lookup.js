// variables lookip
// {} - code block

const globalNumber = 5;

function add(num1, num2) {
  const globalNumber = 2;
  const result = num1 + num2 + globalNumber;

  function multipy() {
    const multi = result * globalNumber;
    console.log(multi);
  }
  multipy();
  return result;
}

console.log(add(5, 5));
