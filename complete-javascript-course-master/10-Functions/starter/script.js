'use strict';

/*
// FUNCTIONS

const bookings = [];
const createBooking = function (
  flightNum,
  numPassenger = 1,
  price = 199 * numPassenger
) {
  const booking = {
    flightNum,
    numPassenger,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 298);
createBooking('LH123', 4);
createBooking('LH123', 9);
createBooking('LH123', undefined ,9); // UNDEFINED WILL MAKE IT DEFAULT 
*/

/*
const flight = 'LH235'
const sam = {
  name: 'Sam Kebbell',
  passport: 3829971923,
}

const checkIn = function(flightNum, passenger) {
  flightNum = 'LH999'
  passenger.name = 'Mr ' + passenger.name
  
  if (passenger.passport === 3829971923) {
    alert('Check In')
  } else {
    alert('Wrong Passport')
  }
}


// checkIn(flight, sam)
// console.log(flight);
// console.log(sam);

const newPassport = function(person) {
  person.passport = Math.trunc(Math.random() * 1000000000)
} 
newPassport(sam)
checkIn(flight, sam)

*/

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function (str, fn) {
  console.log(`Original string: ${str} `);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

/*
// JS uses callbacks all the time
transformer('Sam is working on Javascript', upperFirstWord)

transformer('JavaScript is the best!', oneWord)

const high5 = function () {
  console.log('👋');
}
document.body.addEventListener('click', high5)

// ['Jonas', 'Martha', 'Adam'].forEach(high5)


// Functions returning functions

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   }
// }

const greet = greeting => name => console.log(`${greeting} ${name}`);

const greeterHey = greet('Hey')
greeterHey('Sam')
greeterHey('Tom')

greet('Hello')('Sam')

greet('Hello')('Sam')


*/

/*

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],

  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
  },
};

lufthansa.book(239, 'Mark Schmedtmann');
lufthansa.book(635, 'John Smith');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Does NOT work
// book(23, 'Sarah Williams');

// Call method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');

// APPLY METHOD

const flightData = [583, 'George Cooper'];

book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);



// BIND METHOD
// book.call(eurowings, 23, 'Sarah Williams');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);

bookEW (23, 'Steven Williams');

const bookLH23 = book.bind(lufthansa, 23);
bookLH23('Jonas Schmedtmann');
bookLH23('Martha Cooper');

// with event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function() {
  console.log(this);
  this.planes++;
  console.log(this.planes);
} 
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

  // PARTIAL APPLICATION

  const addTax = (rate, value) => value + value * rate; 

  console.log( addTax(.1, 200) );

  const addVAT = addTax.bind(null, .23);
  // addVAT = value => value + value * 0.23;  


  // CHALLENGE
  
  const addTaxRate = function(rate) {
    return function(value) {
      return value + value * rate;
    }
  }

  const addVAT2 = addTaxRate(.23);
  console.log(addVAT2(100));
  console.log(addVAT2(23));

  */

/////////////////////////////////
// CODING CHALLENGE

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what should the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
};

// 1

const registerNewAnswer = function () {
  // get answer
  const answer = Number(
    prompt(
      `${poll.question}\n${poll.options.join('\n')}\n (Write option number)`
    )
  );
  console.log(answer);

  // register answer
  typeof answer === 'Number' &&
    answer < this.answers.length &&
    this.answers[answer]++;
};

document.querySelector('.poll').addEventListener('click', registerNewAnswer.bind(poll));

const displayResults = function (type = 'array') {
  console.log(this.answers);
  if (type === 'array') {
    console.log(this.answers);
  } else if (type === 'string') {
    console.log(`Poll results are ${this.answers.join(', ')}`);
  }
};
displayResults.call(poll, 'string');