/* 
let js = 'amazing';
// console.log(40 + 8 + 23 - 10)

// Variable name
let firstName = "Sam"
console.log(firstName) 
*/

/* 
true;
console.log(true)

let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 21);
// console.log(typeof 'Sam');

javascriptIsFun = 'Yes!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1997;
console.log(typeof year);

console.log(typeof null);

let age = 27;
age = 31;

const birthYear = 1997;
// birthYear = 1998;

// const job; (requires a value)
*/

/*
const now = 2024
const ageSam = 2024 - 1997;
const agePaul = 2024 - 1967;
console.log(agePaul, ageSam);

console.log(agePaul / 2, ageSam * 2);
console.log(agePaul / 2, ageSam ** 2);
// ** means to the power of so 27 * 2 * 2

const firstName = 'Sam'
const lastName = 'Kebbell'
console.log(firstName + ' ' + lastName)

// Assignment Operators
let x = 10 + 5; //15
console.log(x);
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x ++; // x = x + 1 = 101
x --; // x = x - 1 = 100
x --; // x = x - 1 = 99
console.log(x)

// Comparison Operators
console.log(agePaul > ageSam); // return an answer as a boolean (asking a question)
console.log(ageSam >= 18); // >= Greater or equal too

const isFullAge = ageSam >= 18;

console.log(now - 1967 > now - 1997);
*/

/*
const now = 2024
const ageSam = 2024 - 1997;
const agePaul = 2024 - 1967;
console.log(agePaul, ageSam);

console.log(now - 1967 > now - 1997);

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10 (minus done first and then right to left to give x and y the value each as 10)
console.log(x, y);

const averageAge = (agePaul + ageSam) / 2
console.log(agePaul, ageSam, averageAge); // like maths () are always first
*/
///////////////////////////////////////////////////////////////////////////////

// CODING CHALLENGES 
// FIRST TEST

/*
// Test 1
let marksWeight = 78;
let johnsWeight = 92;

let marksHeight = 1.69;
let johnsHeight = 1.95;

marksBMI = marksWeight / (marksHeight * marksHeight)
johnsBMI = johnsWeight / (johnsHeight * johnsHeight)
console.log(marksBMI, johnsBMI)

let marksHigherBMI = (marksBMI > johnsBMI)
console.log(marksHigherBMI)
*/


/*
// Test 2
let marksWeight = 95;
let johnsWeight = 85;

let marksHeight = 1.88;
let johnsHeight = 1.76;

x = marksWeight / (marksHeight * marksHeight)
y = johnsWeight / (johnsHeight * johnsHeight)
console.log(x, y)

let marksHigherBMI = (x > y)
console.log(marksHigherBMI)
*/

/*
const firstName = "Sam";
const job = "Driver";
const birthYear = "1997";
const year = "2024";

const sam = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!'

console.log(sam)

const samNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`

console.log(samNew)

console.log(`Just a regular string...`)

console.log(`string
on
new
lines`) // Enter for a new line
*/

/*
const age = 12;

if (age >= 18) {
  console.log('Sam can start driving 🤪'); // CMD + CNTRL + SPACE for emojis
}
else {
  const yearsLeft = 18 - age;
  console.log(`Sam has ${yearsLeft} years until he can drive`)
}

// CONTROLLED STRUCTURE

if() {

} else {

}


const birthYear = 1997;
let century;

if(birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century)
*/

///////////////////////////////////////////////////////
// CODING CHALLENGE

// TEST 2
/*
let marksWeight = 78;
let johnsWeight = 92;

let marksHeight = 1.69;
let johnsHeight = 1.95;

marksBMI = marksWeight / (marksHeight * marksHeight)
johnsBMI = johnsWeight / (johnsHeight * johnsHeight)

let marksHigherBMI = (marksBMI > johnsBMI)

//
let bmi;

if (marksBMI > johnsBMI) {
  bmi = `Marks BMI (${marksBMI}) is higher than Johns (${johnsBMI})`
} else {
  bmi =`Johns BMI (${johnsBMI}) is higher than Marks (${marksBMI})`
};

console.log(bmi);

/*
let marksWeight = 95;
let johnsWeight = 85;

let marksHeight = 1.88;
let johnsHeight = 1.76;

x = marksWeight / (marksHeight * marksHeight)
y = johnsWeight / (johnsHeight * johnsHeight)

let marksHigherBMI = (x > y)

//
let bmi;


if (marksBMI > johnsBMI) {
  bmi = `Marks BMI (${marksBMI}) is higher than Johns (${johnsBMI})`
} else {
  bmi =`Johns BMI (${johnsBMI}) is higher than Marks (${marksBMI})`
};

console.log(bmi);
*/

// TYPE CONNVERSION
/*
const inputYear = '1997';
console.log(Number(inputYear), inputYear); // 'Number' converts string to number (start with capital)
console.log(Number(inputYear) + 18);

console.log(Number('Sam')); // NaN 'not a number' (invalid number)

console.log(String(23)); // 'String' converts number to string (start with capital)
*/

// TYPE COERCION (JS converting for me)
/*
console.log('I am' + 27 + ' years old') // the + does the coercion for me (+ is always number to string)
console.log('23' - '12') // the - does the coercion for me (- is always string to number)
*/

// 5 FALSY VALUES = 0, '', UNNDEFINED, NULL, NAN

// === = equal / = = assigned too

// == = type coersion (AVOID USING AS IT CAN CAUSE BUGS)

/*
const favourite = prompt('Whats your favourite number?');
console.log(favourite); // STRING
if(favourite == 23) {
  console.log('My fave number is 23') // COERSION SO CONVERTER TO NUMBER
} else if (favourite === 7) {
  console.log('7 i like the no.7 too')
} else {
  console.log('That is not my fave number')
}

if(favourite !== 23) console.log('why not 23?') // NOT EQUAL TOO
*/

// LOGICAL OPERATORS L21

/*
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision); // && = AND
console.log(hasDriversLicense || hasGoodVision); // || = OR

const isTired = false; // C

console.log(hasDriversLicense && hasGoodVision && isTired)

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sam is good to drive'); 
} else {
  console.log("Sam shouldn't drive");
}
*/

////////////////////////////////////////////////////////

// CODING CHALLENGE 

// TEST 3

/*
let dolphins1 = 96;
let dolphins2 = 108;
let dolphins3 = 89;

let koala1 = 88;
let koala2 = 91;
let koala3 = 110;

let dolphinsAverage = (dolphins1 + dolphins2 + dolphins3) / 3;
let koalasAverage = (koala1 + koala2 + koala3) / 3;

if (dolphinsAverage > koalasAverage) {
  console.log('Dolphins average is higher');
} else if (dolphinsAverage === koalasAverage) {
  console.log('Averages are the same');
} else if {
  console.log('Koalas average is higher');
} 
*/

/*
let dolphins1 = 97;
let dolphins2 = 112;
let dolphins3 = 101;

let koala1 = 100;
let koala2 = 95;
let koala3 = 123;

let dolphinsAverage = (dolphins1 + dolphins2 + dolphins3) / 3;
let koalasAverage = (koala1 + koala2 + koala3) / 3;
console.log(koalasAverage, dolphinsAverage)

if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
  console.log('Dolphins average is higher');
} else if (dolphinsAverage === koalasAverage && dolphinsAverage >= 100 && koalasAverage >= 100) {
  console.log('Averages are the same so they both win (or lose)');
} else if (dolphinsAverage < koalasAverage && koalasAverage >= 100) {
  console.log('Koalas average is higher');
} else {
  console.log('NO ONE WINS');
}
*/

// SWITCH STATEMENT L23
/*
const day = 'SUNDAY';

switch(day) {
  case 'Monday':
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'Tuesday':
    console.log ('Prepare theory vid');
    break;
  case 'Wednesday':
  case 'Thursday':
    console.log('Write code examples');
    break;
  case 'Friday':
    console.log('Record videos');
    break;
  case 'Saturday':
  case 'Sunday':
    console.log('Enjoy the weekend');
    break;
  default:
    console.log('Not a day of the week!');
}

// USING THE SWITCH HELPS AVOID REPETITIVE CODE (LIKE BELOW)

if (day === 'Monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if (day === 'Tuesday') {
  console.log ('Prepare theory vid');
} else if (day === 'Wednesday' || day === 'Thursday') {
  console.log('Write code examples');
} else if (day ==='Friday') {
  console.log('Record videos');
} else if (day === 'Saturday' || day === 'Sunday') {
  console.log('Enjoy the weekend');
} else {    
  console.log('Not a day of the week!');
}
*/

// STATEMENTTS AND EXPRESSIONS L24

// EXPRESSIONS PRODUCE A VALUE

// STATEMENT DOES NOT PRODUCE A VALUE BY ITSELF

// THE CONDITIONAL (TERNARY) OPERATOR L25

const age = 23;
// age >= 18 ? console.log('I like to drink wine 🍷') : // ? is if
// console.log('I like to drink water 💦') // : is else

const drink = age >= 18 ? 'wine 🍷' : 'water 💦';
console.log(drink) // MUCH SHORTER IF ELSE STATEMENT (BELOW IS THE SAME STATEMENT)

let drink2;
if (age >= 18) {
  drink2 = 'wine 🍷';
} else {
  drink2 = 'water 💦';
}
console.log(drink2)

console.log(`i like to drink ${age >= 18 ? 'wine 🍷' : 'water 💦'}`); // STATEMENT CAN BE INPUT INTO A STRING TEMPLATE `` WITH TERNARY OPERATORS

// TERNARY IS NOT A REPLACEMENT OF IF ELSE STATEMENTS, JUST QUICKER AND EASIER FOR SIMPLE LINES OF CODE

///////////////////////////////////////////////////////////////////

// CODING CHALLENGE

// TEST 4
/*
let bill1 = 275
let bill2 = 40
let bill3 = 430

const tip = bill1 >= 50 && bill1 <= 300 ? bill1 * .20 : bill1 * .15;
const tipMessage = `The tip is $${tip}`;
console.log(tipMessage);
*/


//////////// TO CONTINUE TOMORROW ////////////////