'use strict';

const Person = function (firstName, birthYear) {
  // Instance properties //
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this!
  // this.calcAge = function () {
  //   console.log(2024 - this.birthYear);
  // };
};

const sam = new Person ('Sam', 1997);

console.log(sam);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const jack = new Person('Jack', 1985);
const matilda = new Person('Matilda', 1991);
const jonas = new Person('Jonas', 1993);
console.log(jonas, jack, matilda);

console.log(jack instanceof Person);
console.log(jonas instanceof Person);

// Prototypes

console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jack.calcAge();
matilda.calcAge();
jonas.calcAge();

console.log(jack.__proto__);
console.log(jack.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(jack));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty.call(jonas, 'firstName'));
console.log(jonas.hasOwnProperty.call(jack, 'firstName'));


