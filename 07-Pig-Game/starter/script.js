'use strict';

// ! Selecting Elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
const player1EL = document.querySelector('.player--0');
const player2EL = document.querySelector('.player--1');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');

//! Starting Condition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = [0, 0];
let activePlayer = 0;
let playing = true;

//! Switch Player

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore[activePlayer] = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1EL.classList.toggle('player--active');
  player2EL.classList.toggle('player--active');
};

//! Roll Dice Button event handle
btnRoll.addEventListener('click', function () {
  if (playing) {
    const guess = Math.trunc(Math.random() * 6) + 1;
    diceEl.src = `dice-${guess}.png`;
    diceEl.classList.remove('hidden');
    if (guess !== 1) {
      console.log(guess);
      currentScore[activePlayer] += guess;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore[activePlayer];
    } else {
      currentScore[activePlayer] = 0;
      switchPlayer();
    }
  }
});

//! Hold Button event handle
btnHold.addEventListener('click', function () {
  if (playing) {
    let score =
      Number(document.getElementById(`score--${activePlayer}`).textContent) +
      currentScore[activePlayer];
    document.getElementById(`score--${activePlayer}`).textContent = score;
    if (score >= 20) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      diceEl.classList.add('hidden');
      playing = false;
    }
    switchPlayer();
  }
});

//! New Game Button event handle
btnNew.addEventListener('click', function () {
  document.querySelector('.player--0').classList.remove('player--winner');
  document.querySelector('.player--1').classList.remove('player--winner');
  playing = true;
  currentScore = [0, 0];
  activePlayer = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  player1EL.classList.add('player--active');
  player2EL.classList.remove('player--active');
});
