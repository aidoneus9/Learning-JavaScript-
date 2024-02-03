'use strict';

// <82. PROJECT #3: Pig Game>

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
// hash is the selector for the ID, and a dot is only for classes
const score1El = document.getElementById('score--1');
// getElementById is supposed to be a little bit faster than querySelector(guess: only relevant if you're selecting like thousands of elements at once)
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice'); // diceEl for the element
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
// here we are specifying numbers, not strings, but JavaScript will then automatically convert them to strings to actually display them on the page
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0; // this cannot be inside of the function below because then it would be set to zero each time that we click the button, and so therefore it needs to be outside
let activePlayer = 0;

// <83. Rolling the Dice>

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  // 1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  // dice for the number itself, and this variable needs to be not a global variable, so not a variable outside because each time that we roll the dice, we want to generate a new number
  // Math.random(): 0 ~ 0.9999 -> truncate(remove the decimal parts): 0 ~ 5
  console.log(dice);

  // 2. Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // 3. Check for rolled 1: if true, switch to next player
  if (dice !== 1) {
    // Add dice to current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    // current0El.textContent = currentScore;
  } else {
    // Switch to next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
    // toggle: add the class if it is not there and if it is there, it will remove it
  }
});
