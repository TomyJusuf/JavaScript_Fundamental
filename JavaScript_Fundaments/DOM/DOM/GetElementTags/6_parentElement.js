// parentElement

const heading = document.querySelector('h2');

const parent = heading.parentElement;
parent.style.color = 'red';

console.log(heading); //h2
console.log(heading.parentElement); //div.second
console.log(heading.parentElement.parentElement); //div#resultTitle
