'use strict';

// <79. PROJECT #2: Modal Window>
const modal = document.querySelector('.modal');
const overlay = document.querySelector('overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++)
  console.log(btnsOpenModal[i].textContent);
// just like an if/else statement, if there is only one line of code that I want to execute, I actually don't have to create this block
