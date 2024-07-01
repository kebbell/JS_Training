'use strict';
/////////////////////////
// FOR SCOPING
/*
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
*/

///////////////////////////
// FOR HOISTING

// Hoisting Variables
/*
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
// ONLY FUNCTION DECLARATION CAN BE DEFINED BEFORE CALLING

const addExpressionFunc = function (a, b) {
  return a + b;
};
addExpressionFunc();

const addArrowFunc = (a, b) => a + b;
*/

/////////////////////////
// THIS KEYWORD

// console.log(this);

const calcAge = function (birthYear) {
  console.log(2024 - birthYear);
  // console.log(this); // IN STRICT MODE === UNDEFINED
};
calcAge(1997);

const calcAgeArrow = birthYear => console.log(2024 - birthYear);
// console.log(this); // IN ARROW FUNCTION === WINDOW BECAUSE OF LEXICAL SCOPING

calcAgeArrow(1980);

const sam = {
  year: 1997,
  calcAge: function () {
    console.log(this);
    console.log(2024 - this.year);
  },
};
sam.calcAge(); // CALL THE FUNCTION

// THIS COMES FROM THE CALLING OF SAM.CALCAGE, NOT THE VARIABLE NAME OF CONST SAM =

const matilda = {
  year: 2017,
};

matilda.calcAge = sam.calcAge;
matilda.calcAge();

// 'THIS' FROM ABOVE IS BEINNG CALLED BY BOTH SAM AND MATILDA SO WILL PRESENT BOTH WHENN CALLED

// THIS IS DYNAMIC AND NNOT STATIC