//index6.html

//prepend
//innerText

const heading = document.createElement('h1');
heading.innerText = 'hello world';
document.body.prepend(heading);

// remove
// removeChild

const result = document.querySelector('#result');
// result.remove();

const heading2 = result.querySelector('h1');

result.removeChild(heading2);
console.log(heading2);
