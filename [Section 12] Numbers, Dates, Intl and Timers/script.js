'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov.toFixed(2)}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
// <171. Converting and Checking Numbers>
// In JavaScript, all numbers are presented internally as floating point numbers. So basically, always as decimals.

console.log(23 === 23.0); // true
// numbers are represented internally in a 64 base 2 format. So that means that numbers are always stored in a binary format.

// Base 10 - 0 to 9. 1/10 = 0.1. 10/3 = 3.3333333
// Binary base 2 - 0 1
console.log(0.1 + 0.2); // 0.30000000000000004
// -> you cannnot do like really precise scientific or financial calculations in JavaScript
console.log(0.1 + 0.2 === 0.3); // false

// 📌 Conversion
console.log(Number('23')); // 23
console.log(+'23'); // 23; when JavaScript sees the + operator, it will do type coercion.

// 📌 Parsing
console.log(Number.parseInt('30px')); // 30
// -> JavaScript will automatically try to figure out the number that it is in the string
console.log(Number.parseInt('e23')); // NaN
// -> the string needs to start with a number

// 단위 없앨 때 유용
// actually accepts a second argument, which is the so-called RegEx: the base of the numeral system that we are using(base 10 numbers)
console.log(Number.parseInt('30px', 10)); // 30
console.log(Number.parseInt('e23', 10)); // NaN
// cf. binary
console.log(Number.parseInt('30px', 2)); // NaN

console.log(Number.parseInt('2.5rem')); // 2
console.log(Number.parseFloat('2.5rem')); // 2.5

// parseInt & parseFloat: global functions
console.log(parseFloat('2.5rem')); // 2.5 -> also works
// -> Number provides a namespace for all these different functions(parseFloat, parseInt)

// 📌 isNaN: Check if value is NaN
console.log(Number.isNaN(20)); // false
console.log(Number.isNaN('20')); // false
console.log(Number.isNaN(+'20X')); // true
console.log(Number.isNaN(23 / 0)); // false

// 📌 isFinite: Check if value is a number
console.log(Number.isFinite(20)); // true
console.log(Number.isFinite('20')); // false
console.log(Number.isFinite(+'20X')); // false
console.log(Number.isFinite(23 / 0)); // false

// 📌 isInteger
console.log(Number.isInteger(23)); // true
console.log(Number.isInteger(23.0)); // true
console.log(Number.isInteger(23 / 0)); // false

// <172. Math and Rounding>
// 📌 sqrt: square root
console.log(Math.sqrt(25)); // 5
console.log(25 ** (1 / 2)); // 5
console.log(8 ** (1 / 3)); // 2

// 📌 max & min
console.log(Math.max(5, 18, 23, 11, 2)); // 23
console.log(Math.max(5, 18, '23', 11, 2)); // 23
// -> max function does type coercion
// -> However, it does not parsing
console.log(Math.max(5, 18, '23px', 11, 2)); // NaN

console.log(Math.min(5, 18, 23, 11, 2)); // 2

console.log(Math.PI); // 3.141592653589793
console.log(Math.PI * Number.parseFloat('10px') ** 2); // 314.1592653589793

// 📌
console.log(Math.trunc(Math.random() * 6) + 1);
// random: 0 ~ 1

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
// 0...1 -> 0...(max - min) -> min...(max - min + min) -> min...max
console.log(randomInt(10, 20));

// 📌 Rounding Integers
console.log(Math.trunc(23.3)); // 23

// -> round to the nearest integer
console.log(Math.round(23.3)); // 23
console.log(Math.round(23.9)); // 24

// -> round up
console.log(Math.ceil(23.3)); // 24
console.log(Math.ceil(23.9)); // 24

// -> round down
console.log(Math.floor(23.3)); // 23
console.log(Math.floor(23.9)); // 23

// -> type coercion
console.log(Math.floor('23.9')); // 23

// `✍️ floor & trunc: negative number
console.log(Math.trunc(-23.9)); // -23
console.log(Math.floor(-23.9)); // -24
// -> floor is a little bit better than trunc; it works in all situations, no matter if we're dealing with positive or negative numbers.

// 📌 Rounding decimals
console.log((2.7).toFixed(0)); // 3 (string)
// -> toFixed return a string and not a number
console.log((2.7).toFixed(3)); // 2.700 (string)
console.log((2.345).toFixed(2)); // 2.35 (string)
console.log(+(2.345).toFixed(0)); // 2 (number)

// ✍️ works in a similar way to the string methods. So this is a number(358), so it's a primitive, and primitives actually don't have methods, and so behind the scenes, JavaScript will do boxing(Boxing: transform this to a number object, then call the method on that object. And then once the operation is finished, it will convert it back to a primitive).

// <173. The Remainder Operator>
// -> returns the remainder of a divison

console.log(5 % 2); // 1
console.log(5 / 2); // 5 = 2 * 2 + 1

console.log(8 % 3); // 2
console.log(8 / 3); // 8 = 2 * 3 + 2

console.log(6 % 2); // 0
console.log(6 / 2);

console.log(7 % 2); // 1
console.log(7 / 2);

// -> check whether a certain number is even or not
const isEven = n => n % 2 === 0;
console.log(isEven(8)); // true
console.log(isEven(23)); // false
console.log(isEven(514)); // true

// -> this works to check if any number is divisible by any other number

labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    // 0, 2, 4, 6
    if (i % 2 === 0) row.style.backgroundColor = 'pink';
    // 0, 3, 6, 9
    if (i % 3 === 0) row.style.backgroundColor = 'purple';
  });
});
// Nth

// <174. Numeric Separators>

// 287,460,000,000
const diameter = 287_460_000_000;
console.log(diameter); // 287460000000

const price = 345_99;
console.log(price); // 34599

const transferFee1 = 15_00;
const transferFee2 = 1_500;
// -> Both of them are exactly 1,500. But just the underscore alone, gives them different meanings. So we can use that to our advantage, whenever we write numbers in or JavaScript code.

// ⚠️ we can only place underscores between numbers
// const PI = 3._1415;
// console.log(PI); // Uncaught SyntaxError

// ⚠️ when we try to convert strings, that contain underscores, to a number, that will not work as expected
console.log(Number('230000')); // 230000
console.log(Number('230_000')); // NaN
console.log(parseInt('230_000')); // 230

// <175. Working with BigInt>
// Of 64 bits, only 53 are used to actually store the digits themselves. The rest are for storing the position of the decimal point and the sign.
console.log(2 ** 53 - 1); // 9007199254740991
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(2 ** 53 + 1); // 9007199254740992
console.log(2 ** 53 + 2); // 9007199254740994
console.log(2 ** 53 + 3); // 9007199254740996
console.log(2 ** 53 + 4); // 9007199254740996
// -> in some numbers it does actually work for some reason, but that's because JavaScript behind the scenes uses some trick to still represent some of the unsafe numbers

// 👉 this can be a problem sometimes because in some situations we might need really, really big numbers, way bigger than that: for database IDs, when interacting with real 60 bit numbers.
// -> 📌 BigInt(ES2020)
// 1)
console.log(4838430248342043823408394839483204n); // 4838430248342043823408394839483204n
// n: transforms a regular number into a BigInt number

// 2)
console.log(BigInt(4838430248342043823408394839483204)); // 4838430248342043683707135006343168n
// -> this constructor function should probably only be used with small numbers
console.log(BigInt(48384302)); // 48384302n

// 📌 Operations
console.log(10000n + 10000n); // 20000n
console.log(4838430248342043823408394839483204n + 10000000n); // 4838430248342043823408394849483204n
// console.log(Math.sqrt(16n)); // ⚠️

// -> ⚠️ what is not possible is to mix BigInt with regular numbers
const huge = 4838430248342043823408394849483204n;
const num = 23;
// console.log(huge * num); // Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions
console.log(huge * BigInt(num)); // 111283895711867007938393081538113692ne

// -> ⚠️ Exceptions; there are two exceptions to this which are the comparison operators and the plus operator when working with strings
console.log(20n > 15); // true
console.log(20n === 20); // false; JavaScript when we use the triple operator, does not do type coercion. These two values here, they have a different primitive type. 20 is a regular number, and 20n is a BigInt.
console.log(typeof 20n); // bigint
console.log(20n == 20); // true; if we do the regular equality operator, JavaScript does the type coercion.
console.log(20n == '20'); // true

// string concatinations
console.log(huge + ' is REALLY big!!!'); // 4838430248342043823408394849483204 is REALLY big!!!: the number is actually converted to a string. So even the BigInt number.

// 📌 Divisions
console.log(10n / 3n); // 3n
console.log(11n / 3n); // 3n; it cuts the decimal part off
console.log(10 / 3); // 3.3333333333333335

// <176. Creating Dates>
