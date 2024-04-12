'use strict';
/*
// <129. Default Parameters>
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000);
// this is how we basically skip a default parameter that we want to leave at its default.

// <130. How Passing Arguments Works: Value vs. Reference>
const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 24739479284) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};

// checkIn(flight, jonas);
// console.log(flight); // LH234
// console.log(jonas); // {name: 'Mr. Jonas Schmedtmann', passport: 24739479284}

// Is the same as doing...
// const flightNum = flight;
// const passenger = jonas;
// passing a primitive type to a function is really just the same as creating a copy like this, outside of the function. So the value is simply copied.
// On the other hand, when we pass an object to a function, it is really just like copying an object like this. And so whatever we change in a copy will also happen in the original.

// ⚠️
const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(jonas);
checkIn(flight, jonas);

// JavaScript does not have passing by reference, only passing by value, even though it looks like it's passing by reference. So there are languages like C++, where you can pass a reference to any value, instead of the value itself. This works even with primitives, so you could pass a reference to the value of five, and then the orignial value, outside of the function, would be changed. And this is called pass by reference.
// As we just learned for objects, we do in fact pass in a reference. So the memory address of the object. However, that reference itself is still a value. It's simply a value that contains a memory address. So basically we pass a reference to the function, but we do not pass by reference, and this is an important distinction.
*/

// <131. First-Class and Higher-Order Functions>

// <132. Functions Accepting Callback Functions>

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
  // besides methods, functions can even have properties and one of them is the name property
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('👋');
};
document.body.addEventListener('click', high5);

['Harry', 'Ron', 'Hermione'].forEach(high5);
// we have three elements in this array and so as the name of the method says, for each of them this callback will be called. And therefore we have three wavings

// Advantages of callback functions

// 1. makes it easy to split up or code into more reusable and interconnected parts

// 2. allow us to create abstraction. So what we did here in our code example(76 ~ 90) was to create a level of abstraction. What abstraction means is that we hide the detail of some code implementation because we don't really care about all that detail. And this allows us to think about problems at a higher more abstract level. And so that's why it's called an abstraction. So coming back to our example here(86), this transformer function does not care at all how the string is transformed. It doesn't care about this level of detail. All that wants to do is to transform a string, but it doesn't care how it should do it. So what I mean is that we could have taken, this code here and written it directly into transformer, or even this code here. That would have worked just the same, but instead we abstracted this code away into other functions. So again, we created a new level of abstraction and by doing this or main transformer function, here is really only concerned with transforming the input string itself. But no matter how that transforming itself actually works. So it's basically delegating the string transformation to the other lower level of functions, which are these two.

// <133. Functions Returning Functions>

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
// what this menas is that we can now call this greeterHey function just as if it was any other function that we defined ourselves
greeterHey('Harry'); // Hey Harry
greeterHey('Hermione'); // Hey Hermione
// 📝 closure

greet('Hello')('Harry'); // Hello Harry

// 📝 functional programming

// Challenge
// rewrite the greet function using arrow functions
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hi')('Harry'); // Hi Harry

// <134. The call and apply Methods>
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Dongkyoung Lee');
lufthansa.book(635, 'Richard Feynman');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Does NOT work
// book(23, 'Marie Curie'); // ❌ Cannot read properties of undefined (reading 'airline') at book: because the book function is now just a regular function call and in a regular function call, the this keyword points to undefined at least in strict mode.
// The book function is no longer this method(142). It is now this separate function(162).

// 👉 We need to tell JavaScript explicitly what the this keyword here should be like. So if we want to book a Lufthansa flight, the this keyword should point to Lufthansa but if we want to book a Eurowings flight, then the this keyword should point to Eurowings.

// ✍️ 3 function methods: Call, Apply, Bind
// A function is really just an object, and objects have methods and therefore, functions can have methods, too.

// Call method
book.call(eurowings, 23, 'Marie Curie');
// in the call method, the first argument is exactly what we want the this keyword to point to.
console.log(eurowings);

book.call(lufthansa, 239, 'Rosalind Franklin');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Hedy Lamarr');
console.log(swiss);

// Apply method
// The apply method does exactly the same thing. The only difference is that apply does not receive a list of arguments after the this keyword, but instead it's gonna take an array of the arguments. And so it will then take the elements from that array and pass it into the function.
const flightData = [583, 'Katherine Johnson'];
book.apply(swiss, flightData);
console.log(swiss);
// This apply method is not used anymore in modern JavaScript

book.call(swiss, ...flightData);
// and so right now, with modern JavaScript, I prefer to just always use the call method and then spread out the arguments from an array like this
