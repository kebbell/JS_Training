'use strict';

/*
console.log(document.querySelector('.message').textContent); // SHOWS THE TEXT AND NO SYNTAX

document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/


const secretNumber = Math.trunc(Math.random()*20)+1;
let score = 5;


document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // WHEN THERE IS NO INPUT
  if (!guess) {
    document.querySelector('.message').textContent = 'Input Number';

    // WHEN PLAYER WINS
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number ✔️';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    // WHEN GUESS IS TOO HIGH
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High ❌';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'YOU LOST';
      document.querySelector('.number').textContent = secretNumber
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#fb1f1f';
    }

    // WHEN GUESS IS TOO LOW
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low ❌';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'YOU LOST';
      document.querySelector('.number').textContent = secretNumber
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#fb1f1f';
    }
  }
})

document.querySelector('.again').addEventListener('click', function(){
  score = 5;
  secretNumber = Math.trunc(Math.random()*20)+1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = origin
  document.querySelector('.number').textContent = origin

})