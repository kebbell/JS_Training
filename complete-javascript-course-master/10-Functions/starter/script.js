'use strict';

/*
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

