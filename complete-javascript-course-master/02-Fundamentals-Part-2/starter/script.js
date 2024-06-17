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

