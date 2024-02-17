'use strict';

/*
// <93. Scoping in Practice>

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  console.log(firstName); // this firstName variable is not actually in this scope. However, it is a global variable that we defined out here. And so therefore, through the scope chain, it's gonna be made available also inside of this scope
  // So you see that indeed, Jacqueline here was printed to the console, which is the firstName variable. And so when this line of code here was executed, JavaScript did not find this variable in the scope. And so it did a variable lookup, where it looked up in the scope chain to see if it found the variable there. And indeed, the parent scope of the calcAge function is the global scope. And the firstName variable is in there, and therefore JavaScript could then use that.
  return age;
}
// this calcAge function here is, defined in a global scope. and that's because it is here in the top level code. Also, this function here creates its own scope, and that scope is gonna be equivalent to the variable environment of its execution context.

const firstName = 'Jacqueline'; // create a global variable
calcAge(1997);
// eventhough this variable here was actually defined after the calcAge function. But that's not a problem at all because the code in the function is only executed once it's actually called. And so that happens after the declaration of the first name variable. And so at this point in the code, the firstName variable is already in the global execution variable environment. So in the global scope, ready to be used.

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    // it also creates a new scope
    // the engine as it is executing this printAge function
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    // is trying to access or is trying to find the age variable in the current scope, however it cannot find it there. And so therefore, it goes to the parent scope, where it will then find this age variable of course, that we created here. And the same is true for the birthYear variable, because for scoping the parameter of a function work just like normal variables.
    // But of course, then outside of this block, the firstName variable is still gonna be the one coming from the scope chain(Jacqueline, not Steven).
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      // we are creating a block, and therefore, this will be a new block scope.
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven'; // it now says Steven, and that happens because as always, JavaScript tries to look for the variable name in the current scope. (and not perform any variable look up in the scope chain. So the scope chain isn't necessary at all if the variable that we're looking for is already in the current scope.)

      // Reassigning outer scope's variable
      output = 'NEW OUTPUT!';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(str); // What do you think will happen as we try to log this variable outside of this block scope? We get an error that str is not defined. That's because const and let variables are block scoped. So they are available only inside the block in which they were created.
    console.log(millenial); // var variables, so variables declared with the var keyword are function scoped. So they simply ignore the block, because they are not block scoped at all. They're just function scoped
    console.log(add(2, 3)); // And now we get add is not defined. And so in fact, the scope of this add function here is only the block in which it was defined. So only here, we can use the add function, and so that proves that functions are now in fact, block scoped. (+ But remember that this is only true for strict mode.)
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Jacqueline';
calcAge(1991);
// console.log(age);
// And also remember that we said that the scope of a variable is the entire region of the code in which the variable is accessible. So for example, the scope of the age variable is all of this area here. So everywhere here, the age variable is accessible. So of course, in the calcAge function, where it was defined, and then also in all the child scopes, so all the inner scopes. But of course, age is not accessible outside of the calcAge scope. So let me demonstrate that here. So here, we will not be able to access the age variable, because the scope chain is a one way street. So only an inner scope can have access to the variables of its outer scope, but not the other way around. So now here we are in the outer scope, and we cannot have access to the variables of a child scope, which the scope of the calcAge function here surely is.
// printAge(); // And the same goes for functions again. And so we cannot call the printAge function out here, for the same reason. So here in the global scope, we do not have access to any variables defined in any other scope.

// <95. Hoisting and TDZ in Practice>

// Variables
console.log(me); // undefined: that's because variables declared with var are actually hoisted, but they are hoisted to the value of undefined.
console.log(job); // Cannot access 'job' before initialization: the origin of this error is the fact that the job variable is still in the temporal dead zone here at this point. The temporal dead zone of a variable declared with a let or const, starts from the beginning of the current scope(script.js:64, in this case it's the global scope) until the point of the code where it is defined(script.js:69). And this means that at this point of course, the job variable is still in the temporal dead zone.
console.log(year);

var me = 'Jacqueline';
let job = 'backend developer';

// Functions

console.log(addDecl(2, 3)); // 5
console.log(addExpr(2, 3)); // Cannot access 'addExpr' before initialization: exactly the same error that we got before here with this let and const variables, and that's because this function here right now is simply a const variable, too. It means that it's now also in the temporal dead zone.
console.log(addArrow(2, 3)); // 5

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
}; // We simply assigning a function value to this variable, and since this variable was defined with const, it is now in a temporal dead zone.

const addArrow = (a, b) => a + b;

// if we change these to var
var addExpr = function (a, b) {
  return a + b;
}; // another error message: addExpr is not a function, any variables declared with var will be hoisted and set to undefined, and then here we are trying to call undefined basically. undefined(2, 3)
var addArrow = (a, b) => a + b; // console.log(addArrow); undefined

// Example
console.log(numProducts); // undefined: falsy value
if (!numProdcuts) deleteShoppingCart(); // All products deleted! So we get all products deleted even though numProducts is actually 10. It is because of hoisting.
// numProducts variable is undefined(falsy value).

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;
// window object in the console (window is the global object of JavaScript in the browser)

console.log(x === window.x); // true
// variables declared with var will create a property on the global window object
console.log(y === window.y); // false
console.log(z === window.z); // false

// <97. The this Keyword in Practice>
console.log(this);
// we get that the this keyword in the global scope is simply the window object

// Regular function
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); // undefined
  // it is its own this keyword
};
calcAge(1997);

// Arrow function
const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this); // window
  // In this case, what is the lexcial, this keyword? So what is the this keyword in the parent's scope of this function? It is window because window is the this keyword here in the global scope(script.js:116)
  // not the this keyword of this function(calcAgeArrow). It is simply the this keyword of the parent's scope and that happens to be the window object
};

calcAgeArrow(1980);

// inside of a method
const jacqueline = {
  year: 1997,
  calcAge: function () {
    console.log(this); // the jacqueline object
    console.log(2037 - this.year);
  },
};
jacqueline.calcAge();
// the reason that the this keyword will point to jacqueline in this case is because jacqueline was the object calling the method(not because we wrote the method inside the object)

const matilda = {
  year: 2017,
};

// function is just a value
matilda.calcAge = jacqueline.calcAge; // method borrowing, (do not call)
matilda.calcAge(); // 20
// The method call here, the this keyword does now actually point to Matilda. The this keyword always points to the object that is calling the method. So even though the method is written here inside of the jacqueline object, the this keyword will still point to Matilda, if it is Matilda who calls the method.

// function is a value
const f = jacqueline.calcAge;
// copy the function into a new variable(do not call)
f(); // undefined, error that it cannot read year of undefined(coming from script.js:143)
// the f function is just a regular function call. It is not attached to any object. There is no owner of the f function anymore here at this point and therefore it is just a regular function call just like script.js:125

// <98. Regular Functions vs. Arrow Functions>
const jacqueline = {
  firstName: 'Jacqueline',
  year: 1997,
  calcAge: function () {
    console.log(this); // the jacqueline object
    console.log(2037 - this.year);
  },

  greet: () => console.log(`Hey ${this.firstName}`),
}; // this is not a code block(not create its own scope), it is an object literal
// use the this keyword from the global scope(= window object) and on the window obejct, there is no firstNanme
jacqueline.greet(); // Hey undefined
console.log(this.firstName); // undefined
// when we try to access a property that doesn't exist on a certain object, we do not get an error, but simply undefined

// cf. variables declared with var, actually create properties on the global object
var firstName = 'Matilda';

const jacqueline = {
  firstName: 'Jacqueline',
  year: 1997,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
jacqueline.greet(); // Hey Matilda
console.log(this.firstName); // Matilda

// another reason not to use var
// you should never ever use an arrow function as a method

// var firstName = 'Matilda';

const jacqueline = {
  firstName: 'Jacqueline',
  year: 1997,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },

  greet: function () {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
jacqueline.greet(); // Hey Jacqueline
console.log(this.firstName); // undefined

const jacqueline = {
  firstName: 'Jacqueline',
  year: 1997,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    const isMillenial = function () {
      console.log(this); // undefined
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial(); // It is a regular function call even though it happens inside of a method. And the rule says that inside a regular function call, the this keyword must be undefined.
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
jacqueline.greet();
jacqueline.calcAge();

// Solution 1 (pre ES6)
// use an extra variable (self or that)
const jacqueline = {
  firstName: 'Jacqueline',
  year: 1997,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    const self = this; // self or that
    const isMillenial = function () {
      console.log(self); // self is referenced here, but it's not in the scope, and so JavaScript goes up the scope chain into the parent scope, which is calcAge
      console.log(self.year >= 1981 && self.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
jacqueline.greet();
jacqueline.calcAge();

// Solution 2
// use an arrow function
const jacqueline = {
  firstName: 'Jacqueline',
  year: 1997,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
jacqueline.greet();
jacqueline.calcAge();
// This worked because this arrow function uses this keyword from its parent scope and in this case, in the parent scope, the this keyword is jacqueline. So an arrow function inherits the this keyword from the parent scope.

// arguments keyword
// just like the this keyword, the arguments keyword is only available in regular functions.

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12); // This can be useful when we need a function to accept more parameters than we actually specified.
// we can use them in the functions ex) we could use a loop, and then loop over this array and add all the numbers together

var addArrow = (a, b) => a + b;

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b; // when we have more than one line of code, we need to explicitly return
};
addArrow(2, 5, 8); // error

// <99. Primitives vs. Objects (Primitive vs. Reference Types)>
// Primitives: numbers, strings, Boolean's, et cetera.

let age = 30;
let oldAge = age;
age = 31;
console.log(age); // 31
console.log(oldAge); // 30

const me = {
  name: 'Jonas',
  age: 30,
};
const friend = me;
friend.age = 27;
console.log('Friend', friend);
console.log('Me', me);

// <100. Primitives vs. Objects in Practice>
// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName); // Davis Williams

// Reference types
const blake = {
  firstName: 'Blake',
  lastName: 'Lively',
  age: 36,
};
const marriedBlake = blake;
marriedBlake.lastName = 'Reynolds';
console.log('Before marriage:', blake);
console.log('After marriage:', marriedBlake);
// const is supposed to be for constants. So for things that we cannot change. However, what actually needs to be constant is the value in the stack. And in the stack, the value only holds the reference, which we are not actually changing. The only thing that we are changing is the underlying object that is stored in the heap. And that is okay to change. That has nothing to do with const or let. That's only about the value in the stack, but if we change something in the heap, that has nothing to do with const or let.

// What we can't do is to assign a completely different object to marriedBlake
// marriedBlake = {}; // Uncaught TypeError
// because this new object will be stored at a different position in memory, and therefore the reference to that position in memory will have to change in this variable. And therefore, that does not work because that is in the stack and so, since it is a constant, we cannot change that value in the stack. So we cannot change the value to a new memory address, and therefore, this does not work. If it was a let here, then we could do this, what we have here.
// As a conclusion, completely changing the object, so, assigning a new object to it is completely different than simply changing a property.

// What if we actually really wanted to copy the object so that we could then change one of them without changing the other?
// Copying objects
const blake2 = {
  firstName: 'Blake',
  lastName: 'Lively',
  age: 36,
};

const blakeCopy = Object.assign({}, blake2);
blakeCopy.lastName = 'Reynolds';
console.log('Before marriage:', blake2);
console.log('After marriage:', blakeCopy);
// This object is indeed a real copy of the original. So all the properties were essentially copied from one object to the other. And so behind the scenes, what that means is that a new object was in fact created in the heap and blakeCopy is now pointing to that object. So it has a reference to that new object.
*/
// However, there is still a problem because using this technique of object.assign only works on the first level. If we have an object inside the object, then this inner object will actually still be the same. So, it will still point to the same place in memory. And that's why we say that this object.assign only creates a shallow copy and not a deep clone(A shallow copy will only copy the properties in the first level while a deep clone would copy everything).
// An array is really just an object behind the scenes
const blake2 = {
  firstName: 'Blake',
  lastName: 'Lively',
  age: 36,
  family: ['Lori', 'Jason', 'Robyn', 'Eric'],
};

const blakeCopy = Object.assign({}, blake2);
blakeCopy.lastName = 'Reynolds';

blakeCopy.family.push('Ryan');
blakeCopy.family.push('James');
blakeCopy.family.push('Inez');
blakeCopy.family.push('Betty');

console.log('Before marriage:', blake2);
console.log('After marriage:', blakeCopy);
// The family object is a deeply nested object and so therefore, object.assign did not really, behind the scenes, copy it to the new object. So in essence, both the objects, blake2 and blakeCopy have a property called family which points at the same object(the array) in the memory heap. So when we change the array in one of them, it's also gonna be changed in the other one.
