// function declaration
// function functionName (){
// }

function checkEvenOrOdd(n) {
  if (n % 2 == 0) {
    console.log(`${n} is even`);
  } else console.log(`${n} is odd`);
}
checkEvenOrOdd(16);
checkEvenOrOdd(1247);
checkEvenOrOdd(0);

function square(n) {
  return n * n;
}
console.log(square(5));
console.log(square(25));

// function expression
// const functionName = function(){
// }

const isMax = function (a, b) {
  if (a < b) return b;
  return a;
};

console.log(isMax(21, 56));

// string.concat() method is used to concat the string
const concatString = function (firstName, lastName) {
  return firstName.concat(" ", lastName);
};
console.log(concatString("chai", "code"));
console.log(concatString("Huzaifa", "Jabbar"));

// arrow function
const sum = (a, b) => {
  return a + b;
};
console.log(sum(10, 15));
console.log(sum(10, 41));

const isSpecial = (inputString, specialCharacter) => {
  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] === specialCharacter) {
      return true;
    }
  }
  return false;
};

console.log(isSpecial("He%%o", "$"));
console.log(isSpecial("Huz@if@", "@"));

// here b=5 means 5 is a default value for parameter b
function mutliply(a, b = 5) {
  return a * b;
}
console.log(mutliply(2)); //2*5 = 10
console.log(mutliply(2, 6)); //2*6 = 12

function Greeting(name, age = 18) {
  return console.log(`Welcome ${name}! and your age is ${age}`);
}

Greeting("Hitesh", 35);
Greeting("Huzaifa");

// high order function -- task 9
// nowPrint is an high order function
function print() {
  console.log("Hello printing");
}

function nowPrint(func, rep) {
  for (let i = 1; i <= rep; i++) {
    func();
  }
}
nowPrint(print, 5);

// task 10

function multiplyTen(val) {
  return val * 10;
}
function minusEleven(val) {
  return val - 11;
}

function HipHop(func1, func2, value) {
  const result = func1(value);
  return func2(result);
}
console.log(HipHop(multiplyTen, minusEleven, 5));

// HipHop is a high order function which takes two function and a value as an arguement
// first function call multiplTen  ---> 5 *10 = 50
// second fucntion call minusEleven ---> 50-11 = 39
// return 39
