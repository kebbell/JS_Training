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
/*
const friends = ['Michael', 'Steven', 'John'];
const y = new Array(1991, 2001, 2011, 2021);

console.log(friends, y);

console.log(friends[0]); // ARRAYS ARE 0 BASED SO 0 IS FIRST, 1 IS SECOND ETC

console.log(friends.length); // EXACT AMOUNT OF ELEMENTS IN THE ARRAY

 console.log(friends[friends.length-2]); // INSIDE THE BRACKETS IS DEFINED FIRST SO THE ELEMENTS (WHICH IS 0 BASED) MINUS 2 SO STEVEN IS OUTPUT

 friends[2] = 'Sam'; // CONST CAN BE CHANGED AS ARRAYS ARE NOT PRIMITIVE
 console.log(friends);

 const firstName = 'Sam'
 const sam = [firstName, 'Kebbell', 2024 - 1997, 'Legend', friends];

 console.log(sam);

 // EXERCISE

 const calcAge = function (birthYear) {
  return 2024 -  birthYear;
}

const years = [1985, 1987, 1989, 1993, 1995, 1996, 1997, 2001, 2009, 2015, 2020];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[2]);
const age3 = calcAge(years[4]);
const age4 = calcAge(years[years.length -1]);

console.log(age1, age2, age3, age4);

const age = [calcAge(years[0]), calcAge(years[2]), calcAge(years[4]), calcAge(years[years.length -1])];
console.log(age);
*/

// ADD ELEMENTS
/*
const friends = ['Michael', 'Steven', 'John'];
const newFriend = friends.push('Sam'); // push adds to the end annd putting it in a variable (newFriends) this can help to find the length
// .PUSH RETURNS A VALUE SO ADDING THE VARIABLE INFRONT MAKES IT ABLE TO SHOW IT. .PUSH RETURNS THE LENGTH
console.log(friends);
console.log(newFriend);

friends.unshift('John');
console.log(friends);

// REMOVE ELEMENTS

const removedFriend = friends.pop(); // REMOVES THE LAST ELEMENT
// .POP RETURNS THE VALUE OF THE LAST ELEMENT THAT WAS REMOVED
friends.pop()
console.log(removedFriend);
console.log(friends);

friends.shift(); // REMOVES TTHE FIRST ELEMENT
console.log(friends);

console.log(friends.indexOf('Steven')); // 0 BASED

console.log(friends.indexOf('Bob'));

console.log(friends.includes('Sam'));
console.log(friends.includes('Michael'));

// USING AN ARRAY IN AN IF ELSE SITUATION
if (friends.includes('Steven')) {
  console.log('YAY');
} else {
  console.log('No friends');
}
*/

////////////////////////////////////////////////////////

// CODING CHALLENGE

// TEST 5

// const calTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * .15 : bill * .2;
// }

// OR
/*
const calcTip = bill => bill >= 50 && bill <= 300 ? bill * .15 : bill * .2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log(bills, tips);
 
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);
*/

// OJECTS L39

/*
const sam = {
  firstName: 'Sam',
  lastName: 'Kebbell',
  age: 2024 - 1997,
  job: 'Legend',
  fr
iends: ['Michael', 'Steven', 'John']
}
console.log(sam); 

console.log(sam.lastName); // . CANN NOT BE A STRING, IT HAS TO BE A PROPERTY NAME
console.log(sam['lastName']); // BRACKETS CAN USE ANY NAME

const nameKey = 'Name';
console.log(sam['first' + nameKey]);
console.log(sam['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Sam? Choose between firstName, lastName, age, job or friends');
// console.log(sam[interestedIn]); // BRACKET MADE IT POSSIBLE AS IT DIDNT HAVE TO DEFINE AN PROPERTY (THIS WOULDNT WORK WITH .)

if(sam[interestedIn]) {
  console.log(sam[interestedIn]);
} else {
  console.log('Please try again! Choose between firstName, lastName, age, job or friends');
}

sam.location = 'IOM';
sam['footballTeam'] = 'Norwich';
console.log(sam);
*/

///////////////////////////////////////////////////////////////

// CODING CHALLENGE

// TEST 6

// TO WRITE 'SAM HAS 3 FRIENDS AND HIS BEST FRIEND IS MICHAEL, AS JS CODE
/*
const sam = {
  firstName: 'Sam',
  lastName: 'Kebbell',
  age: 2024 - 1997,
  job: 'Legend',
  friends: ['Michael', 'Steven', 'John']
};

console.log(`${sam.firstName} has ${sam.friends.length} friends, and his best friend is called ${sam.friends[0]}`);
*/

// OBJECT METHODS L41

// const sam = {
//   firstName: 'Sam',
//   lastName: 'Kebbell',
//   birthYear: 1997,
//   job: 'Legend',
//   friends: ['Michael', 'Steven', 'John'],
//   hasDriversLicense: true,

  // calcAge: function (birthYear) {
  //   return 2024 - birthYear;
  // }

  // calcAge: function () {
  //   return 2024 - this.birthYear; //this helps the NO REPEAT RULE
  // }

  // calcAge: function () {
  //   this.age = 2024 - this.birthYear; 
  //   return this.age; 
    // USING THIS.AGE HELPS LATER TO LOG MULTIPLE AS SHOWN BELOW WITH THE 3 CONSOLE LOGS

    // HELPS WITH ONLY DOING THE CALCULATION ONCE AND BEING ABLE TO USE MULTIPLE TIMES
//   }
// };

// BECAUSE calcAGE IS BEING CALLED FROM SAM BELOW, ABOVE THE FUNCTION SHOULDNT REPEAT ITTSELF AND USE THIS. INSTEAD AS THIS WILL HELP THE NR RULE AND IF ANYTHING IS CHANGED, YOU DONTT HAVE TO UPDATE THE FUNCTION

// console.log(sam.calcAge()); 

// console.log(sam['calcAge'](1997));

// console.log(sam.age);
// console.log(sam.age);
// console.log(sam.age);

///////////////////////////////////////////////////////////////////////////////

// CODING CHALLENGE

// TEST 7

// 'SAM IS A 27 YEAR OLD (JOB) AND HE HAS A DRIVERS LICENSE' WRITTEN IS JS CODE

// const sam = {
//   firstName: 'Sam',
//   lastName: 'Kebbell',
//   birthYear: 1997,
//   job: 'Legend',
//   friends: ['Michael', 'Steven', 'John'],
//   hasDriversLicense: true
// }

// const sam = {
//   firstName: 'Sam',
//   lastName: 'Kebbell',
//   birthYear: 1997,
//   job: 'Legend',
//   friends: ['Michael', 'Steven', 'John'],
//   hasDriversLicense: true,

//   calcAge: function () {
//   this.age = 2024 - this.birthYear; 
//   return this.age;
//   },

//   getSummary: function() {
//     return `${this.firstName} is a ${this.calcAge()} ${sam.job} and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers license.`
//   }
// };

// console.log(sam.getSummary());

// Jonas Answer ^^

//////////////////////////////////////////////////////////////////////////////////////

// CODING CHALLENGE

// TEST 7
/*
const mark = {
  firstName: 'Mark',
  lastName: 'Miller',
  mass: 78,
  height: 1.69,

  calcBMI: function() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

console.log(mark.calcBMI());

const john = {
  firstName: 'John',
  lastName: 'Smith',
  mass: 92,
  height: 1.95,

  calcBMI: function() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

console.log(john.calcBMI());


if (john.calcBMI > mark.calcBMI) {
  console.log(`${john.firstName}'s BMI (${john.calcBMI()}) is higher than ${mark.firstName}'s (${mark.calcBMI()})`)
} else {
  console.log(`${mark.firstName}'s BMI (${mark.calcBMI()}) is higher than ${john.firstName}'s (${john.calcBMI()})`)
};
*/

// LOOPS L43

//console.log('Lifting weights reps 1');

// FOR LOOP KEEPS RUNNNING WHILE CONDITION IS TRUE
/*
for(let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights reps ${rep}`);
}
*/

const samArray = [
  'Sam', 
  'Kebbell', 
  2024 - 1997, 
  'Legend', 
  ['Michael', 'Steven', 'John']
];

for (let i = 0; i < 5; i++) {
  console.log(sam[i]); // (LET) THEN FIRST IS THE START SO I = 0, THEN FOR HOW LONG SO I < 5 AND THEN BY HOW MANY SO I++ TO ADD 1 EACH TIME.
}


