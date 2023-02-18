// Today, we will treat some popular array methods
//lets add things to this array
let fruits = [];
fruits.push("Apple"); 
fruits.push("Pear");
fruits.push("Orange");
fruits.push("Mango");

console.log(fruits);

//lets remove things from this array
fruits.pop("Mango");
fruits.pop("Pear");
console.log(fruits);

// so lets write a function that adds to an array and uses the return statement
function arrayBuilder(one, two, three) {
  let arr = [];
  arr.push(one);
  arr.push(two);
  arr.push(three);
  return arr;
}

const simpleArr = arrayBuilder(1, 2, 3);
console.log(simpleArr);

// aanswer
let clothes = [];
clothes.push("Shirt");
clothes.push("Round Neck");
clothes.push("V-Neck");
clothes.push("Turtle Neck");
clothes.push("Trousers");
console.log(clothes);
clothes.pop("Trousers");
console.log(clothes);
clothes.push("Skirt");
console.log(clothes[2]);

let favCar = {};

favCar.color = "red";
favCar.convertible = true;
console.log(favCar);
