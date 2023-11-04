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
const shivam = {
  firstName: "Shivam",
  lastName: "Deshmukh",
  age: 2037 - 1994,
  job: "Software Engineer",
  friends: ["Michael", "Steven", "Peter"],
};

console.log(shivam);
