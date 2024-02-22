'use strict';

// <103. Destructuring Arrays>

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

/*
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];


const [x, y, z] = arr;
console.log(x, y, z); // 2 3 4
console.log(arr); // the original array is not affected
*/

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
// So what this means is that we can use the spread operator whenever we would otherwise write multiple values separated by commas.

/*
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
*/
