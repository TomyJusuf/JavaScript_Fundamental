//index5.html

// createElement('Element')
// createTextNode('text content')
// element.appendChild(childElement)

// insertBefore('element','location')
// replaceChild

const result = document.querySelector('#result');
const first = document.querySelector('#first');

// create empty element
const bodyDiv = document.createElement('div');

// create text node
const text = document.createTextNode('a simple body div');
bodyDiv.appendChild(text);
// document.body.appendChild(bodyDiv);

//insert method
document.body.insertBefore(bodyDiv, result);

// create empty h2 tag
const heading = document.createElement('h2');

// create text node
const headingText = document.createTextNode('dynamic heading');

heading.classList.add('blue');
heading.appendChild(headingText);
// append method
// result.appendChild(heading);

//insert method
result.insertBefore(heading, first);

// replaceChild(what'element',location)
const smallHeading = document.createElement('h6');
const smallText = document.createTextNode(`I'm small heading text`);
smallHeading.classList.add('red');
smallHeading.appendChild(smallText);
const bodyChildren = document.body.children;
document.body.replaceChild(smallHeading, bodyDiv);
