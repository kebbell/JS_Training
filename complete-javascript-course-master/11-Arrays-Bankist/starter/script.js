'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/*
let arr = ['a', 'b', 'c', 'd', 'e', 'f'];

// SLICE
console.log(arr.slice(2));
console.log(arr.slice(2, 4));

console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));

console.log(arr.slice());
console.log([...arr]); // SPREAD OPERATOR DOES THE SAME AS ABOVE

// SPLICE

console.log(arr.splice(2)); // REMOVES 2 ELEMENTS FROM THE ORIGINAL ARRAY
console.log(arr.splice(-1)); // -1 is always the last element
console.log(arr);

// REVERSE

arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2); // ORIGINAL IS MUTATED - WILL NOW BE AT REVERSED STATE

// CONCAT - MERGES TWO ARRAYS
const letters = arr.concat(arr2);

console.log(letters);
console.log([...arr, ...arr2]); // SAME AS ABOVE

// JOIN

console.log(letters.join(' - '));

// AT

const arr = [23, 11, 64];

console.log(arr[0]);
console.log(arr.at(0)); // SAME AS ABOVE


// GETTING THE LAST ELEMENT

console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)); // SHOWS AS AN ARRAY - ADD A [0] AT THE END TO MAKE A NUMBER
console.log(arr.slice(-1)[0]);

console.log(arr.at(-1)); // NEW EASIER WAY TO GET LAST ELEMENT

console.log('jonas'.at(2));
*/

/*
// LOOPING ARRAYS WITH EACH OTHER

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
 }

console.log('-----forEach-----');

movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});

// CAN NOT BREAK OUT OF A FOR EACH LOOP

*/

// Maps
/*
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Set

const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`); // KEY DOESN'T EXIST IN SET
});
*/
///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

/*
const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrection = dogsJulia.slice();
  dogsJuliaCorrection.splice(0, 1); // (0, 1) 0 = REMOVE ELEMENT AT AND 1 = HOW MANY to remove

  dogsJuliaCorrection.splice(-2); // REMOVES THE LAST TWO
  // console.log(dogsJuliaCorrection);

  const dogs = dogsJuliaCorrection.concat(dogsKate);
  // console.log(dogs);

  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
console.log('-------------------');
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
*/
// DATA TRANSFORMATION - MAPS, FILTERS, REDUCE

// MAPS

// MAPS RETURN A NEW ARRAY CONTAINING THE RESULTS OF APPLYING THE OPERATION ON ALL ORIGINAL ARRAY ELEMENT

// FOR EXAMPLE: ARRAY HAS 5 ELEMENTS LIKE CONST ARR = [1, 2, 3, 4, 5] AND A MAP TO * 2 WOULD THEN MAKE A NEW ARRAY WITH EVERYTHING DOUBLED LIKE [2, 4, 6, 8, 10]

// FILTER

// FILTER RETURN A NEW ARRAY CONTAINING THE RESULTS OF APPLYING THE OPERATION ON ALL ORIGINAL ARRAY ELEMENT

// EG: ARRAY HAS 5 ELEMENTS LIKE CONST ARR = [1, 2, 3, 4, 5] AND A FILTER TO  > 2 WOULD THEN MAKE A NEW ARRAY WITH ELEMENTS REMOVED LIKE [3, 4, 5]

// REDUCE - SNOWBALL EFFECT

// REDUCE RETURN A SINGLE VALUE

// EG: ARRAY HAS 5 ELEMENTS LIKE CONST ARR = [1, 2, 3, 4, 5] AND A REDUCE TO SUM ALL ELEMENTS LIKE 15

/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });
const movementsUSD = movements.map(mov => mov * eurToUsd); // SAME AS ABOVE

console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);

console.log(movementsUSDfor);

const movementsDescription = movements.map(function (mov, i, arr) {
  if (mov > 0) {
    return `Movement ${i + 1} : You deposited ${mov}`;
  } else {
    return `Movement ${i + 1} : You withdrew ${Math.abs(mov)}`;
  }
});

const movementsDescriptionfor = movements.map(
  (mov, i) =>
    `Movement ${i + 1} : ${
      mov > 0 ? 'You deposited' : 'You withdrew'
    } ${Math.abs(mov)}`
);
// BOTH DO THE SAME, JUST ONE USES A TURNERY OPERATOR

console.log(movementsDescriptionfor);

console.log(movementsDescription);
*/
/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
/*
const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const adults = humanAges.filter(age => age >= 18);
  console.log(humanAges);
  console.log(adults);
  const averageAge = humanAges.reduce(
    (acc, age, i, arr) => acc + age / arr.length,
    0
  );
  return averageAge;
};
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
*/

// const eurToUsd = 1.1;

// // PIPELINE
// const totalDepositsUSD = account1.movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * eurToUsd)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositsUSD);

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

/*
const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const adults = humanAges.filter(age => age >= 18);
  console.log(humanAges);
  console.log(adults);
  const averageAge = humanAges.reduce(
    (acc, age, i, arr) => acc + age / arr.length,
    0
  );
  return averageAge;
};
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
*/
/*
const calcAverageHumanAge = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0); // TAKE THE ARRAY.LENGTH FOR THE AVERAGE

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);


// FIND METHOD

const firstWithdrawal = movements.find(mov => mov > 0);

console.log(movements);
console.log(firstWithdrawal);

// FILTER RETURNS A NEW ARRAY, FIND RETURNS THE FIRST ELEMENT

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);
*/

/*
// Check if an element exists in an array
console.log(movements);
// This logs: true if the array includes -130, false otherwise
console.log(movements.includes(-130));

// Check if at least one element satisfies a condition
// This logs: true if the array includes -130, false otherwise
console.log(movements.some(mov => mov === -130));

// Check if at least one element satisfies a condition
// This logs: true if the array includes a deposit, false otherwise
const anyDeposits = movements.some(mov => mov > 0);

console.log(anyDeposits);

// EVERY METHOD
// Check if all elements satisfy a condition
// This logs: true if the array includes only positive numbers, false otherwise
console.log(movements.every(mov => mov > 0));

// SOME METHOD
// Check if at least one element satisfies a condition
// This logs: true if the array includes a withdrawal, false otherwise
console.log(movements.some(mov => mov < 0));

// separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));

// FINDINDEX METHOD
const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

const arr = [
  [1, 2, 3],
  [4, 5],
  [6, 7],
];

console.log(arr.flat());
// [1, 2, 3, 4, 5, 6, 7]
// flat() flattens nested arrays to 1 array

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2)); // GOES 2 DEEP SO 2 LEVELS DEEP
// [1, 2, 3, 4, 5, 6, 7, 8]
// flat() flattens nested arrays to 1 array

// flat

// const accountMovements = accounts.map(acc => acc.movements);

// const allMovements = accountMovements.flat();
// console.log(allMovements);

// const overaLlBalance = allMovements.reduce((acc, mov) => acc + mov, 0);

const overallBalance = accounts
  .map(acc => acc.movements) // MAP RETURNS AN ARRAY (ALL ACCOUNTS TO 1 ARRAY)
  .flat() // FLATTENS THE ARRAY INTO 1
  .reduce((acc, mov) => acc + mov, 0); // 0 SPECIFIES WHERE THE ACCUMULATOR STARTS AND REDUCES ALL THE 1 TOTAL

// flatMap
const overallBalance2 = accounts
  .flatMap(acc => acc.movements) // flatMap can only go 1 level deep
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance2);

// SORT
// Strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());
console.log(owners);

// Numbers
// console.log(movements);
//console.log(movements.sort()); // CONVERTS INTO STRINGS BEFORE SORTING

// if a > b, return 1 (keep order)
// if a < b, return -1 (switch order)

// Ascending

// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });

// Improved
movements.sort((a, b) => a - b);
console.log(movements);

// Descending
// movements.sort((a, b) => {
//   if (a < b) return 1;
//   if (a > b) return -1;
// });

// Improved
movements.sort((a, b) => b - a);
console.log(movements);
*/

/*
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// Empty Arrays + Fill Method
const x = new Array(7);
console.log(x);

// x.fill(1); // FILLS THE ARRAY WITH THE VALUE SPECIFIED

x.fill(1, 3, 5); // 1 = VALUE, 3 = START, 5 = END
console.log(x); 

arr.fill(23, 2, 6);
console.log(arr);


// Array.from
const y = Array.from({length: 7}, () => 1); // Length specifies the length of the array
// () => 1 specifies the value of the array
console.log(y);


// const z = Array.from({length: 7}, (cur, i) => i + 1);
// console.log(z);

const z = Array.from({length: 7}, (_, i) => i + 1); // _ = VALUE, i = INDEX
console.log(z);


// const movementsUI = Array.from(document.querySelectorAll('.movements__value'));
// console.log(movementsUI);

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(document.querySelectorAll('.movements__value'), el => Number(el.textContent.replace('€', '')));

  console.log(movementsUI);
});
*/

// WHICH ARRAY METHOD SHOULD YOU USE?

// I WANT:

// TO MUTATE ORIGINAL ARRAY

// ADD TO ORIGINAL: arr.push(), arr.unshift()
// REMOVE FROM ORIGINAL: arr.pop(), arr.shift(), arr.splice()
// OTHERS: arr.reverse(), arr.sort(), arr.fill()

// A NEW ARRAY

// COMPUTE FROM ORIGINAL: arr.map()
// FILTER FROM ORIGINAL: arr.filter()
// PORTION FROM ORIGINAL: arr.slice()
// ADDING ORIGINAL TO NEW: arr.concat()
// FLATTENING THE ORIGINAL: arr.flat(), arr.flatMap()

// AN ARRAY INDEX

// BASED ON VALUE: arr.indexOf(), arr.lastIndexOf()
// BASED ON TEST CONDITION: arr.findIndex()

// AN ARRAY ELEMENT

// BASED ON TEST CONDITION: arr.find()

// KNOW IF ARRAY INCLUDES

// BASED ON VALUE: arr.includes()
// BASED ON TEST CONDITION: arr.some(), arr.every()

// A NEW STRING

// BASED ON SEPARATOR: arr.join()

// TO TRANSFORM TO VALUE

// BASED ON ACCUMULATOR: arr.reduce()

// TO JUST LOOP ARRAY

// BASED ON CALLBACK: arr.forEach()

////////////////////////////////////////

// ARRAY METHOD PRACTICE
/*
// 1.
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);
console.log(bankDepositSum);


// 2.

const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);
console.log(numDeposits1000);

// PREFIXED & OPERATOR
let a = 10;
console.log(++a); // 11
console.log(a++); // 10
console.log(a); // 11

// 3.
const {deposits, withdrawals} = accounts
  .flatMap(acc => acc.movements)
  .reduce((sums, cur) => {
    // cur > 0 ? (sums.deposit += cur) : (sums.withdrawals += cur);
    sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur; // SAME AS ABOVE
    return sums;
  }, {deposits: 0, withdrawals: 0});
console.log(deposits, withdrawals);

// 4. ORGANIZE A TITLE
const convertTitleCase = function(title) {
  const capitzalize = str => str[0].toUpperCase() + str.slice(1); 

  const exceptions = ['a', 'an', 'the', 'and', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title.toLowerCase().split(' ').map(word => {
    if (!exceptions.includes(word)) {
      return word[0].toUpperCase() + word.slice(1);
    } else {
      return word;
    }
  })
  .join(' '); 
  return titleCase;

}

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('this is a title with an EXAMPLE'));
*/

//////////////////////////////////////////////////////

// CODING CHALLENGE #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1.
dogs.forEach(dog => {
  dog.recommendedFood = dog.weight ** 0.75 * 28;
});
console.log(dogs);

// 2.
const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(sarahDog);
console.log(
  `Sarah's dog is eating too ${
    sarahDog.curFood > sarahDog.recommendedFood ? 'much' : 'little'
  }`
);

// 3.
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendedFood)
  .flatMap(dog => dog.owners);
const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recommendedFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);

// 4.
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// 5.
console.log(
  dogs.some(dog => dog.curFood === dog.recommendedFood)
);

// 6.
console.log(
  dogs.some(dog => dog.curFood > dog.recommendedFood * 0.9 && dog.curFood < dog.recommendedFood * 1.1)
);

// 7.
const okayDogs = dogs.filter(dog => dog.curFood > dog.recommendedFood * 0.9 && dog.curFood < dog.recommendedFood * 1.1);
console.log(okayDogs);

// 8.
const sortedDogs = dogs.slice().sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(sortedDogs);
