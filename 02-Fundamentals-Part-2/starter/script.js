// // Activating Strict Mode
"use strict";

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

function logger() {
  console.log("My name is Shivam");
}

logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const applejuice = fruitProcessor(5, 0);
console.log(applejuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
