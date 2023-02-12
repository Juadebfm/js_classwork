//Javascript string methods and array methods

const myName = "Oluwafemy";

const newName = myName.replace("y", "i");
console.log(newName);

const capitalize = myName.toUpperCase();
console.log(capitalize);

let newString = "Hello World";
const result = newString.toUpperCase().split(" ");
console.log(result);

const position = result.reverse();
console.log(position);

const cap = position.toString();
console.log(cap);
