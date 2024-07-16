const add = (a, b) => {
  return a + b;
};

function subtract(a, b) {
  if (a > b) return a - b;
  return b - a;
}

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  return a / b;
};

const modulo = (a, b) => {
  return a % b;
};

console.log(add(3, 5)); // 8
console.log(subtract(9, 17)); // 8
console.log(multiply(2, 30)); // 60
console.log(divide(8, 2)); // 4
console.log(modulo(9, 5)); //4

let apple = 15;
let ball = 25;

apple += ball;

console.log(apple); //40
console.log(ball); //25

ball += apple;
console.log(apple); //40
console.log(ball); //65

apple -= ball;
console.log(apple); //-25
console.log(ball); //65

ball -= apple;

console.log(apple); //-25
console.log(ball); //90

console.log(compare(5, 10)); //false
console.log(compare(10, 3)); //true

console.log(compareEqual(15, 15)); //true
console.log(compareEqual(18, 15)); //true
console.log(compareEqual(14, 24)); //false

console.log(equal("one", "two")); //false
console.log(equal("two", "two")); //true
console.log(equal("false", false)); //false
console.log(false == "false"); //false

// false is a boolean.
// "false" is a string.
// JavaScript attempts to convert both operands to a common type for comparison.
//  When a boolean is compared with a string using ==, the boolean is first converted to a number (false becomes 0),
// and then the string is converted to a number. However, the string "false" cannot be converted to a valid number,
//  so it becomes NaN (Not-a-Number).
// Since 0 is not equal to NaN, the comparison results in false.

console.log(false === 0); // false not of same type
console.log(equal(0, "0")); // true
// string 0 is converted into number 0 now both are equal it returns true

console.log(strictEqual(15, 12)); // error: cannot access strict equal before initialization because it is an arrow function

function compare(a, b) {
  return a > b;
}
function compareEqual(a, b) {
  return a >= b;
}

function equal(a, b) {
  return a == b;
}

//arrow function cannot be called before initialisation where as the normal function can be called before initialization
// const strictEqual = (a, b) => {
//   return a === b;
// };

function strictEqual(a, b) {
  return a === b;
}
console.log(strictEqual(15, 12)); //false
console.log(strictEqual(15, 15)); //true
console.log(strictEqual(0, "0")); //false
console.log(strictEqual(1, true)); //false

let age = 24;
let isGoodPlayer = true;

if (age <= 21 && isGoodPlayer) {
  console.log("you are allowed to play");
} else if (age >= 21 || isGoodPlayer) {
  console.log("you will just watch the game ");
} else {
  console.log("out");
}

let a = false;
if (!a) {
  console.log(a); //false
}

function check(a) {
  return a > 0 ? "positive" : "negative";
}
console.log(check(25)) //positive
console.log(check(0)) //positive
