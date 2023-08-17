// reduce
// iterates, callback function
// reduces to a single value - number, array, object
// 1 parameter ('acc') - total of all calculations
// 2 parameter ('curr') - current iteration/value

const people = [
  {
    name: 'bob',
    age: 25,
    position: 'developer',
    id: 1,
    salary: 200,
  },
  {
    name: 'brand',
    age: 20,
    position: 'designer',
    id: 2,
    salary: 300,
  },
  {
    name: 'mike',
    age: 50,
    position: 'CEO',
    id: 3,
    salary: 500,
  },
];

const total = people.reduce(function (acc, currItem) {
  console.log(`total ${acc}`);
  console.log(`current money : ${currItem.salary}`);
  acc += currItem.salary;
  return acc;
}, 0);

console.log(total);
