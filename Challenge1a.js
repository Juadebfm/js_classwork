// Boolean Variable
const myBoolean = true;

//String Variable
const myString = "Hello World";

// Number Variable
const firstNumber = 20;

//Number Variable
let secondNumber = 40;

secondNumber = 80;

//Array

const myArray = [myBoolean, myString];

//Object
let sumProp = firstNumber + secondNumber;
const myObject = {
  firstProperty: myArray,
  sumProperty: sumProp,
};

// Print is console.log
console.log(myObject);
console.log(myObject.sumProperty);
console.log(myObject.firstProperty[1]);
