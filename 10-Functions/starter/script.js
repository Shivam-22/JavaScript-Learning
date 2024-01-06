'use strict';

//// Default Parameters
// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassegers = 1,
//   price = 199 * numPassegers
// ) {
//   //   // ES5
//   //   numPassegers = numPassegers || 1;
//   //   price = price || 199;

//   //! ES6 - add in paramter

//   const booking = {
//     flightNum,
//     numPassegers,
//     price,
//   };

//   bookings.push(booking);
// };
// console.log(bookings);
// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', 5);

//// Pass Arguments value vs reference

// const flight = 'LH234';
// const jonas = {
//   name: 'Jonas Schmedtmann',
//   passport: 4132456789545,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 4132456789545) {
//     alert('Checked In');
//   } else {
//     alert('Wrong passport');
//   }
// };

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 100000000000);
// };
// newPassport(jonas);
// checkIn(flight, jonas);

//// Higher Order Functions

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// const transformer = function (str, fn) {
//   console.log(`Original Str: ${str}`);
//   console.log(`Transform string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('JavaScript is the best', upperFirstWord);
// transformer('JavaScript is the best', oneWord);

//// Functions that returns a new FUNCTION

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('Hey');
// console.log(greeterHey);

// greeterHey('Shivam');
// greet('Hello')('Shivam Deshmukh');

// const greets = greeting => name => console.log(`${greeting} ${name}`);
// greets('Hi')('shivam');

const lufthansa = {
  airline: 'lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({
      flight: `${this.iataCode}${flightNum}`,
      name,
    });
  },
};

lufthansa.book(239, 'Shivam Deshmukh');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const euroWings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};
const book = lufthansa.book;
//book(23, 'Sarah Williams'); <--- This will throw error as it do not know how this should invoke

//! Call method
book.call(euroWings, 23, 'Sarah Williams');
console.log(euroWings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

//! Apply method - Does not use anymore in modern JavaScript
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);
console.log(swiss);

//! Bind method
//book.call(euroWings, 23, 'Sarah Williams');

const bookEW = book.bind(euroWings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');
console.log(euroWings);

const bookEW23 = book.bind(euroWings, 23);
bookEW23('Shivam Deshmukh');
bookEW23('Martha Cooper');

//! With Event Listners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//! Partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
