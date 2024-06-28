'use strict';

// SELECTING ELEMENTS
const score1 = document.querySelector('#score--0');
// const score1 = document.getElementById('score--0') // SAME AS ABOVE
const score2 = document.querySelector('#score--1');
const diceL = document.querySelector('.dice');

score1.textContent = 0;
score2.textContent = 0;
diceL.classList.add('hidden');