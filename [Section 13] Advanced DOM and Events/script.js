'use strict';

// <185. PROJECT: "Bankist" Website>

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault(); // ✍️ index.html(36): this is actually now a link and not a button and on the link, when we have this hash(#) here as the hyperlink, so as HRF, then that will make the page jump to the top; that's the default behavior.
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);
// ✍️ btnsOpenModal: Nodelist; because it's the result of querySelectorAll. A NodeList is not an array, but still it does have default forEach method.

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// <186. How the DOM Really Works>

// <187. Selecting, Creating, and Deleting Elements>
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

document.querySelector('.header');
document.querySelectorAll('.section');
