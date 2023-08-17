// index18.html

// event object argument e, evt
// info about triggered event
// event.type
// event.currentTarget
// this keyword
// preventDefault() - prevents default behaviour

const heading = document.querySelector('h1');
const btn = document.querySelector('.btn');
const link = document.querySelector('#link');
heading.addEventListener('click', function (e) {
  e.currentTarget.classList.add('blue');
  console.log(e.currentTarget); // <h1>some heading</h1>
  console.log(e.type); //click
  console.log(this); // <h1>some heading</h1> (this is not so recomended) becose arrow function
});

function someFunc(e) {
  e.preventDefault();
}

link.addEventListener('click', someFunc);
