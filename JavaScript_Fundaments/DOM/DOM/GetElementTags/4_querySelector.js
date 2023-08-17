// Select the element or group of element the we want

// querySelector('any css') - select single
// querySelectorAll('any css') - select all

const result = document.querySelector('#result');
result.style.backgroundColor = 'orange';

const item = document.querySelector('.special');
console.log(item);

const lastItem = document.querySelector('li:last-child');
console.log(lastItem);

const list = document.querySelectorAll('.special');
console.log(list);

list.forEach((item) => {
  console.log(item);
  item.style.color = 'yellow';
});
