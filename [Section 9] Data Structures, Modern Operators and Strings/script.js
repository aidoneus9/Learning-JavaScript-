'use strict';

// <103. Destructuring Arrays>
/*
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
  //   console.log(
  //     `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
  //   ); // Order received! Garlic Bread and Risotto will be delivered to 221B Baker Street at 22:30
  // },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

restaurant.orderDelivery({
  time: '22:30',
  address: '221B Baker Street',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: '221B Baker Street',
  starterIndex: 1,
}); // Order received! Bruschetta and Pizza will be delivered to 221B Baker Street at 20:00

// Destructuring is an ES6 feature and it's basically a way of unpacking values from an array or an object into separate variables. So in other words, it is to break a complex data structure down into a smaller data structure like a variable. So for arrays we use destructuring to retrieve elements from the array and store them into variables in a very easy way.

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];


const [x, y, z] = arr;
console.log(x, y, z); // 2 3 4
console.log(arr); // the original array is not affected

// const [first, second] = restaurant.categories;
// console.log(first, second); // Italian Pizzeria

let [main, , secondary] = restaurant.categories;
console.log(main, secondary); // Italian Vegetarian

// Trick #1: Switching variables
// 1) without destructuring
const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);

// 2) with destructuring
[main, secondary] = [secondary, main];
// and now we're not using let or const here because we are simply reassigning the values of the two variables
console.log(main, secondary);

// Trick #2: Receive 2 return values from a function
// we can have a function, return an array and then we can immediately destruct the result into different variables. And so this basically allows us to return multiple values from a function.
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Trick #3: Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j); // (2) [5, 6]

// what if we actually wanted all the individual values?
// -> we would essentially have to do destructuring inside of destructuring
const [i, , [j, k]] = nested;
console.log(i, j, k); // 2 5 6

// Trick #4: Default values
// we can also set default values for the variables when we are extracting them. -> very useful in the case that we don't know the length of the array
// const [p, q, r] = [8, 9];
// console.log(p, q, r); // 8 9 undefined

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); // 8 9 1

// <105. Destructuring Objects>
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// what if we wanted the variable names to be different from the property names?

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default Values
// This is especially helpful when we do not have or data hard-coded like we have it here(script.js:5). In the real world, we usually get the data from somewhere else and then we might not always know how exactly the data looks like. And so then it's useful to set defaults like this.

// const { menu, starterMenu: starters = [] } = restaurant;
// console.log(menu); // undefined

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
// { a, b } = obj; // we cannot say const {a, b} because a and b are already declared up. We can also not do let, because that would create new variables and we already have them.
// when we start a line with a curly brace like this, then JavaScript expects a code block and since we cannot assign anything to a code block, like we did here with the equal sign, then get this error, unexpected token with the equal there.
({ a, b } = obj);
console.log(a, b); // 23 7

// Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c); // 11 23

// <106. The Spread Operator (...)
// expand an array into all its elements
// unpacking all the array elements at one

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr]; // (5) [1, 2, 7, 8, 9]
// const newArr = [1, 2, arr]; // (3) [1, 2, Array(3)]
console.log(newArr);
// What the spread operator does is to basically take all the values out of this arr array, and then write them individually as if we wrote 7, 8, 9 here manually.
// So what this means is that we can use the spread operator whenever we would otherwise write multiple values separated by commas. And that situation happens whenever we write an array literal like we did up here. So that's the first situation in which it's very useful to expand an array.

// The second situation is when we pass arguments into functions.
console.log(...newArr); // 1 2 7 8 9
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocchi'];
console.log(newMenu);
// You might have noticed that the spread operator is actually a bit similar to destructuring because it also helps us get elements out of arrays. The big difference is that the spread operator takes all the elements from the array and it also doesn't create new variables. As a consequence, we can only use it in places where we would otherwise write values separated by commas.

// Two important use cases which is to create shallow copies of arrays and to merge two arrays together.

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];
// a little bit similar to Object.assign

// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets, NOT objects
const str = 'Dong Kyoung';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);

// What we can't do is to use this to build a string using a template literal.
// console.log(`${...str} Lee` ); // Unexpected token
// So again, multiple values separated by a comma are usually only expected when we pass arguments into a function, or when we build a new array.

// Real-world example
// Let's now actually write our own function that accepts multiple arguments and then use the spread operator to actually pass those arguments.
// add another method(orderPasta)
const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt('Ingredient 2?'),
  // prompt('Ingredient 3?'),
];
// 'Let\'s make pasta! Ingredient 1?'
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Giuseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant);
// now you will see that they are different. So the copy has the name of Ristorante Roma, and the old one has Classico Italiano, which means that, indeed, we did make a copy of the original restaurant. Because otherwise, changing one object would then also change the other one.

// <107. Rest Pattern and Parameters>
// The rest pattern uses the exact same syntax however, to collect multiple elements and condense them into an array.
// The spread operator is to unpack an array while rest is to pack elements into an array

// 1) Destructuring

// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);
// the rest pattern basically collects the elements that are unused in the destructuring assignment

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);
// it does not include any skipped elements and so for that reason, the rest pattern always must be the last in the destructuring assignment

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions
const add = function (...numbers) {
  // console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3); // [2, 3]
add(5, 3, 7, 2); // [5, 3, 7, 2]
add(8, 2, 5, 3, 2, 1, 4); // [8, 2, 5, 3, 2, 1, 4]

const x = [23, 5, 7];
add(...x);
// so this is a good example of showing you how spread is the opposite of rest because after these numbers being spread here they will then enter this add function here and then they will immediately be collected into this numbers array by the rest parameters

// Let's add yet another method(orderPizza)
restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// the first argument was stored into the main argument and then all the remaining arguments that were passed in were simply stored into this array by the rest parameter of syntax
restaurant.orderPizza('mushrooms');
// we still get an empty array that we can work with if we want

// The spread operator is used where we would otherwise write values, separated by a comma. On the other hand, the rest pattern is basically used where we would otherwise write variable names separated by commas.

// <108. Short Circuiting (&& and ||)

console.log('---- OR ----');
// Use ANY data type, return ANY data type, short-circuiting(short-circuit evalution)
console.log(3 || 'Jonas'); // 3
// So in fact, here we used two values that are not Booleans and it then returned a value that was not a Boolean. And now about short-circuiting, in the case of the OR operator, short circuiting means that if the first value is a truthy value, it will immediately return that first value. So again, if the first operand is truthy here in the OR operator, then the other operand will not even be evaluated. So JavaScript will not even take a look at it.
console.log('' || 'Jonas'); // Jonas
// this here is a falsy value and so then, the second operand will actually also be evaluated, and that's Jonas and it will then be returned. So here we see again that the result of the OR operator doesn't have to be a Boolean. It will simply return the truthy value here.
console.log(true || 0); // true
// This first value here is truthy, and in fact, it's even true, and so therefore that will simply be the result of the operator.
console.log(false || 0); // 0
console.log(undefined || null); // null
// undefined is a falsy value, and so we then go to the second operand, so there is no short-circuiting, and so that's then the one that's gonna be returned. And that happens even though null is also a falsy value.
console.log(undefined || 0 || '' || 'Hello' || 23 || null); // Hello
// Remember, in the OR operation, the result is true, if at least one operand is true. So if the first operand is already true, then JavaScript doesn't even have to look at the other values because the result of the expression will already be true anyway. And so it will short circuit and then simply return that first result.

// restaurant.numGuests = 23;
// restaurant.numGuests= 0; both of these solutions will not work when the number of guests is 0. They are both 10. However, 0 is the real number of guests(solution in next lecture).
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// we want to check if it exists, and then the result should be actually restaurant.numGuests, but if it doesn't exist, then we want to set a default value of 10
console.log(guests1); // 10

const guests2 = restaurant.numGuests || 10;
console.log(guests2); // 10

console.log('---- AND ----');
console.log(0 && 'Jonas'); // 0
// The AND operator short circuits when the first value is falsy. And then immediately returns that falsy value without even evaluating the second operand.
console.log(7 && 'Jonas'); // Jonas
// So when it is truthy, it means that the evaluation continues and then simply the last value is returned.

console.log('Hello' && 23 && null && 'Jonas'); // null

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
// It's perfectly fine to use the second operand to call a function. We can put anything here. It doesn't just have to be a single value.

// SUMMARIZE: The OR operator will return the first truthy value of all the operands, or simply the last value if all of them are falsy. On the other hand, the AND operator will return the first falsy value or the last value if all of them are truthy. And as for practical applications, we can use the OR operator to set default values, and we can use the AND operator to execute code in the second operand if the first one is true.

// <109. The Nullish Coalescing Operator (??)>
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests); // 10

// Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect); // 0

// <110. Logical Assignment Operators>
const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assignment operator
rest1.owner = rest1.owner && '<ANONYMOUS>';
rest2.owner = rest2.owner && '<ANONYMOUS>';
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);

// <112. Looping Arrays: The for-of Loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);
// we can still use the continue and break keywords

// for (const item of menu.entries()) {
//   console.log(`${item[0] + 1}: ${item[1]}`);
// }

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
*/

// <113. Enhanced Object Literals>
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
  // [`day-${2 + 4}`]: {
  //   open: 0, // Open 24 hours
  //   close: 24,
  // },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // openingHours: openingHours,
  // but it can become annoying is that this property name is exactly the same as the variable name from which we're getting this new object

  // ES6 enhanced object literals
  openingHours,

  // order: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
  //   console.log(
  //     `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
  //   ); // Order received! Garlic Bread and Risotto will be delivered to 221B Baker Street at 22:30
  // },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// <114. Optional Chaining (?.)
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon.open); // Uncaught TypeError

// WITH optional chaining
console.log(restaurant.openingHours.mon?.open); // undefined
// So only if the property that is before the question mark(so only if monday) exists, then this open property will be read from there. But if not, then immediately undefined will be returned. And exists here actually means the nullish concept that we already talked before. So, a property exists if it's not null and not undefined. So if it's zero or the empty string, then it still exists of course.
console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  // remember if want to use a variable name as the property name, we need to use the brackets notation
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');
// This optional chaining operator will check if orderRisotto actually exists. And if it doesn't, well then it will immediately return undefined. And so all of this then returns undefined. And so here in the nullish coalescing operator, we immediately go to that second operant. And that's the result of this whole operation.

// Arrays
const users = [{ name: 'Dong Kyoung', email: 'decaf@dongkyoung.io' }];

console.log(users[0]?.name ?? 'User array empty');

if (users.length > 0) console.log(users[0].name);
else console.log('User array empty');

// <115. Looping Objects: Object Keys, Values, and Entries>
// So we learned about the for of loop to loop over a race, which remember is an iterable, but we can also loop over objects, which are not iterables, but in an indirect way. Now we have different options here, depending on what exactly we want to loop over. So do we want to loop over the objects, property names over the values or both together. And let's start by simply looping over property names.
// And so remember they are also called keys. Now, ultimately we will still have to use the for of loop to loop over the array, but again, we're going to do that in an indirect way. So we're not actually looping over the object itself. Instead, we're going to loop over, an array.

// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// Property VALUES
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
// so this distinction between the array and the object is important as we loop over the entire object
console.log(entries);

// [key, value]
for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}
/*
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
*/
