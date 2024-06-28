'use strict';

// SELECTING ELEMENTS
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const score1 = document.querySelector('#score--0');
// const score1 = document.getElementById('score--0') // SAME AS ABOVE
const score2 = document.querySelector('#score--1');
const current1 = document.getElementById('current--0');
const current2 = document.getElementById('current--1');
const diceL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


score1.textContent = 0;
score2.textContent = 0;
diceL.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;


// ROLLING DICE FUNCTIONALITY

btnRoll.addEventListener('click', function () {
  // 1. GENERATING RANDOM DICE ROLL
  const dice = Math.trunc(Math.random() * 6) + 1;

  // 2. DISPLAY DICE
  diceL.classList.remove('hidden');
  diceL.src = `dice-${dice}.png`;


  // 3. CHECK IF 1 IS ROLLED. IF TRUE, SWITTCH TO NEXT PLAYER
  if(dice !== 1) {
    // ADD DICE SCORE TO CURRENT SCORE
    currentScore += dice; // currentScore = currentScore + dice - is the same 
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    // current1.textContent = currentScore; // ONLY CHANGES FOR CURRENT 1 BUT ABOVE DOES FOR WHICH EVER IS THE ACTIVE PLAYER
  } else {
    // SWITCH NEXT PLAYER
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player1.classList.toggle('player--active'); // TOGGLE WILL ADDS IF NOT THERE OR REMOVERS IF IT IS THERE
    player2.classList.toggle('player--active'); // TOGGLE WILL ADDS IF NOT THERE OR REMOVERS IF IT IS THERE
  }
});

btnHold.addEventListener('click', function() {

});