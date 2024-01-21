// <32. Activating Strict Mode>
// 1. forbids us to do certain things 2. creates visible errors and the developer console, where in other situations JavaScript would just fail siletly.
'use strict'; // always use it at the beginning of each script

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true; // omit 's'
if (hasDriversLicense) console.log('I can drive :D');

// 3. introduce a short list of variable names that are reserved for features that might be added to the language a bit later
// const interface = 'Audio';
// const private = 534;
const if = 23;


// <33. Functions>
// fundamental building block of real world JavaScript applications
// 계속 반복해서 쓰는 코드, variable은 value를 hold하지만, function은 complete line of code를 hold

// 1. reuse
function logger() {
    console.log('My name is Jacqueline');
} // {} 안에 있는 걸 function buddy라고 함

// calling / running / invoking function
logger();
logger();
logger();
// parameter도 없고 return도 없는 function은 resue하고 싶은 block of code가 있을 때 쓴다/그냥 print만 함, does not produce a value! because we don't return anything from the function/ technically undefined value, result가 없으므로 그것을 capture할 variable도 필요 없음

// 2. receive data and return data back
function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0); // arguments: acutual values of the parameters // capture the value into a variable
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice); // console built in function

// don't repeat yourself or dry

Number('23'); // built in function 23 string을 parameter로 갖는, pass this argument into the function

const num = Number('23'); // 위쪽 걸 save

// <34. Function Declarations vs. Expressions>

// Function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);

// Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
} // function w/o a name(anonymous function)
// expression produces a value assigned to variable, variable hold function ... function = value!!! number, stirng, boolean value, not a type! & store in a variable
const age2 = calcAge2(1991);

console.log(age1, age2);


// function declaration의 경우
const age1 = calcAge1(1991); // calling it first

function calcAge1(birthYear) {
    return 2037 - birthYear;
} // defininng it later

// function expression의 경우
const age2 = calcAge2(1991);

const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
} // it doesn't work

console.log(age1, age2);

// <35. Arrow Functions>
// special form of function expression

// Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

// Arrow function
const calcAge3 = birthYear => 2037 - birthYear; // birthYear부터 value임 assign to variable, return 쓸 필요 없음
const age3 = calcAge3(1991);
console.log(age3);

// more code
const yearsUntilRetirement = birthYear => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return retirement;
}

console.log(yearsUntilRetirement(1991));

// multiple paratmeters
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jacqueline'));
console.log(yearsUntilRetirement(1980, 'Bob'));

// <36. Functions Calling Other Functions>

function cutFruitPieces(fruit) {
    return fruit * 3;
}


function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2, 3));


// <37. Reviewing Functions>

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

// convert to normal function expression
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired 🎉`);
        return -1;
    }
}
console.log(yearsUntilRetirement(1991, 'Jacqueline'));
console.log(yearsUntilRetirement(1950, 'Charlie'));

// <39. Introduction to Arrays> // big container data structures: Arrays and Objects
const friend1 = 'Harry';
const friend2 = 'Ron';
const friend3 = 'Hermione';

const friends = ['Harry', 'Ron', 'Hermione'];
console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Malfoy';
//when using const, only primitive values are immutable, array is not a primitive value
console.log(friends);
// friends = ['James', 'Sirius']; array 전체를 바꾸는 건 안 됨

const firstName = 'Jacqueline';
const jacqueline = [firstName, 'Lee', 2037 - 1997, 'developer', friends];
console.log(jacqueline);
console.log(jacqueline.length);

// Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

// calcAge(years); 를 해서는 안 됨
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);


// <40. Basic Array Operations (Methods)

const friends = ['Harry', 'Ron', 'Hermione'];

// Add elements
const newLength = friends.push('Malfoy'); // push는 뒤에 추가 // 개수를 return
console.log(friends);
console.log(newLength); // 4

friends.unshift('Dobby'); // unshift는 앞에 추가
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop(); // 무엇이 사라졌는지를 return
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf('Ron')); // 1
console.log(friends.indexOf('Hagrid')); // -1

friends.push(23);
console.log(friends.includes('Ron')); // true
console.log(friends.includes('Hagrid')); // false
console.log(friends.includes('23')); // false -> testing w/ strict equality, type coercion 일어나지 않음
console.log(friends.includes(23)); // true

if (friends.includes('Ron')) {
    console.log('You have a friend called Ron');
}

// <42. Introduction to Objects>

const harryArray = [
    'Harry',
    'Potter',
    2037 - 1980,
    'Auror',
    ['Ron', 'Hermione', 'Ginny']
];
// define key(=property) value pairs -> give each of these values a name

// object literal syntax
const harry = {
    firstName: 'Harry',
    lastName: 'Potter',
    age: 2037 - 1980,
    job: 'Auror',
    friends: ['Ron', 'Hermione', 'Ginny']
}; // object which contains five key value pairs five keys and each key has a value, array에서는 할 수 없었던 것, array와 달리 순서가 중요치 않음 -> arrays for more order data, objects for more unstructured data

// <43. Dot vs. Bracket Notation>
const harry = {
    firstName: 'Harry',
    lastName: 'Potter',
    age: 2037 - 1980,
    job: 'Auror',
    friends: ['Ron', 'Hermione', 'Ginny']
};
console.log(harry);

console.log(harry.lastName);
console.log(harry['lastName']); // []안에는 any expression e.g) operator / something that produces a value

const nameKey = 'Name';
console.log(harry['first' + nameKey]);
console.log(harry['last' + nameKey]);

// cf.
// console.log(harry.'last' + nameKey);
// dot에서는 real final property name을 써야하고 computed property name을 쓰면 안 됨.

// prompt('What do you want to know about Harry? Choose between firstName, lastName, age, job, and friends');

const interestedIn = prompt('What do you want to know about Harry? Choose between firstName, lastName, age, job, and friends');
// console.log(harry.interestedIn); // undefined
console.log(harry[interestedIn]); // object에 없는 것을 찾으면 undefined(falsy value) -> if/else에 활용

if (harry[interestedIn]) {
    console.log(harry[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}

// add new properties using dots and brackets notation
harry.location = 'Britain';
harry['twitter'] = '@harrypotter';
console.log(harry);

// Challenge
// "Harry has 3 friends, and his best friend is called Ron"
console.log(`${harry.firstName} has ${harry.friends.length} friends, and his best friend is called ${harry.friends[0]}`); // dot length is just a property that is available on all a race

// <44. Object Methods>
// function은 value, object에 function add 가능
const harry = {
    firstName: 'Harry',
    lastName: 'Potter',
    birthYear: 1980,
    job: 'Auror', // string value
    friends: ['Ron', 'Hermione', 'Ginny'], // array value
    hasDriversLicense: true, // Boolean value

    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // } // function value, any function that is attached to an object is called a method, method is actually also a property it just happens to be a property that holds a function value

    // calcAge: function () {
    //     // console.log(this);
    //     return 2037 - this.birthYear;
    // } // the this keyword or the this variable is basically equal to the object on which the method is called, it is equal to the object calling the method // this points to harry now

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        // this(=harry).age는 create a new property on the current object(on the harry object)
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }
};

// function expression
// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// harry.calcAge(1980);
console.log(harry.calcAge()); // the object that is calling the calcAge method here is harry
// console.log(harry['calcAge'](1980));

console.log(harry.age);
console.log(harry.age);
console.log(harry.age);

// Challenge
// "Harry is a 57-year old Auror, and he has a driver's license"
console.log(harry.getSummary());

// arrays are actually also objects, they are just a special kind of object. and so they have functions, or in other words they have methods that we can use to manipulate them like push, pop, shift and unshift and many more. used built in methods on arrays. the arrays are actually also objects, that's why they can have methods as well.

// <46. Iteration: The for Loop>
// control structures: if/else statement, loops
// console.log('Lifting weights repetition 1 🏋️');
// console.log('Lifting weights repetition 2 🏋️');
// console.log('Lifting weights repetition 3 🏋️');
// console.log('Lifting weights repetition 4 🏋️');
// console.log('Lifting weights repetition 5 🏋️');
// console.log('Lifting weights repetition 6 🏋️');
// console.log('Lifting weights repetition 7 🏋️');
// console.log('Lifting weights repetition 8 🏋️');
// console.log('Lifting weights repetition 9 🏋️');
// console.log('Lifting weights repetition 10 🏋️');

//for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep = rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️`);
}
// loop statement 1. initial value of a counter, counter is the value that will start here at number 1 and go all the way to number 10 2. logical condition that is evaluated before each iteration of the loop, if the condition is true, then the next loop iteration will run. But as soon as this condition is false, then the loop stops and so no more ode will then be executed. So bascially, the loop will keep running while this condition stays true. 3. increasing the counter
*/

// <47. Looping Arrays, Breaking and Continuing>
// for loops:  to loop through arrays
const harry = [
    'Harry',
    'Potter',
    2037 - 1980,
    'Auror',
    ['Ron', 'Hermione', 'Ginny']
];
const types = [];

// console.log(harry[0]);
// console.log(harry[1]);
// ...
// console.log(harry[4]);
// harry[5] does NOT exist

for (let i = 0; i < harry.length; i++) {
    //Reading from harry array 
    console.log(harry[i], typeof harry[i]);

    // Filling types array
    // types[i] = typeof harry[i];
    types.push(typeof harry[i]);
}

console.log(types);

const years = (1991, 2007, 1969, 2020);
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break
console.log('--- ONLY STRINGS ---');
for (let i = 0; i < harry.length; i++) {
    if (typeof jonas[i] !== 'string') continue;

    console.log(harry[i], typeof harry[i]);
}

console.log('--- BREAK WITH NUMBER ---');
for (let i = 0; i < harry.length; i++) {
    if (typeof jonas[i] !== 'number') break;

    console.log(harry[i], typeof harry[i]);
}










































