// Object Initializer
// Normal way we talked about in class
//NB: That objects created with initializers like this are called "PLAIN OBJECTS"

//Dot notation
//creating objects using the dot notation

//Using the constructor function
// we use constructor functions to create a blueprint by which we can create many objects
// Name constructor functions First letter Cap
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.name = function () {
    return this.firstName + " " + this.lastName;
  };
}

// // "this" is the instance of the obj yet to be create

const newBorn = new Person("John", "Doe", 50, "Blue");
const newBornFemale = new Person("Sally", "Rally", 48, "Green");

console.log(newBorn.age);
console.log(newBornFemale.age);

newBorn.nationality = "Nigerian";
console.log(newBorn.nationality);

//adding a method to an object
newBorn.name = function () {
  return this.firstName + " " + this.lastName;
};

console.log(newBorn.name());

// NB: You cannot add a new property/method to a constructor to an object constructor the same way you add a new property "nationality" to an existing object "NewBorn": To add a new property to a constructor, you must add it to the constructor function:

//Looping through an object
// A Loop method called for...in is the most straight forward way to loop through an objectz
const user = {
  name: "John",
  email: "test@test.com",
  age: "25",
  dob: "08/02/1980",
  active: true,
};

// for in loops and their uses on objects
for (const key in user) {
  console.log(`${key}: ${user[key]}`);
}

const courses = {
  javascript: 10,
  python: 100,
  nodeJs: 12,
  php: 1,
};

const keys = Object.keys(courses); 


keys.forEach((key, index) => {
  console.log(`${key}: ${courses[key]}`);
});
//Object maps, mapping an array of objects

//object reference system

// object class inheritance
// Sure, I'd be happy to explain object class inheritance in a way that a 9 year old could understand!

// So, imagine that you have a toy car. It's really cool, and you love playing with it. But then, your friend comes over and shows you his toy car. It's just like yours, but it has some extra features that yours doesn't have. Maybe it has working headlights, or it can go faster than your car.

// That's kind of like object class inheritance. When you create a new object (like a toy car), you can start with an existing object (like your friend's car) and add some new features to it to make it even cooler.

// In programming, these "objects" are called classes, and when you create a new class, you can start with an existing class and add new features to it. This makes it easier to create new classes that are similar to existing ones, without having to write all the code from scratch.

// So, just like how your friend's car was based on the same design as your car, but with some new features added to it, a new class can be based on an existing class, but with some new features added to it. And that's object class inheritance!

//Similarly, in programming, you can create many objects from the same class, but each object can have its own unique properties based on how it's created and used. For example, you might have a "Car" class that defines attributes like "make", "model", and "color", and methods like "start_engine" and "accelerate". You can create many objects of the "Car" class, each with its own unique make, model, and color, and each object can use the methods defined in the class to perform actions like starting the engine and accelerating.

// Classes are a fundamental concept in object-oriented programming, and they allow for code reuse, modularity, and abstraction. By defining a class, you can create objects with similar behavior and properties without having to rewrite the same code over and over again.
