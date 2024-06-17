'use strict'; // SHOULD ALWAYS USE!! - FORBIDS YOU DOING CERTAIN THINGS & GIVES VISUAL ERRORS THAT NORMAL JS WOULDNT

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive');
*/

/*
const interface = 'Audio'; // RESERVED WORDS
const private = 534; // RESERVED WORDS
*/

// FUNCTIONS L30

/*
function logger() {
  console.log('my name is Sam');
}

logger(); //CALLING, RUNNING OR ENVOKING THE FUNCTION (USING FUNCTION JUST DEFINED)
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice; 
}

const appleJuice = fruitProcessor(5, 0); //ARGUMENTTS
console.log(appleJuice)

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice)
*/

// FUNCTIONS - DECLARATION & EXPRESSIONS L31

// DECLARATION FUNCTION //
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1997);
console.log(age1);
// ^^ DECLARATION FUNCTION ^^ //

// EXPRESSION FUNCTION //
const calcAge2 = function (birthYear) {
 return 2037 - birthYear;
}

const age2 = calcAge2(1997);

console.log(age1, age2)
// ^^ EXPRESSION FUNCTION ^^ //

// ARROW FUNCTION // L32
const calcAge3 = birthYear => 2037 - birthYear // GOOD FOR ONE LINE FUNCTIONS
const age3 = calcAge3(1997);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2024 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(1997, 'Sam'));
console.log(yearsUntilRetirement(1980, 'Jack'));

// FUNCTIONS CALLING OTHER FUNCTTIONS L33

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice; 
}