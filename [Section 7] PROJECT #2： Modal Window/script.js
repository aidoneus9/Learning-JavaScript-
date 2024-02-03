'use strict';

// <79. PROJECT #2: Modal Window>
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  // console.log('Button clicked');
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

// <81. Handling an "ESC" Keypress Event>
// 1. addEventListener: Keypress Event is simply just another type of events
// 2. global events are so-called global events because they do not happen in one specific element and for global events like keyboard events we usually listen on the whole document.

document.addEventListener('keydown', function (e) {
  // pass in the event object as an argument
  // console.log(e);
  console.log(e.key); // property name to read any property from an object

  // if (e.key === 'Escape') {
  //   if (!modal.classList.contains('hidden')) {
  //     closeModal();
  //   }
  // }

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
// we are basically listening for events everywhere. So no matter where they happen on the page, they will always trigger the event handler that we're gonna specify here.
// 3 types of events for the keyboard:
// 1. keyup: only happens when we lift or finger off the keyboard or off the key
// 2. keypress: fired continuously as we keep our finger on a certain key
// 3: keydown: fired as soon as we just press down the key
// keydown: the information about which key was pressed will be stored in the event that is going to occur as soon as any key is pressed
// as I hit any key here on the keyboard, a keydown event is generated and our list and our function here so our handler functon is waiting for that event to happen and anytime that an event like this occurs, JavaScript does in fact generate an object. And that object contains all the information about the event itself, and we can then actually access that object in the event handler function
// When an event happened, we can have access to information about that event in the event handler function just like this one.
// so then as the event occurs, JavaScript will call this function with the event object as an argument. This works because we do not call this function here or selves. We ONLY define it here. Hey, JavaScript, call function when a keydown event happens and when you do so, please pass in the event object as an argument.
