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

/*
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
*/

//////////////////////////////////////
// REGULAR FUNCS VS. ARROW FUNCS

/*
const sam = {
  firstName: 'Sam',
  year: 1997,
  calcAge: function () {
    // console.log(this);
    console.log(2024 - this.year);

    const self = this; // SELF OR THAT

    // SOLUTION 1
    /*
    const isMillenial = function () {
      console.log(self);
      // console.log(this.year >= 1981 && this.year <= 1996); 
      // CASUES AN ERROR AS THE 'THIS' HAS TO BE UNDEFINED IN A FUNCTION SO IT WONT WORK - YOU CAN MAKE IT A VARIABLE AND CALL IT THAT WAY (SELF)

      console.log(self.year >= 1981 && self.year <= 1996); // NOW WORKS AS THE 'THIS' WAS CALLED OUTSIDE THE FUNCTION
    };
    isMillenial(); // CALL THE FUNCTION
  },
  */

  /*

  // SOLUTION 2
  const isMillenial = () => {
    console.log(this);
    console.log(this.year >= 1981 && this.year <= 1996);
  }
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`) 
  }
  isMillenial();
}


sam.greet();

sam.calcAge(); // CASUES AN ERROR AS THE 'THIS' HAS TO BE UNDEFINED IN A FUNCTION SO IT WONT WORK - YOU CAN MAKE IT A VARIABLE AND CALL IT THAT WAY

// console.log(this.firstName); // UNDEFINED - NOT AN ERROR

// BEST PRACTICE
// NEVER USE VAR AS CAN CAUSE MANY ERRORS
// NEVER USE ARROW FUNC AS A METHOD

// greet: function () {
//   console.log(`Hey ${this.firstName}`);
// } // REG FUNC - 'THIS' KEYWORD WORKS


// sam.greet();
// console.log(this.firstName); // UNDEFINED - NOT AN ERROR

*/


// ARGUMENTS KEYWORD

/*
const addExpressionFunc = function (a, b) {
  console.log(arguments); // WORKS
  return a + b;
};
addExpressionFunc(2, 5);

const addArrowFunc = (a, b) => a + b; // ARGUMENNT KEYWORDS DO NOT WORK FOR ARROW FUNCS
*/

/////////////////////////////
// Primitives vs Objects (Primitive vs Reference Types) - BIG DIFFERENCE


/*
let age = 27;
let oldAge = age;
age = 28
console.log(oldAge);
console.log(age);

const sam = {
  name: 'Sam',
  age: 27,
}

const friend = sam;
friend.age = 28;

console.log('Friend:', friend);
console.log('Sam:', sam);
*/

// PRIMITIVES VS. OBJECTS

// PRIMITIVES TYPES
let lastName = 'Smith';
let oldLastName = lastName;
lastName = 'Davis';
console.log(oldLastName);
console.log(lastName)

// REFERENCE TYPES
const Jessica = {
  firstName: 'Jessica',
  lastName: 'Smith',
  age: 27
};

const marriedJessica = Jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', Jessica);
console.log('After marriage: ', marriedJessica);

// marriedJessica = {}; // DOES NOT WORK

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Smith',
  age: 27,
  family: ['Alice', 'Bob']
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary'); // NEEDS DEEP CLONING
jessicaCopy.family.push('John'); // NEEDS DEEP CLONING

console.log('Before marriage:', jessica2);
console.log('After marriage: ', jessicaCopy);