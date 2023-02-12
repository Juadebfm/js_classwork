// Challenge 1 : Something is wrong with this code. Fixed it and make it work
function multiply(a, b) {
  a * b;
}

//Challenge 2 : Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
function evenOrOdd(number) {}

/*Challenge 3: You get an array of numbers, return the sum of all of the positives ones. Example [1,-4,7,12] => 1 + 7 + 12 = 20
Note: if there is nothing to sum, the sum is default to 0.*/
function positiveSum(arr) {}

/* Challenge 4 : It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
 */
function removeChar(str) {
  //You got this!
}

/*Challenge 5 In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12
*/
function makeNegative(num) {
  // Code?
}

/* Challenge 6 : Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"*/
function repeatStr(n, s) {
  return "";
}

/*Challenge 7: Simple, remove the spaces from the string, then return the resultant string.*/
function noSpace(x) {}

/*Challenge 8: Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example (Input -> Output):

2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)*/
var summation = function (num) {
  // Code here
};

/*Challenge 9 :Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.*/
class SmallestIntegerFinder {
  findSmallestInt(args) {}
}

/* Challenge 10: Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'*/
function solution(str) {}

/* Challenge 11: Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined */
function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
}

/*Challenge 12 : Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.

Examples:
1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
4) n =  12, x = 7, y = 5 => false because  12 is neither divisible*/
function isDivisible(n, x, y) {}

/* Challenge 13 : The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

Task
Given a year, return the century it is in.

Examples
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20 */
function century(year) {
  // Finish this :)
  return;
}

/* Challenge 14: Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Examples(Operator, value1, value2) --> output
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7 */
function basicOp(operation, value1, value2) {
  // Code
}

/* Challenge 15: Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6] */
function maps(x) {}

/* Challenge 16 : Our football team has finished the championship.

Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

For example: ["3:1", "2:2", "0:1", ...]

Points are awarded for each match as follows:

if x > y: 3 points (win)
if x < y: 0 points (loss)
if x = y: 1 point (tie)
We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

Notes:

our team always plays 10 matches in the championship
0 <= x <= 4
0 <= y <= 4*/
function points(games) {
  return 0;
}

/** Challenge 17 : Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

Can you help her? */
function greet(name) {
  return "Hello, " + name + "!";
  if (name === "Johnny") return "Hello, my love!";
}

/**Challenge 18 : It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty. */
function getAverage(marks) {
  //TODO : calculate the downward rounded average of the marks array
}

/**Challenge 19 : I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too. */
function arrayPlusArray(arr1, arr2) {
  return arr1 + arr2; //something went wrong
}

/**Challenge 20 : Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!" */
const rps = (p1, p2) => {};

/**Challenge 21 : A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

Return True if yes, False otherwise :) */
function hero(bullets, dragons) {
  //Get Coding!
}

/**Challenge 22: Write a function to split a string and convert it into an array of words.

Examples (Input ==> Output):
"Robin Singh" ==> ["Robin", "Singh"]

"I love arrays they are my favorite" ==> ["I", "love", "arrays" */
function stringToArray(string) {
  // code code code
}

/**Challenge 23: The function is not returning the correct values. Can you figure out why?

Example (Input --> Output ):

3 --> "Earth" */
function getPlanetName(id) {
  var name;
  switch (id) {
    case 1:
      name = "Mercury";
    case 2:
      name = "Venus";
    case 3:
      name = "Earth";
    case 4:
      name = "Mars";
    case 5:
      name = "Jupiter";
    case 6:
      name = "Saturn";
    case 7:
      name = "Uranus";
    case 8:
      name = "Neptune";
  }

  return name;
}

/**Challenge 24: Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces. */
function getCount(str) {
  return 0;
}
