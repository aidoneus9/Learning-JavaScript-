// <coding challenge #1>
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI); // 하나로 묶을 것


// <coding challenge #2>
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
	console.log("Mark's BMI is higher than John's!");
} else {
	console.log("John's BMI is higher than Mark's!");
}


if (BMIMark > BMIJohn) {
	console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
	console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}

// <coding challenge #3>
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas) {
	console.log("Dolphins win the trophy 🏆");
} else if (scoreDolphins < scoreKoalas) {
	console.log("Koalas win the trophy 🏆");
} else {
	console.log("Both win the trophy!");
}

// BONUS 1
const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 123) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
	console.log("Dolphins win the trophy 🏆");
} else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
	console.log("Koalas win the trophy 🏆");
} else {
	console.log("Both win the trophy!");
}

// BONUS 2
const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 106) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
	console.log("Dolphins win the trophy 🏆");
} else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
	console.log("Koalas win the trophy 🏆");
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
	console.log("Both win the trophy!");
} else {
	console.log("No one wins the trophy 😭")
}

const scoreDolphins = (97 + 112 + 81) / 3;
const scoreKoalas = (109 + 95 + 86) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
	console.log("Dolphins win the trophy 🏆");
} else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
	console.log("Koalas win the trophy 🏆");
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
	console.log("Both win the trophy!");
} else {
	console.log("No one wins the trophy 😭")
}

const scoreDolphins = (97 + 112 + 80) / 3;
const scoreKoalas = (109 + 95 + 50) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
	console.log("Dolphins win the trophy 🏆");
} else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
	console.log("Koalas win the trophy 🏆");
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
	console.log("Both win the trophy!");
} else {
	console.log("No one wins the trophy 😭")
}

// <coding challenge #4>
const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// In case of 275, true and true gives true, execute bill * 0.15, which is the result of the operator. This value assigned to the variable.
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

