'use strict';

/*
// Functions

function describeCountry(country, population, capitalCity) {
    return (`${country} has ${population} million people and its capital city is ${capitalCity}`);
}

const descPortugal = describeCountry('Portugal', 10, 'Lisbon');
const descGermany = describeCountry('Germany', 83, 'Berlin');
const descFinland = describeCountry('Finland', 6, 'Helsinki');
console.log(descPortugal, descGermany, descFinland);

// Function Declarations vs. Expressions 

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
}

const percPortugal1 = percentageOfWorld1(10);
const percROK1 = percentageOfWorld1(51.74);
const percUSA1 = percentageOfWorld1(332);
console.log(percPortugal1, percROK1, percUSA1);

// Arrow Functions
const percentageOfWorld3 = population => (population / 7900) * 100;
const percPortugal3 = percentageOfWorld3(10);
const percROK3 = percentageOfWorld3(51.74);
const percUSA3 = percentageOfWorld3(332);

console.log(percPortugal3, percROK3, percUSA3);

// Functions Calling Other Functions
const describePopulation = function (country, population) {
    const percentage = percentageOfWorld1(population);
    const description = `${country} has ${population} million people, which is about ${percentage}% of the world.`;
    console.log(description);
}

describePopulation('Portugal', 10);
describePopulation('ROK', 51.74);
describePopulation('USA', 332);

// Introduction to Arrays
const populations = [10, 51.74, 332, 83];
console.log(populations.length === 4);

const percentages = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3])
];

console.log(percentages);

// Basic Array Operations (Methods)

const neighbours = ['China', 'Russia'];

neighbours.push('Utopia');
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes('Germany')) {
    console.log('Probably not a central European country :D');
}

neighbours[neighbours.indexOf('Russia')] = 'Russian Federation';
console.log(neighbours);

// Introduction to Objects
const myCountry = {
    country: 'Switzerland',
    capital: 'Bern',
    language: ['Romansh', 'German', 'French', 'Italian'],
    population: 8.703,
    neighbours: ['Austria', 'Germany', 'France', 'Italy'],
    describe: function () {
        console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`);
    },
    checkIsland: function () {
        this.isIsland = this.neighbours.length === 0 ? true : false;

        // Even simpler version
        // this.isIsland = !Boolean(this.neighbours.length);
    }
};

// The Answer
// const myCountry = {
//     country: 'Finland',
//     capital: 'Helsinki',
//     language: 'finnish',
//     population: 6,
//     neighbours: ['Norway', 'Sweden', 'Russia']
// };

// Dot vs. Bracket Notation
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

myCountry.population += 2;
console.log(myCountry.population);

myCountry['population'] -= 2;
console.log(myCountry.population);

// Object Methods
myCountry.describe();
myCountry.checkIsland();

console.log(myCountry);

// Iteration: The for Loop
for (let voter = 1; voter <= 50; voter++) {
    console.log(`Voter number ${voter} is currently voting 🗳️`);
}

// Looping Arrays, Breaking and Continuing
const populations = [10, 51.74, 332, 83];
const percentages2 = [];

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

for (let i = 0; i < populations.length; i++) {
    const perc = percentageOfWorld1(populations[i]);
    percentages2.push(perc);
}

console.log(percentages2);
*/

// Looping Backwards and Loops in Loops
const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

for (let i = 0; i < listOfNeighbours.length; i++)
    for (let y = 0; y < listOfNeighbours[i].length; y++)
        console.log(`Neighbour: ${listOfNeighbours[i][y]}`);

// The while Loop
// const populations = [10, 51.74, 332, 83];
// const percentages2 = [];

// function percentageOfWorld1(population) {
//     return (population / 7900) * 100;
// }

// for (let i = 0; i < populations.length; i++) {
//     const perc = percentageOfWorld1(populations[i]);
//     percentages2.push(perc);
// }

// console.log(percentages2);

const populations = [10, 51.74, 332, 83];
const percentages3 = [];

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

let i = 0
while (i < populations.length) {
    const perc = percentageOfWorld1(populations[i]);
    percentages3.push(perc);
    i++;
}

console.log(percentages3);













