//index2.html

//nodeValue
//textContent

const item = document.getElementById('special');
console.log(item); //h1#special
console.log(item.childNodes); //NodeList[text]
console.log(item.childNodes[0]); //#text
console.log(item.childNodes[0].nodeValue); //finaly - this is special content

const value = item.firstChild.nodeValue;
console.log(value);
