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
