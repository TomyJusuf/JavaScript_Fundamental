const names = ['Anna', 'Filip', 'Lukas', 'David'];
const lastName = 'Peterson';
let newArray = [];

//for loop
let i;
for (i = 0; i < names.length; i++) {
  newArray.push(`${names[i]}  ${lastName}`);
}
console.log(newArray);

const gas = [20, 40, 100, 30];
const food = [10, 40, 50];

function calculateTotal(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

const gasTotal = calculateTotal(gas);
const foodTotal = calculateTotal(food);
const randomNumbers = calculateTotal([1, 5, 15, 35]);

console.log({
  gas: gasTotal,
  food: foodTotal,
  random: randomNumbers,
});
