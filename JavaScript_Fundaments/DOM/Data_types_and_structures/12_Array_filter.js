// filter
// does return a new array !!!
// can manupulate the size of new array
// return based on condition

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

const youngPeople = people.filter(function (person) {
  return person.age <= 25;
});

const developers = people.filter(function (person) {
  return person.position == 'developer';
});
console.log(developers);
//[{ name: 'bob', age: 25, position: 'developer' }];

console.log(youngPeople);
/*
[
  { name: 'bob', age: 25, position: 'developer' },
  { name: 'brand', age: 20, position: 'designer' }
]
*/
