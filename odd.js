// function isOdd(num) {
//   return num % 2 !== 0;
// }

// console.log(isOdd(8));





// function chooseStations(stations) {

//   let answer = [];

//   for (let station of stations) {
//     if (station[1] >= 20 && (station[2] === 'school' || station[2] === 'community centre')) {
//       answer.push(station[0]);
//     }
//   }

//   return answer;

// }


// console.log(chooseStations([
//   ['A', 10, 'school'],
//   ['B', 9, 'restaurant'],
//   ['C', 21, 'community centre'],
//   ['D', 15, 'school'],
//   ['E', 50, 'restaurant'],
//   ['F', 20, 'school'],
//   ['G', 40, 'community centre'],
//   ['H', 50, 'school'],
// ]
// ));

// console.log(chooseStations([
//   ['Big Bear Donair', 10, 'restaurant'],
//   ['Bright Lights Elementary', 50, 'school'],
//   ['Moose Mountain Community Centre', 10, 'community centre']
// ]));




// function finalPosition(moves) {

//   const movesArray = [
//     {
//       position: 'north',
//       index: 1,
//       value: 1
//     },
//     {
//       position: 'east',
//       index: 0,
//       value: 1,
//     },
//     {
//       position: 'south',
//       index: 1,
//       value: -1
//     },
//     {
//       position: 'west',
//       index: 0,
//       value: -1
//     }
//   ];

//   let finalPosition = [0, 0];

//   for (let move of moves) {
//     for (let item of movesArray) {
//       if (move === item.position) {
//         finalPosition[item.index] += item.value;
//       }
//     }
//   }

//   return finalPosition;

// }

// console.log(finalPosition(['north', 'north', 'west', 'west', 'north', 'east', 'north']));



// function ageCalculator (name, dateOfBirth, currentYear) {
//   return `${name} is ${currentYear - dateOfBirth} years old.`;
// }


// function howManyHundreds (num) {
//   return Math.floor(num / 100);
// }


// function calculateRectangleArea(length, width) {
//   if (length > 0 && width > 0) {
//     return length * width;
//   }
//   return undefined;
// }

// function calculateTriangleArea(base, height) {
//   if (base > 0 && height > 0) {
//     return base * height / 2;
//   }
//   return undefined;
// }

// function calculateCircleArea(radius) {
//   if (radius > 0) {
//     return Math.PI * radius * radius;
//   }
//   return undefined;
// }

