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
document.querySelector('.check').addEventListener('click', function () {
  console.log(document.querySelector('.guess').value);
});
