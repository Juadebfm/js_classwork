//Loops is used to continually execute a repeated block of code until a certain condition is satisfied

// loop syntax consist of a counter, an operator and an incrementor

//consider this for loop
for (let i = 1; i < 4; i++) {
  console.log(i);
}

//pratical example
// a code that counts down for sprinters ready to run using a for loop
for (let r = 1; r <= 3; r++) {
  console.log(r);
}
console.log("GO!");

for (let newYear = 10; newYear > 0; newYear--) {
  console.log(newYear);
}
console.log("Happy New Year");
// We have many types of loops namely the "FOR", "WHILE" & "NESTED" loop
//1. FOR is a structured loop which is used to loop a block of code a certain number of times, it must have a "Counter variable" which must be set to a start value, then a condition must be specified and then the counter must be incremented/decremented depending on your need or what you want to achieve

//2. The while loop is similar to the "FOR" loop as it will also run as long as the condition returns true however in "WHILE" loops, the start counter/counter variable is set outside of the loop body and the increment is done inside of the loop's body

//consider this while loop
let i = 1;
while (i < 4) {
  console.log(i);
  // i++
  i = i + 1;
}

let happyNewYear = 10;
while (happyNewYear > 0) {
  console.log(happyNewYear);
  happyNewYear--;
}
console.log("Happy New Year!");

//NESTED LOOP, this is when you have more than 1 level of things you want to accomplish. You can have a loop within a loop such that when one loop is completed i.e resolves to true the other is activated
//Practical example -- Imagine you're creating a 2 weeks plan for (Mon - Fri)
//example 1
for (let week = 1; week <= 2; week++) {
  for (let days = 1; days <= 5; days++) {
    console.log("Week " + week + " day " + days);
  }
}
//example 2
for (let year = 2023; year < 2025; year++) {
  console.log(year);
  for (let month = 6; month < 9; month++) {
    console.log("..........", month);
  }
}

// example 3
/*
Let's say I want to output a custom multiplication table.
This is a perfect use case scenario for nested loops.
The outer loop's counter variable will act as the first number to be multiplied, and the inner loop counter variable will act as the second number to be multiplied. */
//single loop for first number
for (let firstNumber = 0; firstNumber < 2; firstNumber++) {
  console.log(firstNumber);
}

//single loop for second number
for (let secondNumber = 0; secondNumber < 13; secondNumber++) {
  console.log(secondNumber);
}

//nested loop for both
for (let firstNumber = 0; firstNumber < 2; firstNumber++) {
  for (let secondNumber = 0; secondNumber < 13; secondNumber++) {
    console.log(
      firstNumber +
        " times " +
        secondNumber +
        " equals " +
        firstNumber * secondNumber
    );
  }
}

//Another pratical example of nested loops
let cubes = "ABCDEFG";
//styling console output using CSS with a %c format specifier
for (let i = 0; i < cubes.length; i++) {
  let styles =
    "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
  console.log("%c" + cubes[i], styles);
}

for(var m = 0; m <= 5; m++) {
    console.log("Hello");
  }
