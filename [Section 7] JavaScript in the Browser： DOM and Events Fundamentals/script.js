'use strict';

/*
// <70. PROJECT #1: Guess My Number!>
console.log(document.querySelector('.message').textContent); // getting the text content from the selected element

// <72. Selecting and Manipulating Elements>
// set the content of the element
document.querySelector('.message').textContent = '🎉 Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
// with an input field, to get the actual value, use the value property
*/

// <73. Handling Click Events>

const x = function () {
  console.log(23);
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess); // usually whenever we get something from the user interface, for example, from an input field, it usually always is a string

  // usually, the first scenario is always to assume that there is actually no input, and then we need to respond to that somehow

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';
  }
}); // if there is no guess, zero is falsy, so guess here is false now, but then we use the NOT operator to convert it true, we can then make this block of code execute(it only executes whenever this whole condition here is true)
