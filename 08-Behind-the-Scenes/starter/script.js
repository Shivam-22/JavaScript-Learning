'use strict';
/*
function calcAge(birthYear) {
  const age = 2023 - birthYear;

  console.log(firstName);

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      //!  Creating NEW variable with same name as outer scope's variable
      const firstName = 'Jonas';

      //! Reassigning outer scope's variable
      output = 'NEW OUTPUT!';

      var millenial = true;
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    //! Const and let are block scope.
    //// console.log(str);

    //! var is function scope so we were able to access it.
    console.log(millenial);
    console.log(output);

    //! In Strict mode, functions are block scoped
    //! If you wanna see the result, please remove strict mode and uncomment below code.
    ////console.log(add(2, 3));
  }

  printAge();

  return age;
}

const firstName = 'Shivam';
calcAge(1991);
//! Cannot use below as it is not in scope
//// console.log(age);
//// printAge();

//! Hoisting Variable. Only Var is allowed and its value is Undefined.
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

//! Hoisting Function. Only Function declaration is allowed. The addArrow is undefined as it is var.
console.log(addDecl(2, 3));
//console.log(addExpr(2, 3));
//console.log(addArrow(2, 3));

function addDecl(a, b) {
    return a + b;
}

const addExpr = function (a, b) {
    return a + b;
};

var addArrow = (a, b) => a + b;

// Example

if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
    console.log('All products deleted.!');
}

//! var create on global window object
var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

// 'this' Keyword

//! this keyword in global scope is simply window object
console.log(this);

const calcAge = function (birthYear) {
    console.log(2023 - birthYear);
    //! In strict mode the this keyword is undefined and in sloppy mode it will be again global object.
    //! regular call means the function is not attached to any object.
    console.log(this);
};
calcAge(1991);

const calcAgeArrow = birthYear => {
    console.log(2023 - birthYear);
    //! Arrow function does not get its own this keyword. It gets from parent which is global
    console.log(this);
};
calcAgeArrow(1980);

const shivam = {
    year: 1991,
    calcAge: function () {
        //! When we have method call the this keyword inside the method will be the object that is calling the method.
        console.log(this);
        console.log(2037 - this.year);
    },
};

shivam.calcAge();

const jonas = {
    year: 2017,
};

jonas.calcAge = shivam.calcAge; //! Method borrowing
jonas.calcAge();

const f = jonas.calcAge;
console.log(f);
*/
