// Reference vs Value

const person = { name: 'Tomas' };
let person2 = person;

person2.name = 'Michael';
console.log(`person1 is : ${person.name}`); //Michael
console.log(`person2 is : ${person2.name}`); // Michael

const person3 = { name: 'Tomas' };
let person4 = { ...person3 };

person4.name = 'Pablo';
console.log(`person3 is : ${person3.name}`); // Tomas
console.log(`person4 is : ${person4.name}`); // Pablo
