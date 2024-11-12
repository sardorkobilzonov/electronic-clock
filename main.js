let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

setInterval(() => {
  let currentTime = new Date();

  hours.innerHTML =
    (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
  minutes.innerHTML =
    (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
  seconds.innerHTML =
    (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
}, 1000);

//MASALALAR

//1-MASALA

//FUNCTION DECLARATION

// function greeting(name) {
//   console.log(`Assalomu alekum ${name}`);
// }

// greeting("John");

//FUNCTION EXPRESSION

// const greeting = function (name) {
//   console.log(`Assalomu alekum ${name}`);
// };

// greeting("John");

//ARROW FUNCTION

// const greeting = (name) => `Assalomu alekum ${name}`;

// console.log(greeting("John"));

//2-MASALA

//FUNCTION DECLARATION

// function foo(a, b) {
//   let result = [];
//   for (let i = a; i <= b; i++) {
//     result.push(i);
//   }
//   return result;
// }

// console.log(foo(1, 10));

//FUNCTION EXPRESSION

// const foo = (a, b) => {
//   let result = [];
//   for (let i = a; i <= b; i++) {
//     result.push(i);
//   }
//   return result;
// };

// console.log(foo(1, 10));

//ARROW FUNCTION

// const foo = (a, b) => {
//   let result = [];
//   for (let i = a; i <= b; i++) {
//     result.push(i);
//   }
//   return result;
// };

// console.log(foo(1, 10));

//3-MASALA

//FUNCTION DECLARATION

// function booleanToNumber(value) {
//   return value ? 1 : 0;
// }

// console.log(booleanToNumber(true));
// console.log(booleanToNumber(false));

//FUNCTION EXPRESSION

// const booleanToNumber = function (value) {
//   return value ? 1 : 0;
// };

// console.log(booleanToNumber(true));
// console.log(booleanToNumber(false));

//ARROW FUNCTION

// const booleanToNumber = (value) => (value ? 1 : 0);

// console.log(booleanToNumber(true));
// console.log(booleanToNumber(false));

//4-MASALA

//5-MASALA
