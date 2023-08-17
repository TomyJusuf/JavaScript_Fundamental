// index4.html

// className
// classList

const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');

//consol our class name
// check class name value
const classValue = first.className; //colors
console.log(classValue);
//
//
//
// ADD Classes
second.className = 'colors';
// second.className = 'text'; //it remove the second.className what we had assigment(classList is better solution)

// instead if that we can use syntax like that 'colors text' ,with that we applay both classes
second.className = 'colors text'; // ( !!!)

third.classList.add('colors'); // add class 'colors
third.classList.add('text'); // add even second class 'text'

// or another syntax we can use thousends classes
third.classList.add('colors', 'text');

// REMOVE
third.classList.remove('text');

// CONTAINS !!!! --> used in event 15_events.js project
let result = third.classList.contains('colors'); //(contains) return true or false if token is included
if (result) {
  console.log('hello');
} else {
  console.log('does not have the class');
}
