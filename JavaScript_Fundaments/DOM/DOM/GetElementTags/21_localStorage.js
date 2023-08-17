// index14.html

// Web Storage API - provided by browser
// session storage --(holding info-data till browser  isn't close), local storage --(store data even browser is closed)
// setItem, getItem, removeItem, clear
// ( in browser in Application setting bar aka element,console,sourses)

// localStorage.setItem('name', 'tom');
// sessionStorage.setItem('name', 'tom');

localStorage.setItem('name', 'marko polo');
localStorage.setItem('friend', 'pablo escobar');
localStorage.setItem('job', 'developer');
localStorage.setItem('address', 'NY street 132');

const name = localStorage.getItem('name');
console.log(name);

localStorage.removeItem('name');
const anotherName = localStorage.getItem('name');
console.log(anotherName);
localStorage.clear();
