// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const calcAge = birthYear => 2037 - birthYear;
console.log();

//// ! Coding Challenge #1 Solution

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str = str + `...${arr[i]}℃ in ${i + 1} days `;
  }
  console.log(str);
};

printForecast([17, 21, 23]);
