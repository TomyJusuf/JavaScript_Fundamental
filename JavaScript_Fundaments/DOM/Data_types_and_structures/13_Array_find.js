// find
// return object( !!!)
// return first match, if no macht undefined

const people = [
  {
    name: 'bob',
    age: 25,
    position: 'developer',
    id: 1,
  },
  {
    name: 'brand',
    age: 20,
    position: 'designer',
    id: 2,
  },
  {
    name: 'mike',
    age: 50,
    position: 'CEO',
    id: 3,
  },
];
// FIND
const names = ['bob', 'susy', 'peter'];
console.log(
  names.find(function (name) {
    return name === 'bob';
  })
);

const person = people.find(function (person) {
  return person.id === 3;
});
console.log(person.name);

// FIND  vs FILTER(:return new array !!!)
const person2 = people.filter(function (person) {
  return person.id === 3;
});
console.log(person2[0].name); //(log is mike) -- [ { name: 'mike', age: 50, position: 'CEO', id: 3 } ]
console.log(person2.name); // undefined
