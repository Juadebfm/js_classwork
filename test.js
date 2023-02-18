const arr = ["here", 10, 1000, 200, true, "flase", "false", false];

function contains(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return true;
    }
  }
  return false;
}

console.log(contains(arr, "20000"));

//Week practice
// task 1
for (let i = 1; i < 6; i++) {
  console.log(i);
}
console.log("Counting Completed");

// task 2
for (let i = 5; i > 0; i--) {
  console.log(i);
}
console.log("Countdown Finished");

// task 3
let j = 1;
while (j < 6) {
  console.log(j);
  j++;
}
console.log("Counting Completed");

// task 4
let k = 5;
while (k > 0) {
  console.log(k);
  k--;
}
console.log("Countdown Finished");

// task 5
let date = 2018;
while (date < 2023) {
  console.log(date);
  date++;
}

// task 6
for (counter = 1; counter < 11; counter++) {
  if (counter === 1) {
    console.log("Gold medal");
  } else if (counter === 2) {
    console.log("Silver medal");
  } else if (counter === 3) {
    console.log("Bronze medal");
  } else {
    console.log(counter);
  }
}

for (counterSwitch = 1; counterSwitch < 11; counterSwitch++) {
  switch (counterSwitch) {
    case 1:
      console.log("Gold medal");
      break;
    case 2:
      console.log("Silver medal");
      break;
    case 3:
      console.log("Bronze medal");
      break;
    default:
      console.log(counterSwitch);
  }
}

// last task
function letterFinder(word, match) {
  // adding the 2 parameters
  for (let i = 0; i < word.length; i++) {
    if (word[i] == match) {
      //check if the current characater, word[i], is equal to the match
      console.log("Found the", match, "at", i);
    } else {
      console.log("---No match found at", i);
    }
  }
}

letterFinder("adaeze", "a");
