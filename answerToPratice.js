// function addTwoNums(a, b) {
//   try {
//     if (typeof a != "number") {
//       throw new ReferenceError("the first argument is not a number");
//     } else if (typeof b != "number") {
//       throw new ReferenceError("the second argument is not a number");
//     } else {
//       console.log(a + b);
//     }
//   } catch (err) {
//     console.log("Error!", err);
//   }
// }
// addTwoNums("10", 100);
// console.log("it still works");

// function letterFinder(word, match) {
//   for (let i = 0; i < word.length; i++) {
//     if (word[i] == match) {
//       //check if the current characater, word[i], is equal to the match
//       console.log("Found the", match, "at", i);
//     } else {
//       console.log("---No match found at", i);
//     }
//   }
// }

// letterFinder("hipHip", "Hi");

function letterFinder(word, match) {
  let condition1 = typeof word == "string" && word.length >= 2;
  let condition2 = typeof match == "string" && match.length == 1;
  if (condition1 && condition2) {
    for (let i = 0; i < word.length; i++) {
      if (word[i] == match) {
        console.log("Found the", match, "at", i);
      } else {
        console.log("---No match found at", i);
      }
    }
  } else {
    console.log("Please pass correct arguments to the function");
  }
}

letterFinder([], []);
letterFinder("hi", "i");
