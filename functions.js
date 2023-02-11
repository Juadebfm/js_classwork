//function myFunction
function myFunction() {
  result = 3 + 5;
  console.log(result);
}

myFunction();
//note the type above is declaring and innvoking in 2 seperate steps
// this is a immediately called function
(function anotherFunction() {
  console.log("Hello");
})();

//parameters and arguments
//parameters are values passed into functions
function thirdFunction(someNumber, someString) {
  console.log(someNumber);
  console.log(someString);
}

//note what is passed in at the call is arguments
thirdFunction(20, "some string");

// scope
//Assigning functions to variables
const newFunction = function () {
  console.log("siuuuuuuu");
}; //note that the newFunction is assigned an anonymous funtion

newFunction();

//new way of writing javascript functions
//es2015 es6 called arrow function
const arrowfunction = () => {
  console.log("I am an arrow function");
};

arrowfunction();
//note you can always assign anonymous functions to arrow functions

//Return values in javascript functions
const newerFunction = () => {
  console.log("something");
};

const call = newerFunction();

console.log(call);
// why is it writing "Undefined", it cos we don't have a return statement. return statments stops the execution of a function and returns a value to the function
// new function with return staements
const returnFunction = () => {
  const a = 20;
  return a;
};

const response = returnFunction();
console.log(response);

//after return statment, all lines of codes are ignored
const punction = () => {
  let myNumber = 20;
  return myNumber;
  myNumber = 50;
};

punction();

// understanding global scope and local scope
const globalVariable = 20;

let myPunction = () => {
  if (globalVariable < 15) {
    return "returned the fucntion early";
  }

  return 40;
};
