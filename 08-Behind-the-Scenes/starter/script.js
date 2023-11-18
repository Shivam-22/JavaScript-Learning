'use strict';

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
