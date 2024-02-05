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
let playing = true;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
// this function does not need any argument at all, or any parameter, because the code is exactly the same in both situations. So usually when we are refactoring something like we are essentially doing here, then here is many times like a small thing that changes in the code and then it's very useful to have a parameter so that what we did when we refactored some code in the first project, but here nothing changes. All we want to do is to simply repeat this code, and so we don't need any parameters and we don't need to return anything. This is simply just a reusable piece of code.

// <83. Rolling the Dice>

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    // dice for the number itself, and this variable needs to be not a global variable, so not a variable outside because each time that we roll the dice, we want to generate a new number
    // Math.random(): 0 ~ 0.9999 -> truncate(remove the decimal parts): 0 ~ 5

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
      // document.getElementById(`current--${activePlayer}`).textContent = 0;
      // currentScore = 0;
      // activePlayer = activePlayer === 0 ? 1 : 0;
      // player0El.classList.toggle('player--active');
      // player1El.classList.toggle('player--active');
      // toggle: add the class if it is not there and if it is there, it will remove it
      switchPlayer();
    }
  }
});

// <84. Switching the Active Player>

// <85. Holding Current Score>
btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;

    // scores[1] = scores[1] + currentScore
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 20) {
      // Finish the game
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});
// The easiest solution is to create a variable that hosts the state of the game, so if we are still playing or not. So this is gonna be a state variable, which kind of tells us the condition of a system. In this case the condition will be is the game playing or not. And so if the game is playing, then we can click these buttons and then everything will work as normally. But then as soon as the game is finished, we will say that the game is no longer playing and then we can no longer click on these buttons.
