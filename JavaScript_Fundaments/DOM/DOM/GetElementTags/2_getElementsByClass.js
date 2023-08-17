// Select the element or group of elements the we want
// Decide the effect we want to applay to the selection

// getElementsByClassName('classname')

// node-list = array-like object
// index, lenght property but not array methods !!!(Achtung !!!)

const listItems = document.getElementsByClassName('special');
console.log(listItems);
listItems[1].style.color = 'red';
