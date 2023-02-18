// Bugs is a piece of code that will still run, but the code does not work the way we want it to
// function addNums(a, b) {
//   console.log(a + b);
// }
// addNums("1", 2); // This is a bug coz our code still runs but the code doesnt behave the way we want it to
//Errors are of 3 types "SYNTAX", "TYPE" and "REFERENCE" errors

/* ReferenceError
A ReferenceError gets thrown when, for example, one tries to use variables that haven't been declared anywhere. An example can be, say, attempting to console log a variable that doesn't exist:*/
// let username;
// console.log(username);

// SyntaxError : Any kind of invalid JavaScript code will cause a SyntaxError.
// let word = "Hello;

/*TypeError
A TypeError is thrown when, for example, trying to run a method on a non-supported data type.

A simple example is attempting to run the pop() method on a string: */
// "hello".pop(); // Uncaught TypeError: "hello".pop is not a function

// WORKING WITH CATCH & THROW
try {
  // here you insert the code that you expect to throw and error
  console.log(a + b);
} catch (err) {
  // you catch the erro that the try block produces
  //and you place the cold you'll like to continue running even after the error
  console.log(err);
  console.log("there was an error");
  console.log("the error was saved in the error log");
  console.log("Network error", err);
}
console.log("my program doesn't stop");

// importance of try catch block is that even if js finds errors, it doesnt stop program execution

// Let's manually/ intentionally throw an errow
// try {
//   throw new ReferenceError();
// } catch (err) {
//   console.log(err);
//   console.log("There was a reference error");
// }
// console.log("my program doesn't stop");
