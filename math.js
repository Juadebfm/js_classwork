// MATH OBJECT
// RANDOM()
// this is a very popular math object method that generates random number between 0 - 99
let randomNumber = Math.random();
console.log(randomNumber);
console.log(Math.ceil(randomNumber * 10));

// Number Constants
console.log(Math.PI);
console.log(Math.E);
console.log(Math.LN2);

//Number rounding methods
Math.ceil(); //rounds up to closest integer
Math.floor(); // rounds down to closest integer
Math.round(); //rounds up to the closest integer if the decimal is .5 or above; otherwise, rounds down to the closest integer
Math.trunc(); // trims the decimal, leaving only the integer

// Math and calc methods
Math.pow(2, 3); // calculates the number 2 to the power of 3, the result is 8

Math.sqrt(16); //calculates the square root of 16, the result is 4

Math.cbrt(8); //finds the cube root of 8, the result is 2

Math.abs(-10); //returns the absolute value, the result is 10

// Logarithmic methods
Math.log();
Math.log2();
Math.log10();

// Return the minimum and maximum values of all the inputs:
Math.min(9, 8, 7); //returns 7,
Math.max(9, 8, 7); // returns 9.

//  Trigonometric methods:
Math.sin();
Math.cos();
Math.tan(); //etc.
