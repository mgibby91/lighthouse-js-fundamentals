// const chorus = "Let's dance!";
// let repeat = 0;
// while (repeat < 10) {
//   console.log(chorus);
//   repeat++;
// }
// console.log("Until the sun comes up!");

// const chorus = "Let's dance!";
// let repeat = 0;
// while (repeat < 10) {
//   if (repeat === 5) {
//     console.log("*change key*");
//   }
//   console.log(chorus);
//   repeat++;
// }
// console.log("Until the sun comes up!");


// const chorus = "Let's dance!";
// for (let repeat = 0; repeat < 10; repeat++) {
//   console.log(chorus);
// }
// console.log("Until the sun comes up!");

// LOOPY LIGHTHOUSE


for (let i = 100; i <= 200; i++) {

  let output = '';

  if (i % 3 === 0) output += 'Loopy';
  if (i % 4 === 0) output += 'Lighthouse';

  if (output === '') output = i;

  console.log(output);

}