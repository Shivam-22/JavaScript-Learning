// let js = "amazing";
// console.log(10 + 20 + 5);

// //// OPERATORS

// const now = 2037;

// const ageShivam = now - 1994;
// const ageSarah = now - 2018;

// console.log(ageShivam, ageSarah);

// console.log(ageShivam * 2, ageShivam / 10, 2 ** 3);
// // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// const firstName = "Shivam";
// const lastName = "Deshmukh";
// console.log(firstName + " " + lastName);

// let year = 2023;
// console.log(typeof year);

// //Assignment Operators

// let x = 10 + 5;
// x += 10;
// x *= 4;
// x++;
// x--;
// --x;
// ++x;
// console.log(x);

// // Comparison Operators

// console.log(ageShivam > ageSarah);

// // String and templates Literak

// const fName = "Shivam";
// const job = "developer";
// const birthYear = "1994";
// const yearNow = "2023";

// const shivam =
//   "I'm " +
//   firstName +
//   ", a " +
//   (yearNow - birthYear) +
//   " years old " +
//   job +
//   "!";

// console.log(shivam);

// const shivamNew = `I'm ${firstName}, a ${
//   yearNow - birthYear
// } years old ${job}!`;

// console.log(shivamNew);

// const age = 17;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//   console.log("Shivam can start driving 🚗");
// } else {
//   console.log("Shivam needs to wait.! ✋");
// }

// const birthYear = 1994;
// let centuries;
// if (birthYear <= 2000) {
//   centuries = 20;
// } else {
//   centuries = 21;
// }

//// Type Conversion and Coercion

// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number("Shivam"));
// console.log(typeof NaN);

// console.log(String("23"));

// // type coercion

// console.log("I am " + 23 + " years old.!");

// console.log("23" - "10" - 3);

// // Truthy and falsy

// // 5 falsy Value : 0, '', undefined, null, Nan

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("jonas"));
// console.log(Boolean(""));
// console.log(Boolean({}));

// const money = 0;

// if (money) {
//   console.log("Don't use it all.!");
// } else {
//   console.log("You should get a Job.!");
// }

// // Equality Operator

// const age = 18;
// if (age === 18) console.log("you just became an adult");

// // '18' == 18 True Do not use strict equality check
// // '18' === 18 False Checks type as well.

// //Prompt Example

// const favNumber = prompt("What's your fav number. ?");
// console.log(favNumber);

// if (Number(favNumber) === 23) {
//   console.log("It's an amazing number");
// }

// if (Number(favNumber) !== 23) {
//   console.log("Why not 23");
// }

// const hasDriversLicense = true;
// const hasGoodVision = false;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasGoodVision);

// if (hasDriversLicense && hasGoodVision) {
//   console.log("Sarah can drive.!");
// } else {
//   console.log("Someone else should drive");
// }

// // Switch Statements

// const day = "monday";

// switch (day) {
//   case "monday":
//     console.log("Plan course structure");
//     break;
//   case "tuesday":
//     console.log("Prepare theory videos");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("Write code examples");
//     break;
//   case "friday":
//     console.log("Record videos");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("Enjoy weekend.!");
//     break;
//   default:
//     console.log("Not a valid weekdays");
// }

// if (day === "monday") {
//   console.log("Plan course structure");
// } else if (day === "tuesday") {
//   console.log("Prepare theory videos");
// } else if (day === "wednesday" || day === "thursday") {
//   console.log("Write code examples");
// } else if (day === "friday") {
//   console.log("Record videos");
// } else if (day === "saturday" || day === "sunday") {
//   console.log("Enjoy weekend.!");
// } else {
//   console.log("Not a valid weekdays");
// }

// // Statement and Expression

// // Conditional Operator

// const age = 23;
// age >= 18
//   ? console.log("I like to drink wine 🍷")
//   : console.log("I want to drink water 💧");

// const drink = age >= 18 ? "wine 🍷" : "water 💧";
// console.log(drink);

// console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);
