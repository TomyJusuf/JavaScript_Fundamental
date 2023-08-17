//index3.html

// getAttribute()
// setAttribute()
//
//
//
// getAttribude()
const first = document.querySelector('.first');
const idValue = first.getAttribute('id'); // special
// console.log(idValue);

const link = document.getElementById('link');
const showLink = link.getAttribute('href');
console.log(showLink);
//
//
//
//
// setAttribute()
const last = link.nextElementSibling;
last.setAttribute('class', 'first');
last.textContent = 'I also habe a class of first';

const links = document.querySelectorAll('.first');
console.log(links); //nodeList
