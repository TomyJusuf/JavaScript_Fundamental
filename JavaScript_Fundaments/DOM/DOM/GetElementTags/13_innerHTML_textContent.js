//index7.html

// innerHTML ==render text only
// textContent== render text content + tag elements

const list = document.getElementById('first');
const div = document.getElementById('second');
const item = document.querySelector('.item');

console.log(div.textContent);
console.log(list.innerHTML);
console.log(list.textContent);
// innerHtml

/*
    <li class="item">list item</li>
    <li>list item</li>
*/

const ul = document.createElement('ul');
ul.innerHTML = `<li class="item">list item</li>
      <li>list item</li>`;

document.body.appendChild(ul);
div.textContent = 'hello world';

//rendering the only text content
div.innerHTML = `
<li class="item">list item</li>
<li>list item</li>`;

/*
      div.textContent=`<li class="item">list item</li>
      <li>list item</li>
      rendering all the html tag elements plus text content
*/
