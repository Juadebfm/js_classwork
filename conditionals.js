/* Conditionals statements sometimes/ mostly use arithmetic, logical or comparison operators to evaluate if the conditions resolve to a binary (true or false) value, if the statement consist of just 1 condition, we use the "if" statement, if it consist of 2 conditions we use "if else" statement and if it consist of more than 2 conditions, we use the "if, else if" statements or the switch statement */

//One Condition

// Two Conditions

//More Than Two Conditions

/* For this example, we will be using both the "if, else if" statement and the "switch statement" */

// consider a variable called "place"
const place = "First";

if (place == "First") {
  console.log("The Athlete Has The Gold Medal");
} else if (place == "Second") {
  console.log("The Athlete Has The Silver Medal");
} else if (place == "Third") {
  console.log("The Athlete Has The Bronze Medal");
} else {
  console.log("The Athlete Has No Medal");
}

// This can be rewritten with a switch statement
switch (place) {
  case "First":
    console.log("The Athlete Has The Gold Medal");
    break;
  case "Second":
    console.log("The Athlete Has The Gold Medal");
    break;
  case "Third":
    console.log("The Athlete Has The Gold Medal");
    break;
  default:
    console.log("The Athlete Has The Gold Medal");
}
