// map
// does return a new array
// does not change size of original array

const ages = people.map(function (person) {
  return person.age;
});

console.log(ages);

const newPeople = people.map(function (person) {
  return {
    firstName: person.name.toUpperCase(),
    oldAge: person.age + 20,
  };
});

console.log(newPeople);

const names = people.map(function (person) {
  return `<h1>${person.name}</h1>`;
});
