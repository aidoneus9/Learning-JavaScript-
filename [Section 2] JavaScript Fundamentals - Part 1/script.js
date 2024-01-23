// <9. Values and Variables>
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = "Matilda";
let first = 'jonas'
let firstNamePerson
let first_name_person

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = 'JM';
let $function = 27;

let person = 'jonas'
let PI = 3.1415;

let myFirstJob = 'Coder';
let myCurrentJob = 'Teacher';

let job1 = 'programmar';
let job2 = 'teacher';

console.log(myFirstJob);

// practice assignments
let country = "Republic of Korea";
let continent = "Asia";
let population = 51.74;

console.log(country);
console.log(continent);
console.log(population);

// <11. Data Types>
let javascriptIsFun = true;
console.log(javascriptIsFun);

//console.log(typeof true);
console.log(typeof javascriptIsFun);
//console.log(typeof 23);
//console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

// practice assignments
let isIsland = false
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// <12. let, const and var>
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = 'programmer';
job = 'teacher';

lastName = 'Lee';
console.log(lastName);

// <practice assignments>
language = 'Korean';
const country = 'Korea';
const continent = 'Asia';
const isIsland = false;
isIsland = true;

// <13. Basic Operators>
// const ageJonas = 2037 - 1991;
// const ageJacqueline = 2037 - 1997;
// console.log(ageJonas);
// console.log(ageJacqueline);
// console.log(ageJonas, ageJacqueline);

//  Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageJacqueline = now - 1997;
console.log(ageJonas, ageJacqueline);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jacqueline';
const lastName = 'Lee';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; //15
x += 10; // x = x + 10 = 25 reassign (let을 쓴 이유)
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators(boolean)
console.log(ageJonas > ageJacqueline); // >, <, >=, <=
console.log(ageJacqueline >= 18);

const isFullAge = ageJacqueline >= 18; // store these results

console.log(now - 1991 > now - 1997); // 107, 108, 128과 동일

// practice assignmetns
console.log(population / 2)
let x = population
x++; // 답: population++;
console.log(x); // 답: console.log(population);
console.log(population > 6);
console.log(population < 33);
const description1 = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language;
console.log(description1);


// <14. Operator Precedence>
const now = 2037;
const ageJonas = now - 1991;
const ageJacqueline = now - 1997;

console.log(now - 1991 > now - 1997);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10 (mdn-mozilla table 숫자 참고)
console.log(x, y);

const averageAge = (ageJonas + ageJacqueline) / 2
console.log(ageJonas, ageJacqueline, averageAge);


// <17. Strings and Template Literals>
const firstName = 'Jacqueline';
const job = 'developer';
const birthYear = 1997;
const year = 2037;

const jacqueline = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';// type coercion
console.log(jacqueline)

// template literals
const jacquelineNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`; //backticks, dollar sign, curly braces
console.log(jacquelineNew);

console.log(`Just a regular string...`);

// template literals - multiline strings
console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);

// practice assignments
const description = `${country} is in ${continent}, and its ${population} million people speak ${language} `;
console.log(description);


// <18. Taking Decisions: if/else Statements>
const age = 15;

if (age >= 18) {
	console.log('Jacqueline can start driving license 🚗');
} else {
	const yearsLeft = 18 - age;
	console.log(`Jacqueline is too young. Wait another ${yearsLeft} years :)`);
} // if/else control structure라 함. 띄어쓰기

const birthYear = 2012;
let century;
if (birthYear <= 2000) {
	century = 20;
} else {
	century = 21;
}
console.log(century);

// practice assignments
if (population > 33) {
	console.log(`${country}'s population is above average`);
} else {
	console.log(`${country}'s population is ${33 - population} million below average`);
}

// <20. Type Conversion and Coercion>

// type conversion (Number - String)
const inputYear = '1991';
console.log(Number(inputYear), inputYear); // 1991을 string에서 number로 바꿔줌
console.log(Number(inputYear) + 18);

console.log(Number('Jacqueline')); //NaN
console.log(typeof NaN); // number(invalid number)

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('I am ' + '23' + ' years old');
// cf. type coercion이 없었다면 console.log('I am ' + String(23) + ' years old')
console.log('23' - '10' - 3); // 10, - 가 opposite conversion
// cf. console.log('23' + '10' + 3); // 23103
console.log('23' * '2'); // 46
console.log('23' / '2'); // 11.5

let n = '1' + 1; // '11'
n = n - 1
console.log(n); // 10

console.log(2 + 3 + 4 + '5'); //'95'
console.log('10' - '4' - '3' - 2 + '5'); // '15'

// <21. Truthy and Falsy Values>

// 5 falsy values: 0, '', undefined, null, NaN
// 원래 false는 아니지만 boolean으로 바뀔 경우 false가 됨

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jacqueline'));
console.log(Boolean({})); // empty object
console.log(Boolean(''));
// conversion to boolean is always implicit(typed coercion) 1. when using logical operators 2. in a logical context ex) if/else statement

const money = 0; // 100이라면 truthy value
if (money) {
	console.log("Don't spend it all ;)");
} else {
	console.log('You should get a job!');
} // if/else statement에서 java가 Boolean으로 coerce, 0가 falsy value이므로 Boolean으로 바뀌면서 false가 됨

let height; // cf. height = 123, height = 0(defined, UNDEFINED로 나누었으므로, 이 경우는 a kind of bug, error -> logical operator로 고칠 수 있음)
if (height) {
	console.log('YAY! Height is defined');
} else {
	console.log('Height is UNDEFINED');
} // if/else statement에서 java가 Boolean으로 coerce, height이 undefined임 undefined는 falsy value이므로 Boolean으로 바뀌면서 false가 됨

// <22. Equality Operators: == vs. ===

// const age = 18; // (= assignment)
// if (age === 18) console.log('You just became an adult :D (strict)'); // (=== comparison operator, strict equality operator, type coercion 일어나지 않음)
// if (age == 18) console.log('You just became an adult :D (loose)'); // (loose equality operator, type coercion 일어남, 아래와 비교)

const age = '18';
if (age === 18) console.log('You just became an adult :D (strict)');
if (age == 18) console.log('You just became an adult :D (loose)');
// (bug를 찾기 어려워지므로 strict equality operator를 사용할 것)

const favourite = prompt("What's your favourite number?");
console.log(favourite); // '27', number가 아니라 string임
console.log(typeof favourite); // string

if (favourite == 27) { // '27' == 27
	console.log('Cool! 27 is an amazing number!')
} // == loose equality number를 사용했기 때문, type coercion
if (favourite === 27) {
	console.log('Cool! 27 is an amazing number!')
} // type coercion이 일어나지 않음

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite); // 27
console.log(typeof favourite); // number

if (favourite === 27) { // 27 === 27
	console.log('Cool! 27 is an amazing number!')
} else if (favourite === 7) {
	console.log('7 is also a cool number')
} else if (favourite === 9) {
	console.log('9 is also a cool number')
} else {
	console.log('Number is not 27 or 7 or 9')
}

// different operator !==
if (favourite !== 27) console.log('Why not 27?'); // !== strict, != loose

// <23. Boolean Logic> // AND, OR, NOT


// <24. Logical Operators>
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision); // AND
console.log(hasDriversLicense || hasGoodVision); // OR
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
// 	console.log('Sarah is able to drive!');
// } else {
// 	console.log('Someone else should drvie...');
// } // Ctrl/

const isTired = true; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
	console.log('Sarah is able to drive!');
} else {
	console.log('Someone else should drvie...');
}

// <26. The Switch Statement>
const day = 'friday';

switch (day) {
	case 'monday': // day === 'monday' compare day to monday here in a strict equality way
		console.log('Plan course structure');
		console.log('Go to coding meetup');
	//	break;
	case 'tuesday':
		console.log('Prepare theory videos');
		break;
	case 'wednesday':
	case 'thursday':
		console.log('Write code examples');
		break;
	case 'friday':
		console.log('Record videos');
		break;
	case 'saturday':
	case 'sunday':
		console.log('Enjoy the weekend :D');
		break;
	default:
		console.log('Not a valid day!');
}
// this was really designed for equality and not for like comparing stuff

// cf. if/else statement
if (day === 'monday') {
	console.log('Plan course structure');
	console.log('Go to coding meetup');
} else if (day === 'tuesday') {
	console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
	console.log('Write code examples');
} else if (day === 'friday') {
	console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
	console.log('Enjoy the weekend :D');
} else {
	console.log('Not a valid day!');
}
// 1. switch statement를 쓰면 repetitive code ex) day === 를 반복할 필요가 없다. 2. if/else statement needs logic operator

// <27. Statements and Expressions>
// expression is a piece of code that produces a value
3 + 4
1991
true && false && !false

// statement is like a bigger piece of code that is executed and which does not produce a value on itself
// like full sentences that translate our actions so the actions that we want the program to perform

if (23 > 10) {
	const str = '23 is bigger';
} // '23 is bigger'는 string, itself an expression, const str = '23 is bigger';는 statement, ;으로 끝난다면 statement로 생각할 것

//JavaScript expects statements and expressions in different places.
// ex. template literal: only insert expressions, but not statements.
console.log(`I'm ${2037 - 1991} years old.`) // 2037 - 1991 is an expression which creates value
// cf. Uncaught SyntaxError: Unexpected token 'if'
console.log(`I'm ${2037 - 1991} years old ${if (23 > 10) {
	const str = '23 is bigger';
}}`)// statements don't make sense where JavaScript expects an expression

// cf. if we had a variable,
const me = 'Jacqueline';
console.log(`I'm ${2037 - 1991} years old ${me}`)
	// this would actually also be an expression, because this variable will essentially just be replaced with this string. And so this produces a value
	* /

// <28. The Conditional (Ternary) Operator
// the regular if/else statement & the switch statement 
const age = 23;
// age >= 18 ? console.log('I like to drink wine 🍷') :
// 	console.log('I like to drink water 💧');
// writing an if/else statement all in one line
// ternary operator = 3 parts: condition + if part + else part cf. plus operator = 2 parts
// operator always produces a value = expression
// if we have a value, we can then assign that value to a variable
const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink); // store that value into a variable
// 1. if/else statement에서 declare a variable을 하려면 우선 outside에서 declare를 먼저 해야했음

let drink2;
if (age >= 18) {
	drink2 = 'wine 🍷';
} else {
	drink2 = 'water 💧';
}
console.log(drink2);

// 2. ternary operator는 expression이므로, if/else statement와는 달리 template literal 안에 쓸 수 있음
console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);