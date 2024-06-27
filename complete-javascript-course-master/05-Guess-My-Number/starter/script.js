'use strict';

/*
console.log(document.querySelector('.message').textContent); // SHOWS THE TEXT AND NO SYNTAX

document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 5;
let highscore = 0;

const displayMessage = function(message) {
  document.querySelector('.message').textContent = message;
}
const displayNumber = function(number) {
  document.querySelector('.number').textContent = number
}
const displayScore = function(score) {
  document.querySelector('.score').textContent = score
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // WHEN THERE IS NO INPUT
  if (!guess) {
    document.querySelector('.message').textContent = 'Input Number';

    // WHEN PLAYER WINS
  } else if (guess === secretNumber) {
    displayMessage ('Correct Number ✔️');
    // document.querySelector('.number').textContent = secretNumber;
    displayNumber ('secretNumber');

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    

    // IF GUESS IS DIFFERENT TO SECRET NUMBER
  } else if (guess !== secretNumber) {
      if (score > 1) {
      // document.querySelector('.message').textContent = guess > secretNumber ? 'Too High ❌' : 'Too Low ❌';
      displayMessage(guess > secretNumber ? 'Too High ❌' : 'Too Low ❌')
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'YOU LOST';
      displayMessage('YOU LOST');

      document.querySelector('.number').textContent = secretNumber;

      // document.querySelector('.score').textContent = 0;
      displayScore(0);

      document.querySelector('body').style.backgroundColor = '#fb1f1f';
    }
  }

    /*
    // WHEN GUESS IS TOO HIGH
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High ❌';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'YOU LOST';
      document.querySelector('.number').textContent = secretNumber;
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
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#fb1f1f';
    }
  }*/
});


// ACTION WHEN AGAIN BTN IS CLICKED
document.querySelector('.again').addEventListener('click', function () {
  score = 5;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...')

  // document.querySelector('.score').textContent = score;
  displayScore(score)

  // document.querySelector('.number').textContent = '?';
  displayNumber ('?'); // using a function to stop duplicated code

  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
