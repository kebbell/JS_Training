'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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
// Functions

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

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

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// // Set

// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);
// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`); // KEY DOESN'T EXIST IN SET
//   console.log(currenciesUnique);

/*
console.log(Number('23'));
console.log(+'23'); // SAME AS ABOVE
// + is the same as Number

// PARSING
console.log(Number.parseInt('30px', 10));
console.log(Number.parseInt('e23', 10));

console.log(Number.parseInt(' 2.5rem ')); // 2
console.log(Number.parseFloat(' 2.5rem ')); // 2.5

console.log(parseFloat('  2.5rem  ')); // 2.5


// CHECK IF VALUE IS NaN
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20X'));
console.log(Number.isNaN(23 / 0));


// CHECK IF VALUE IS NUMBER
// BETTER TO CHECK IF VALUE IS NOT NaN
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20X'));
console.log(Number.isFinite(23 / 0));


console.log(Number.isInteger('20'));
console.log(Number.isInteger(23.0));
*/
/*
// TRUTHY AND FALSY VALUES
// 5 FALSY VALUES: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));
*/

/*
// MATHS AND ROUNDING

console.log(Math.sqrt(25)); // SQUARE ROOT
console.log(25 ** (1 / 2)); // SQUARE ROOT
console.log(8 ** (1 / 3)); // CUBIC ROOT

console.log(Math.max(5, 18, 23, 11, 2));
console.log(Math.max(5, 18, '23', 11, 2)); // WILL RETURN 23 AS MAX IS A STRING, TYPE COERCION
console.log(Math.max(5, 18, '23px', 11, 2)); // PARSING WILL FAIL AS '23px' IS NOT A NUMBER

console.log(Math.min(5, 18, 23, 11, 2));

console.log(Math.PI * Number.parseFloat('10px') ** 2); // 314.1592653589793

console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
// 0...1 -> 0...(max - min) -> min...max
// console.log(randomInt(10, 20));

// Rounding integers

console.log(Math.trunc(23.3)); // Math.trunc RETURNS THE INTEGER PART OF A NUMBER (REMOVES DECIMALS)

console.log(Math.round(23.3)); // ROUNDS THE NUMBER DOWN
console.log(Math.round(23.9)); // ROUNDS THE NUMBER DOWN

console.log(Math.ceil(23.3)); // ROUNDS THE NUMBER UP
console.log(Math.ceil(23.9)); // ROUNDS THE NUMBER UP

console.log(Math.floor(23.3)); // ROUNDS THE NUMBER DOWN
console.log(Math.floor('23.9')); // ROUNDS THE NUMBER DOWN
// ALL WORK WITH COERCION

console.log(Math.trunc(-23.3)); 
console.log(Math.floor(-23.3)); // FLOOR WORKS CORRECTLY WITH NEGATIVE NUMBERS
console.log(Math.ceil(-23.3)); 

// Rounding decimals

console.log((2.7).toFixed(0)); // RETURNS A STRING
console.log((2.7).toFixed(3)); // RETURNS A STRING
console.log(+(2.345).toFixed(2)); // + CONVERTS TO A NUMBER

// THE REMAINDER OPERATOR

console.log(5 % 2); // RETURNS THE REMAINDER
console.log(5 / 2); // RETURNS THE QUOTIENT

const isEven = n => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(514));

labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    if (i % 2 === 0) row.style.backgroundColor = 'orangered';
    if (i % 3 === 0) row.style.backgroundColor = 'blue'
  });
});
*/

/*
// NUMERIC SEPARATOR

const diameter = 287_460_000_000;
console.log(diameter);

const price = 345_99;
console.log(price); // Underscore is a numeric separator

const transferFee1 = 15_00; // Both are the same value
const transferFee2 = 1_500; // Underscore is a numeric separator

const PI = 3.1415;
console.log(PI);

console.log(Number('230_000')); // Doesn't work
console.log(parseInt('230_000')); // Works until the underscore
*/

/*
// BIG INT - STORES NUMBERS WITH A LARGE RANGE OF VALUES

console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);

console.log(483897656890790765n);
console.log(BigInt(73627));

// console.log(Math.sqrt(16n)); // Don't work

// Operations
console.log(10000n + 10000n);
console.log(10000n - 10000n);
console.log(10000n * 10000n);
console.log(10000n / 10000n);
console.log(10000n ** 10000n);

const huge = 1987654321n;
const num = 23;
console.log(huge * BigInt(num));

// Expressions
console.log(20n - 13n);
console.log(20n === 20);
console.log(typeof 20n);
console.log(20n == -'20');

console.log(huge + ' is REALLY big!!!');

// Division
console.log(10 / 3);
console.log(10n / 3n);
*/


// DATES

const now = new Date();
console.log(now);

console.log(new Date('2022-03-24'));
console.log(new Date('March 24, 2022'));
console.log(new Date(2022, 2, 24, 11, 23, 5));
console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));

console.log(new Date(account1.movementsDates[0]));

const future = new Date(2037, 10, 19, 15, 23);

console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes);

console.log(future.toISOString());

console.log(date.now());

future.setFullYear(2040); // CHANGES THE YEAR
console.log(future);
