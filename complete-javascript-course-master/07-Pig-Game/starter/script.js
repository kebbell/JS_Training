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

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--play');
const closeBtn = document.querySelector('.close-modal');

score1.textContent = 0;
score2.textContent = 0;
diceL.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player1.classList.toggle('player--active'); // TOGGLE WILL ADDS IF NOT THERE OR REMOVERS IF IT IS THERE
  player2.classList.toggle('player--active'); // TOGGLE WILL ADDS IF NOT THERE OR REMOVERS IF IT IS THERE
};

// ROLLING DICE FUNCTIONALITY

btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. GENERATING RANDOM DICE ROLL
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. DISPLAY DICE
    diceL.classList.remove('hidden');
    diceL.src = `dice-${dice}.png`;

    // 3. CHECK IF 1 IS ROLLED. IF TRUE, SWITTCH TO NEXT PLAYER
    if (dice !== 1) {
      // ADD DICE SCORE TO CURRENT SCORE
      currentScore += dice; // currentScore = currentScore + dice - is the same
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      // current1.textContent = currentScore; // ONLY CHANGES FOR CURRENT 1 BUT ABOVE DOES FOR WHICH EVER IS THE ACTIVE PLAYER
    } else {
      // SWITCH NEXT PLAYER
      switchPlayer(); // CALLING THE FUNCTION
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing && currentScore > 0) {
    // 1. ADD CURRENT SCORE TO ACTIVE PLAYER SCORE
    scores[activePlayer] += currentScore;
    // scores [1] = scores [1] + currentScore IS WHAT IS ABOVE
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 3. SWITCH TO NEXT PLAYER
    switchPlayer(); // CALLING FUNCTION FROM ABOVE - BROUGHT FORWARD SO IT WORKS WITH THE CURRENTSCORE > 0

    // 2. CHECK IF PLAYERS SCORE >= 50
    if (scores[activePlayer] > 49) {
      // FINISH GAME
      playing = false;
      diceL.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    }
  }
});

btnNew.addEventListener('click', function () {
    // 1. RESET SCORES AND UI ELEMENTS
    scores[0] = 0;
    scores[1] = 0;
    score1.textContent = 0;
    score2.textContent = 0;
    current1.textContent = 0;
    current2.textContent = 0;
    diceL.classList.add('hidden');

    player1.classList.remove('player--winner');
    player2.classList.remove('player--winner');
    player1.classList.add('player--active');
    player2.classList.remove('player--active');

    // 2. RESET GAME VARIABLES
    playing = true;
    activePlayer = 0;
    currentScore = 0;
});

// BELOW FUNCTION WORKS WITH THE EVENT LISTENERS BELOW (BTNSOPENMODAL) //
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

// BELOW FUNCTION WORKS WITH THE EVENT LISTENERS BELOW (BTNCLOSEMODAL & OVERLAY) //
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

// BELOW FUNCTION WORKS WITH THE FUNCTIONS ABOVE //
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// USING A KEY WITH EVENT LISTENER TO DO AN ACTION
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
