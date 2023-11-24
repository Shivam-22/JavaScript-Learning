'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}, will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicous pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

/*
//! Spread Operator
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr); //? old approach

const newArr = [1, 2, ...arr]; //todo: Takes out all element and put it in new array
console.log(newArr);

console.log(...newArr); //todo: writes element individually

const newMenu = [...restaurant.mainMenu, 'Palak Paneer', 'Chicken Handi'];
console.log(newMenu);

//! shallow copy array
const mainMenuCopy = [...restaurant.mainMenu];

//! Join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

//todo: Iterables: arrays, strings,maps,sets. Not Objects.
const str = 'Shivam';
const letters = [...str, ' ', 'D.'];
console.log(letters);
console.log(...str);

// const ingredients = [
//   prompt("let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];

// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { founded: 1998, ...restaurant, founder: 'Jonas' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Raama';
console.log(restaurantCopy.name);
console.log(restaurant.name);

//! ////////////////////////////////////////////////////////////
  restaurant.orderDelivery({
  time: '22:30',
  address: 'GIDC, Ankleshwar',
  mainIndex: 2,
  starterIndex: 2,
});

//! Destructuring Objects
//? variable names are same as property name.
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//? variable name is different than property name.
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//! Default values to object destructuring
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//! mutate the variable
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

//! Nested Object destructuring
// const { fri } = openingHours; //? This will destructure the nested object
// console.log(fri);
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close); //? This will further destructure the object.

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c); //? Given name as per convience.

//! Destructuring Array
const arr = [2, 3, 4];
const [x, y, z] = arr; //! It is not an array. Its just destructuring of an array.
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// // Swap using third variable
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

//Received 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//! Nested Array
const nested = [2, 4, [5, 6]];
console.log(nested);
const [i, , j] = nested;
console.log(i, j);

//! nested destructuring
const [a, , [b, c]] = nested;
console.log(a, b, c);

//! Default Values for destructuring
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

//! Rest operator
//? Spread, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

//? Rest, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];

console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrrom', 'Onion', 'olives', 'tomatos');


//! Short Circuiting

//? They can use any data type, can return any data type, short-circuting
//? In case of OR operator -
//? If first value is truthy value then it will immediately retun the first value
//? If first value is truthy then javascript will not look for another value. else it will look for another value and print if its truthy.
//?

//Todo : ------ OR ------
console.log(3 || 'Shivam');
console.log('Shivam' || 3);
console.log('' || 0);
console.log(true || 0);
console.log(undefined || null); // Both are falsy value
console.log(undefined || 0 || '' || 'shivam' || 3 || null);

//restaurant.numGuests = 23;

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guest2 = restaurant.numGuests || 10;
console.log(guest2);

//Todo : ------ AND ------

//? If first value is falsy value then it will immediately retun the first value without evaluating the second value
//? If first value is truthy then it  will not look for another value and last value is returned.

console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'jonas');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');


//! Nullish Coalescing Operator
restaurant.numGuests = 0;
const guest = restaurant.numGuests || 10;
console.log(guest);

//? Nullish values are : Null and undefined (Not 0 or '')
const guessCorrect = restaurant.numGuests ?? 10;
console.log(guessCorrect);


//! Logical Assignment Operator

const rest1 = {
  name: 'Capri',
  //numGuest: 20,
  numGuest: 0,
};
const rest2 = {
  name: 'Lapiazza',
  owner: 'giovanni Rossi',
};

//? OR assignment operator
// rest1.numGuest = rest1.numGuest || 10;
// rest2.numGuest = rest2.numGuest || 10;

// rest1.numGuest ||= 10;
// rest2.numGuest ||= 10; //* If value is falsy then it will print 10. For example if we keep numGuest as 0. Its falsy.

rest1.numGuest ??= 10;
rest2.numGuest ??= 10;

console.log(rest1);
console.log(rest2);

//? AND assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest2);
console.log(rest1);


//! For of loop

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

for (const item of menu) console.log(item);

//? Getting current index in for of loop
for (const item of menu.entries()) {
  console.log(`${item[0] + 1} : ${item[1]}`);
}

//? destructuring in for of loop
for (const [i, el] of menu.entries()) {
  console.log(`${i} : ${el}`);
}

//console.log([...menu.entries()]);


//! Enhanced object literal

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
//* THIRD way of object enhancement
const openingHours1 = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  //* can compute anything
  [`day-${2 + 4}`]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant1 = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  //* SECOND way of enhanced object Literal
  orderDelivery({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}, will be delivered to ${address} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicous pasta with ${ing1}, ${ing2} and ${ing3}`
      );
    },
    orderPizza(mainIngredient, ...otherIngredient) {
      console.log(mainIngredient);
      console.log(otherIngredient);
    },
    // openingHours1: openingHours1, //* old school way
    //? New ES6 enhanced object literal
    openingHours1, //* First way
  };
  
  console.log(restaurant1);
  
  
  //! Optional  chaining
  // console.log(restaurant.openingHours.mon.open); This will give error. as we are trying to do operation on undefined. so we need to check first as shown below.
  
if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

//More Checks need to be in placed
if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}

//? Solution is optional chaining

console.log(restaurant.openingHours.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');

console.log(restaurant.orderRisato?.(0, 1) ?? 'Method does not exist');

// Arrays
const users = [{ name: 'Shivam', email: 'shiv@sh.io' }];
const user1 = [];
console.log(users[0]?.name ?? 'User array empty');
console.log(user1[0]?.name ?? 'User1 array empty');


//! Looping on Object

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
//* THIRD way of object enhancement
const openingHours1 = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  //* can compute anything
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Property NAME
const properties = Object.keys(openingHours1);
console.log(properties);
let openStr = `We are open on ${properties.length} days`;

for (const day of properties) {
  openStr += ` ${day},`;
}

console.log(openStr);

// Property VALUES
const values = Object.values(openingHours1);
console.log(values);

// Entire Object
const entries = Object.entries(openingHours1);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

*/

//! Sets
//? It is a collection of unique values, that means it can never have duplicate values
//? Sets can hold mix data type.

const orderSets = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(orderSets);

//? 1. Values are unique
//? 2. Order in sets are irrelevant

console.log(new Set('Shivam'));

//? Size of Set
console.log(orderSets.size);

//? Check if a certain element is in Sets
console.log(orderSets.has('Pizza'));
console.log(orderSets.has('Bread'));

//? Add new element to the set
orderSets.add('Garlic Bread');
orderSets.add('Garlic Bread');

console.log(orderSets);

//? Delete an element to the set
orderSets.delete('Risotto');
console.log(orderSets);

//? Delete all element from the set
//* orderSets.clear();
//* console.log(orderSets);

//? Retrieved value from Set -  We cannot get data out of sets
//? We can just know whether the value is in or not in Set

//? Sets are iterable

for (const order of orderSets) {
  console.log(order);
}

//? USE CASE - to remove duplicates.
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

const staffUnique = new Set(staff);
console.log(staffUnique);

//? Convert sets into an Array - Spread operator works on all iterables
const staffUniqueArray = [...new Set(staff)];
console.log(staffUniqueArray);

//? Size
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

console.log(new Set('Shivam').size);
