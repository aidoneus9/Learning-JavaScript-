'use strict';

// <93. Scoping in Practice>

/*
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
*/

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
