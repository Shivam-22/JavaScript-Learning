// // Activating Strict Mode
//"use strict";

// let hasDriversLicence = false;
// const passTest = true;
// if (passTest) {
//   hasDriversLicence = true;
// }
// if (hasDriversLicence) console.log("I can drive.😊!");

// const interface = "Audio";
// const private = 543;
// const if = 34;

//// Functions

// function logger() {
//   console.log("My name is Shivam");
// }

// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const applejuice = fruitProcessor(5, 0);
// console.log(applejuice);
// console.log(fruitProcessor(5, 0));

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

//// Function Declaration
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);
// console.log(age1);

//// Function Expression OR Anonymous Function

// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };
// const age2 = calcAge2(1991);
// console.log(age2);

//// Arrow Function

// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1991, "Shivam"));

//// Function calling another Function

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//   return juice;
// }
// console.log(fruitProcessor(2, 3));

//// Arrays

// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);

// const y = new Array(1991, 1984, 2008, 2020);
// console.log(y);

// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "Jay";
// console.log(friends);

//// Only Primitive data types are constant and immutable. Others are mutable. So we were able to change the value of Peter to Jay. What we cannot do is change complete array as shown below. That will throw illegal expression.
//// friends = ["Bob", "Alice"]; Illegal expression

// const jonas = [
//   "Shivam",
//   " Deshmukh",
//   2037 - 1994,
//   "Software Engineer",
//   friends,
// ];
// console.log(jonas);
// console.log(jonas.length);

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);

// console.log(age1, age2, age3);

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];

// console.log(ages);

//// Basic Array Operations

//const friends = ["Michael", "Steven", "Peter"];

//Add elements
// const newLenght = friends.push("Jay"); // Adds element at end of the array
// console.log(friends);
// console.log(newLenght);

// friends.unshift("John"); // Adds element at the start of the Array
// console.log(friends);

//Remove Element
// const popElement = friends.pop(); // Removes the last element from Array
// console.log(friends);
// console.log(popElement);

// friends.shift(); // Removes the first element from Array
// console.log(friends);

// console.log(friends.indexOf("Steven")); //gives index of value
// console.log(friends.indexOf("Bob"));
// console.log(friends.includes("Steven")); // returns true or false
// console.log(friends.includes("Bob")); // checks for strict equality

//// Objects
//Object literal Syntax
// const shivam = {
//   firstName: "Shivam",
//   lastName: "Deshmukh",
//   age: 2037 - 1994,
//   job: "Software Engineer",
//   friends: ["Michael", "Steven", "Peter"],
// };

// console.log(shivam);
// console.log(shivam.lastName); // Dot operator

// console.log(shivam["firstName"]); // Bracket
// const nameKey = "Name";

// console.log(shivam["first" + nameKey]);
// console.log(shivam["last" + nameKey]);

// const interestedIn = prompt(
//   "What do you want to know about shivem? Choose between firstName, lastName, age, job and friends"
// );

// console.log(shivam.interestedIn); // undefinded

// if (shivam[interestedIn]) {
//   console.log(shivam[interestedIn]);
// } else {
//   console.log(
//     "Wrong request.! Choose between firstName, lastName, age, job and friends "
//   );
// }

// Dot notation to add new value to object

// shivam.location = "India";
// shivam["github"] = "shivam-22";
// console.log(shivam);

// Challenge
// "Shivam has 3 friends and his best friends is called Michael"

// console.log(
//   `${shivam.firstName} has ${shivam.friends.length} friends, and his best friend is called ${shivam.friends[0]}`
// );

//// Objects Methods
/*
const shivam = {
  firstName: "Shivam",
  lastName: "Deshmukh",
  birthYear: 1991,
  job: "Software Engineer",
  friends: ["Michael", "Steven", "Peter"],
  hasDriversLicense: true,
  //   calcAge: function (birthYear) {
  //     return 2037 - birthYear;
  //   },

  //   calcAge: function () {
  //     console.log(this);
  //     return 2037 - this.birthYear;
  //   },

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is ${this.calcAge()} years old and work as ${
      this.job
    } and he has ${this.hasDriversLicense ? "a" : "no"} Driver's License`;
  },
};
console.log(shivam.calcAge()); // Dot Operator
//console.log(shivam["calcAge"]()); // Bracket Operator

console.log(shivam.age); // It will calculate age once and then we will just retrieve  the age property
console.log(shivam.age);
console.log(shivam.age);
console.log(shivam.getSummary());
*/

//// Iteration the for loop

// console.log("Lifting weight repetition 1 🏋️");
// console.log("Lifting weight repetition 2 🏋️");
// console.log("Lifting weight repetition 3 🏋️");
// console.log("Lifting weight repetition 4 🏋️");
// console.log("Lifting weight repetition 5 🏋️");
// console.log("Lifting weight repetition 6 🏋️");
// console.log("Lifting weight repetition 7 🏋️");
// console.log("Lifting weight repetition 8 🏋️");
// console.log("Lifting weight repetition 9 🏋️");
// console.log("Lifting weight repetition 10 🏋️");

// for loop keeps running while condition is TRUE
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weight repetition ${rep} 🏋️`);
// }

//// Looping Arrays
/*
// Fetching value from Array
const shivam = [
  "Shivam",
  " Deshmukh",
  2037 - 1994,
  "Software Engineer",
  ["Michael", "Steven", "Peter"],
  true,
];

for (let i = 0; i < shivam.length; i++) {
  console.log(shivam[i], typeof shivam[i]);
}

// Inserting value to Array

const types = [];

for (let i = 0; i < shivam.length; i++) {
  // Filling  types Array
  // types[i] = typeof shivam[i];

  types.push(typeof shivam[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];
for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

//// Continue and Break Statement

console.log("--- ONLY STRINGS ---");
for (let i = 0; i < shivam.length; i++) {
  if (typeof shivam[i] !== "string") continue;
  console.log(shivam[i], typeof shivam[i]);
}

console.log("--- BREAK AFTER NUMBER ---");
for (let i = 0; i < shivam.length; i++) {
  if (typeof shivam[i] === "number") break;
  console.log(shivam[i], typeof shivam[i]);
}
*/

// // Looping backwards

// const shivam = [
//   "Shivam",
//   "Deshmukh",
//   2037 - 1994,
//   "Software Engineer",
//   ["Michael", "Steven", "Peter"],
// ];

// for (let i = shivam.length - 1; i >= 0; i--) {
//   console.log(i, shivam[i]);
// }

// for (let exercise = 1; exercise <= 3; exercise++) {
//   for (let rep = 1; rep <= 5; rep++) {
//     console.log(`Exercise ${exercise} : Lifting weight repetition ${rep}`);
//   }
// }

//// While Loop
/*
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weight repetition ${rep} 🏋️`);
}
let rep = 1;
while (rep <= 10) {
  console.log(`WHILE : Lifting weight repetition ${rep} 🏋️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`you rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log("Loop is about to end...");
  }
}
*/
