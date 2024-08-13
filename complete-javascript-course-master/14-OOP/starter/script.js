'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
}

new Person ('Sam', 1997);

console.log(Person);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const Player = function (name, marker) {
  this.name = name;
  this.marker = marker;
};

Player.prototype.getMarker = function () {
  return this.marker;
}

const player1 = new Player('player1', 'X');
const player2 = new Player('player2', 'O');

console.log(player1, player2)


