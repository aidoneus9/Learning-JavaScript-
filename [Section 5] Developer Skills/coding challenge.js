// <Coding Challenge #1>
// 1) Understanding the problem
// - Array transformed to string, separated by ...
// - What is the X days? Answer: index + 1

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with ℃
// - Strings needs to contain day (index + 1)
// - Add ... between elements and start and end of string
// - Log string to console

/*
const printForecast = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`...${arr[i]}℃ in ${i + 1} days`);
  }
};

printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);
*/

// The Answer
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}℃ in ${i + 1} days ... `;
  }
  console.log('... ' + str);
};
printForecast(data1);
