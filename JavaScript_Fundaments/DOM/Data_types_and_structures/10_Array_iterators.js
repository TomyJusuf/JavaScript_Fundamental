// Powerfull Array Methods
// forEach, map, filter , find, reduce
// Iterate over array-  no for loop required

const numbers = [0, 1, 2, 3, 4];
const people = [
  {
    name: 'bob',
    age: 25,
    position: 'developer',
  },
  {
    name: 'brand',
    age: 20,
    position: 'designer',
  },
  {
    name: 'mike',
    age: 50,
    position: 'CEO',
  },
];

function showPerson(person) {
  console.log(person.position.toUpperCase());
}
// forEach + callback
people.forEach(showPerson);
