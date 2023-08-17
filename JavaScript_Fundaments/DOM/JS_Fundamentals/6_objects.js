// Array, Function and Objects
// Objects - key/value pairs methods
// dot notation

const person = {
  name: 'Limon',
  lastName: 'Peterson',
  age: 33,
  city: 'Las Vegas',
  education: false,
  merries: true,
  siblings: ['anna', 'brand', 'jesica'],
  greeting: function () {
    console.log('Hello, my name is ' + this.name);
  },
};

console.log(person.name);
console.log(person.siblings[1]);
person.greeting();
