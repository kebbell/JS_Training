'use strict';

/*
console.log(document.querySelector('.message').textContent); // SHOWS THE TEXT AND NO SYNTAX

document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number (document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'Input Number'
  }
})