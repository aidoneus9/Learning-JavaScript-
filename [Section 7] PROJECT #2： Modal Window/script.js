'use strict';

// <79. PROJECT #2: Modal Window>
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  console.log('Button clicked');
  modal.classList.remove('hidden'); // on there we can read the classlist property and then this classlist property itself has a couple of methods(remove) / we do not use dot here(dot is only for the selector) here we are not selecting anything just passing in the name of the class
  overlay.classList.remove('hidden');
  // modal.style.display = 'block';
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// not array, but acts like an array

// for (let i = 0; i < btnsOpenModal.length; i++)
//   console.log(btnsOpenModal[i].textContent);
// just like an if/else statement, if there is only one line of code that I want to execute, I actually don't have to create this block

// <80. Working With Classes>
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

// btnCloseModal.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

btnCloseModal.addEventListener('click', closeModal);
// NOTICE that we are not calling the function(closeModal()). This would not work at all, because it would immediately call a function as soon as JavaScript executes this line but we want to close modal function to be executed only as soon as the click event happens on the close modal button.
overlay.addEventListener('click', closeModal);

// classes allows us to basically aggregate multiple CSS properties in just one, like a container. So each class functions a bit like a container with a lot of properties in it. And then by adding and removing them, we can activate and deactivate certain styles all at the same time.
