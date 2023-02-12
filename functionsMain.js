// note GLOBAL SCOPE AND FUNCTION SCOPE
// a variable in a function scope cannot be accessed in a global level but a variable in a global scope can be accessed in a function. So it goes one way from global to function but not from function to global

// syntax
//Note this functions accepted no arguments i.e no parameter was added
function add2Numbers() {
  const a = 10;
  const b = 115;
  const result = a + b;
  console.log(result);
}

//call/invoke/execute the function below
add2Numbers();

//To make this better we add paramenters to this function
function addTwoNumbers(a, b) {
  //parameters
  const result = a + b;
  console.log(result);
}
addTwoNumbers(400, 100); //arguments

//Immediately Invoked Functions
(function immInvoked() {
  console.log("I am a function that is called directly as immediately invoked");
})();

//Storing functions in variables
const variabledFunction = function () {
  console.log("A function stored inside a variable");
};
variabledFunction();
//note functions stored inside variables are normally called "ANONYMOUS FUNCTIONS because they don't have a "Function Name"

//NEW WAYS OF WRITING FUNCTIONS ES6 --- 2015 CALLED ARROW FUNCTION
const arrowFunction = () => {
  console.log("I am an arrow function");
};
arrowFunction();
//Basic syntax
const something = () => {};

//return value in functions if we want our function The return statement is used to return a particular value from the function to the function caller. The function will stop executing when the return statement is called. The return statement should be the last statement in a function because the code after the return statement will be unreachable.
const myFunction = () => {
  const a = 200;
  return a > 30;
};

const result = myFunction();
console.log(result);

//Function and object relationship
function myFunc() {
  return 20;
}
myFunc();

const functionVariable = myFunc;
const funcObj = {
  prop1: "New Here",
  prop2: myFunc,
  prop3: 1000,
};

funcObj.prop2();

//https://www.tutorialspoint.com/javascript/javascript_builtin_functions