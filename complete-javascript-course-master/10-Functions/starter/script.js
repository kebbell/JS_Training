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
}

const transformer = function (str, fn) {
  console.log(`Original string: ${str} `);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);

}

// JS uses callbacks all the time
transformer('Sam is working on Javascript', upperFirstWord)

transformer('JavaScript is the best!', oneWord)

const high5 = function () {
  console.log('👋');
}
document.body.addEventListener('click', high5)

['Jonas', 'Martha', 'Adam'].forEach(high5)


//

