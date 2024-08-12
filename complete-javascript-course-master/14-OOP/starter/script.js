'use strict';

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