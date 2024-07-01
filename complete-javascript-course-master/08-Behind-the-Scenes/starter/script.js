'use strict';
/////////////////////////
// FOR SCOPING
function calcAge(birthYear) {
  const age = 2024 - birthYear;

  function printAge() {
    const output = `${firstName} you're ${age} years old, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const str = `Oh, and you're a millennial, ${firstName}`;
      console.log(str);
    } else {
      const newStr = `${firstName} is not a millenial as he was born in the year ${birthYear}.`;
      console.log(newStr);
    }
  }
  printAge(); // REMEMBER TO CALL THE FUNCTION!1

  return age;
}

const firstName = 'Sam';
calcAge(1997);

///////////////////////////
// FOR HOISTING

// Hoisting Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Sam';
let job = 'King';
const year = 1997;

// Hoisting Functions

console.log(addDeclarationFunc(2, 3));
console.log(addArrowFunc(2, 3));
console.log(addExpressionFunc(2,  3));

function addDeclarationFunc(a, b) {
  return a + b;
}
// ONLY FUNCCTION DECLARATION CAN BE DEFINED BEFORE CALLING

const addExpressionFunc = function (a, b) {
  return a + b;
};
addExpressionFunc();

const addArrowFunc = (a, b) => a + b;

