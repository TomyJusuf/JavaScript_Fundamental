// getElementsByTagName('tagname)
// node-list = array-like object
// index, lenght property but not array methods !!! (Achtung !!!)

const heading = document.getElementsByTagName('h2');
heading[0].style.color = 'red';
// console.log(heading.length);

const items = document.getElementsByTagName('li');

items[0].style.color = 'green';
items[1].style.color = 'orange';

const betterItems = [...items]; //transfer on array after use forEach method!!
betterItems.forEach((item) => {
  console.log(item);
});
console.log(items);
console.log(betterItems); //NodeList

// const arr = Array.from(items);
// arr.forEach((item) => {
//   console.log(item);
// });
