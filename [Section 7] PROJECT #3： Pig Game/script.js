'use strict';

// <82. PROJECT #3: Pig Game>

// Selecting elements
const score0El = document.querySelector('#score--0');
// hash is the selector for the ID, and a dot is only for classes
const score1El = document.getElementById('score--1');
// getElementById is supposed to be a little bit faster than querySelector(guess: only relevant if you're selecting like thousands of elements at once)
const diceEl = document.querySelector('.dice');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
// here we are specifying numbers, not strings, but JavaScript will then automatically convert them to strings to actually display them on the page
diceEl.classList.add('hidden');

// <83. Rolling the Dice>
