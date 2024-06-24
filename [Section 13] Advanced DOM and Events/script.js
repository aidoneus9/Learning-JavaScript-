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
// 📌 Selecting elements
console.log(document.documentElement);
// -> just document here is not enough to select the document element; because this is not the real DOM element. So for example, if we want to apply CSS styles to the entire page we always need to select document element.
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
// -> return the first element that matches this selector
const allSection = document.querySelectorAll('.section');
console.log(allSection);
// -> return a nodeList, and then that will contain all of the elements that are a section, so that are slected by this selector

document.getElementById('section--1');
// -> we only pass the ID name itself without the selector; so this section here has ID section--1. That's only for the querySelector methods.
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);
// -> this method actually returns an HTML collection. So that's different from a node list because an HTML collection is actually a so-called life collection. And that means that if the DOM changes, then this collection is also immediately updated automatically.
// -> The same does not happen with a nodeList; that's because this variable(allSections) was created by the time that this section still existed. And it didn't update itself as I deleted one of its elements.

console.log(document.getElementsByClassName('btn'));

// 📌 Creating and inserting elements
// .insertAdjacentHTML

const message = document.createElement('div');
// -> this here creates a DOM element, and then stores that element into the message. Now that element is not yet anywhere in our DOM. All this is a DOM object that we can now use to do something on it but it is not yet in the DOM itself; so it's nowhere to be found on our webpage. If we want it on the page, then we need to manually insert it into the page.
message.classList.add('cookie-message');
message.textContent =
  'We use cookies for improved functionality and analytics.';
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button';
// ✍️ remember that we can use both of these properties(textContent & innerHTML) to read and to set content

// header.prepend(message);
// -> also really in our DOM
// -> prepending basically adds the element as the FIRST CHILD of this element(header).
// -> but we can also add it as the LAST CHILD: append
header.append(message);
// -> what we see is that the element was actually only insert at once, that's because this element(element) is now indeed a life element living in the DOM. And so therefore it cannot be at multiple places at the same time.
// -> so what happened here is that we first prepended the element and then we appended it. And what this append did here was to basically move the element from being the first child to being the last child(basically it moved the element and didn't really insert it) because it was already inserted here by prepend.
// -> so what this means is that we can use the prepend and append methods not only to insert elements, but also to MOVE them. That's because a DOM element is unique(it can always ONLY EXIST AT ONE PLACE AT A TIME)

// 🤔 What if we actually wanted to insert multiple copies of the same element?
// header.append(message.cloneNode(true));

// header.before(message); // as a sibling
// header.after(message); // as a sibling

// 📌 Delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
    // message.parentElement.removeChild(message);
  });
// (94) remove(): we don't have to select the message element again because we already have it in memory. So we already have it stored in a variable; so there's no need to run a document or querySelector.
// (95) DOM traversing

// <188. Styles, Attributes and Classes>
// Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';
// -> Remember that these styles are actually set as inline styles, so styles set directly in the DOM.

console.log(message.style.height); // ; that's because using the style property like this here only works for inline styles that we set ourselves also using this style property. So it's gonna work for example, for the background color.
console.log(message.style.backgroundColor); // rgb(55, 56, 61); because it is an inline style, so a style that we set manually ourselves.
// -> but we cannot get a style that is hidden inside of a class or maybe that doesn't even exist.
console.log(message.style.color); // ; so the color is defined in the style sheet, but if we try to log it here, then it's nowhere to be found.

console.log(getComputedStyle(message).color); // rgb(187, 187, 187)
console.log(getComputedStyle(message).height); // 85.5px
// which means that it's the real style as it appears on the page. And even if we do not declare it in our CSS, so for example, the height, we didn't define ourselves, but the browser of course needed to calculate the height to display it and so we can then get access to that value.

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';
