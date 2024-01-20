// values and variables
let country = "Republic of Korea";
let continent = "Asia";
let population = 51.74;
console.log(country);
console.log(continent);
console.log(population);

//data types
let isIsland = false
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);


// let, const and var
language = 'Korean';
// const country = 'Korea';
// const continent = 'Asia';
// const isIsland = false;
// isIsland = true;


//Basic Operators 
console.log(population / 2)
let x = population
x++; // 답: population++;
console.log(x); // 답: console.log(population);
console.log(population > 6);
console.log(population < 33);
const description1 = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language;
console.log(description1);

//Strings and Template Literals
const description = `${country} is in ${continent}, and its ${population} million people speak ${language} `;
console.log(description);

//Taking Decisions: if/else Statements
if (population > 33) {
	console.log(`${country}'s population is above average`);
} else {
	console.log(`${country}'s population is ${33 - population} million below average`);
}

// Type Conversion and Coercion
console.log('9' - '5'); // 4
console.log('19' - '13' + '17'); // '617'
console.log('19' - '13' + 17); // 23
console.log('123' < 57); // false
console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143
// 🤔 what is difference between '617' and 1143?

// Equality Operators: == vs. ===
const numNeighbours = prompt('How many neighbour countries does your country have?');

if (numNeighbours == 1) {
	console.log('Only 1 border!');
} else if (numNeighbours > 1) {
	console.log('More than 1 border');
} else {
	console.log('No borders');
}
// 🤔 이 경우 0를 넣으면 '0'(string)이지만 loose equality operator이므로 number가 되고, 0는 falsy value이므로 else가 됨? -> falsy value여서가 아나라 comparison operator에 의한 것 같다.

const numNeighbours = prompt('How many neighbour countries does your country have?');

if (numNeighbours === 1) {
	console.log('Only 1 border!');
} else if (numNeighbours > 1) {
	console.log('More than 1 border');
} else {
	console.log('No borders');
}
// 🤔 이 경우 0를 넣으면 '0'(string)이므로 strict equality operator이므로 type coercion이 일어나지 않음

// LATER: This helps us prevent bugs 
const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

if (numNeighbours === 1) {
	console.log('Only 1 border!');
} else if (numNeighbours > 1) {
	console.log('More than 1 border');
} else {
	console.log('No borders');
}
// 🤔 이 경우 역시 첫 번째 경우와 같이 comparison operator에 의한 것 같다. 

// Logical Operators

if (language === 'english' && population < 50 && !isIsland) {
	console.log(`You should live in ${country} :)`);
} else {
	console.log(`${country} does not meet your criteria :(`);
}

// The Switch Statement 
const language = 'Korean';

switch (language) {
	case 'chinese':
	case 'mandarin':
		console.log('MOST number of native speakers!');
		break;
	case 'spanish':
		console.log('2nd place in number of native speakers');
		break;
	case 'english':
		console.log('3rd place');
		break;
	case 'hindi':
		console.log('Number 4');
		break;
	case 'arabic':
		console.log('5th most spoken language');
		break;
	default:
		console.log('Great langauge too :D');
}

// <The Conditional (Ternary) Operator
console.log(population > 33 ? `${country}'s population is above average` : `${country}'s population is below average`);

// The Answer
console.log(`${country}'s population is ${population > 33 ? 'above' : 'below'} average`);