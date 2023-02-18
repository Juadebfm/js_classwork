// Strings and arrays are data types in javascript that are "ITERABLE" meaning, we can run loops over them
let letters = ["a", "b", "c"];
for (let i = 0; i < letters.length; i++) {
  console.log(letters[i]);
}

let strings = "abc";
for (let j = 0; j < letters.length; j++) {
  console.log(letters[j]);
}

// We cannot use array methods on string and vice versa
let parting = "Goodbye";

let name_ = "Robin";

// Which of the following can be used to return both of these values as a combined string? Choose all that apply.

console.log(parting + name_);

console.log(parting.concat(name_));

// console.log(parting.pop());

console.log(parting.length);
console.log(parting.charAt(0)); //To read each individual character at a specific index in a string, starting from zero, I can use the charAt() method:
console.log("Wo".concat("rl").concat("d")); //The concat() method joins two strings:
console.log(parting.indexOf("G")); //The indexOf returns the location of the first position that matches a character:
console.log(parting.lastIndexOf("o")); //The lastIndexOf finds the last match, otherwise it works the same as indexOf.

let fX = "ho-ho-ho";
console.log(fX.split("-")); // The split method chops up the string into an array of sub-strings:

console.log(parting.toUpperCase());
console.log(parting.toLowerCase());
