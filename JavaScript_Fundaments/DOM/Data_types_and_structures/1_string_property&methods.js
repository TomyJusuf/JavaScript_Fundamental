let text = ' Tomas Matusek';
let result = text.length;
console.log(result); //14

console.log(text.toLowerCase()); //tomas matusek
console.log(text.toUpperCase()); //TOMAS MATUSEK
console.log(text.charAt(1)); //T
console.log(text.charAt(text.length - 1)); //k
console.log(text.indexOf('T')); //1
console.log(text.indexOf('t', 5)); //9
console.log(text.toLocaleLowerCase().indexOf('t')); //1
console.log(text.toLocaleLowerCase().indexOf('t', 5)); //9
console.log(text.trim()); //remove white space
console.log(text.trim().toLocaleLowerCase().startsWith('tomas')); //true or false
console.log(text.includes('sek')); //true or false
console.log(text.slice(0, 3));
