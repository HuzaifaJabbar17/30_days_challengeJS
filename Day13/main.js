// browser does not support commonjs Module it only supports ES6 modules

import subtract, { sum, multiply, user } from "./Activity1.js";
console.log(sum(4, 5));
console.log(`the multiplied value is ${multiply(4, 6)}`);
console.log(`the subtracted value is ${subtract(14, 6)}`);

console.log(user);
console.log(user.age);
user.printname();

import name from "./Activity2.js";
name("Neeraj Chopra");


import circle from "./Activity3.js";

console.log(circle.PI);
console.log(circle.circumference_circle(7));