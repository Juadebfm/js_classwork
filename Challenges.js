// Challenge 1 : Something is wrong with this code. Fixed it and make it work
//optimal solution that ensures users imputs numbers as variables
function multiply(a, b) {
  if (!a || !b || typeof a != "number" || typeof b != "number") {
    return "Make sure the arguments are numbers";
  }
  return a * b;
}
console.log(multiply(10, 20));
//normal solution
function multiply(c, d) {
  return c * d;
}

//Challenge 2 : Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
function evenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
console.log(evenOrOdd(102));

//troop 2 using ternary operator
function evenOrOdd2(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}
console.log(evenOrOdd2(108));

//troop 3
// Using arrow functions
const evenOrOdd3 = (number) => (number % 2 === 0 ? "Even" : "Odd");
console.log(evenOrOdd3(1));

/*Challenge 3: You get an array of numbers, return the sum of all of the positives ones. Example [1,-4,7,12] => 1 + 7 + 12 = 20
Note: if there is nothing to sum, the sum is default to 0.*/
function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    } else return arr[i];
  }
  return sum;
}
console.log(positiveSum([1, 1, 3]));

/* Challenge 4 : It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
 */
function removeChar(str) {
  // ".length is a string method used in checking the length of a string"
  const lengthOfString = str.length;
  // ".substr is used to remove a letter in a string"
  return str.substr(1, lengthOfString - 2);
}
console.log(removeChar("Femi"));

//troop 2
function removeChar2(str) {
  return str.slice(1, -1);
}
console.log(removeChar2("Femi"));

//troop 3
function removeChar3(str) {
  return str.substring(1, str.length - 1);
}
console.log(removeChar3("Femi"));

//troop 4
function removeChar4(str) {
  str = str.split("");
  str.shift();
  str.pop();
  return str.join("");
}
console.log(removeChar4("Febi"));

/*Challenge 5 In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12
*/
function makeNegative(num) {
  if (num < 0) {
    return num;
  } else {
    return num * -1;
  }
}
console.log(makeNegative(10));

//troop 2 using ternary operator
function makeNegative2(num) {
  return num < 0 ? num : -num;
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
let summation = function (num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum = sum + i;
    // or sum += i
  }
  return sum;
};
console.log(summation(5));
/*Challenge 9 :Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.*/
class SmallestIntegerFinder {
  findSmallestInt(arrayOfNumbers) {
    let smallestNumber;
    for (let i = 0; i < arrayOfNumbers.length; i++) {
      const arrNumber = arrayOfNumbers[i];

      if (i === 0) {
        smallestNumber = arrayOfNumbers[i];
      }

      if (arrNumber < smallestNumber) {
        smallestNumber = arrNumber;
      }
    }
    return smallestNumber;
  }
}

/* Challenge 10: Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'*/
function solution(str) {
  // first we split the str and change it to an array, then we reverse the content of the array and then use the array method to rejoin the splited string
  return str.split("").reverse().join("");
}
console.log(solution("Word"));

//troop 2
function solution2(str) {
  return [...str].reverse().join("");
}
console.log(solution2("Adebowale"));

//troop 3
function solution3(str) {
  const arr = str.split("");
  const reverse = arr.reverse();
  console.log(reverse);
  return reverse.join("");
}
console.log(solution3("Gabriel"));

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
function isDivisible(n, x, y) {
  const result1 = n / x;
  const result2 = n / y;
  if (result1 % 1 === 0 && result2 % 1 === 0) {
    return true + " It's divisible by both x & y";
  } else if (result1 % 1 === 0 || result2 % 1 === 0) {
    return true + " One of the numbers are divisible";
  } else {
    return false + " The numbers are Not divisible";
  }
}

console.log(isDivisible(10, 1, 1));

//troop 2 using ternary oeprators
function isDivisible2(n, x, y) {
  return n % x === 0 && n % y === 0 ? true : false;
}
console.log(isDivisible2(10, 1, 1));

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
  if (name === "Johnny") {
    return "Hello my love";
  } else {
    return "Hello, " + name + "!";
  }
}
console.log(greet("John"));

//troop 2 using ternary operators
function greet2(name) {
  return "Hello, " + (name === "Johnny" ? "My love" : name) + "!";
}
console.log(greet2("Johnny"));

/**Challenge 18 : It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty. */
function getAverage(marks) {
  //average sum(all numbers)/count(all numbers)
  const count = marks.length;
  let sum = 0;

  for (let i = 0; i < count; i++) {
    sum = sum + marks[i];
  }

  const avg = sum / count;
  const roundedMarks = Math.floor(avg);
  return roundedMarks;
}
console.log(getAverage([2, 2.0, -2, 2]));

//troop 2
function getAverage2(marks) {
  return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
}
console.log(getAverage2([2, 2.0, 2, 2]));

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

const rps = (p1, p2) => {
  if (p1 === p2) return "Draw!";
  let rules = { rock: "scissors", paper: "rock", scissors: "paper" };
  if (p2 === rules[p1]) {
    return "Player 1 won";
  } else {
    return "Player 2 won";
  }
};
console.log(rps("scissors", "scissors"));

//troop 2
const rps2 = (p1, p2) => {
  if (p1 === p2) {
    return "Draw!";
  }
  if (p1 === "rock" && p2 === "scissors") {
    return "Player 1 won!";
  } else if (p1 === "scissors" && p2 === "paper") {
    return "Player 1 won";
  } else if (p1 === "paper" && p2 === "rock") {
    return "Player 1 won";
  } else {
    return "Player 2 won!";
  }
};
console.log(rps2("scissors", "rock"));

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
  let name = " ";
  switch (id) {
    case 1:
      name = "Mercury";
      break;
    case 2:
      name = "Venus";
      break;
    case 3:
      name = "Earth";
      break;
    case 4:
      name = "Mars";
      break;
    case 5:
      name = "Jupiter";
      break;
    case 6:
      name = "Saturn";
      break;
    case 7:
      name = "Uranus";
      break;
    case 8:
      name = "Neptune";
      break;
    default:
      console.log("Planet does not exist");
  }
  return name;
}
console.log(getPlanetName(3));

//second troop
function getPlanetName2(id) {
  return {
    1: "Mercury",
    2: "Venus",
    3: "Earth",
    4: "Mars",
    5: "Jupiter",
    6: "Saturn",
    7: "Uranus",
    8: "Neptune",
  }[id];
}
console.log(getPlanetName2(4));

/**Challenge 24: Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces. */
function getCount(str) {
  let vowelsCount = 0;

  const arr = str.split("");

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "a":
        vowelsCount++;
        break;
      case "e":
        vowelsCount++;
        break;
      case "i":
        vowelsCount++;
        break;
      case "o":
        vowelsCount++;
        break;
      case "u":
        vowelsCount++;
    }
  }
  return vowelsCount;
}
console.log(getCount("Balablu"));

//troop 2 using nested loops
function getCount2(str) {
  let vowelsCount = 0;
  let vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (str[i] === vowels[j]) {
        vowelsCount++;
      }
    }
  }
  return vowelsCount;
}
console.log(getCount2("Baba Blue"));

// troop 3
// using regex
function getCount3(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}
console.log(getCount3("Baba Blueae"));

//troop 4
// clever way of solving the issues
function getCount4(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  return str.split("").filter((letter) => {
    return vowels.includes(letter) ? true : false;
  }).length;
}
console.log(getCount4("Queen"));
