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

// <135. The bind Method>
// just like the call method, bind also allows us to manually set this keyword for any function call. Now, the difference is that bind does not immediately call the function. Instead, it returns a new function where this keyword is bound. So it's set to whatever value we pass into bind.

// Bind method
// book.call(eurowings, 23, 'Marie Curie');

// book.bind(eurowings);
// we can use the bind method to create a new function with the this keyword also set to eurowings. So again, this will not call the book function. Instead it will return a new function where this keyword will always be set to eurowings.

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Mary Jackson');
// this now looks like the normal book function call again. And that's because this function here already has the this keyword set in stone. And so here, we no longer need to specify to this keyword again.

// create a function for one specific airline and a specific flight number
const bookEW23 = book.bind(eurowings, 23);
// this function now only needs the name, because the number was already preset here in the bind method
bookEW23('Dongkyoung Lee');
bookEW23('Dorothy Vaughan');
// 📝 partial application: a part of the arguments of the original function are already applied, so which means, already set.

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane(); // 301
// ⚠️ if we simply called a lufthansa.buyPlane out here, then of course, this keyword would be lufthansa

// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane);
//⚠️ we learned that in a event handler function, that this keyword always points to the element on which that handler is attached to
// ⚠️ in this case this event listener function calling this function and so therefore, the button itself will then become this keyword
// 👉 Now of course, in this handler function here, we still need this keyword to point to the lufthansa object itself. So what this means is that we need to manually define to this keyword.
// 👉 We need to pass in a function here and not to call it and so we already know that the call method calls the function. And so that's not what we need and so therefore, we use bind because we already know that bind is gonna return a new function.

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addTax.bind and then the first argument of bind is this keyword. But in this case, we don't care about this keyword at all. It's not even here in the function. And so, we just say, null. It could be any other value because nothing will happen with it, but it's kind of a standard to just use null.
// same as...
// addVat = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
*/

// <137. Immediately Invoked Function Expressions (IIFE)
// Sometimes in JavaScript, we need a function that is only executed once and then never again(A function that disappears right after it's called once).

const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

// function() {
//   console.log('This will never run again');
// }
// ⚠️ Uncaught SyntaxError: Function statements require a function name
// However, we can still trick JavaScript into thinking that this is just an expression and we do that by simply wrapping all of this into parentheses.

// IIFE
(function () {
  console.log('This will never run again');
  const isPrivate = 23;
})();
// 👉 And so now, we basically transformed the statement that we had before into an expression. This is really just the function value. So it's just a function expression and then immediately, we call it here(). And so this is why this pattern here, is called the Immediately Invoked Function Expression.

// console.log(isPrivate);
// ⚠️ The scope chain only works the other way around. So the inner scope would have access to anything defined outside, here in the global scope. But the other way around, the global scope does not have access to anything that is inside of a scope. So in this case, of the scope created by this function here(278). Therefore, we say that all data defined inside a scope is private. We also say that this data is encapsulated. So for example, this isPrivate here(280) is encapsulated inside of this function scope, that's created here.
// ✍️ And data encapsulation and data privacy are extremely important concepts in programming. So many times we actually need to protect our variables, from being accidentally overwritten by some other parts of the program or even with external scripts or libraries(📎 object oriented programming). It's important to hide variables and the scopes are a good tool for doing this. And this is also the reason why the IIFEs were invented.

(() => console.log('This will ALSO never run again'))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}
// console.log(isPrivate);
console.log(notPrivate);
// so that's because this one here(292) was declared with var, and therefore it does completely ignore this block here essentially
// 👉 and this is the reason why now in modern JavaScript, IIFEs are not that used anymore because if all we want is to create a new scope for data privacy, all we need to do is to just create a block like this(290, 293). There is no need to create a function to create a new scope, unless we want to use var for our variables.
// 👉 Now on the other hand, if what you really need is to execute a function just once, then the IIFE pattern is still way to go, even now with modern JavaScript.

// <138. Closures>
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);

// <139. More Closure Examples>

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
