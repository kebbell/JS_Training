'use strict';
// SHOULD ALWAYS USE!! - FORBIDS YOU DOING CERTAIN THINGS & GIVES VISUAL ERRORS THAT NORMAL JS WOULDNT

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
/*
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

  function cutFruitPieces(fruit) {
    return fruit * 4
  }

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} segments of orange.`;
  return juice; 
}

console.log(fruitProcessor (4, 2))
*/

// REVIEW FUNCTIONS L34
/*
const calcAge = function (birthYear) {
  return 2037 -  birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`)
    return -1;
  }

  return retirement;
  // return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(1991, 'Sam'));
console.log(yearsUntilRetirement(1970, 'John'));
*/

////////////////////////////////////////////////////////////////////////

// CODING CHALLENGE

// TEST 4

// TEST 1 IN TEST 4
/*
const calcAverage = (a, b, c) => (a + b + c) / 3;

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No team wins...');
  }
}
checkWinner(scoreDolphins, scoreKoalas);

// TEST 2 IN TEST 4

scoreDolphins = calcAverage (85, 54, 41);
scoreKoalas = calcAverage (23, 34, 27);

console.log(scoreDolphins, scoreKoalas); // just reference to help as we go along

// const checkWinner = (averageDolphins, averageKoalas) => {
//   if (averageDolphins >= 2 * averageKoalas){
//     console.log(`The winner is Dolphins, ${averageDolphins} vs. ${averageKoalas}.`);
//   } else if (averageKoalas >= 2 * averageDolphins) {
//     console.log(`The winner is Koalas, ${averageKoalas} vs. ${averageDolphins}.`);
//   } else {
//     console.log('No one wins');
//   }
// }

checkWinner (scoreDolphins, scoreKoalas)
*/


// ARRAYS L36

const friends = ['Michael', 'Steven', 'John'];
const years = new Array(1991, 2001, 2011, 2021);

console.log(friends, years);

console.log(friends[0]); // ARRAYS ARE 0 BASED SO 0 IS FIRST, 1 IS SECOND ETC

console.log(friends.length); // EXACT AMOUNT OF ELEMENTS IN THE ARRAY

 console.log(friends[friends.length-2]); // INSIDE THE BRACKETS IS DEFINED FIRST SO THE ELEMENTS (WHICH IS 0 BASED) MINUS 2 SO STEVEN IS OUTPUT

 friends[2] = 'Sam'; // CONST CAN BE CHANGED AS ARRAYS ARE NOT PRIMITIVE
 console.log(friends);

 const sam = ['Sam', 'Kebbell', ]