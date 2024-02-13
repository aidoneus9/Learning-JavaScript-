'use strict';

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

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1980);

const jacqueline = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jacqueline.calcAge(1997);

const jacqueline = {
  year: 1997,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jacqueline.calcAge();

const harry = {
  year: 2037,
};

harry.calcAge = jacqueline.calcAge;
harry.calcAge();
