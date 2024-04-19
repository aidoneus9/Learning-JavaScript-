'use strict';
/*
// <143. Simple Array Methods>
// ✍️ methods are simply functions that we can call on objects. So basically, they are functions attached to objects. So if we have array methods, that means that arrays themselves are also objects and so these array methods are simply functions that are attached to all arrays that we create in JavaScript.
// 📝 why all arrays have access to this methods: prototypal inheritance

// SLICE 🗡️
// ⚠️ this does not mutate the original arr array. Instead it returns a new array, so a copy of the array, but only with the extracted parts.
let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.slice(2));
console.log(arr.slice(2, 4)); // ['c', 'd']
console.log(arr.slice(-2)); // ['d', 'e']
console.log(arr.slice(-1)); // ['e']
// -1 is always just the last element of any array
console.log(arr.slice(1, -2)); // ['b', 'c']
// except the last two

// simply create a shallow copy of any array
console.log(arr.slice()); // ['a', 'b', 'c', 'd', 'e']
// 👉 previously...
// creating new array, and then expanding the original array into that
console.log([...arr]); // ['a', 'b', 'c', 'd', 'e']
// personal preference; the only time you really need to use the slice method is when you want to chain multiple methods together, so calling one after the other

// SPLICE
// ⚠️ it does actually change the original array, so it mutates the array
// console.log(arr.splice(2)); // ['c', 'd', 'e']
// original array
// console.log(arr); // ['a', 'b']

// In practice, most of the time the value that the splice method returns, doesn't even interest us. All we are usually interested in is to just delete one or more elements from an array using splice.
// and one pretty common use case is to simply remove the last element of an array
// arr.splice(-1);
// console.log(arr); // ['a', 'b', 'c', 'd']

// 📎 MDN documentation
// ⚠️ the second parameter is called deleteCount(not the begin parameter): the number of elements that we want to delete
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr); // ['a', 'd']

// REVERSE 🙃
// ⚠️` does actually mutate the original array
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'j', 'f'];
console.log(arr2.reverse()); // ['f', 'j', 'g', 'h', 'i', 'j']
console.log(arr2); // ['f', 'j', 'g', 'h', 'i', 'j']

// CONCAT 🖇️
// doesn't mutate the original array
const letters = arr.concat(arr2);
console.log(letters); // ['a', 'b', 'c', 'd', 'e', 'f', 'j', 'g', 'h', 'i', 'j']
// 👉 previously...
console.log([...arr, ...arr2]); // ['a', 'b', 'c', 'd', 'e', 'f', 'j', 'g', 'h', 'i', 'j']
// personal preference

// JOIN 🪡
console.log(letters.join(' - ')); // a - b - c - d - e - f - j - g - h - i - j
*/

// <144. The new at Method>
const arr = [23, 11, 64];
console.log(arr[0]); // 23
console.log(arr.at(0)); // 23

// 📌 getting last array element
console.log(arr[arr.length - 1]); // 64
console.log(arr.slice(-1)[0]); // 64
console.log(arr.at(-1)); // 64
// console.log(arr.at(-2)); // 11
// at method: get the last element of an array || start counting from the end of an array || do something called 'method chaining'
// []: quickly get a value from an array(ex. first element)

// ➕ also works on strings
console.log('choco'.at(0)); // c

// <145. Looping Arrays: forEach>
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdraw ${Math.abs(movement)}`);
  }
}

// forEach 🛞
// 1. to loop over the array, and in each iteration it will execute the callback function
// 2. as the forEach method calls the callback function in each iteration, it will pass in the current element of the array as an argument

console.log('---- FOREACH ----');
movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdraw ${Math.abs(movement)}`);
  }
});
// 0: function(200)
// 1: function(450)
// 2: function(400)
// ...
// 👉 this is exactly the concept that I explained in the last section, when I said that we use a callback function to tell another higher-order function exactly what it should do, and so in this case we tell forEach that in each iteration, it should log one of these two strings here to the console. So we give the forEach method instructions by giving it a callback function which contains these instructions.

// 📌 access to a counter variable
// ⚠️ notice that the order of the parameters is different in both scenarios
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdraw ${Math.abs(movement)}`);
  }
}

console.log('---- FOREACH ----');
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdraw ${Math.abs(mov)}`);
  }
});

// ✍️ one fundamental difference between the two of them is that YOU CANNOT BREAK OUT OF A FOREACH LOOP. So the continue and break statements do not work in a forEach loop at all. So instead, forEach will always loop over the entire array and there is nothing that you can do about it.
// 👉 if you really need to break out of a loop, then you have to keep using the for of loop. But other than that, it really comes down to your personal preference.

// <146. forEach With Maps and Sets>
// Map 🧭
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Set 🎫
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });
// USD: USD
// GBP: GBP
// EUR: EUR
// what this means is that the key here is exactly the same as the value because a set doesn't have keys and it doesn't have indexes, either. And so there is no value that would make sense for the key.

const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});
// _(underscore): in JavaScript, it means a throwaway variable, a variable that is completely unnecessary
////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');
